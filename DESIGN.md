---
name: AltCrew
description: India's social fitness app. The visual system of a 6am captain's notebook.
colors:
  ground: "#1a1714"
  ground-elev: "#221e1a"
  cream: "#f2ebdd"
  cream-mute: "#d9d2c4"
  surface: "#ebe3d2"
  rust: "#e5572b"
  rust-deep: "#b8431f"
  lime-soft: "#c8e847"
  lime-vivid: "#c7ff57"
  stone-100: "#f5f2ec"
  stone-300: "#c9c2b3"
  stone-500: "#8b8678"
  stone-700: "#4a463f"
  stone-900: "#2a2620"
  cyan: "#74f1ff"
  gold: "#ffd904"
  flag-orange: "#ff4d07"
  hot-pink: "#ff004d"
  purple-vivid: "#cf61ff"
  purple-soft: "#a974ff"
  ink-black: "#0b0b0b"
  danger: "#c0392b"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.75vw, 3rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  impact:
    fontFamily: "Figtree, Geist Sans, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Sans, sans-serif"
    fontSize: "clamp(1.125rem, 1.75vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.15em"
rounded:
  sm: "4px"
  md: "10px"
  card: "16px"
  lg: "18px"
  pill: "9999px"
spacing:
  hairline: "1px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.rust-deep}"
    textColor: "{colors.cream}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-cta-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-cta-lime:
    backgroundColor: "{colors.lime-vivid}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  pill-badge:
    backgroundColor: "transparent"
    textColor: "{colors.stone-500}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
    typography: "{typography.label}"
  card-event:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "18px"
    width: "280px"
    height: "360px"
  card-portrait:
    backgroundColor: "{colors.ground-elev}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
  input-text:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ground}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: AltCrew

## 1. Overview

**Creative North Star: "The Captain's Notebook"**

AltCrew looks the way a club captain's training journal feels. Cream paper, rust ink, hi-vis lime and festival flags. Annotated, not designed. Specific, not staged. The page is a notebook left open on the table at 6am, not a marketing brochure.

Two registers cohabit. The **base layer** is earthy and quiet — terracotta rust on warm cream, stone neutrals, hand-mono labels in tracked uppercase. This is where copy lives, where the founder's voice carries, where trust is built. The **event layer** is vivid and loud — carnival flag colors (gold, orange, lime, cyan, hot pink, vivid purple) pulled from the Vizag fitness festival identity. Cards, tags, animated meshes, signal moments. Energy lives here, not throughout.

This system rejects the Indian app aesthetic outright. No CRED gradients, no Cult.fit feature stacks, no Bollywood orange-and-gold maximalism, no glassmorphism, no neon-on-black. It also rejects the Strava clone (data-forward dark + neon graphs) and the generic yoga app (beige + sage + italic serif). Every accent is earned by carrying weight on the page.

**Key Characteristics:**
- Warm cream + terracotta rust + stone neutrals as the resting state
- Hi-vis lime + festival flag accents as event-energy signals
- Geist Sans for everything except mono-label workhorse and Figtree-900 impact moments
- Specific, voiced copy — sentence fragments OK, em dashes prohibited
- Photography over UI. Real training over staged stock.

## 2. Colors

A two-tier palette: warm earthy neutrals carry the resting page; vivid carnival flags signal events and energy. Never mix tiers indiscriminately.

### Primary
- **Terracotta Rust** (`#e5572b`): The signature accent. Used on the primary CTA, hairline underlines, the founder's signature line, error/active states. Deliberate scarcity — present but never dominant.
- **Rust Deep** (`#b8431f`): Hover and pressed state for primary CTA. Never used as a fill on its own.

### Secondary
- **Hi-Vis Lime Vivid** (`#c7ff57`): Crew-side CTA, success markers, the "join" signal. Pulled from a runner's safety vest at dawn. Lime Soft (`#c8e847`) is its quieter sibling for inline accents.
- **Sea Cyan** (`#74f1ff`): Running-club tag color. Used on cards, never as a fill on text-bearing surfaces.

### Tertiary
The festival flag set. Use exactly one per surface, never together as a gradient.
- **Festival Gold** (`#ffd904`): Hiking, daylight tags.
- **Flag Orange** (`#ff4d07`): CrossFit, intensity tags.
- **Hot Pink** (`#ff004d`): Boxing, combat tags.
- **Purple Vivid** (`#cf61ff`): Cycling tags, conic event-bar accent.
- **Purple Soft** (`#a974ff`): Yoga, calm tags.

### Neutral
- **Cream** (`#f2ebdd`): The page paper. Default light surface.
- **Surface** (`#ebe3d2`): Inset cards on the cream paper.
- **Cream Mute** (`#d9d2c4`): Borders, dividers, muted text on cream.
- **Stone 100** (`#f5f2ec`): Lightest tint, cards on cream.
- **Stone 300 / 500 / 700 / 900** (`#c9c2b3` → `#2a2620`): The cool-warm gray ramp. Use the lightest tints sparingly; the mids carry body text and the dark end carries footer copy.
- **Ground** (`#1a1714`): The dark surface. Used for footer, festival bar, dark sections (audience split, world-of-movement). Tinted warm — never neutral charcoal.
- **Ink Black** (`#0b0b0b`): Reserved for the audience-split panel surface and event card backgrounds. The deepest dark in the system.

### Named Rules

**The Two-Tier Rule.** Earthy neutrals carry the page. Festival accents carry the energy. The two tiers do not blur together. Cream + rust on the same surface is correct; cream + hot pink + lime on the same surface is wrong.

**The One-Vest Rule.** Lime is a safety vest, not a wallpaper. Lime fills cover at most one surface in any viewport — the active CTA, a single tag, the conic event bar. If lime appears twice in the same fold, remove one.

**The Anti-Gradient Rule.** No background gradients on text containers. No `background-clip: text`. The conic gradient on the event-bar is allowed because it functions as a flag, not as decoration. The dark-section radial mesh is allowed because it carries spatial meaning, not stylistic gloss.

## 3. Typography

**Display Font:** Geist Sans (with `ui-sans-serif`, `system-ui`, `sans-serif` fallback)
**Body Font:** Geist Sans
**Label/Mono Font:** Geist Mono (with `ui-monospace`, `monospace` fallback)
**Impact Font:** Figtree (used only on the world-of-movement and audience-split sections)

**Character:** Geist is the workhorse — neutral, technical, modern, well-spaced. It carries every standard surface. Figtree-900 enters only for cinematic impact moments (full-bleed dark sections, audience-split headlines) where Geist's reserve would feel timid. Geist Mono in tracked uppercase is the "captain's annotation" voice — used for badges, eyebrow labels, and section markers.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 4rem)`, line-height 0.92, tracking -0.03em): Hero `<h1>` and major section openers.
- **Impact** (900, `clamp(2.5rem, 7vw, 6rem)`, line-height 0.95, Figtree): The world-of-movement and audience-split headlines. Cinematic. Reserve for full-bleed dark sections.
- **Headline** (700, `clamp(1.75rem, 3.75vw, 3rem)`, line-height 0.95): Section H2s.
- **Title** (700, `clamp(1.125rem, 1.75vw, 1.5rem)`, line-height 1.05): Card titles, organizer-pillar titles.
- **Body** (400, 17px, line-height 1.55, tracking -0.005em): Paragraph copy. Cap line length at 65–75ch.
- **Label** (500, 11px Geist Mono, tracking 0.15em / `tracking-widest`, uppercase): Eyebrow labels, badges, breadcrumbs, footer micro-copy.

### Named Rules

**The Mono-Label Rule.** Eyebrow labels, badges, and section markers are always Geist Mono, 11px, uppercase, tracked-widest. Never a sans label. The mono is the captain's hand annotation. Don't replace it with sans for "consistency".

**The No-Em-Dash Rule.** Em dashes are prohibited in copy. Use commas, colons, semicolons, periods, or parentheses. Also no `--`. The exception is structural separators in nav (`·`).

**The 14-Character Headline Rule.** Audience-split and impact headlines wrap at 14 characters max-width. "BUILD YOUR CREW" / "FIND YOUR CREW" hold rhythm. Longer headlines belong in display, not impact.

## 4. Elevation

This system is **almost flat, with one exception**. Surfaces are flat at rest. Hairline 1px borders (`var(--border)`, ~12% alpha of the foreground color) divide content. Depth comes from tonal contrast (cream vs surface vs ground), not shadow.

The exception: event cards in the world-of-movement carousel lift on hover with a single soft shadow plus a faint lime glow, signalling interactivity. The audience-split CTA lifts 2px on hover with a lime-tinted ambient shadow.

### Shadow Vocabulary
- **Card hover** (`box-shadow: rgba(149,157,165,0.2) 0px 8px 24px, 0 0 40px rgba(199,255,87,0.15)`): Event card hover lift. The lime glow is the AltCrew signature.
- **CTA lift** (`box-shadow: 0 12px 30px rgba(199,255,87,0.2)`): Audience-split CTA hover. Lime-tinted, never neutral gray.

### Named Rules

**The Flat-Until-Hover Rule.** Surfaces have no shadow at rest. Shadows appear only as a state response (hover, focus, drag). Never decorative ambient shadows under cards "to lift them off the page".

**The Lime-Tinted Shadow Rule.** When a shadow is required, it carries a lime tint. Pure black shadows look stale and corporate; lime-tinted ambient signals AltCrew's energy without shouting.

## 5. Components

Each component leads with character, then the spec.

### Buttons

Tactile and confident. Always pill-shaped. Always full-cap (rounded-full / 9999px), never softened to a partial radius.

- **Shape:** Pill — `border-radius: 9999px`.
- **Primary** (`button-primary`): Rust (`#e5572b`) background, cream text, padding `14px 20px`. Hover transitions to Rust Deep (`#b8431f`) over 200ms; active scales to 0.98.
- **Crew CTA** (`button-cta-lime`): Lime Vivid (`#c7ff57`) background, ink-black text, padding `16px 32px`, `min-height: 48px`. Hover lifts 2px with lime-tinted shadow.
- **Organizer CTA** (`button-cta-light`): Cream background, ground text, padding `16px 32px`. Lifts identically; shadow keeps the lime tint as a system signature.
- **Ghost** (`button-ghost`): Transparent background, foreground text, 1px border at 40% alpha. Hover: border shifts to Rust, text shifts to Rust.

### Pills / Badges

Captain's-hand markers. Never decorative.

- **Shape:** Pill (`border-radius: 9999px`).
- **Eyebrow Label** (`pill-badge`): Transparent background, 1px border at 30% alpha, stone-500 text. Padding `6px 16px`. Geist Mono 11px tracked-widest uppercase.
- **Tag (event card)**: Solid fill in a tier-3 festival color, ink-black text, padding `6px 14px`, font-weight 700. Tag color always communicates category — lime = HIIT/Calisthenics, cyan = Running, purple-soft = Yoga, flag-orange = CrossFit, gold = Hiking, hot-pink = Boxing, purple-vivid = Cycling.

### Cards

Two distinct card patterns; do not merge them.

- **Event card** (`card-event`, world-of-movement): Fixed `280×360px`, ink-black background, 16px radius, `overflow: hidden`. Photo fills the surface; bottom gradient overlay (`linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, transparent 70%)`) carries the tag pill and title. Hover: scale to 1.04 over 400ms ease, lime-tinted shadow.
- **Portrait card** (`card-portrait`, hero): 18px radius, 1px border at 10% alpha foreground, ground-elev surface. Image fills with `object-fit: cover`. Inset title block in ground at bottom, padding `12px 14px`.

### Inputs

Honest, unstyled-feeling.

- **Style** (`input-text`): Cream background, ground text, 10px radius, 1px border on cream-mute. Padding `12px 16px`.
- **Focus:** 2px outline in Rust at offset 2. Never a glow.

### Navigation

Captain's clipboard.

- **Style:** Top nav uses Geist Sans, 14-15px, link weight 500, hover transitions to Rust over 150ms. No underlines except on focus or hover.
- **Mobile:** Stack into hamburger; the active link gets a 1px hairline under the label.

### Signature Component: The Mesh-Backed Section

The world-of-movement and audience-split sections share a system signature: full-bleed dark surface, 100vh, with a SVG `<filter>` goo-merged radial gradient mesh of 5–6 blobs animating slowly behind the foreground. Mesh colors are constrained to lavender (`178, 146, 231`) and teal (`60, 207, 187`), set against a navy-tinged near-black base. This is AltCrew's "energy is here" signal — used at most twice per page, never on resting copy sections.

## 6. Do's and Don'ts

### Do

- **Do** use Rust (`#e5572b`) as the primary accent. Reserve it. If it appears more than twice in a fold, remove one.
- **Do** use Lime Vivid (`#c7ff57`) only on the crew CTA, success markers, and event tags. One-vest rule.
- **Do** use Geist Mono 11px tracked-widest uppercase for every eyebrow label, badge, and section marker.
- **Do** keep body copy at 17px line-height 1.55, line-length 65–75ch.
- **Do** use full-pill buttons (`border-radius: 9999px`). Never partial radii.
- **Do** use real city names (Vizag, Hyderabad, Bangalore, Mumbai). Specificity is the brand.
- **Do** use candid training photography. Real people, mid-action, off-center compositions.
- **Do** lift event cards on hover with a lime-tinted shadow. The glow is the AltCrew signature.
- **Do** honor `prefers-reduced-motion: reduce` on every animated surface (mesh, marquee, curtain, parallax zoom).
- **Do** keep touch targets at 48×48px minimum.

### Don't

- **Don't** use CRED-style heavy gradients, neon glow, or gradient text (`background-clip: text` is forbidden).
- **Don't** stack five Cult.fit-style festival banners above the fold. One festival bar at a time.
- **Don't** use generic Bollywood orange-and-gold maximalism. Rust is terracotta, not cricket-jersey orange.
- **Don't** use glassmorphism, decorative blurs, or backdrop-filter as a default. Rare and purposeful, or never.
- **Don't** clone Strava (black + neon graph) or Whoop (data-forward dark). AltCrew is human-first, not metric-first.
- **Don't** use stock photography of laughing models in pristine athleisure. Use candid documentary photos of actual training.
- **Don't** write "We're revolutionising your fitness journey" or any startup-speak phrase. The captain doesn't talk like that.
- **Don't** use em dashes (`—`) or double-hyphens (`--`) in copy. Commas, colons, periods, parentheses only.
- **Don't** mix two tier-3 festival colors on the same surface. One per card, one per tag.
- **Don't** drop ambient pure-black shadows under cards. Always lime-tinted, always state-driven.
- **Don't** use side-stripe borders (`border-left: 4px solid X`) as an accent. Full borders, background tints, or nothing.
- **Don't** invent new pill shapes, partial radii, or component variants. The system has 4 button variants and 2 card patterns. That is enough.
