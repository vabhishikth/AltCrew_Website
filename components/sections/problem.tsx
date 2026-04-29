"use client";

import { motion } from "motion/react";

export function Problem() {
  return (
    <section
      id="problem"
      className="relative border-b border-hairline"
      aria-labelledby="problem-heading"
    >
      <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <aside className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            problem
          </p>
        </aside>

        <div className="md:col-span-9 md:pl-6">
          <motion.h2
            id="problem-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-display max-w-[16ch] font-bold"
          >
            Fitness in India is happening. You just can&rsquo;t find it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 max-w-[68ch] text-base text-muted md:text-lg"
          >
            Crews are running in your city right now. Five AM tempo runs.
            Saturday morning yoga circles. After-work lifting groups. Trail
            hikes that take ten people up the Western Ghats before sunrise.
            Running clubs in Vizag, yoga groups in Hyderabad, cycling
            pelotons in Bangalore, padel courts in Mumbai. Every sport, every
            pace, in your neighbourhood. The barrier was never motivation. It
            was finding the crew that fits you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-10 grid gap-8 text-lg text-fg/85 md:grid-cols-2 md:text-xl"
          >
            <p>
              The communities are there. Locked in private group chats you
              weren&rsquo;t added to. Instagram pages you&rsquo;d have to
              know to follow. Rooftops and parks you&rsquo;d have to know to
              look at.
            </p>
            <p>
              If you&rsquo;re already in, you&rsquo;re in. If you&rsquo;re
              not, you stay out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
