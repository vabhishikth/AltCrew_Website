"use client";

import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Drop your pin",
    body: "Drop your city, the sports you train, your pace. Sixty seconds, no signup wall.",
  },
  {
    n: "02",
    title: "See your Crew",
    body: "Browse clubs, classes, and meets within 5 km. Tap any one to see who shows up, when, and how fast they go.",
  },
  {
    n: "03",
    title: "Show up",
    body: "Tap RSVP. We handle the rest: waivers, photos, schedules.",
  },
];

export function How() {
  return (
    <section
      id="how"
      className="relative border-b border-hairline"
      aria-labelledby="how-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="max-w-[68ch]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            how it works
          </p>
          <motion.h2
            id="how-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-display max-w-[18ch] font-bold"
          >
            Three taps to your first Saturday.
          </motion.h2>
        </div>

        <ol className="mt-16 grid gap-8 md:grid-cols-3 md:gap-px md:overflow-hidden md:rounded-md md:border md:border-hairline md:bg-[var(--border)]">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-bg p-8 md:p-10"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
                step {s.n}
              </p>
              <h3 className="mt-6 text-headline font-bold">{s.title}</h3>
              <p className="mt-3 text-fg/75">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
