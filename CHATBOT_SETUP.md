# Chatbot setup

The portfolio includes a small AI chatbot (bottom-right of the home page) powered by Groq + Llama 3.3 70B, with rate limiting (Upstash Redis) and a bot challenge (Cloudflare Turnstile).

## 1. Fill in the resume

Edit `src/app/data/resume.md` with the detailed resume you want the bot to answer from. The bot only knows what's in this file. Keep it under ~3,500 words.

## 2. Create the three accounts and grab keys

| Service | Where | What to copy |
|---|---|---|
| **Groq** | https://console.groq.com → API Keys | API Key → `GROQ_API_KEY` |
| **Upstash** | https://console.upstash.com → Create Redis DB (free tier, region near your Netlify region) → click DB → "REST API" tab | URL → `UPSTASH_REDIS_REST_URL`, Token → `UPSTASH_REDIS_REST_TOKEN` |
| **Cloudflare Turnstile** | https://dash.cloudflare.com → Turnstile → "Add site" → mode: **Managed** → add hostname (your prod domain + `localhost` for dev) | Site Key → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, Secret Key → `TURNSTILE_SECRET_KEY` |

## 3. Local development

```bash
cp .env.local.example .env.local
# fill in all five vars
npm run dev 
```

Open http://localhost:3000 and click "Chat with my AI friend" bottom-right.

## 4. Production deploy (Netlify)

1. Push the new code (`src/app/api/chat/`, `src/app/components/ChatWidget.js`, etc.) to your repo.
2. In Netlify: **Site settings → Environment variables** — add all six env vars (same as `.env.local`, plus `NEXT_PUBLIC_SITE_ORIGIN` set to your domain).
3. Trigger a new deploy.

## Limits configured

- **Per IP:** 5 messages / minute, 30 / hour, 100 / day
- **Global cap:** 5,000 messages / day across all visitors (hard ceiling on cost / quota)
- **Per message:** max 500 characters input
- **Per response:** max 500 output tokens
- **History:** last 10 messages sent each request

Tune in `src/app/lib/ratelimit.js` and `src/app/api/chat/route.js`.

## Security summary

- API keys server-only (never sent to browser)
- Cloudflare Turnstile blocks scripted bots
- Origin / Referer header check
- Rate limits enforced via Upstash (atomic, survives cold starts)
- Fail-closed if Upstash is unreachable (returns 503)
- System prompt restricts the bot to resume topics + ignores prompt-injection attempts
- No conversation history stored server-side
