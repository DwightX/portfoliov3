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
  const executingRef = useRef(false);
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
          appearance: "interaction-only",
          execution: "execute",
          callback: (token) => {
            executingRef.current = false;
            tokenRef.current = token;
            if (resolveRef.current) {
              resolveRef.current(token);
              resolveRef.current = null;
            }
          },
          "error-callback": () => {
            executingRef.current = false;
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
      executingRef.current = false;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
        widgetIdRef.current = null;
      }
    };
  }, [enabled, siteKey]);

  const getToken = useCallback(async ({ prefetch = false } = {}) => {
    if (!siteKey) return null;
    if (!ready || !window.turnstile || !widgetIdRef.current) return null;

    if (tokenRef.current && !prefetch) {
      const t = tokenRef.current;
      tokenRef.current = null;
      return t;
    }

    if (executingRef.current) {
      return new Promise((resolve) => {
        resolveRef.current = resolve;
        setTimeout(() => {
          if (resolveRef.current === resolve) {
            resolveRef.current = null;
            resolve(tokenRef.current || null);
          }
        }, 15000);
      });
    }

    try {
      window.turnstile.reset(widgetIdRef.current);
    } catch {}
    tokenRef.current = null;
    executingRef.current = true;

    return new Promise((resolve) => {
      resolveRef.current = resolve;
      try {
        window.turnstile.execute(widgetIdRef.current);
      } catch {
        executingRef.current = false;
        resolveRef.current = null;
        resolve(null);
      }
      setTimeout(() => {
        if (resolveRef.current === resolve) {
          executingRef.current = false;
          resolveRef.current = null;
          resolve(null);
        }
      }, 15000);
    });
  }, [ready, siteKey]);

  return { containerRef, ready, error, getToken, configured: Boolean(siteKey) };
}
