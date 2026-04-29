"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Logo } from "./logo";

const links = [
  { href: "/find", label: "Find a crew" },
  { href: "/organizers", label: "Host" },
  { href: "/learn", label: "Learn" },
  { href: "/download", label: "Download" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-30 border-b border-hairline bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md">
      <motion.div
        aria-hidden
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="absolute inset-x-0 top-0 h-px bg-[var(--accent)]"
      />
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-fg)] focus:not-sr-only focus:absolute focus:left-4 focus:top-2"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="AltCrew home"
          className="flex h-9 items-center"
        >
          <Logo className="h-9 md:h-10" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-fg/70 transition hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.instagram.com/altcrewapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow AltCrew on Instagram"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg/70 transition hover:border-fg/30 hover:text-fg sm:inline-flex"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#waitlist"
            className="inline-block rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)] sm:px-4 sm:py-2 sm:text-sm"
          >
            Join the Crew
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg/70 transition hover:border-fg/30 hover:text-fg md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      </header>
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 bg-[var(--bg)] md:hidden"
        >
          <div className="container-page flex h-16 items-center justify-between gap-4 border-b border-hairline">
            <Logo className="h-9" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-fg/70 transition hover:border-fg/30 hover:text-fg"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Mobile primary"
            className="container-page flex flex-col gap-1 py-8"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-5 text-2xl font-semibold tracking-tight text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 text-base font-medium text-[var(--accent-fg)]"
            >
              Join the Crew
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.instagram.com/altcrewapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 font-mono text-[12px] uppercase tracking-widest text-muted"
            >
              @altcrewapp on Instagram
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
