'use client';

import { useEffect, useRef } from 'react';

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type TurnstileOptions = {
  sitekey: string;
  callback: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
  theme?: 'auto' | 'light' | 'dark';
  size?: 'normal' | 'compact' | 'flexible';
  appearance?: 'always' | 'execute' | 'interaction-only';
};

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: TurnstileOptions) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
  }
}

function ensureScript() {
  if (typeof window === 'undefined') return;
  if (document.querySelector(`script[src^="${SCRIPT_SRC}"]`)) return;
  const s = document.createElement('script');
  s.src = SCRIPT_SRC;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export function TurnstileWidget({
  onToken,
  onExpire,
  className,
}: {
  onToken: (token: string) => void;
  onExpire?: () => void;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  const onExpireRef = useRef(onExpire);
  onTokenRef.current = onToken;
  onExpireRef.current = onExpire;

  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!sitekey || !containerRef.current) return;
    ensureScript();

    let cancelled = false;
    let timeoutId: number | undefined;

    const tryRender = () => {
      if (cancelled || widgetIdRef.current) return;
      if (!window.turnstile || !containerRef.current) {
        timeoutId = window.setTimeout(tryRender, 120);
        return;
      }
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey,
        callback: (t) => onTokenRef.current(t),
        'expired-callback': () => onExpireRef.current?.(),
        'error-callback': () => onExpireRef.current?.(),
        theme: 'auto',
      });
    };
    tryRender();

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [sitekey]);

  if (!sitekey) return null;
  return <div ref={containerRef} className={className} />;
}
