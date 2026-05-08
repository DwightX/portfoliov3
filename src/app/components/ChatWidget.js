"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import useTurnstile from "./hooks/useTurnstile";

const MAX_INPUT = 500;
const MAX_HISTORY = 10;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [phase, setPhase] = useState("idle"); // idle | verifying | thinking | streaming
  const [errorBanner, setErrorBanner] = useState(null);

  const listRef = useRef(null);
  const inputRef = useRef(null);
  const prefetchedRef = useRef(false);

  const { containerRef: turnstileRef, ready: turnstileReady, getToken, configured: turnstileConfigured } =
    useTurnstile({ enabled: open });

  const streaming = phase === "thinking" || phase === "streaming";

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, phase]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Prefetch a Turnstile token in the background once the widget is ready,
  // so by the time the user hits "send" the bot challenge is already done.
  useEffect(() => {
    if (!open || !turnstileReady || !turnstileConfigured || prefetchedRef.current) return;
    prefetchedRef.current = true;
    getToken({ prefetch: true }).catch(() => {});
  }, [open, turnstileReady, turnstileConfigured, getToken]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;

    setErrorBanner(null);

    const userMsg = { role: "user", content: text };
    const history = [...messages, userMsg].slice(-MAX_HISTORY);
    setMessages(history);
    setInput("");
    setPhase(turnstileConfigured ? "verifying" : "thinking");

    let token = null;
    if (turnstileConfigured) {
      token = await getToken();
      prefetchedRef.current = false;
      if (!token) {
        setPhase("idle");
        setErrorBanner("Bot verification failed. Please try again.");
        return;
      }
    } else {
      token = "dev-no-turnstile";
    }

    setPhase("thinking");
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, turnstileToken: token }),
      });

      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data && data.message) msg = data.message;
        } catch {}
        setPhase("idle");
        setMessages((prev) => prev.slice(0, -1));
        setErrorBanner(msg);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let gotFirstToken = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let idx;
        while ((idx = buffer.indexOf("\n\n")) !== -1) {
          const event = buffer.slice(0, idx).trim();
          buffer = buffer.slice(idx + 2);
          if (!event.startsWith("data:")) continue;
          const payload = event.slice(5).trim();
          if (!payload) continue;
          try {
            const parsed = JSON.parse(payload);
            if (parsed.delta) {
              if (!gotFirstToken) {
                gotFirstToken = true;
                setPhase("streaming");
              }
              setMessages((prev) => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last && last.role === "assistant") {
                  next[next.length - 1] = { ...last, content: last.content + parsed.delta };
                }
                return next;
              });
            } else if (parsed.error) {
              setErrorBanner("The AI ran into an error mid-reply.");
            }
          } catch {}
        }
      }
    } catch (err) {
      setMessages((prev) => prev.slice(0, -1));
      setErrorBanner("Network error. Please try again.");
    } finally {
      setPhase("idle");
    }
  }, [input, messages, streaming, getToken, turnstileConfigured]);

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open AI chat"
          className="cw-launcher"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Chat with my AI friend</span>
        </button>
      )}

      {open && (
        <div className="cw-panel" role="dialog" aria-label="Chat with Dwight's AI assistant">
          <div className="cw-header">
            <div className="cw-header-title">
              <span className="cw-dot" aria-hidden="true" />
              <span>Chat with my AI friend</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="cw-close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="cw-messages" ref={listRef}>
            {messages.length === 0 && (
              <div className="cw-empty">
                <p>Hi — I&apos;m an AI assistant trained on Dwight&apos;s resume.</p>
                <p>Ask me about his experience, projects, or skills.</p>
              </div>
            )}
            {messages.map((m, i) => {
              const isLast = i === messages.length - 1;
              const isStreamingThis = isLast && m.role === "assistant" && streaming;
              return (
                <div key={i} className={`cw-msg cw-msg-${m.role}`}>
                  {m.content}
                  {isStreamingThis && !m.content && (
                    <span className="cw-typing" aria-label="Assistant is thinking">
                      <span /><span /><span />
                    </span>
                  )}
                  {isStreamingThis && m.content && (
                    <span className="cw-cursor" aria-hidden="true" />
                  )}
                </div>
              );
            })}
            {phase === "verifying" && (
              <div className="cw-status">Verifying you&apos;re human…</div>
            )}
            {errorBanner && <div className="cw-error">{errorBanner}</div>}
          </div>

          <div className="cw-footer">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT))}
              onKeyDown={onKeyDown}
              placeholder="Ask about Dwight's experience..."
              rows={1}
              maxLength={MAX_INPUT}
              disabled={streaming || phase === "verifying"}
              aria-label="Type your message"
              className="cw-input"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || streaming || phase === "verifying"}
              aria-label="Send message"
              className="cw-send"
            >
              {phase === "verifying" || phase === "thinking" ? (
                <span className="cw-spinner" aria-hidden="true" />
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </div>
          <div className="cw-disclaimer">
            AI may make mistakes. For accuracy, see the resume.
          </div>
          <div ref={turnstileRef} aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
        </div>
      )}
    </>
  );
}
