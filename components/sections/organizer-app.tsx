"use client";

import { motion } from "motion/react";

const css = `
.oa-root{position:relative;background:var(--bg);overflow:hidden;}
.oa-canvas{max-width:1440px;margin:0 auto;padding:96px clamp(20px,4vw,56px) 120px;display:grid;gap:64px;align-items:center;grid-template-columns:1fr;}
@media(min-width:900px){.oa-canvas{grid-template-columns:1fr 1.05fr;gap:80px;}}

/* LEFT */
.oa-eyebrow{display:inline-flex;align-items:center;gap:10px;padding:6px 14px;border:1px solid rgba(26,23,20,0.2);border-radius:9999px;font-family:Geist Mono,ui-monospace,monospace;font-size:11px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);background:transparent;width:max-content;}
.oa-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--color-rust);}
.oa-headline{font-family:Geist Sans,sans-serif;font-weight:700;font-size:clamp(2rem,4.5vw,3.4rem);line-height:0.98;letter-spacing:-0.03em;color:var(--fg);max-width:18ch;margin:24px 0 0;}
.oa-body{margin:24px 0 0;max-width:46ch;color:var(--muted);font-size:17px;line-height:1.55;}
.oa-cta{display:inline-flex;align-items:center;gap:10px;margin-top:32px;padding:14px 26px;background:var(--color-ground);color:var(--color-cream);border-radius:9999px;font-weight:600;font-size:14px;text-decoration:none;transition:transform 0.3s cubic-bezier(0.4,0,0.2,1),box-shadow 0.3s;}
.oa-cta:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(199,255,87,0.22);}

/* RIGHT — phone stage */
.oa-stage{position:relative;width:100%;aspect-ratio:1/1.2;max-width:520px;margin:0 auto;}

/* Phone */
.oa-phone{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-2deg);width:44%;aspect-ratio:9/19.5;background:#0b0b0b;border-radius:36px;padding:7px;box-shadow:0 30px 80px rgba(26,23,20,0.22),0 0 0 1px rgba(0,0,0,0.6);animation:oa-phone-float 8s ease-in-out infinite;}
.oa-phone-screen{position:relative;width:100%;height:100%;background:var(--color-cream);border-radius:34px;overflow:hidden;display:flex;flex-direction:column;}
.oa-notch{position:absolute;top:10px;left:50%;transform:translateX(-50%);width:34%;height:22px;background:#0b0b0b;border-radius:18px;z-index:2;}

/* Phone status bar */
.oa-status{display:flex;justify-content:space-between;align-items:center;padding:14px 22px 4px;font-family:Geist Mono,ui-monospace,monospace;font-size:10px;font-weight:600;color:var(--fg);}
.oa-status-icons{display:inline-flex;gap:4px;align-items:center;}
.oa-bar{display:inline-block;width:3px;background:var(--fg);border-radius:1px;}

/* Phone content */
.oa-screen-pad{padding:34px 18px 18px;flex:1;display:flex;flex-direction:column;gap:16px;overflow:hidden;}
.oa-tag{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;background:rgba(231,87,43,0.12);color:var(--color-rust);border-radius:9999px;padding:5px 11px;font-family:Geist Mono,ui-monospace,monospace;font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;}
.oa-tag::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--color-rust);}
.oa-event-title{font-family:Geist Sans,sans-serif;font-weight:700;font-size:18px;letter-spacing:-0.02em;line-height:1.05;color:var(--fg);margin:0;max-width:18ch;}
.oa-meta{display:flex;flex-direction:column;gap:6px;font-family:Geist Mono,ui-monospace,monospace;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em;}
.oa-meta-row{display:inline-flex;align-items:center;gap:6px;}
.oa-meta-row svg{flex-shrink:0;}

.oa-attendees{margin-top:6px;display:flex;align-items:center;gap:10px;}
.oa-avatars{display:inline-flex;}
.oa-avatar{width:22px;height:22px;border-radius:50%;background:#bbb;border:2px solid var(--color-cream);margin-left:-6px;}
.oa-avatar:first-child{margin-left:0;}
.oa-avatar.a1{background:linear-gradient(135deg,#e5572b,#ff904d);}
.oa-avatar.a2{background:linear-gradient(135deg,#74f1ff,#1a57ff);}
.oa-avatar.a3{background:linear-gradient(135deg,#cf61ff,#a974ff);}
.oa-avatar.a4{background:linear-gradient(135deg,#c7ff57,#3ccfbb);}
.oa-attendees-count{font-family:Geist Mono,ui-monospace,monospace;font-size:10px;letter-spacing:0.08em;color:var(--muted);}

.oa-rsvp{margin-top:auto;width:100%;background:var(--color-rust);color:var(--color-cream);border-radius:9999px;padding:11px 16px;font-family:Geist Sans,sans-serif;font-size:13px;font-weight:600;text-align:center;border:none;display:flex;align-items:center;justify-content:center;gap:8px;}

/* FLOATING CARDS — glassmorphism */
.oa-card{position:absolute;background:rgba(255,255,255,0.78);backdrop-filter:blur(14px) saturate(140%);-webkit-backdrop-filter:blur(14px) saturate(140%);border:1px solid rgba(26,23,20,0.08);border-radius:18px;padding:14px 16px;box-shadow:0 18px 40px rgba(26,23,20,0.10),0 0 0 1px rgba(255,255,255,0.4) inset;font-family:Geist Sans,sans-serif;color:var(--fg);z-index:3;}

.oa-card-attendees{top:2%;right:-2%;width:200px;animation:oa-float-1 5s ease-in-out infinite;}
.oa-card-checkins{bottom:24%;left:-6%;width:200px;animation:oa-float-2 6s ease-in-out infinite;animation-delay:-1s;}
.oa-card-pace{bottom:-2%;right:6%;width:190px;animation:oa-float-3 5.5s ease-in-out infinite;animation-delay:-2.5s;}

.oa-card-label{font-family:Geist Mono,ui-monospace,monospace;font-size:9px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);}
.oa-card-num{font-family:Geist Sans,sans-serif;font-weight:700;font-size:28px;letter-spacing:-0.02em;line-height:1;margin:6px 0 8px;}
.oa-card-row{display:flex;align-items:center;justify-content:space-between;gap:10px;}
.oa-mini-avatars{display:inline-flex;}
.oa-mini-avatar{width:18px;height:18px;border-radius:50%;border:1.5px solid var(--color-cream);margin-left:-5px;}
.oa-mini-avatar:first-child{margin-left:0;}
.oa-spark{width:80px;height:30px;}
.oa-pill-up{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:9999px;background:rgba(199,255,87,0.6);color:#1a3a08;font-family:Geist Mono,ui-monospace,monospace;font-size:9px;font-weight:700;letter-spacing:0.06em;}

.oa-progress{position:relative;width:100%;height:6px;background:rgba(26,23,20,0.08);border-radius:9999px;overflow:hidden;margin-top:8px;}
.oa-progress-fill{position:absolute;left:0;top:0;bottom:0;width:60%;background:var(--color-rust);border-radius:9999px;}

.oa-pace-row{display:flex;justify-content:space-between;align-items:center;font-size:11px;margin-top:6px;}
.oa-pace-dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px;}

@keyframes oa-phone-float{0%,100%{transform:translate(-50%,-50%) rotate(-2.5deg);}50%{transform:translate(-50%,calc(-50% - 6px)) rotate(-2.5deg);}}
@keyframes oa-float-1{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
@keyframes oa-float-2{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
@keyframes oa-float-3{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}

@media (max-width:900px){
  .oa-stage{max-width:380px;aspect-ratio:1/1.1;}
  .oa-phone{width:54%;}
  .oa-card-attendees{top:6%;right:0%;width:184px;}
  .oa-card-checkins{bottom:14%;left:0%;width:184px;}
  .oa-card-pace{bottom:0%;right:2%;width:170px;}
}
@media (prefers-reduced-motion:reduce){
  .oa-phone,.oa-card-attendees,.oa-card-checkins,.oa-card-pace{animation:none;}
}
`;

export function OrganizerApp() {
  return (
    <section
      id="organizers"
      className="oa-root border-b border-hairline"
      aria-labelledby="oa-heading"
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="oa-canvas">
        {/* LEFT */}
        <div>
          <motion.div
            className="oa-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            For Organizers
          </motion.div>

          <motion.h2
            id="oa-heading"
            className="oa-headline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Stop running your club out of seven group chats.
          </motion.h2>

          <motion.p
            className="oa-body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Schedules, RSVPs, check-ins, waivers, photos, pace groups. Handled.
            Free for clubs. Paid events pay a small commission on tickets sold.
          </motion.p>

          <motion.a
            href="mailto:hello@altcrew.in?subject=Organizer%20interest"
            className="oa-cta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get in touch
            <span aria-hidden>→</span>
          </motion.a>
        </div>

        {/* RIGHT — phone + floating cards */}
        <motion.div
          className="oa-stage"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Phone */}
          <div className="oa-phone" aria-hidden>
            <div className="oa-phone-screen">
              <div className="oa-notch" />
              <div className="oa-status">
                <span>9:41</span>
                <span className="oa-status-icons">
                  <span className="oa-bar" style={{ height: 6 }} />
                  <span className="oa-bar" style={{ height: 8 }} />
                  <span className="oa-bar" style={{ height: 10 }} />
                  <span style={{ marginLeft: 4 }}>100%</span>
                </span>
              </div>

              <div className="oa-screen-pad">
                <span className="oa-tag">Live · Saturday</span>
                <h3 className="oa-event-title">Sunrise Run Club</h3>

                <div className="oa-meta">
                  <span className="oa-meta-row">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M3 1v2M9 1v2M1 5h10" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    Sat, May 31 · 6:00 AM
                  </span>
                  <span className="oa-meta-row">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M6 11s4-3.5 4-7a4 4 0 1 0-8 0c0 3.5 4 7 4 7z" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="6" cy="4" r="1.3" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    Beachside boardwalk
                  </span>
                </div>

                <div className="oa-attendees">
                  <div className="oa-avatars">
                    <span className="oa-avatar a1" />
                    <span className="oa-avatar a2" />
                    <span className="oa-avatar a3" />
                    <span className="oa-avatar a4" />
                  </div>
                  <span className="oa-attendees-count">147 going · 12 today</span>
                </div>

                <button className="oa-rsvp" type="button" tabIndex={-1}>
                  Check me in
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* CARD 1 — Attendees */}
          <div className="oa-card oa-card-attendees" aria-hidden>
            <div className="oa-card-row">
              <span className="oa-card-label">Attendees</span>
              <span className="oa-pill-up">↑ 12 Today</span>
            </div>
            <div className="oa-card-num">147</div>
            <div className="oa-card-row">
              <div className="oa-mini-avatars">
                <span className="oa-mini-avatar" style={{ background: "linear-gradient(135deg,#e5572b,#ff904d)" }} />
                <span className="oa-mini-avatar" style={{ background: "linear-gradient(135deg,#74f1ff,#1a57ff)" }} />
                <span className="oa-mini-avatar" style={{ background: "linear-gradient(135deg,#cf61ff,#a974ff)" }} />
                <span className="oa-mini-avatar" style={{ background: "linear-gradient(135deg,#c7ff57,#3ccfbb)" }} />
              </div>
              <svg className="oa-spark" viewBox="0 0 80 30" fill="none">
                <path
                  d="M2 22 L12 18 L22 24 L32 12 L42 16 L52 6 L62 10 L72 4"
                  stroke="#e5572b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M2 22 L12 18 L22 24 L32 12 L42 16 L52 6 L62 10 L72 4 L72 28 L2 28 Z"
                  fill="rgba(229,87,43,0.12)"
                />
              </svg>
            </div>
          </div>

          {/* CARD 2 — Check-ins */}
          <div className="oa-card oa-card-checkins" aria-hidden>
            <div className="oa-card-row">
              <span className="oa-card-label">Check-ins</span>
              <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 10, color: "var(--muted)" }}>147 RSVP</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 6 }}>
              <span className="oa-card-num" style={{ margin: 0 }}>89</span>
              <span style={{ color: "var(--muted)", fontSize: 12, fontWeight: 500 }}>checked-in</span>
            </div>
            <div className="oa-progress">
              <span className="oa-progress-fill" style={{ width: "60%" }} />
            </div>
            <div style={{ marginTop: 8, fontFamily: "Geist Mono, monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em" }}>
              58 PENDING
            </div>
          </div>

          {/* CARD 3 — PacePals */}
          <div className="oa-card oa-card-pace" aria-hidden>
            <div className="oa-card-row">
              <span className="oa-card-label">Pace Groups</span>
              <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 10, color: "var(--muted)" }}>3</span>
            </div>
            <div className="oa-pace-row">
              <span><span className="oa-pace-dot" style={{ background: "#e5572b" }} />5:30/km</span>
              <span style={{ color: "var(--muted)", fontFamily: "Geist Mono, monospace", fontSize: 11 }}>12</span>
            </div>
            <div className="oa-pace-row">
              <span><span className="oa-pace-dot" style={{ background: "#74f1ff" }} />6:00/km</span>
              <span style={{ color: "var(--muted)", fontFamily: "Geist Mono, monospace", fontSize: 11 }}>8</span>
            </div>
            <div className="oa-pace-row">
              <span><span className="oa-pace-dot" style={{ background: "#c7ff57" }} />6:30/km</span>
              <span style={{ color: "var(--muted)", fontFamily: "Geist Mono, monospace", fontSize: 11 }}>6</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
