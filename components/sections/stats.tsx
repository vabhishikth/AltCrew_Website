"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "motion/react";

type Stat = {
  figure: string;
  label: string;
  to?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

const stats: Stat[] = [
  {
    figure: "2.5M",
    to: 2.5,
    suffix: "M",
    decimals: 1,
    label: "registered runners in India",
  },
  {
    figure: "1,600+",
    to: 1600,
    suffix: "+",
    label: "fitness events held nationwide each year",
  },
  {
    figure: "<1%",
    label: "gym penetration across the country",
  },
];

function formatNumber(n: number, decimals = 0) {
  if (decimals > 0) return n.toFixed(decimals);
  return Math.round(n).toLocaleString("en-IN");
}

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(stat.to ?? 0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!inView || stat.to == null || animated) return;
    setValue(0);
    setAnimated(true);
    const controls = animate(0, stat.to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, stat.to, animated]);

  if (stat.to == null) {
    return <span ref={ref}>{stat.figure}</span>;
  }

  return (
    <span ref={ref}>
      {stat.prefix ?? ""}
      {formatNumber(value, stat.decimals)}
      {stat.suffix ?? ""}
    </span>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      className="relative border-b border-hairline bg-[var(--color-ground)] text-[var(--color-cream)]"
      aria-labelledby="stats-heading"
    >
      <div className="container-page py-24 md:py-32">
        <div className="max-w-[72ch]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/60">
            india context
          </p>
          <motion.h2
            id="stats-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-display max-w-[20ch] font-bold"
          >
            India is moving. The infrastructure isn&rsquo;t there yet.
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.figure}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-[var(--color-cream)]/20 pt-6"
            >
              <div
                className="font-mono text-[88px] font-light leading-none tracking-tight md:text-[140px]"
                style={{ fontFeatureSettings: "'tnum' 1" }}
              >
                <CountUp stat={s} />
              </div>
              <p className="mt-6 max-w-[24ch] text-lg text-[var(--color-cream)]/85">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 max-w-[60ch] text-lg text-[var(--color-cream)]/85 md:text-xl"
        >
          More runners than ever. More events than ever. And almost nobody at
          the gym. The opportunity isn&rsquo;t motivation. It&rsquo;s
          discovery.
        </motion.p>

        <p className="mt-10 max-w-[60ch] font-mono text-[10px] uppercase tracking-widest text-[var(--color-cream)]/40">
          Figures compiled from publicly reported industry estimates.
          Sources include the{" "}
          <a
            href="https://indianathletics.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2 hover:text-[var(--color-cream)]"
          >
            Athletics Federation of India
          </a>
          , the{" "}
          <a
            href="https://www.ihrsa.org/about/research/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2 hover:text-[var(--color-cream)]"
          >
            IHRSA Global Report
          </a>
          , and event listings aggregated by major Indian endurance
          organizers.
        </p>
      </div>
    </section>
  );
}
