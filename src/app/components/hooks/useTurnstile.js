"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__onTurnstileLoad&render=explicit";

let scriptPromise = null;

function loadTurnstileScript() {
  if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    window.__onTurnstileLoad = () => resolve(window.turnstile);
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("turnstile_script_failed"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export default function useTurnstile({ enabled = false } = {}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const tokenRef = useRef(null);
  const resolveRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!enabled || !siteKey) return;
    let cancelled = false;

    loadTurnstileScript()
      .then((turnstile) => {
        if (cancelled || !containerRef.current) return;
        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          size: "invisible",
          callback: (token) => {
            tokenRef.current = token;
            if (resolveRef.current) {
              resolveRef.current(token);
              resolveRef.current = null;
            }
          },
          "error-callback": () => {
            tokenRef.current = null;
            if (resolveRef.current) {
              resolveRef.current(null);
              resolveRef.current = null;
            }
          },
          "expired-callback": () => {
            tokenRef.current = null;
          },
        });
        setReady(true);
      })
      .catch((e) => setError(e.message || "turnstile_error"));

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
        widgetIdRef.current = null;
      }
    };
  }, [enabled, siteKey]);

  const getToken = useCallback(async () => {
    if (!siteKey) return null;
    if (!ready || !window.turnstile || !widgetIdRef.current) return null;

    try {
      window.turnstile.reset(widgetIdRef.current);
    } catch {}
    tokenRef.current = null;

    return new Promise((resolve) => {
      resolveRef.current = resolve;
      try {
        window.turnstile.execute(widgetIdRef.current);
      } catch {
        resolveRef.current = null;
        resolve(null);
      }
      setTimeout(() => {
        if (resolveRef.current === resolve) {
          resolveRef.current = null;
          resolve(null);
        }
      }, 15000);
    });
  }, [ready, siteKey]);

  return { containerRef, ready, error, getToken, configured: Boolean(siteKey) };
}
