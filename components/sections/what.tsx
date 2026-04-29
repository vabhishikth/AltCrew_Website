"use client";

import { motion } from "motion/react";

const pillars = [
  {
    n: "01",
    title: "Discovery",
    body: "Every crew, club, class, and meet near you, on one map. Filtered by sport, pace, and how welcoming they really are.",
  },
  {
    n: "02",
    title: "Matching",
    body: "Drop your pace, your goal, your schedule. The people training where you do, at your speed, surface first.",
  },
  {
    n: "03",
    title: "Organizer tools",
    body: "Run your community without spreadsheets. Schedules, RSVPs, waivers, photos, gear: all handled.",
  },
];

export function What() {
  return (
    <section
      id="what"
      className="relative border-b border-hairline"
      aria-labelledby="what-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              what you can do
            </p>
          </aside>
          <div className="md:col-span-9 md:pl-6">
            <motion.h2
              id="what-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-display max-w-[14ch] font-bold"
            >
              Three jobs. One app.
            </motion.h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-[var(--border)] md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-bg p-8 transition-colors hover:bg-surface md:p-10"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {p.n}
              </div>
              <h3 className="mt-6 text-headline font-bold">{p.title}</h3>
              <p className="mt-5 max-w-[28ch] text-fg/80">{p.body}</p>
              <div
                aria-hidden
                className="mt-10 h-px w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-20"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
