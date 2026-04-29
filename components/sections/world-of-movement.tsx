"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Card = {
  title: string;
  category: string;
  tagColor: string;
  img: string;
};

const cards: Card[] = [
  {
    title: "Sunrise HIIT on the Beach",
    category: "HIIT",
    tagColor: "#C7FF57",
    img: "/wom/hiit-v2.png",
  },
  {
    title: "Sunset Run Club",
    category: "Running",
    tagColor: "#74F1FF",
    img: "/wom/run-v2.png",
  },
  {
    title: "Vinyasa Yoga Flow",
    category: "Yoga",
    tagColor: "#A974FF",
    img: "/wom/yoga-v2.png",
  },
  {
    title: "CrossFit Open Gym",
    category: "CrossFit",
    tagColor: "#FF4D07",
    img: "/wom/crossfit-v2.png",
  },
  {
    title: "Weekend Trail Hike",
    category: "Hiking",
    tagColor: "#FFD904",
    img: "/wom/hike-v2.png",
  },
  {
    title: "Boxing Bootcamp",
    category: "Boxing",
    tagColor: "#FF004D",
    img: "/wom/box-v2.png",
  },
  {
    title: "Cycling Crew Ride",
    category: "Cycling",
    tagColor: "#CF61FF",
    img: "/wom/cycle-v2.png",
  },
  {
    title: "Outdoor Calisthenics",
    category: "Calisthenics",
    tagColor: "#C7FF57",
    img: "/wom/cali-v2.png",
  },
];

export function WorldOfMovement() {
  const interactiveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = interactiveRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let curX = 0, curY = 0, tgX = 0, tgY = 0;
    let raf = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      el.style.transform = `translate(${curX}px, ${curY}px)`;
      raf = requestAnimationFrame(move);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;
      tgX = e.clientX - rect.left - rect.width / 2;
      tgY = e.clientY - rect.top - rect.height / 2;
    };

    const parent = el.parentElement;
    parent?.addEventListener("mousemove", onMouse);
    raf = requestAnimationFrame(move);

    return () => {
      parent?.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  const doubled = [...cards, ...cards];

  return (
    <section
      className="wom-root"
      style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif" }}
      aria-labelledby="wom-heading"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: 0, height: 0 }}
        aria-hidden
      >
        <defs>
          <filter id="wom-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="wom-mesh">
        <div className="wom-g1" />
        <div className="wom-g2" />
        <div className="wom-g3" />
        <div className="wom-g4" />
        <div className="wom-g5" />
        <div
          ref={interactiveRef}
          style={{
            position: "absolute",
            background:
              "radial-gradient(circle at center, rgba(199,255,87,0.6) 0, rgba(199,255,87,0) 50%) no-repeat",
            mixBlendMode: "hard-light",
            opacity: 0.45,
            width: "100%",
            height: "100%",
            top: "-50%",
            left: "-50%",
          }}
        />
      </div>

      <div className="wom-noise" />

      <div
        className="wom-carousel"
        style={{
          position: "relative",
          zIndex: 3,
          paddingTop: "80px",
          paddingBottom: "60px",
          maskImage:
            "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)",
        }}
      >
        <div className="wom-track">
          {doubled.map((c, i) => (
            <article className="wom-card" key={`${c.title}-${i}`}>
              <Image
                src={c.img}
                alt={c.title}
                width={560}
                height={720}
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
              />
              <div className="wom-card-overlay">
                <span
                  className="wom-tag"
                  style={{ backgroundColor: c.tagColor }}
                >
                  {c.category}
                </span>
                <h3 className="wom-card-title">{c.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 3,
          padding: "40px 24px 120px",
        }}
      >
        <h2 id="wom-heading" className="wom-headline">
          Find A Fitness Community
          <br />
          Near You
        </h2>
        <p className="wom-sub">
          Running clubs, yoga groups, HIIT crews, cycling pelotons, pickleball
          leagues, lifting partners. Discover real fitness communities in
          Visakhapatnam, Hyderabad, Bangalore, Mumbai, and across India.
        </p>
      </div>
    </section>
  );
}
