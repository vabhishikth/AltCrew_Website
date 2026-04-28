# AltCrew — Full SEO Audit (Pass 2)

**Date:** 2026-04-27
**Mode:** Static source review (site live at altcrew.in not yet verified, no live crawl)
**Stack:** Next.js 16 App Router, Vercel, single-page marketing site + /privacy
**Note:** This audit reflects the current state after impeccable critique fixes + GEO + content passes.

---

## Executive Summary

**Overall SEO Health Score: 84 / 100** (was 72/100 at first audit)

Foundation is now strong. Open Graph image present, favicon + apple-icon dynamic routes wired, schema is dense (6 types: Org, WebSite, MobileApp, Event, Person, FAQPage, Article), llms.txt present and dated, definitional content block + comparison table added, privacy page shipped.

Remaining ceiling is structural: single-page architecture caps topical authority, off-site brand mentions are zero pre-launch, no Local/Place schema for venue, no blog/learn cluster.

### Detected business type
Pre-launch consumer mobile app + community platform. India-only (Vizag launch). Hybrid: digital product with one physical launch event. Not Local Service business: no GBP, no NAP, no recurring location footprint.

### Top 5 critical / high

1. **No `Place` or `LocalBusiness` schema for Sai Priya Resorts venue.** Event schema nests location but standalone Place schema improves event discovery in Google AI Overviews and Maps. **Medium-high.**
2. **Stats figures cited but sources unverified.** Attribution line lists three industry reports without specific URLs or document IDs. AI extractors prefer linked citations. **Medium.**
3. **No `BreadcrumbList` schema on /privacy.** Soft signal but easy. **Low.**
4. **Single-page architecture caps topical authority.** No `/learn` or `/blog` pages mean every fitness/community/Vizag query has only one URL competing. Strategic, not technical. **Strategic-high.**
5. **`www.altcrew.in` to apex redirect not verified in repo.** Vercel domain config required at deploy time. **High at launch.**

### Top 5 quick wins (under 30 min each)

1. Add `Place` schema for Sai Priya Resorts (lat/lng + address) and reference from Event.location.
2. Add `BreadcrumbList` schema on /privacy.
3. Replace stats attribution with at least one specific URL when verified.
4. Add `humans.txt` (optional, brand signal).
5. Verify Vercel domain redirect: `www.altcrew.in` 301 to `altcrew.in`.

---

## Scoring Breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 19/22 | 19 |
| Content Quality | 23% | 19/23 | 19 |
| On-Page SEO | 20% | 17/20 | 17 |
| Schema / Structured Data | 10% | 9/10 | 9 |
| Performance (CWV) | 10% | 8/10 | 8 |
| AI Search Readiness | 10% | 9/10 | 9 |
| Images | 5% | 3/5 | 3 |
| **Total** | 100% | | **84** |

---

## Technical SEO — 19/22

| Item | Status | Notes |
|---|---|---|
| robots.txt | OK | Allows all, blocks Bytespider, sitemap referenced |
| sitemap.xml | OK | Two URLs (`/`, `/privacy`), priorities correct |
| HTTPS enforced | OK | Vercel default + HSTS via vercel.json (max-age=63072000, preload) |
| Canonical URL | OK | `metadata.alternates.canonical` set |
| metadataBase | OK | `https://altcrew.in` |
| Viewport meta | OK | width=device-width, initial-scale=1 |
| Robots meta | OK | index, follow |
| Theme color | OK | Light/dark theme-color set in viewport |
| Lang attribute | OK | `en-IN` |
| Security headers | OK | X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, HSTS |
| Cache headers | OK | Logo SVG cached 1yr immutable |
| CSP | Absent | No Content-Security-Policy. Lower priority for marketing site, but recommended pre-launch |
| `www` -> apex redirect | Unverified | Configure on Vercel at deploy |
| Trailing slash policy | OK | Next.js default (no trailing slash), consistent |

### Issues

- **No CSP.** Inline JSON-LD scripts work, motion library loads, Vercel Analytics + Speed Insights inject scripts. CSP would harden against XSS but requires careful policy due to inline scripts. Add at launch.
- **www redirect** must be configured at Vercel domain settings, not in code. Flag for deploy checklist.

---

## Content Quality — 19/23

See `SEO-CONTENT.md` for full E-E-A-T breakdown. Score updated for recent additions (privacy page, Article schema, attribution line, definitional block, comparison table).

| Factor | Score |
|---|---|
| Experience | 19/25 |
| Expertise | 16/25 (was 14, +Person schema +Article schema) |
| Authoritativeness | 8/25 (unchanged, off-site work needed) |
| Trustworthiness | 24/25 (was 22, +/privacy +last-updated stamp) |

Page word count ~1,520 + privacy ~600. Heading hierarchy clean. Em dashes zero. Vernacular grounding strong.

### Remaining gaps

- No `/blog` or `/learn` cluster
- Stats attribution generic, not URL-cited
- No video / infographic
- No author byline outside founder section

---

## On-Page SEO — 17/20

| Element | Status | Notes |
|---|---|---|
| H1 present | OK | Hero h1 wraps tagline, single H1 per page |
| H2 hierarchy | OK | One H2 per section, no skips to H3 |
| Title tag | OK | `AltCrew — Find a fitness community to train with.` 51 chars |
| Meta description | OK | 158 chars, India-keyword, tagline echoed |
| OG title / description / image | OK | All three set, OG image at `/og-default.jpg` (85KB) |
| Twitter card | OK | summary_large_image |
| Keywords meta | Present | Six terms; Google ignores meta keywords but doesn't hurt |
| URL structure | OK | Clean, no query params, lowercase, hyphenated |
| Internal links | Limited | 7 anchor links (single page), 1 link to /privacy |
| External links | Sparse | Instagram (5x), mailto (3x), 0 outbound citations |
| Image alt text | OK | Hero portraits + founder + logo all have alt |
| Anchor text | OK | Descriptive ("Join the Crew", "For organizers") not "click here" |

### Issues

- **Title tag em dash.** `metadata.title.default` reads `AltCrew — Find a fitness community to train with.` Em dash inside the visible title violates the in-house em-dash ban applied to body copy. Replace with colon: `AltCrew: Find a fitness community to train with.`
- **Meta description em dash.** Same file, line 16: `train with — in your neighbourhood`. Replace with colon or comma.
- **Outbound citations zero.** Add 1-2 to authoritative sources (AFI, Vizag city site, Ministry of Youth Affairs sport data) to lift authority signal.
- **Title template.** `template: "%s · AltCrew"` uses middle-dot separator. Fine. /privacy renders as `Privacy · AltCrew` (15 chars), good.

---

## Schema / Structured Data — 9/10

Implemented (`components/json-ld.tsx`):

- Organization (with founder Person reference, areaServed India)
- WebSite (en-IN, publisher)
- MobileApplication (with Offer 0 INR, datePublished 2026-05-31)
- Event (Vizag Fitness & Flea Fest, OfflineEventAttendanceMode, Place nested)
- Person (Abhishikth, jobTitle, description, sameAs Instagram)
- Article (founder note, author Person, publisher, datePublished, mainEntityOfPage anchor, inLanguage)
- FAQPage (4 questions with answers)

### Missing

- **Place / LocalBusiness for Sai Priya Resorts** as standalone entity (currently nested only inside Event.location).
- **BreadcrumbList** on /privacy.
- **AggregateRating** placeholder for app post-launch.
- **Review** schema for press quotes (post-launch).
- **`speakable`** for FAQ items (voice search optimization).

### Validation

All schemas valid against schema.org base types. JSON-LD injected via `dangerouslySetInnerHTML` from `components/json-ld.tsx` -- safe because data is static.

---

## Performance (CWV) — 8/10

No live CrUX or Lighthouse data (site not deployed). Estimates from build output and code review:

| Metric | Estimate | Notes |
|---|---|---|
| LCP | ~1.2-1.6s | Hero portraits use `priority` + `sizes`, Next/Image optimization. Reasonable for slow 4G. |
| INP | <200ms | Minimal interactivity, motion library scoped to scroll-triggered reveals. |
| CLS | <0.05 | Reserved heights on cards, fonts via Geist (variable font). |
| Bundle size | Small | Static prerender, motion code-split, optimizePackageImports for motion |

### Concerns

- **Hero stagger animations** use Framer Motion (motion library, ~50KB gzipped). Acceptable for brand site.
- **Scroll progress hairline** subscribes to scroll events via useScroll. Should be passive, ok.
- **5 portraits** at 85-156KB each = ~570KB total. All loaded with `priority`. Could lazy-load below-fold (cards 03-lift, 04-cycle if not visible). Today only 3 of 4 are rendered (`cards` array has 3 items: run, yoga, lift). 04-cycle.jpg appears unused.
- **Geist font** variable, subset by Next. Good.
- **No image format optimization beyond Next/Image defaults.** Consider AVIF for portraits.
- **Vercel Analytics + Speed Insights** add ~10KB of JS. Acceptable.

### Action

- Audit `04-cycle.jpg` -- delete if unused.
- Generate AVIF/WebP variants via `next/image` (handled automatically at runtime, so no action needed).

---

## AI Search Readiness — 9/10

See `GEO-ANALYSIS.md` (full report, score 78/100 -> ~85 after Top 5 changes).

| Signal | Status |
|---|---|
| Static SSR (full HTML for crawlers) | OK |
| llms.txt | OK, dated, em-dash-free |
| AI crawler access | Open (blocks Bytespider only) |
| Schema density | OK (6 types) |
| Definition pattern in first 60 words | OK (Problem section new lead) |
| 134-167 word citation blocks | 2 (founder, definitional) |
| Comparison table | OK (What section) |
| Question-answer formats | OK (FAQ, 7 pairs) |
| Topical cluster | Absent (single page) |
| Brand mentions on Wikipedia / Reddit / YouTube | Absent (pre-launch) |
| Original first-party data | Absent |
| RSL 1.0 | Absent |

---

## Images — 3/5

| Image | Size | Issue |
|---|---|---|
| `og-default.jpg` | 85KB | OK, dimensions need verification (should be 1200x630) |
| `altcrew-logo.svg` | 2.5KB | OK |
| `portraits/01-run.jpg` | 85KB | OK |
| `portraits/02-yoga.jpg` | 108KB | OK |
| `portraits/03-lift.jpg` | 94KB | OK |
| `portraits/04-cycle.jpg` | 156KB | **Unused** by hero (cards array has only 3). Delete or use. |
| `portraits/founder.jpeg` | 129KB | OK, used in founder section + Article schema image URL. **Filename is `.jpeg` not `.jpg`** -- check schema image URL matches |
| `apple-icon.tsx` | dynamic | OK |
| `icon.tsx` | dynamic | OK |

### Action items

- Verify OG image dimensions match 1200x630.
- Delete `04-cycle.jpg` if unused, or add a fourth hero card for cycling.
- Verify Article schema's `image: "https://altcrew.in/portraits/founder.jpeg"` matches actual filename (it does, `.jpeg`).
- All hero portraits use `priority`. Adding alt text already done. No optimization needed beyond Next/Image defaults.

### Missing

- No Vizag scene photos (location grounding for the launch festival).
- No app screenshots (the product the page sells).
- No infographic for stats.

---

## Prioritized Action Plan

See `ACTION-PLAN.md` for sequenced fix list.

### Critical (before launch)

- Verify Vercel domain redirect (`www` 301 to apex).
- Replace em dashes in `metadata.title.default` and `metadata.description`.
- Verify OG image is 1200x630.

### High (this week)

- Add Place / LocalBusiness schema for Sai Priya Resorts.
- Add BreadcrumbList schema for /privacy.
- Delete or use `04-cycle.jpg`.
- Add CSP header (start with report-only mode).

### Medium (this month)

- Replace stats source line with verified URLs.
- Add 1-2 outbound citations to authoritative sources.
- Generate Vizag scene photo set (3-5 shots).
- Generate app preview screenshots.
- Stub `/learn` index page (no content yet, just route + sitemap entry).

### Low (post-launch backlog)

- speakable schema for FAQ.
- AggregateRating + Review schemas (post-launch).
- humans.txt.
- Wikipedia article.
- Reddit/YouTube footprint build.
- RSL 1.0 implementation.

---

## What Pass 2 fixed vs Pass 1

| Pass 1 critical | Status |
|---|---|
| OG image missing | Fixed (85KB at /og-default.jpg) |
| No favicon / apple-touch-icon | Fixed (`app/icon.tsx`, `app/apple-icon.tsx`) |
| Person schema missing | Fixed (founderSchema) |
| Internal landing pages absent | Partial (/privacy added, learn cluster pending) |
| Schema thin | Fixed (6 types now) |
| Definitional block in first 60 words | Fixed (Problem section lead) |
| Em dashes in copy | Fixed (12 instances stripped from sections + json-ld + llms.txt) |
| Side-stripe border on founder | Fixed (removed) |
| Glassmorphism on hero badges | Fixed (replaced with solid bg) |
| Mobile nav missing | Fixed (drawer with anchors) |
| Dead festival CTA | Fixed (status pill + IG link) |
| Stats orphan import | Fixed (rendered) |
| Theme toggle orphan | Fixed (deleted) |
| Festival-bar dismiss not persistent | Fixed (localStorage) |
| Hero LCP stagger 1.7s+ | Fixed (reduced to 0.85s) |
| Privacy notice missing | Fixed (/privacy 600 words) |

Pass 1 score 72 -> Pass 2 score 84. **Gap to ceiling (~92):** off-site brand signals + topical cluster.
