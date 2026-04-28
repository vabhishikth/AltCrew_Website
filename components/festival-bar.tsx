"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "altcrew:festival-bar:dismissed";

const marqueeCss = `
.fb-track{display:flex;width:max-content;animation:fb-scroll 32s linear infinite;will-change:transform;}
.fb-track:hover{animation-play-state:paused;}
.fb-item{display:inline-flex;align-items:center;gap:14px;padding:0 28px;white-space:nowrap;font-size:13px;font-weight:500;letter-spacing:-0.01em;}
.fb-item a{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;}
.fb-item a:hover{text-decoration-thickness:2px;}
.fb-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--color-lime);}
.fb-sep{display:inline-block;width:6px;height:6px;border-radius:50%;background:rgba(242,235,221,0.4);}
@keyframes fb-scroll{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
@media (prefers-reduced-motion:reduce){.fb-track{animation:none;}}
`;

const message = (
  <>
    <span className="fb-dot" aria-hidden />
    <span>Vizag Fitness &amp; Flea Fest</span>
    <span className="fb-sep" aria-hidden />
    <span>Sun, May 31, 2026</span>
    <span className="fb-sep" aria-hidden />
    <span>Sai Priya Resorts, Vizag</span>
    <span className="fb-sep" aria-hidden />
    <a href="#festival">Festival details →</a>
  </>
);

export function FestivalBar() {
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
      setOpen(!dismissed);
    } catch {
      setOpen(true);
    }
    setHydrated(true);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  if (!hydrated || !open) return null;

  // Repeat enough times so width >= 2x viewport even on ultrawide.
  const repeats = Array.from({ length: 8 });

  return (
    <div
      role="region"
      aria-label="Festival announcement"
      className="relative z-40 border-b border-hairline bg-[var(--accent)] text-[var(--accent-fg)]"
    >
      <style dangerouslySetInnerHTML={{ __html: marqueeCss }} />
      <div className="flex items-stretch">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="fb-track">
            {repeats.map((_, i) => (
              <span className="fb-item" key={i}>
                {message}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="flex shrink-0 items-center justify-center px-3 text-[var(--accent-fg)]/80 transition hover:text-[var(--accent-fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
