# AltCrew GEO-Readiness Analysis

Generated: 2026-04-27. Stack: Next.js 16 App Router, static prerender, single-page marketing site.

## GEO Readiness Score: 68/100

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| Citability | 25 | 17 | Strong quotable blocks (founder, FAQ, features). No "X is..." in first 60 words of HTML. |
| Structural readability | 20 | 14 | Clean H1->H2, FAQ Q&A. Most section H2s are not question-based. |
| Multi-modal | 15 | 9 | Portraits + founder photo + OG image. No video, no infographic. |
| Authority / brand signals | 20 | 11 | Org + Event + App + FAQ + WebSite schema strong. No Person schema for founder. No Wikipedia / Reddit / YouTube footprint (pre-launch). |
| Technical accessibility | 20 | 17 | Static prerender. robots.txt allows all (blocks Bytespider). llms.txt present. No RSL. |

## Platform Breakdown

| Platform | Estimated visibility | Reasoning |
|---|---|---|
| Google AI Overviews | Moderate | Strong schema, single page, no inbound links yet (pre-launch). 92% of AIO citations come from top-10 ranking pages. |
| ChatGPT (Wikipedia + Reddit weighted) | Low | Zero Wikipedia footprint. Zero Reddit threads about brand. |
| Perplexity (Reddit + Wikipedia) | Low | Same as ChatGPT. |
| Bing Copilot | Low-moderate | Static SSR helps Bing index. No IndexNow yet. |

## AI Crawler Access

`public/robots.txt`:
- Allowed (via `User-agent: *`): GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, CCBot, anthropic-ai, cohere-ai, Google-Extended (default).
- Explicitly blocked: Bytespider (ByteDance/TikTok).

Status: open posture, AI-search ready. Recommend keeping.

## llms.txt Status

Present at `/llms.txt`. Well-structured: title, description, launch facts, cities, features, pricing, founder bio, contact. Em dashes removed in this pass. Strong baseline.

Missing:
- No date stamp.
- No explicit "Last updated" line.

## Brand Mention Footprint

| Platform | Status | Action |
|---|---|---|
| Wikipedia | Not present | Build page post-launch once notability criteria met (press coverage, real user base). |
| Reddit | Not present | Seed presence in r/IndiaSpeaks, r/india, r/running, r/Vizag. Founder AMA in r/IndianFitness post-launch. |
| YouTube | Not present | Strongest single AI signal (Ahrefs 0.737 correlation). Launch video, founder origin story, festival recap. |
| LinkedIn | Unknown | Founder profile linking to altcrew.in. Company page. |
| Instagram | @altcrew.in present | Maintain. |

## Schema Audit

Present (`components/json-ld.tsx`):
- Organization (with founder Person reference)
- WebSite
- MobileApplication (with Offer)
- Event (Vizag Fitness & Flea Fest)
- FAQPage (4 questions)

Missing:
- **Person schema for Abhishikth** as standalone entity with sameAs links (Wikipedia future, LinkedIn, Instagram).
- **LocalBusiness or Place schema** for Sai Priya Resorts venue (currently nested in Event.location only).
- **AggregateRating** placeholder for app post-launch.
- **Article schema** for founder note (could be `text/about` content piece).

## Passage-Level Citability

Optimal AI-citation block: 134-167 words, self-contained.

Current strong blocks:
- **Founder note** (`components/sections/founder.tsx`): ~135 words, self-contained, specific (35 kg loss in a year, coach mentioned). Strong citation candidate.
- **FAQ answers**: 30-60 words each. Below optimal length but Q&A structure is highly citable.

Weak/missing:
- No standalone 134-167 word "What is AltCrew?" explainer block. Hero is poetic ("Strava tells you what you did. AltCrew tells you who you can do it with."), Problem section is conceptual, What section is fragmented across 3 pillars.
- No comparison table (AltCrew vs Strava vs WhatsApp groups vs traditional fitness apps).

## SSR / JS Dependency

`next build` confirms `/` prerendered as static (○). All section content rendered server-side. AI crawlers will see full HTML without JS execution. Solid.

Animations and interactivity (FAQ accordion, waitlist form, mobile drawer) are progressive enhancements; content is in initial HTML.

## Top 5 Highest-Impact Changes

1. **Add 134-167 word "What is AltCrew" definitional block** as a new section between Hero and Problem, or as an expanded lead paragraph in Problem. Open with "AltCrew is..." pattern. Include: what it is, who uses it, where (India / Vizag launch), when (May 31 2026), free pricing. This becomes the single most-cited passage.

2. **Convert section H2s to question-based** where natural:
   - Problem: "Why is fitness in India hard to find?" instead of "Fitness in India is happening. You just can't find it."
   - What: "What does AltCrew do?" instead of "Three jobs. One app."
   - How: "How does AltCrew work?" instead of "Three taps to your first Saturday."
   - Stats: "How big is fitness in India?" instead of "India is moving. The infrastructure isn't there yet."
   - Question H2s match query patterns AI Overviews target.

3. **Add comparison table** in What or Features section. AltCrew vs Strava vs Generic Group App across columns (discovery, pace-matching, photos, organizer tools, free?). Tables are high-citation format for both Google AIO and Perplexity.

4. **Build YouTube presence pre-launch.** Three videos: founder origin (35 kg loss story, links to AltCrew page), "What is AltCrew" explainer (60 sec), Vizag fitness scene B-roll. Strongest single GEO signal per Ahrefs data.

5. **Add Person schema for founder** with `sameAs` to LinkedIn + Instagram. Adds entity grounding. Once Wikipedia exists post-launch, append.

## Schema Recommendations (Concrete JSON-LD additions)

Add to `components/json-ld.tsx`:

```ts
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishikth",
  jobTitle: "Founder, AltCrew",
  worksFor: { "@type": "Organization", name: "AltCrew" },
  description: "Founder of AltCrew. Lost 35 kg in a year through walking, weight training, and structured nutrition guided by a coach.",
  sameAs: [
    "https://instagram.com/altcrew.in",
    // add LinkedIn URL when public
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
};
```

Mount in `app/page.tsx` alongside other JsonLd entries.

## Content Reformatting Suggestions

### A. Problem section opener (currently)
> Fitness in India is happening. You just can't find it.

Suggested addition (after the existing line, before the two-column copy):
> AltCrew is an India-first social fitness app that helps anyone find a crew to train with: running, lifting, yoga, cycling, swimming, walking. Members use it free. Community organizers run their clubs through it without spreadsheets. The app launches May 31, 2026 in Visakhapatnam at the Vizag Fitness & Flea Fest, with more cities opening as the community grows. The pitch is simple: Strava tells you what you did. AltCrew tells you who you can do it with.

This is a 67-word definitional block. Expand to ~140 words to hit citation sweet spot by adding one more sentence on pricing model and one on what makes it different from Strava/WhatsApp groups.

### B. FAQ additions for higher citability

Add three more FAQ entries, each with a question H3 + 80-120 word answer:
- "How is AltCrew different from Strava?"
- "How is AltCrew different from a WhatsApp running group?"
- "Who is the founder of AltCrew?"

Each becomes a self-contained citable block.

### C. Add a comparison table to What or Features

| Capability | AltCrew | Strava | WhatsApp groups |
|---|---|---|---|
| Pace-matched discovery | Yes | No | No |
| Open to non-members | Yes | Activity-feed only | Invite-only |
| Group photo album with face sort | Yes | No | Manual |
| Organizer tools (RSVPs, waivers) | Yes | No | No |
| Free for members | Yes | Freemium | Yes |

Tables are cited far above prose for comparison queries.

## Quick Wins (do today)

- [x] Strip em dashes from llms.txt (done in this pass)
- [ ] Add "Last updated: 2026-04-27" line at bottom of llms.txt
- [ ] Add Person schema for founder
- [ ] Convert at least Problem and What H2s to question form
- [ ] Add 140-word definitional block at top of Problem section

## Medium Effort (this month)

- [ ] Comparison table in What section
- [ ] Three additional FAQ entries (Strava diff, WhatsApp diff, founder)
- [ ] Founder LinkedIn page + sameAs in Person schema
- [ ] Implement IndexNow for Bing/Yandex (Vercel rewrite to api endpoint)
- [ ] Add `<meta property="article:published_time">` to layout for entity dating

## High Impact (pre-launch through Q3 2026)

- [ ] YouTube channel: founder story + explainer + Vizag scene
- [ ] Reddit seeding: r/india, r/running, r/Vizag, r/IndianFitness
- [ ] Wikipedia article post-launch (needs press coverage threshold)
- [ ] RSL 1.0 licensing implementation (`/rsl.txt` or HTTP header)
- [ ] Structured press release on launch day (PR Newswire India / The Hindu coverage)

## Risk Notes

- **Pre-launch GEO is hard.** Most AI citation comes from third-party signals (Wikipedia, Reddit, YouTube), which require the brand to exist publicly first. The site's own GEO ceiling is high (~75/100) but real visibility scales with off-site signals post-launch.
- **Single-page architecture** caps total citation surface. Each FAQ, feature, and section is a passage, but no individual blog posts or learn pages exist to be cited. Consider a `/learn` blog post-launch.
- **Bytespider block** is correct for protecting training data without blocking search (TikTok/Douyin AI is training-only, not user-search-facing).
