import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let redis = null;
let limiters = null;

function getLimiters() {
  if (limiters) return limiters;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  redis = new Redis({ url, token });

  limiters = {
    perIpBurst: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      prefix: "chat:ip:burst",
      analytics: false,
    }),
    perIpHour: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(30, "1 h"),
      prefix: "chat:ip:hour",
      analytics: false,
    }),
    perIpDay: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(100, "24 h"),
      prefix: "chat:ip:day",
      analytics: false,
    }),
    globalDay: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5000, "24 h"),
      prefix: "chat:global:day",
      analytics: false,
    }),
  };

  return limiters;
}

export async function checkRateLimits(ip) {
  const lims = getLimiters();
  if (!lims) return { ok: false, reason: "service_unavailable" };

  try {
    const [burst, hour, day, global] = await Promise.all([
      lims.perIpBurst.limit(ip),
      lims.perIpHour.limit(ip),
      lims.perIpDay.limit(ip),
      lims.globalDay.limit("global"),
    ]);

    if (!global.success) {
      return { ok: false, reason: "global_limit", retryAfter: global.reset };
    }
    if (!burst.success) {
      return { ok: false, reason: "burst_limit", retryAfter: burst.reset };
    }
    if (!hour.success) {
      return { ok: false, reason: "hour_limit", retryAfter: hour.reset };
    }
    if (!day.success) {
      return { ok: false, reason: "day_limit", retryAfter: day.reset };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: "service_unavailable" };
  }
}
