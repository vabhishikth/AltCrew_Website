"use client";

import { motion } from "motion/react";

const features = [
  {
    n: "01",
    name: "PacePals",
    line: "Find runners within fifteen seconds of your kilometre pace.",
    body: "Log your 5K time, your average ride pace, your goal. Runners and cyclists within 15 seconds per kilometre of yours show up first. No more dropping off the back of a too-fast group.",
  },
  {
    n: "02",
    name: "Flash Album",
    line: "Unlocks at the event. Everyone there shares one album for 24 hours.",
    body: "Show up, the album opens. Anyone at the event drops their photos in. Every attendee sees the full set for 24 hours, then access closes. Tap to share to your Instagram story or grid.",
  },
  {
    n: "03",
    name: "Shoe Locker",
    line: "Track every kilometre on every pair. Replace before the foam dies.",
    body: "Log every pair. Kilometres tally automatically. A retirement nudge lands around 600 km, before the cushion goes and the injuries start.",
  },
  {
    n: "04",
    name: "Smart Waivers",
    line: "Sign once. Never again.",
    body: "One digital waiver in your profile. Every organizer who needs it gets it instantly. No clipboards. No delays at startline.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative border-b border-hairline bg-surface"
      aria-labelledby="features-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="max-w-[72ch]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            four exclusive features
          </p>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-display max-w-[18ch] font-bold"
          >
            Four things you only get here.
          </motion.h2>
        </div>

        <div className="mt-16 divide-y divide-[var(--border)] border-y border-hairline">
          {features.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: i * 0.05,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-[44px] font-light leading-none text-fg/30 transition-colors group-hover:text-[var(--accent)] md:text-[64px]">
                  {f.n}
                </div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-[28px] font-bold leading-tight tracking-tight md:text-[40px]">
                  {f.name}
                </h3>
                <p className="mt-2 text-fg/70 md:text-lg">{f.line}</p>
              </div>

              <div className="md:col-span-5 md:pt-3">
                <p className="text-fg/85">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
