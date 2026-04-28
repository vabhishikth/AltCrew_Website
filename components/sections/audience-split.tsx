"use client";

import Image from "next/image";

type Side = "left" | "right";

type Panel = {
  side: Side;
  pill: string;
  headline: string;
  body: string;
  cta: string;
  ctaHref: string;
  ctaBg: string;
  photo: string;
  photoAlt: string;
};

const panels: Panel[] = [
  {
    side: "left",
    pill: "FOR ORGANIZERS",
    headline: "BUILD YOUR CREW",
    body: "Run club captain, yoga instructor, gym owner. Manage events, track check-ins, handle waivers, grow your community. All in one place.",
    cta: "Grow your community",
    ctaHref: "#organizers",
    ctaBg: "#ffffff",
    photo: "/wom/build-crew.png",
    photoAlt: "Run club captain leading a group warm-up",
  },
  {
    side: "right",
    pill: "FOR CREW",
    headline: "FIND YOUR CREW",
    body: "Discover events near you. Match with workout partners at your pace. Check in when you show up. Never train alone again. Your crew is out there.",
    cta: "Start exploring",
    ctaHref: "#waitlist",
    ctaBg: "#C7FF57",
    photo: "/wom/crew-gym.jpg",
    photoAlt: "Group workout in a steamy gym",
  },
];

const css = `
.auds-root{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:0;height:100vh;min-height:600px;background:#0B0B0B;color:#fff;overflow:hidden;font-family:'Figtree',var(--font-sans);}
.auds-panel{position:relative;overflow:hidden;isolation:isolate;border:none;outline:none;}
.auds-left{margin-right:-1px;}
.auds-back{position:absolute;inset:0;z-index:1;}
.auds-photo{object-fit:cover;transform:scale(1);transition:transform 4s cubic-bezier(0.16,1,0.3,1);}
.auds-panel:hover .auds-photo{transform:scale(1.05);}
.auds-photo-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.2) 50%,transparent 80%);z-index:1;}
.auds-content{position:absolute;inset:0;z-index:2;padding:48px;display:flex;flex-direction:column;justify-content:space-between;gap:24px;}
@media (min-width:1024px){.auds-content{padding:60px;}}
.auds-pill{align-self:flex-start;border:1px solid rgba(255,255,255,0.3);color:rgba(255,255,255,0.5);border-radius:50px;padding:6px 16px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;}
.auds-pill-on{border-color:rgba(255,255,255,1);color:#fff;}
.auds-headline{font-size:clamp(2rem,4.5vw,3.5rem);font-weight:900;text-transform:uppercase;color:#fff;line-height:0.95;letter-spacing:-0.02em;margin:auto 0 0;max-width:14ch;}
.auds-body{font-size:15px;color:rgba(255,255,255,0.8);max-width:400px;line-height:1.6;margin-top:16px;}
.auds-cta{align-self:flex-start;margin-top:24px;display:inline-flex;align-items:center;gap:10px;color:#0B0B0B;border-radius:50px;font-weight:600;padding:16px 32px;font-size:14px;min-height:48px;transition:transform 0.3s cubic-bezier(0.4,0,0.2,1),box-shadow 0.3s;}
.auds-cta:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(199,255,87,0.2);}
.auds-curtain{position:absolute;inset:0;z-index:3;background:#0B0B0B;padding:48px;display:flex;flex-direction:column;justify-content:space-between;clip-path:inset(0 0 0 0);transition:clip-path 0.8s cubic-bezier(0.4,0,0.2,1);pointer-events:none;overflow:hidden;}
@media (min-width:1024px){.auds-curtain{padding:60px;}}
.auds-tease{font-size:clamp(1.5rem,3vw,2.5rem);font-weight:800;color:rgba(255,255,255,0.15);text-transform:uppercase;letter-spacing:-0.01em;line-height:0.95;margin-top:auto;}
.auds-streak{position:absolute;top:50%;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent);opacity:0;pointer-events:none;}
.auds-left:hover .auds-curtain{clip-path:inset(0 0 0 100%);}
.auds-right:hover .auds-curtain{clip-path:inset(0 100% 0 0);}
.auds-left:hover .auds-streak{animation:auds-streak-ltr 0.6s ease-out 1 forwards;}
.auds-right:hover .auds-streak{animation:auds-streak-rtl 0.6s ease-out 1 forwards;}
@keyframes auds-streak-ltr{0%{transform:translateX(-100%);opacity:0.3;}100%{transform:translateX(100%);opacity:0;}}
@keyframes auds-streak-rtl{0%{transform:translateX(100%);opacity:0.3;}100%{transform:translateX(-100%);opacity:0;}}
@media (max-width:767px){.auds-root{grid-template-columns:1fr;height:auto;min-height:0;}.auds-panel{height:50vh;min-height:480px;}.auds-left{margin-right:0;}.auds-curtain{display:none;}}
@media (prefers-reduced-motion:reduce){.auds-curtain{display:none;}}
`;

export function AudienceSplit() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <section
        className="auds-root"
        aria-label="Find your AltCrew side"
        style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif" }}
      >
        {panels.map((p) => (
          <article key={p.side} className={`auds-panel auds-${p.side}`}>
            <div className="auds-back">
              <Image
                src={p.photo}
                alt={p.photoAlt}
                fill
                unoptimized
                className="auds-photo"
                sizes="50vw"
              />
              <div className="auds-photo-overlay" aria-hidden />
              <div className="auds-content">
                <span className="auds-pill auds-pill-on">{p.pill}</span>
                <h2 className="auds-headline">{p.headline}</h2>
                <p className="auds-body">{p.body}</p>
                <a
                  href={p.ctaHref}
                  className="auds-cta"
                  style={{ backgroundColor: p.ctaBg }}
                >
                  {p.cta} <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="auds-curtain" aria-hidden>
              <span className="auds-pill">{p.pill}</span>
              <span className="auds-tease">{p.headline}</span>
              <span className="auds-streak" />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
