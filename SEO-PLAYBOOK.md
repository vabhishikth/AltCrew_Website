# AltCrew SEO + Content Playbook (Internal)

Generated: 2026-04-27. Internal-only document. Translates a peer two-sided fitness-marketplace's site structure and SEO patterns into AltCrew-native pages. **No mention of the peer brand on the AltCrew site or in user-facing content.**

## Structural pattern decoded

The peer's public site is small and focused. Six URLs total in their public sitemap. The structure splits cleanly into:

1. **Marketplace front** (homepage + discovery)
2. **Two onboarding paths** (one for individual event hosts, one for recurring-community hosts)
3. **App download landing**
4. **Content layer** (blog + an education/help subdomain)
5. **Trust + policy pages** (privacy, terms, affiliates, careers)

That is the entire architecture. No "X vs Y" pages, no big roundups, no programmatic city pages. The SEO comes from **discovery filters + content marketing + footer link density + brand mentions**.

## What we steal (structurally, not literally)

| Pattern observed | AltCrew translation |
|---|---|
| Single emotional H1 ("[verb] What [noun]") | Keep the existing "Find your Crew" + "AltCrew tells you who you can do it with" pair. Already on-brand. Do not chase their headline. |
| Two-sided CTA above fold (Explore + Host) | Already in hero ("Find my Crew" + "For organizers"). Strengthen by making both equally prominent in the mobile drawer + footer. |
| Dedicated `/discover` route with location + date + type filters | Build `/find` (or `/crews`). Pre-launch stub: "Crews go live May 31, 2026" + waitlist + city-input. Becomes the primary SEO surface once listings exist. |
| Dedicated `/create/event` for one-off hosts and `/create/community` for recurring | Build `/organizers` as the community/club host page (recurring) and `/organizers/host-an-event` as the single-event host page. Both extracted from the current Organizers section on `/`. |
| Dedicated `/download` route (one of their six total URLs) | Build `/download` with iOS + Android badges + QR. Pre-launch stub: "App drops May 31, 2026" + waitlist below. |
| `/blog` as content marketing surface | Build `/learn` (or `/blog`). Seed with 3-5 evergreen posts pre-launch. Already flagged in earlier audits. |
| University-style help/education on a subdomain | Wait until post-launch. Then build `help.altcrew.in` for organizer guides (how to run a club, waivers, photo-album practices, pacing protocols). |
| Footer dense with destination links | Expand current footer (currently 8 links) to ~16-20 links: Find / Host a club / Host an event / Download / Learn / Help / Privacy / Terms / Affiliates (post-launch) / Careers / iOS badge / Android badge / 3 social icons / contact email. |
| Affiliate program | Post-launch surface, not now. |
| App store badges in footer | Add placeholders now, real links after store listings publish. |
| Demo-booking CTA for hosts | Replace with simple mailto + Calendly later. Pre-launch: `mailto:hello@altcrew.in?subject=Organizer interest`. |

## What we do not steal

- Their headline phrasing. Ours is stronger and more specific (Strava framing, Indian context).
- Their host-monetization-first economic model. AltCrew is free for members and free for organizers through August 2026, by design.
- Their generic "fitness experiences" framing. AltCrew leans into named sports (Run, Lift, Yoga, Cycle, Walk, Swim, Padel, Badminton, Other), Indian context (Vizag, kabaddi, rooftop yoga), and crews over classes.
- Their image specs and copy ("Find What Moves You", "Up to 4 MB", "1080 x 1350px"). Do not reuse.

## New routes to ship (priority order)

| # | Route | Effort | Pre-launch scope | Post-launch scope |
|---|---|---|---|---|
| 1 | `/find` | 2 hr (stub), 8 hr (full) | "Crews go live May 31, 2026" hero + email-capture + city dropdown | Full filterable list of crews, clubs, meets. Server-rendered for SEO. Filters on city, sport, pace, date, free/paid. Location-pinned map below. |
| 2 | `/download` | 1 hr | "App drops May 31, 2026" + email-capture + iOS/Play placeholder badges + QR placeholder | Real App Store and Play Store links, QR code, deep links to specific in-app sections. |
| 3 | `/learn` | 4 hr (index + 3 posts) | Index page + 3 evergreen posts: "How to start running in Vizag", "Beginner-friendly fitness communities in India", "What makes a crew good vs just a group" | Add 1 post per month. Cluster around: discovery, pacing, nutrition basics, organizer playbooks. |
| 4 | `/organizers` (full page, not just section) | 3 hr | Move existing Organizers section copy here. Expand to 800-1200 words. Keep `#organizers` anchor on `/` for nav, but link the "Run a community? Get in touch" CTA to `/organizers` for full pitch. | Add testimonials from clubs running on AltCrew. |
| 5 | `/organizers/host-an-event` | 3 hr | Single-event host onboarding. Specifically for one-off festivals, races, retreats, where the host wants ticketing/RSVP/waivers but is not running a recurring crew. | Connect to checkout/payments once paid organizer tier launches Sep 2026. |
| 6 | `/about` (or `/story`) | 2 hr | Expand existing Founder section into a full page. 800 words. Keep `#founder` on `/` short. | Add team page when team grows. |
| 7 | `/terms` | 1 hr | DPDP-aligned terms of service, mirroring `/privacy` style and tone. | Update at organizer-tier launch with paid-tier terms. |
| 8 | `/help` | 2 hr (stub), 8 hr (full) | Stub with 5 questions and a contact CTA. | Full help center. Move to `help.altcrew.in` subdomain when content density justifies. |

Total pre-launch effort: ~18 hours for stubs of all 8.

## Footer expansion (today)

Current `components/footer.tsx` has 4 columns: branding, Product, Festival, Contact. Expand to 6 columns:

```
| Brand        | Find         | Host         | Learn        | Trust        | Connect      |
|--------------|--------------|--------------|--------------|--------------|--------------|
| Logo         | Find a crew  | Host a club  | Learn        | Privacy      | Instagram    |
| Tagline      | Cities       | Host event   | Help         | Terms        | hello@...    |
| iOS badge    | Download app | Demo         | Festival     | llms.txt     |              |
| Android badge|              |              | About        | robots.txt   |              |
```

Goal: more outlinks per page = stronger internal-link graph + dwell signals + matches the peer's footer-density pattern that helps their PageRank distribution.

## Nav expansion (today)

Current nav: 5 anchors (What, Features, Organizers, Festival, FAQ).

Add to nav (desktop + mobile drawer):
- Find (link to `/find`)
- Download (link to `/download`)
- Learn (link to `/learn`)

Move existing anchors (`#what`, `#features`, etc.) into a "On this page" group inside the mobile drawer once `/find` etc. exist, so the primary nav is the route-level taxonomy and the section-level anchors are secondary.

## Schema additions (per route)

| Route | Schema additions |
|---|---|
| `/find` | `SearchAction` on the search box, `ItemList` of cities once they exist |
| `/download` | `MobileApplication` already on `/`; add `WebPage` + `BreadcrumbList` |
| `/learn` | `Blog` schema on index, `BlogPosting` with `author Person` on each post |
| `/learn/[slug]` | `BlogPosting` + `Article` if long-form, `BreadcrumbList` |
| `/organizers` | `Service` schema describing organizer offering, `Offer` with priceCurrency INR price 0 dateValidUntil 2026-08-31 |
| `/organizers/host-an-event` | `Service` schema for event hosting, separate `Offer` |
| `/about` | `AboutPage` + Person already in `/` + `Organization` with founders |
| `/terms` | `WebPage` + `BreadcrumbList` |
| `/help` | `FAQPage` (already used on `/`) plus `BreadcrumbList` |

Add a global `BreadcrumbList` helper component and use it on every non-home route.

## Content cluster plan for `/learn`

Working title list (pre-launch posts, in priority order):

1. **How to start running in Vizag** — captures local-intent traffic. Crews, routes, pace, weather, monsoon contingency. 1,200 words.
2. **What makes a fitness crew worth showing up for** — universal, philosophical. Welcoming culture, pace honesty, photo etiquette. 1,000 words.
3. **The complete beginner's guide to joining a running club in India** — fills the FAQ entry "I'm a complete beginner" at long-form depth. 1,400 words.
4. **Why we built AltCrew** — founder-extended-essay version of the founder note. 1,500 words.
5. **A field guide to free workout spaces in Indian cities** — programmable across cities once we have data. Vizag first. 900 words.
6. **What 600 km does to a running shoe (and why we built Shoe Locker)** — feature explainer. 800 words.
7. **The case for face-sorted group photo albums** — feature explainer for Flash Album. 700 words.

Each post:
- Includes founder byline + Person schema
- BlogPosting schema
- Last-updated stamp
- 2-4 internal links to `/`, `/find`, `/organizers`
- 1-2 outbound citations
- Cover image at `public/learn/[slug].jpg` (1200x630, also serves as OG)

## Pre-launch build sequence (next 14 days)

Day 1-2: stub `/find`, `/download`, `/learn`, `/organizers` (full), `/about`, `/terms`, `/help`. Add to sitemap. Wire BreadcrumbList. Add schema to each. ~6 hr.

Day 3-4: expand footer + nav. ~2 hr.

Day 5-7: write `/learn/how-to-start-running-in-vizag` and `/learn/why-we-built-altcrew` end to end. ~6 hr.

Day 8-10: write `/learn/the-complete-beginners-guide-to-joining-a-running-club-in-india` and `/learn/what-makes-a-fitness-crew-worth-showing-up-for`. ~6 hr.

Day 11-14: cover images, internal cross-linking pass, final schema audit, re-run `/seo-audit` for score lift verification.

## Expected score lift

Pre-launch ceiling lifts from current 84/100 to ~91/100 after this playbook executes. Caveats:

- Off-site brand mentions still gate the final 5-8 points.
- Real `/find` content (post-launch crew listings) drives an additional 3-5 points by making the page actually useful.

## What this is not

- Not a competitor comparison page. AltCrew never names the peer brand publicly.
- Not a copy-paste of their copy or design. We borrow architecture, not voice.
- Not a one-week sprint. The post-launch cluster expansion (months 2-6) is what actually moves the needle.

## Open question

The peer brand's `/discover` route is their main traffic page. Ours (`/find`) cannot match it pre-launch because we have no listings. Two options:

1. **Stub aggressively**: ship `/find` with placeholder cities and a strong waitlist hook. Indexable but thin until launch.
2. **Wait until launch**: ship `/find` only when real crews exist. Stronger first impression but loses 6-8 weeks of indexation runway.

Recommendation: Option 1 with a `noindex, follow` meta for the stub, flip to indexable on launch day. Keeps the URL reserved without polluting the index with thin content.
