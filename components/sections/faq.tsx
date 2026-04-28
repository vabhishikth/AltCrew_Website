"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What cities is AltCrew live in?",
    a: "Vizag at launch. More cities open as we have the people to support them well. Drop your city in the waitlist.",
  },
  {
    q: "Is AltCrew free?",
    a: "Yes. Free for members, always. Free for community organizers, until further notice.",
  },
  {
    q: "What kinds of fitness does it cover?",
    a: "All of it. Running, lifting, yoga, walking, cycling, swimming, padel, badminton, kabaddi. Anything physical you do with other people.",
  },
  {
    q: "I'm a complete beginner. Is this for me?",
    a: "Especially for you. AltCrew was built for people who never felt welcome in fitness rooms. You'll find crews here who know what showing up for the first time feels like.",
  },
  {
    q: "I run a club. How do I list it?",
    a: "Email hello@altcrew.in or use the organizer link in the section above. We onboard organizers free, until further notice.",
  },
  {
    q: "When does the app launch?",
    a: "On stage at 7:30 PM, May 31, 2026, at the Vizag Fitness & Flea Fest. iOS and Android, same day.",
  },
  {
    q: "Why not just use a private group chat?",
    a: "A group chat assumes you already know someone in it. AltCrew is for everyone who doesn't, yet. We make the people, paces, and meets discoverable to anyone who shows up.",
  },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${i}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.04, duration: 0.45 }}
      className="border-b border-hairline"
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition hover:text-[var(--accent)] md:text-xl"
        >
          <span className="max-w-[40ch]">{q}</span>
          <span
            aria-hidden
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fg/30 transition"
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              borderColor: open ? "var(--accent)" : undefined,
              color: open ? "var(--accent)" : undefined,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[60ch] pb-7 pr-12 text-fg/80 md:text-lg">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="relative border-b border-hairline"
      aria-labelledby="faq-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              questions
            </p>
          </aside>
          <div className="md:col-span-9 md:pl-6">
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-display max-w-[14ch] font-bold"
            >
              Things people ask.
            </motion.h2>

            <div className="mt-12 border-t border-hairline">
              {faqs.map((f, i) => (
                <Item key={f.q} {...f} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
