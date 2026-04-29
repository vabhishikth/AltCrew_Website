# AltCrew Content Quality & E-E-A-T Analysis

Generated: 2026-04-27. Scope: single-page marketing site at `app/page.tsx`.

## Content Quality Score: 71/100

## E-E-A-T Breakdown

| Factor | Score | Key signals |
|---|---|---|
| Experience | 19/25 | Founder note documents real first-person fitness journey (lost 35 kg in a year, named coach, named methods). Copy specificity (±15 sec/km pace, 600 km shoe replacement, "seven WhatsApp groups"). No before/after photos or process artifacts beyond portrait. No Vizag scene photos that prove location grounding. |
| Expertise | 14/25 | Founder Person schema mounted with description, jobTitle, address. No author bio elsewhere on page. No technical depth on running/training methodology beyond pace-matching. No claimed certifications (none likely needed; not a medical site). Domain authority for fitness community building unproven pre-launch. |
| Authoritativeness | 8/25 | Zero external citations or backlinks at this stage. No press coverage. No Wikipedia / Reddit / YouTube footprint. Stats cited in Stats section ("2.5M registered runners", "1,600+ events", "<1% gym penetration") have no source attribution, weakening rather than strengthening authority. |
| Trustworthiness | 22/25 | HTTPS via altcrew.in, contact email, Instagram link, founder name + photo + location, festival venue + date concrete, schema rich (Org + Event + App + FAQPage + Person), privacy line beside email capture, "no spam" frequency commitment. Missing: dedicated `/privacy` and `/terms` pages, no last-updated date visible on page. |

**Total E-E-A-T: 63/100.** Trustworthiness carries the score; authoritativeness is the load-bearing weakness and is structurally hard to fix pre-launch.

## Content Metrics

### Word count

Page total: ~1,520 words across all sections. Homepage minimum 500 cleared by 3x.

| Section | Approx words | Notes |
|---|---|---|
| Hero | 55 | Tight, brand-voice. |
| Problem (incl. new definitional block) | 200 | Definitional block now ~140 words, fits AI citation sweet spot (134-167). |
| Founder | 140 | Already in citation sweet spot. Strongest single asset. |
| What (incl. comparison table) | 230 | Pillars + table. Table is high-citation format. |
| How | 90 | Three step bodies, terse. |
| Features | 280 | Four feature blocks, ~70 each. |
| Stats | 80 | Three figures + framing. |
| Organizers | 80 | Pitch + capability list + CTA. |
| Festival | 100 | Meta dl + descriptive paragraph. |
| FAQ | 350 | Seven Q&A. Highest depth section. |
| Waitlist | 90 | Form copy + privacy + CTA. |

### Readability

- Average sentence length: 12-16 words. Tight, conversational.
- Paragraph length: 2-3 sentences (founder hits 4). Within target.
- Voice: active throughout. Imperatives in CTAs ("Find my Crew", "Drop your pin").
- Vernacular: India-specific (Vizag, kabaddi, padel, WhatsApp, rooftop yoga). Adds authenticity.

### Heading hierarchy

H1 (hero) -> H2 per section -> H3 in pillar cards / FAQ items. Clean, no skips.

H2s are brand-voice declarative ("Three jobs. One app.", "Three taps to your first Saturday."), not question-form. Trade-off accepted: brand voice over query-pattern matching, since the founder note + FAQ + new definitional block already cover question-form citations.

### Multimedia

- 4 portraits in hero cards (running, lifting, yoga + wide endurance)
- 1 founder portrait
- 1 OG image (`og-default.jpg`)
- Logo SVG
- No video, no infographic, no charts

Multi-modal score: thin. Text-heavy with portraits as decoration. Stats section is pure typography (no visualization of the numbers).

### Internal linking

Single-page architecture: anchor links only (`#what`, `#features`, `#organizers`, `#festival`, `#faq`, `#waitlist`, `#stats`). All present in nav + drawer + footer + hero + waitlist confirmation. No orphan sections.

No `/learn` or `/blog` exists yet. No internal links to deeper pages because there are no deeper pages.

### External linking

Two external links total: `instagram.com/altcrewapp` (5 instances), `mailto:hello@altcrew.in` (3 instances). No citations to research, no links to running/fitness authorities, no statistics sources.

This hurts authoritativeness. The Stats section especially: claims "2.5M registered runners in India" with no link to source (likely Athletics Federation of India or a 2023 industry report).

## AI Citation Readiness: 78/100

| Signal | Status |
|---|---|
| Definition pattern in first 60 words of HTML | Present (Problem section new lead block) |
| Question-answer formats | Present (FAQ section, 7 Q&A pairs) |
| Step-by-step instructions | Present (How section, 3 steps) |
| Comparison tables | Present (What section, AltCrew vs Strava vs WhatsApp) |
| First-party data / original research | Absent. No proprietary survey, no internal usage data (pre-launch) |
| Schema markup | Strong. Org + WebSite + App + Event + FAQPage + Person all present |
| Topical authority via cluster | Absent. Single page, no cluster. |
| Entity clarity | Present. Organization + Person + Event entities all schema-typed. |
| llms.txt | Present, last-updated dated, clean (em dashes removed) |
| Quotable 134-167 word blocks | 2 present (founder note ~135w, definitional block ~140w). FAQ answers below 100w. |
| Source citations within content | Absent. Stats lack attribution. |

## Issues Found

### High priority

1. **Stats section citations missing.** "2.5M registered runners", "1,600+ events", "<1% gym penetration" need a source line. Use `<cite>` element or footnote linking to AFI / Times of India / IHRSA report. Without it, the section reads like marketing fluff and AI extractors will deprioritize.

2. **No `/privacy` or `/terms` page.** Email capture without linked privacy policy is DPDP-exposed in India. The inline mailto note added in the polish step covers minimum, but a real `/privacy` static page (200-400 words) closes the gap and links from waitlist.

3. **No `/blog` or `/learn` content.** Topical authority in the AI era is built through cluster content, not landing pages. One page caps citation surface area. Pre-launch is the right time to seed 3-5 evergreen pieces: "How to start running in Vizag", "Beginner-friendly fitness communities in India", "What to look for in a running crew", "Strava vs AltCrew", "Founder origin: 35 kg in a year." Cross-links back to `/`.

### Medium priority

4. **No last-updated date on page.** AI freshness signals weaken without it. Add `<time dateTime="2026-04-27">Last updated April 27, 2026</time>` in footer.

5. **Founder note has no Article schema.** Schema-typing the `<article>` as `BlogPosting` or `Article` with `author: Person` makes it formally citable as a standalone piece by AI. Currently it's a `<motion.article>` element with no JSON-LD wrapper.

6. **No video or infographic.** YouTube embed of a 60-second founder explainer or a Vizag scene B-roll would boost both multi-modal score and the YouTube-mention signal flagged in the GEO analysis.

### Low priority

7. **External link count low.** Add 1-2 outbound citations to authoritative sources (Vizag tourism, Indian fitness coverage in The Hindu, Ministry of Youth Affairs sports data). Hurts nothing, helps authority signal.

8. **Hero H1 word count under target.** "Strava tells you what you did. AltCrew tells you who you can do it with." is 12 words. Hero context (timeline tag + paragraph + CTAs + cards) compensates, but the H1 alone is below the typical 50-100 character target. No fix recommended; brand voice wins here.

## Recommendations

### Quick wins (this week)

- Add source citations under Stats figures (link to AFI or report).
- Stub `/privacy` page (300 words: data collected, retention, DPDP rights, contact). Link from waitlist privacy line.
- Add `<time>` last-updated stamp in footer.
- Add `Article` JSON-LD schema for founder note.

### Medium effort (pre-launch)

- Seed 3-5 evergreen blog posts at `/learn/[slug]`. Same brand-voice copy. 600-1000 words each. Internal-link back to `/#waitlist`.
- Embed 60-second founder explainer video (YouTube hosted, page-embedded).
- Stats section: visualize one figure (e.g., bar chart "registered runners in India 2014 vs 2024" or "gym penetration: India vs USA vs Brazil"). Adds multi-modal score + makes the data feel earned.

### High impact (post-launch)

- Press cycle: aim for The Hindu Vizag, YourStory, Inc42 coverage. Each becomes a `sameAs` or `citation` schema attachment.
- Wikipedia article (post-launch, requires notability threshold met).
- Reddit AMA in r/india or r/IndianFitness.
- Schema enrichment as social proof accumulates: AggregateRating once app has reviews, Review schema for press quotes.

## Strong points to preserve

- **Founder note as written.** 135 words, specific, first-person, demonstrably real Experience signal. Do not rewrite for SEO purposes.
- **Copy specificity throughout.** The "±15 seconds per kilometre", "600 km", "seven WhatsApp groups" pattern is precisely what raters mean by Experience. Maintain in any future copy.
- **Schema density.** 6 JSON-LD types on a single landing page is above industry norm. Keep it.
- **Em-dash-free copy.** Already a differentiator from AI-generated marketing pages. Maintain in future content.
- **Vernacular.** "Vizag", "kabaddi", "padel", "rooftop yoga" cannot be AI-template-generated. They prove the writer knows the audience. Keep.
