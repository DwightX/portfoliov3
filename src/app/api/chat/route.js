import Groq from "groq-sdk";
import { checkRateLimits } from "@/app/lib/ratelimit";
import { buildSystemPrompt } from "@/app/lib/resume-context";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGES = 10;
const MAX_USER_CHARS = 500;
const MAX_ASSISTANT_CHARS = 4000;
const MAX_OUTPUT_TOKENS = 500;
const MODEL = "llama-3.3-70b-versatile";

function jsonError(status, code, message) {
  return new Response(JSON.stringify({ error: code, message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getClientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  const nf = req.headers.get("x-nf-client-connection-ip");
  if (nf) return nf.trim();
  return "unknown";
}

function isAllowedOrigin(req) {
  const allowed = new Set([
    process.env.NEXT_PUBLIC_SITE_ORIGIN,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ].filter(Boolean));

  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  if (origin && allowed.has(origin)) return true;
  if (referer) {
    try {
      const refOrigin = new URL(referer).origin;
      if (allowed.has(refOrigin)) return true;
    } catch {}
  }
  return false;
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip && ip !== "unknown") body.append("remoteip", ip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch {
    return false;
  }
}

function validateMessages(messages) {
  if (!Array.isArray(messages)) return "messages must be an array";
  if (messages.length === 0) return "messages cannot be empty";
  if (messages.length > MAX_MESSAGES) return `messages cannot exceed ${MAX_MESSAGES} entries`;
  for (const m of messages) {
    if (!m || typeof m !== "object") return "invalid message";
    if (m.role !== "user" && m.role !== "assistant") return "invalid role";
    if (typeof m.content !== "string") return "content must be a string";
    if (m.content.length === 0) return "content cannot be empty";
    const limit = m.role === "user" ? MAX_USER_CHARS : MAX_ASSISTANT_CHARS;
    if (m.content.length > limit) return `${m.role} content exceeds ${limit} chars`;
  }
  if (messages[messages.length - 1].role !== "user") return "last message must be from user";
  return null;
}

export async function POST(req) {
  if (!isAllowedOrigin(req)) {
    return jsonError(403, "forbidden_origin", "Request origin not allowed.");
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonError(400, "bad_json", "Invalid JSON body.");
  }

  const { messages, turnstileToken } = body || {};

  if (typeof turnstileToken !== "string" || turnstileToken.length < 10) {
    return jsonError(403, "missing_turnstile", "Bot verification missing.");
  }

  const validationError = validateMessages(messages);
  if (validationError) {
    return jsonError(400, "invalid_messages", validationError);
  }

  const ip = getClientIp(req);

  const turnstileOk = await verifyTurnstile(turnstileToken, ip);
  if (!turnstileOk) {
    return jsonError(403, "turnstile_failed", "Bot verification failed. Please reload and try again.");
  }

  const rl = await checkRateLimits(ip);
  if (!rl.ok) {
    if (rl.reason === "service_unavailable") {
      return jsonError(503, "service_unavailable", "Chat is temporarily unavailable. Please try again shortly.");
    }
    const friendly = {
      burst_limit: "You're sending messages too quickly. Wait a moment and try again.",
      hour_limit: "You've reached the hourly message limit. Please come back later.",
      day_limit: "You've reached the daily message limit. Please come back tomorrow.",
      global_limit: "The chat is busy right now. Please try again later.",
    }[rl.reason] || "Rate limit exceeded.";
    return jsonError(429, rl.reason, friendly);
  }

  if (!process.env.GROQ_API_KEY) {
    return jsonError(500, "missing_api_key", "Server is not configured.");
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const systemPrompt = buildSystemPrompt();

  let completion;
  try {
    completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: 0.5,
      stream: true,
    });
  } catch (err) {
    return jsonError(502, "groq_error", "AI service error. Please try again.");
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of completion) {
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
          }
        }
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
      } catch (err) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: "stream_error" })}\n\n`)
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
      Connection: "keep-alive",
    },
  });
}
