"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Founder() {
  return (
    <section
      id="founder"
      className="relative border-b border-hairline"
      aria-labelledby="founder-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              founder note
            </p>
          </aside>

          <div className="md:col-span-9 md:pl-6">
            <motion.h2
              id="founder-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="sr-only"
            >
              A note from the founder
            </motion.h2>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[60ch] bg-surface p-8 md:p-12"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
                A note from the founder
              </p>

              <div className="mt-6 space-y-5 text-lg leading-relaxed text-fg/90 md:text-xl">
                <p>
                  For years I wanted to get fit, but I couldn&rsquo;t bring
                  myself to join anything. The rooms didn&rsquo;t feel like
                  they were for me, and the people in them didn&rsquo;t make
                  space.
                </p>
                <p>
                  A coach changed that. He believed in me more than I did. So I
                  walked. I lifted. I ate what he told me to eat. I lost 35
                  kilos in a year.
                </p>
                <p>
                  Most people don&rsquo;t get a coach like that. They give up
                  before they start, or after one bad attempt, because the
                  communities they tried weren&rsquo;t built for someone who
                  looks, or weighs, or feels the way they do.
                </p>
                <p>
                  AltCrew is for them. If that&rsquo;s you, we&rsquo;re
                  building this for you.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-5 border-t border-hairline pt-6">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-fg/20 bg-bg">
                  <Image
                    src="/portraits/founder.jpeg"
                    alt="Abhishikth Veng, founder of AltCrew"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Abhishikth Veng</div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    founder
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
