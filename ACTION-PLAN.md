# AltCrew SEO Action Plan

Generated: 2026-04-27. Sequenced by priority + dependency. Cross-references `FULL-AUDIT-REPORT.md`.

## Critical (block launch)

| # | Task | Effort | Impact | Files |
|---|---|---|---|---|
| C1 | Verify Vercel domain redirect: `www.altcrew.in` 301 to `altcrew.in` | 5 min | Prevents duplicate-content split | Vercel domain settings (no code) |
| C2 | Replace em dash in `metadata.title.default` with colon | 2 min | Brand consistency, AI cleanliness | `app/layout.tsx:12` |
| C3 | Replace em dash in `metadata.description` | 2 min | Same | `app/layout.tsx:16` |
| C4 | Verify OG image is 1200x630 px JPEG | 5 min | Social-share preview correctness | `public/og-default.jpg` |

## High (within 1 week)

| # | Task | Effort | Impact | Files |
|---|---|---|---|---|
| H1 | Add `Place`/`LocalBusiness` schema for Sai Priya Resorts (address + lat/lng) | 15 min | Google AI Overviews venue-discovery + Maps | `components/json-ld.tsx`, `app/page.tsx` |
| H2 | Add `BreadcrumbList` schema on `/privacy` | 10 min | Privacy crumb in SERPs | `app/privacy/page.tsx` |
| H3 | Add CSP header in report-only mode | 30 min | XSS hardening pre-launch | `vercel.json` |
| H4 | Audit `04-cycle.jpg`. Delete if unused, or add cycling card to hero | 10 min | Bandwidth + asset hygiene | `public/portraits/04-cycle.jpg`, `components/hero.tsx` |
| H5 | Add 1-2 outbound citations to authoritative sources (AFI, Ministry of Youth Affairs sport data) | 20 min | E-E-A-T authoritativeness signal | `components/sections/stats.tsx`, `components/sections/problem.tsx` |

## Medium (within 1 month)

| # | Task | Effort | Impact | Files |
|---|---|---|---|---|
| M1 | Replace stats source line with verified URLs | 30 min | E-E-A-T + AI citation quality | `components/sections/stats.tsx` |
| M2 | Stub `/learn` index page (route + sitemap entry, no content yet) | 15 min | Reserves cluster URL pattern for future content | `app/learn/page.tsx`, `app/sitemap.ts` |
| M3 | Add Vizag scene photo set (3-5 shots) | 2 hr (shoot + compress) | Multi-modal score + location grounding | `public/scenes/*.jpg`, used in Problem or Stats |
| M4 | Add 3 app preview screenshots | 1 hr (mockup or real screenshots) | Multi-modal + sells the product | `public/app/*.png` |
| M5 | Add `speakable` schema to FAQ for voice search | 15 min | Voice assistant pickups | `components/json-ld.tsx` |
| M6 | Founder LinkedIn page + add to Person schema `sameAs` | 30 min | Entity grounding | `components/json-ld.tsx` |
| M7 | First 3 evergreen `/learn` posts (60-90 min each, 800-1000 words) | 5 hr | Topical authority cluster | `app/learn/[slug]/page.tsx` |
| M8 | Add `humans.txt` | 5 min | Brand signal, optional | `public/humans.txt` |

## Low (backlog)

| # | Task | Effort | Impact | Files |
|---|---|---|---|---|
| L1 | RSL 1.0 implementation (`/rsl.txt` or HTTP header) | 30 min | AI licensing transparency, emerging standard | `public/rsl.txt`, `vercel.json` |
| L2 | AggregateRating + Review schema once app has reviews | 1 hr | Post-launch trust signal | `components/json-ld.tsx` |
| L3 | Add publish date to llms.txt monthly | 1 min/mo | Freshness signal | `public/llms.txt` |
| L4 | IndexNow webhook for Bing/Yandex on content changes | 1 hr | Faster Bing index | `app/api/indexnow/route.ts` |

## Off-site (post-launch sequence)

| # | Task | Effort | Impact |
|---|---|---|---|
| O1 | Press cycle: pitch The Hindu Vizag, YourStory, Inc42 | 8-16 hr | Authoritativeness |
| O2 | Wikipedia article (requires notability threshold post-launch) | 4-8 hr | ChatGPT primary citation source |
| O3 | YouTube channel: founder origin video, "What is AltCrew" 60-sec, Vizag scene | 16-24 hr | Strongest single AI signal (Ahrefs 0.737 correlation) |
| O4 | Reddit AMA in r/india, r/IndianFitness, r/Vizag | 4 hr | Perplexity citation source (46.7% from Reddit) |
| O5 | LinkedIn company page + founder profile linkage | 2 hr | Entity sameAs grounding |

## Sequencing notes

- **C1-C4 are launch blockers.** Do not deploy without them.
- **H-tier work** unblocks the highest-impact remaining gaps.
- **M2 + M7** together build topical authority. M2 alone reserves the URL pattern; M7 fills it. If you can only do one in the first month, do M7 because the cluster is what AI engines reward.
- **Off-site tier** drives the 84 -> 92 ceiling lift, but is gated on launch + press existence.

## Success metrics

Re-run `/seo-audit` 30 days post-launch. Expected score 88-92/100 if H + M tiers complete and any off-site work has begun.

Track separately:
- Google Search Console impressions for "altcrew", "fitness community india", "vizag fitness fest"
- AI citation appearances (manual queries: "What is AltCrew?" in ChatGPT, Perplexity, Google AI Mode)
- Direct traffic share (proxy for brand searches)
