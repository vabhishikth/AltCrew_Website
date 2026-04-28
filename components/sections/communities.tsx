"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Card = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

const cards: Card[] = [
  {
    title: "Run Clubs & Crews",
    body: "From sunrise 5Ks to weekend long runs. Manage your crew, track pace groups, and grow without group-chat chaos.",
    src: "/wom/run-v2.png",
    alt: "Group of runners on a morning run, energetic city streets",
  },
  {
    title: "Studios & Gyms",
    body: "Fill every class. Handle RSVPs, waivers, and check-ins. Let people discover you instead of chasing them.",
    src: "/wom/crossfit-v2.png",
    alt: "Group fitness class indoors, lifting and HIIT",
  },
  {
    title: "Retreats",
    body: "Trail weekends, fitness festivals, wellness escapes. Multi-day movement, off the map.",
    src: "/wom/hike-v2.png",
    alt: "Weekend retreat group hike, Western Ghats trail",
  },
];

export function Communities() {
  return (
    <section
      id="communities"
      className="relative border-b border-hairline"
      aria-labelledby="communities-heading"
    >
      <div className="container-page py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            who it&rsquo;s for
          </p>
          <h2
            id="communities-heading"
            className="text-display mt-5 font-bold"
          >
            Built for every crew that moves.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col gap-5"
            >
              <div className="relative w-full overflow-hidden rounded-[14px] bg-fg/[0.04]" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 92vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <h3 className="text-headline font-bold text-fg">{c.title}</h3>
                <p className="mt-2 max-w-[36ch] text-base text-muted md:text-lg">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
