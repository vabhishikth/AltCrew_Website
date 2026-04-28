"use client";

import { motion } from "motion/react";

const meta = [
  { k: "Date", v: "Sunday, May 31, 2026" },
  { k: "Time", v: "9:00 AM – 10:00 PM" },
  { k: "Venue", v: "Sai Priya Resorts, Visakhapatnam" },
  { k: "App drops", v: "7:30 PM · on-stage Founders Q&A" },
  { k: "Tickets", v: "BookMyShow · price announced soon" },
  { k: "Lineup", v: "Full schedule announced shortly" },
];

export function Festival() {
  return (
    <section
      id="festival"
      className="relative border-b border-hairline bg-[var(--color-ground)] text-[var(--color-cream)]"
      aria-labelledby="festival-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/60">
              launch event
            </p>
          </aside>

          <div className="md:col-span-9 md:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[12px] uppercase tracking-widest text-[var(--accent)]"
            >
              <span
                aria-hidden
                className="mr-3 inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--color-lime)] align-middle"
              />
              Launch event
            </motion.div>

            <motion.h2
              id="festival-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-display max-w-[16ch] font-bold"
            >
              Vizag Fitness <span className="text-[var(--accent)]">&amp;</span>{" "}
              Flea Fest
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 max-w-2xl text-lg text-[var(--color-cream)]/85 md:text-xl"
            >
              One day. One beach city. Thirteen hours of movement, market
              stalls, food, and music. AltCrew goes live on stage at 7:30 PM.
            </motion.p>

            <motion.dl
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 divide-y divide-[var(--color-cream)]/15 border-y border-[var(--color-cream)]/15"
            >
              {meta.map((m) => (
                <div
                  key={m.k}
                  className="grid grid-cols-3 gap-4 py-4 md:grid-cols-12 md:py-5"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/55 md:col-span-3">
                    {m.k}
                  </dt>
                  <dd className="col-span-2 text-[var(--color-cream)] md:col-span-9 md:text-lg">
                    {m.v}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-12 flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span
                  aria-disabled="true"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-cream)]/30 px-6 py-4 text-base font-medium text-[var(--color-cream)]/70"
                >
                  Tickets drop on BookMyShow soon
                </span>
                <a
                  href="https://instagram.com/altcrew.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] uppercase tracking-widest text-[var(--accent)] underline decoration-2 underline-offset-4 hover:text-[var(--color-cream)]"
                >
                  Follow @altcrew.in for the drop
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
