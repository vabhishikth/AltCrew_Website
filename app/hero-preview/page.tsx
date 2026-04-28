/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const metadata = {
  title: "Hero variants preview",
  robots: { index: false, follow: false },
};

const css = `
.hp-root{font-family:var(--font-figtree),Geist Sans,sans-serif;background:#1a1714;color:#f2ebdd;min-height:100vh;}
.hp-bar{position:sticky;top:0;z-index:50;background:#0b0b0b;border-bottom:1px solid rgba(255,255,255,0.1);padding:12px 24px;display:flex;gap:16px;align-items:center;font-family:Geist Mono,monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#c9c2b3;}
.hp-bar a{color:#c7ff57;text-decoration:none;}
.hp-bar a:hover{text-decoration:underline;}
.hp-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#0b0b0b;}
@media(max-width:900px){.hp-grid{grid-template-columns:1fr;}}
.hp-cell{position:relative;background:#1a1714;min-height:75vh;display:flex;flex-direction:column;}
.hp-cell-tag{position:absolute;top:16px;left:16px;z-index:10;background:#e5572b;color:#f2ebdd;border-radius:9999px;padding:6px 14px;font-family:Geist Mono,monospace;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;}
.hp-cell-info{position:absolute;top:16px;right:16px;z-index:10;color:rgba(255,255,255,0.5);font-family:Geist Mono,monospace;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;max-width:50%;text-align:right;}

/* shared atoms */
.hp-eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:Geist Mono,monospace;font-size:11px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.7);}
.hp-eyebrow::before{content:"";width:6px;height:6px;border-radius:50%;background:#c7ff57;display:inline-block;}
.hp-cta-rust{display:inline-flex;align-items:center;gap:8px;background:#e5572b;color:#f2ebdd;border-radius:9999px;padding:14px 22px;font-weight:600;font-size:14px;text-decoration:none;}
.hp-cta-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#f2ebdd;border:1px solid rgba(242,235,221,0.4);border-radius:9999px;padding:14px 22px;font-weight:500;font-size:14px;text-decoration:none;}
.hp-cta-cream{display:inline-flex;align-items:center;gap:8px;background:#f2ebdd;color:#1a1714;border-radius:9999px;padding:14px 22px;font-weight:600;font-size:14px;text-decoration:none;}
.hp-cta-ghost-dark{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#1a1714;border:1px solid rgba(26,23,20,0.4);border-radius:9999px;padding:14px 22px;font-weight:500;font-size:14px;text-decoration:none;}

/* ===== A: full-bleed cinematic ===== */
.hpA{position:relative;flex:1;overflow:hidden;}
.hpA-photo{position:absolute;inset:0;}
.hpA-photo img{width:100%;height:100%;object-fit:cover;}
.hpA-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.4) 45%,rgba(0,0,0,0.1) 80%);}
.hpA-content{position:absolute;left:0;right:0;bottom:0;padding:48px 40px 36px;display:flex;flex-direction:column;gap:18px;}
.hpA-headline{font-family:Figtree,sans-serif;font-weight:900;font-size:clamp(1.5rem,3vw,2.6rem);line-height:0.95;letter-spacing:-0.02em;color:#fff;text-transform:uppercase;max-width:18ch;margin:0;}
.hpA-headline em{font-style:normal;color:#c7ff57;}
.hpA-actions{display:flex;gap:12px;flex-wrap:wrap;}

/* ===== B: typographic word-wall ===== */
.hpB{flex:1;background:#f2ebdd;color:#1a1714;display:flex;flex-direction:column;justify-content:space-between;padding:48px 40px 36px;position:relative;}
.hpB-rust-rule{height:2px;width:60px;background:#e5572b;}
.hpB-headline{font-family:Figtree,sans-serif;font-weight:900;font-size:clamp(2rem,5vw,4.2rem);line-height:0.92;letter-spacing:-0.03em;text-transform:uppercase;margin:24px 0 0;}
.hpB-headline span{display:block;}
.hpB-headline .accent{color:#e5572b;}
.hpB-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px;}

/* ===== C: asymmetric text+single tall portrait ===== */
.hpC{flex:1;display:grid;grid-template-columns:1fr 1.1fr;gap:0;background:#f2ebdd;color:#1a1714;}
.hpC-text{padding:48px 32px;display:flex;flex-direction:column;justify-content:center;gap:16px;}
.hpC-headline{font-family:Figtree,sans-serif;font-weight:800;font-size:clamp(1.5rem,2.6vw,2.4rem);line-height:0.96;letter-spacing:-0.02em;margin:0;}
.hpC-headline .accent{color:#e5572b;}
.hpC-photo{position:relative;overflow:hidden;}
.hpC-photo img{width:100%;height:100%;object-fit:cover;}
.hpC-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:14px;}

/* ===== D: split-marquee ===== */
.hpD{flex:1;display:flex;flex-direction:column;background:#1a1714;color:#f2ebdd;}
.hpD-top{padding:36px 32px 24px;display:flex;flex-direction:column;gap:14px;}
.hpD-headline{font-family:Figtree,sans-serif;font-weight:900;font-size:clamp(1.4rem,2.6vw,2.2rem);line-height:0.95;letter-spacing:-0.02em;text-transform:uppercase;margin:0;max-width:22ch;}
.hpD-headline .accent{color:#c7ff57;}
.hpD-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:6px;}
.hpD-strip{position:relative;flex:1;overflow:hidden;border-top:1px solid rgba(255,255,255,0.08);}
.hpD-track{display:flex;gap:8px;height:100%;animation:hpD-slide 26s linear infinite;width:max-content;}
.hpD-thumb{position:relative;width:200px;height:100%;flex-shrink:0;border-radius:8px;overflow:hidden;}
.hpD-thumb img{width:100%;height:100%;object-fit:cover;}
@keyframes hpD-slide{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
`;

const photos = {
  cinematic: "/wom/run-v2.png",
  hero1: "/portraits/01-run.jpg",
  hero2: "/portraits/02-yoga.jpg",
  hero3: "/portraits/03-lift.jpg",
  tall: "/wom/hike-v2.png",
  strip: [
    "/wom/run-v2.png",
    "/wom/hiit-v2.png",
    "/wom/yoga-v2.png",
    "/wom/cycle-v2.png",
    "/wom/hike-v2.png",
    "/wom/box-v2.png",
    "/wom/cali-v2.png",
    "/wom/crossfit-v2.png",
  ],
};

export default function HeroPreview() {
  const stripDoubled = [...photos.strip, ...photos.strip];

  return (
    <div className="hp-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="hp-bar">
        <span>Hero variants preview</span>
        <span style={{ flex: 1 }} />
        <a href="/">← Back to landing</a>
      </div>

      <div className="hp-grid">
        {/* ===== A ===== */}
        <div className="hp-cell">
          <span className="hp-cell-tag">Option A</span>
          <span className="hp-cell-info">Full-bleed cinematic photo</span>
          <div className="hpA">
            <div className="hpA-photo">
              <Image
                src={photos.cinematic}
                alt="Sunset run club, candid"
                fill
                sizes="(min-width:900px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="hpA-overlay" />
            <div className="hpA-content">
              <span className="hp-eyebrow">Pre-launch · India · May 31, 2026</span>
              <h2 className="hpA-headline">
                Strava tells you what you did. <em>AltCrew</em> tells you who to do it with.
              </h2>
              <div className="hpA-actions">
                <a href="#" className="hp-cta-rust">Find my Crew →</a>
                <a href="#" className="hp-cta-ghost">For organizers</a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== B ===== */}
        <div className="hp-cell">
          <span className="hp-cell-tag">Option B</span>
          <span className="hp-cell-info">Typographic word-wall · cream paper</span>
          <div className="hpB">
            <span className="hp-eyebrow" style={{ color: "#4a463f" }}>
              Pre-launch · India · May 31, 2026
            </span>
            <div>
              <div className="hpB-rust-rule" />
              <h2 className="hpB-headline">
                <span>Strava</span>
                <span>tells you</span>
                <span>what you did.</span>
                <span className="accent">AltCrew</span>
                <span className="accent">tells you who</span>
                <span className="accent">to do it with.</span>
              </h2>
            </div>
            <div className="hpB-actions">
              <a href="#" className="hp-cta-rust">Find my Crew →</a>
              <a href="#" className="hp-cta-ghost-dark">For organizers</a>
            </div>
          </div>
        </div>

        {/* ===== C ===== */}
        <div className="hp-cell">
          <span className="hp-cell-tag">Option C</span>
          <span className="hp-cell-info">Asymmetric · text + ONE tall portrait</span>
          <div className="hpC">
            <div className="hpC-text">
              <span className="hp-eyebrow" style={{ color: "#4a463f" }}>
                Pre-launch · India · May 31
              </span>
              <h2 className="hpC-headline">
                Strava tells you what you did.
                <br />
                <span className="accent">AltCrew tells you who to do it with.</span>
              </h2>
              <p style={{ color: "#4a463f", fontSize: 15, lineHeight: 1.55, maxWidth: "32ch", margin: 0 }}>
                Find a crew to lift, run, stretch, ride, or swim with. In your neighbourhood. At your pace.
              </p>
              <div className="hpC-actions">
                <a href="#" className="hp-cta-rust">Find my Crew →</a>
                <a href="#" className="hp-cta-ghost-dark">For organizers</a>
              </div>
            </div>
            <div className="hpC-photo">
              <Image
                src={photos.tall}
                alt="Trail crew, candid"
                fill
                sizes="(min-width:900px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* ===== D ===== */}
        <div className="hp-cell">
          <span className="hp-cell-tag">Option D</span>
          <span className="hp-cell-info">Split-marquee · text + auto-scroll photo strip</span>
          <div className="hpD">
            <div className="hpD-top">
              <span className="hp-eyebrow">Pre-launch · India · May 31, 2026</span>
              <h2 className="hpD-headline">
                Strava tells you what you did.
                <br />
                <span className="accent">AltCrew tells you who to do it with.</span>
              </h2>
              <div className="hpD-actions">
                <a href="#" className="hp-cta-rust">Find my Crew →</a>
                <a href="#" className="hp-cta-ghost">For organizers</a>
              </div>
            </div>
            <div className="hpD-strip">
              <div className="hpD-track">
                {stripDoubled.map((src, i) => (
                  <div className="hpD-thumb" key={`${src}-${i}`}>
                    <Image src={src} alt="Crew" fill sizes="200px" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
