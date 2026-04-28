# AltCrew — Technical SEO Audit

**Date:** 2026-04-27
**Mode:** Static repo + config review (pre-deploy)
**Stack:** Next.js 16 App Router, RSC, Vercel deploy target

---

## Technical Score: 78 / 100

### Category Breakdown

| Category | Status | Score |
|----------|--------|-------|
| Crawlability | warn | 75/100 |
| Indexability | pass | 95/100 |
| Security | warn | 78/100 |
| URL Structure | pass | 100/100 |
| Mobile | pass | 95/100 |
| Core Web Vitals | warn | 72/100 |
| Structured Data | pass | 90/100 |
| JS Rendering | pass | 92/100 |
| IndexNow | fail | 0/100 |

---

## 1. Crawlability — 75/100 ⚠️

### Current

```
User-agent: *
Allow: /

Sitemap: https://altcrew.in/sitemap.xml
```

### Findings

- ✅ `robots.txt` valid, references sitemap.
- ✅ Sitemap exists at `app/sitemap.ts` (single homepage entry — appropriate for single-page site).
- ⚠️ **No AI crawler policy.** Currently all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Bytespider, Google-Extended) are allowed. Default behavior, but a deliberate decision should be made.
- ✅ No JS-blocked content. Headlines and copy server-render via Next.js RSC.
- ✅ Single-page site — every important content is one click from root.

### Recommendation

For an Indian fitness app whose discovery will lean on AI search ("apps to find run clubs in Vizag" → ChatGPT/Perplexity), **allow all AI crawlers**. Block only Bytespider (ByteDance, model-training only, low ROI). Update `robots.txt`:

```
User-agent: Bytespider
Disallow: /

User-agent: *
Allow: /

Sitemap: https://altcrew.in/sitemap.xml
```

---

## 2. Indexability — 95/100 ✅

- ✅ Canonical URL set in `metadata.alternates.canonical = https://altcrew.in`.
- ✅ `metadataBase` correctly set.
- ✅ `robots: { index: true, follow: true }` in metadata.
- ✅ No conflicting noindex tags.
- ✅ No duplicate content risk (single page, no parameter URLs, no `/index` vs `/` issue thanks to Next default routing).
- ⚠️ Verify post-deploy that `https://www.altcrew.in` 301-redirects to apex `https://altcrew.in`. Configure in Vercel → Domains.
- ⚠️ Trailing slash policy: Next default = no trailing slash. Be consistent. No action needed unless `trailingSlash: true` is set in `next.config.ts` (it isn't).

---

## 3. Security — 78/100 ⚠️

### Current `vercel.json` headers

- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- ✅ Logo cached with `immutable` for 1 year.

### Missing

- ⚠️ **HSTS** (`Strict-Transport-Security`). Vercel applies HSTS automatically on apex domains for production deployments — verify post-deploy with `curl -I https://altcrew.in`. If absent, add to `vercel.json`:
  ```json
  { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
  ```
- ⚠️ **No CSP**. Lower priority for marketing site (no auth, no PII collection except waitlist email going through Loops). Add a basic CSP once OG image and external scripts (Vercel Analytics, Speed Insights) are in place. Strict CSP needs nonces or hashes — non-trivial with Framer Motion.

### Recommendation

1. Confirm HSTS is live after first production deploy.
2. Submit to HSTS preload list once headers are stable: https://hstspreload.org

---

## 4. URL Structure — 100/100 ✅

- Single page: `/`. Clean. No params, no junk.
- Anchor links (`#problem`, `#features`, `#waitlist`) — semantic, keyboard-accessible.
- No redirect chains.
- All URL lengths <30 chars.

---

## 5. Mobile — 95/100 ✅

- ✅ Viewport meta correct: `width=device-width, initialScale=1`.
- ✅ Mobile-first layout (`grid md:grid-cols-12` pattern, content stacks at <768px).
- ✅ Tailwind base font 16px.
- ⚠️ Touch target audit: hero CTA buttons are now `px-5 py-3` (post-recent-edit). At base 14-16px text + py-3 = ~44px. Just under 48×48 minimum. **Bump to `py-3.5` (28px) on mobile, keep py-3 desktop**, or accept 44px (Apple HIG OK at 44, Google MD recommends 48).
- ✅ Mobile-first indexing: site is fully responsive, will pass.

### Action

```tsx
// hero.tsx CTAs
className="... px-5 py-3.5 md:py-3 ..."
```

---

## 6. Core Web Vitals — 72/100 ⚠️ (estimated, no field data)

### Lab-estimate review

- ✅ **LCP optimization.** Hero portraits are now compressed to <160 KB each. First two have `priority`. Geist font via `next/font` (auto-preloaded, no FOIT).
- ⚠️ **LCP candidate is hero H1 text, not image.** Server-rendered. Should hit <2.5s easily on Vercel edge.
- ⚠️ **CLS risk.** Framer Motion entrance animations on every section use `initial={{ opacity: 0, y: 24 }}`. Y-translate + opacity = potential CLS if elements aren't sized before animation. Verify with Lighthouse.
- ⚠️ **INP risk.** 10 client-side sections each with motion components. Bundle size matters. Run `npm run build` and inspect `_next/static/chunks` size. Above ~150 KB JS for first load is a yellow flag.
- ✅ `experimental.optimizePackageImports: ["motion"]` — good, tree-shakes motion correctly.

### Action

1. Run Lighthouse on deployed URL post-launch.
2. Consider replacing `motion/react` with CSS `@keyframes` for the simpler entrance fades — saves ~30 KB JS.
3. Add `loading="lazy"` to below-fold images (Next handles this automatically when not `priority`).

---

## 7. Structured Data — 90/100 ✅

- ✅ JSON-LD (preferred format) used throughout.
- ✅ 5 schemas: Organization, WebSite, MobileApplication, Event, FAQPage.
- ✅ All embedded in initial HTML via React (`<script>` tag in server render). Not JS-injected — Google reads on first crawl.
- Gaps: see SEO-AUDIT.md (Person, SoftwareApplication, LocalBusiness recommended).

---

## 8. JavaScript Rendering — 92/100 ✅

### Critical SEO content rendered server-side

Verified by inspecting source files:

- ✅ `<title>`, `<meta description>`, canonical, OG tags — set in `app/layout.tsx` `metadata` export → emitted in initial HTML.
- ✅ JSON-LD schemas — rendered via React `<script>` in `app/page.tsx` → in initial HTML.
- ✅ H1, H2, all body copy — Next.js renders client components on the server during SSR, then hydrates. **Content is in initial HTML even though sections are `"use client"`.**
- ✅ Robots meta in HTML response (not JS-injected).

### December 2025 Google guidance compliance

| Rule | Status |
|------|--------|
| Canonical identical in HTML and after JS hydration | ✅ — set once, server-side |
| robots meta in initial HTML | ✅ |
| Non-200 pages have correct status code | ✅ — Next handles 404/500 |
| Structured data in initial HTML | ✅ — not JS-injected |

### Verify post-deploy

```bash
curl -sL https://altcrew.in | grep -E "<title>|<meta name=\"description\"|application/ld\\+json" | head
```

All three should return content.

---

## 9. IndexNow — 0/100 ❌

Not implemented. **Recommend skipping for launch.** IndexNow benefits sites with frequent content updates (news, e-commerce). Static landing page doesn't need it. Revisit when blog launches.

---

## Critical Issues — fix before launch

1. **Confirm `www` → apex 301 in Vercel domain config.** Verify after first deploy.
2. **Verify HSTS header is live post-deploy.** If not, add to `vercel.json`.

## High Priority — within 1 week of launch

3. Update `robots.txt` with selective AI crawler rules (block Bytespider, allow others).
4. Bump mobile CTA touch targets to 48px via `py-3.5 md:py-3`.
5. Run Lighthouse on deployed URL. Target LCP <2.5s, INP <200ms, CLS <0.1.

## Medium Priority — within 1 month

6. Add `<link rel="manifest">` + `manifest.webmanifest` for PWA install signals.
7. Consider replacing Framer Motion entrance fades with CSS for sections that don't need interaction. Saves bundle.
8. Submit to HSTS preload once stable.

## Low Priority — backlog

9. CSP header (strict mode requires nonces with motion library).
10. IndexNow when blog ships.
11. `humans.txt`.

---

## Quick fixes I can apply now (one command each)

- `robots.txt` AI crawler rules
- `vercel.json` HSTS header
- Mobile touch target bump

Tell me which to apply.
