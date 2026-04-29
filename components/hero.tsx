"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const heroPhotos = [
  { src: "/hero/hero-1.jpg", alt: "Group of runners celebrating after a sunrise run, palm-lined boulevard, India" },
  { src: "/hero/hero-2.jpg", alt: "Outdoor strength workout with kettlebells in a public park" },
  { src: "/hero/hero-3.jpg", alt: "Crew of cyclists pacing together on a coastal road" },
  { src: "/hero/hero-4.jpg", alt: "Yoga group holding a pose at a beachside boardwalk at golden hour" },
  { src: "/hero/hero-5.jpg", alt: "Runners high-fiving at the finish of a community 5K event" },
];

const heroCss = `
.hcc-root{position:relative;background:var(--bg);overflow:hidden;min-height:calc(100vh - 60px);}
.hcc-canvas{position:relative;width:100%;max-width:1440px;margin:0 auto;padding:64px clamp(20px,4vw,56px) 96px;min-height:calc(100vh - 60px);}
.hcc-eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:Geist Mono,ui-monospace,monospace;font-size:11px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);}
.hcc-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--color-lime);animation:hcc-pulse 1.6s ease-in-out infinite;}
@keyframes hcc-pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}

.hcc-title{font-family:Figtree,Geist Sans,sans-serif;font-weight:900;line-height:0.86;letter-spacing:-0.045em;text-transform:uppercase;color:var(--fg);margin:0;}
.hcc-title-line1{display:block;font-size:clamp(4rem,11vw,10rem);position:relative;z-index:3;}
.hcc-title-line2{display:block;font-size:clamp(5rem,18vw,16rem);color:var(--accent);position:relative;z-index:4;margin-top:-0.04em;}
@supports (mix-blend-mode:multiply){
  @media (min-width:901px) and (prefers-contrast:no-preference){
    .hcc-title-line2{mix-blend-mode:multiply;}
  }
}

.hcc-photo{position:absolute;top:140px;right:6%;width:36%;max-width:520px;min-width:320px;aspect-ratio:3/4;border-radius:24px;overflow:hidden;z-index:2;box-shadow:0 20px 60px rgba(26,23,20,0.18),0 0 0 1px rgba(26,23,20,0.06);transform:rotate(-1.5deg);}
.hcc-photo img{width:100%;height:100%;object-fit:cover;}
.hcc-photo-cap{position:absolute;left:14px;bottom:14px;background:rgba(11,11,11,0.55);color:#f2ebdd;font-family:Geist Mono,ui-monospace,monospace;font-size:10px;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;border-radius:9999px;padding:6px 14px;backdrop-filter:blur(3px);}

.hcc-body{position:relative;z-index:3;max-width:36ch;margin-top:32px;font-size:clamp(15px,1.2vw,17px);line-height:1.55;color:var(--muted);}
.hcc-actions{position:relative;z-index:3;margin-top:28px;display:flex;flex-wrap:wrap;gap:12px;}

.hcc-scroll{position:absolute;left:clamp(20px,4vw,56px);bottom:32px;z-index:3;display:inline-flex;align-items:center;gap:10px;font-family:Geist Mono,ui-monospace,monospace;font-size:10px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);}
.hcc-scroll-arrow{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:50%;animation:hcc-bob 2.4s ease-in-out infinite;}
@keyframes hcc-bob{0%,100%{transform:translateY(0);}50%{transform:translateY(4px);}}

@media (max-width:900px){
  .hcc-canvas{padding:48px 20px 88px;}
  .hcc-photo{position:relative;top:auto;right:auto;width:100%;max-width:none;margin:24px 0 0;transform:none;aspect-ratio:4/5;}
  .hcc-title-line1{font-size:clamp(3rem,12vw,5rem);}
  .hcc-title-line2{font-size:clamp(4rem,18vw,6.5rem);}
  .hcc-scroll{display:none;}
}

@media (prefers-reduced-motion:reduce){
  .hcc-eyebrow::before,.hcc-scroll-arrow{animation:none;}
}
`;

const word = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 * i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % heroPhotos.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hcc-root border-b border-hairline" aria-labelledby="hero-heading">
      <style dangerouslySetInnerHTML={{ __html: heroCss }} />

      <div className="hcc-canvas">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hcc-eyebrow"
        >
          Pre-launch · India · Drops May 31, 2026
        </motion.div>

        <h1 id="hero-heading" className="hcc-title" style={{ marginTop: 28 }}>
          <motion.span
            className="hcc-title-line1"
            custom={0}
            variants={word}
            initial="hidden"
            animate="show"
          >
            Meet the
          </motion.span>
          <motion.span
            className="hcc-title-line2"
            custom={1}
            variants={word}
            initial="hidden"
            animate="show"
          >
            Movement.
          </motion.span>
        </h1>

        <motion.div
          className="hcc-photo"
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={heroPhotos[idx].src}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={heroPhotos[idx].src}
                alt={heroPhotos[idx].alt}
                fill
                priority
                sizes="(min-width:900px) 38vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
          className="hcc-body"
        >
          Your city is already moving. Crews running at sunrise. Yoga at
          the boardwalk. Lifters at the corner gym. Find the people who
          train like you do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.55 }}
          className="hcc-actions"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)] active:scale-[0.98] md:text-base"
          >
            Find my Crew
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#organizers"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-fg/40 px-6 py-3.5 text-sm font-medium text-fg transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98] md:text-base"
          >
            For organizers
          </a>
        </motion.div>

        <motion.a
          href="#problem"
          aria-label="Scroll to next section"
          className="hcc-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="hcc-scroll-arrow" aria-hidden>
            ↓
          </span>
          <span>Scroll</span>
        </motion.a>
      </div>
    </section>
  );
}
