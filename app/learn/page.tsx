import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Field guides, playbooks, and origin stories from AltCrew. How to find a fitness crew, what makes a community worth showing up for, and the case for crew over solo training.",
  alternates: { canonical: "https://altcrew.in/learn" },
};

const posts = [
  {
    slug: "how-to-start-running-with-a-crew",
    title: "How to start running with a crew",
    blurb:
      "A complete beginner's guide to joining a running crew, finding your pace, and showing up for week one without quitting.",
    date: "2026-04-27",
    readMin: 9,
  },
  {
    slug: "what-makes-a-fitness-crew-worth-showing-up-for",
    title: "What makes a fitness crew worth showing up for",
    blurb:
      "Welcoming culture, pace honesty, photo etiquette. Seven signs of a crew that earns your Saturday morning.",
    date: "2026-05-04",
    readMin: 7,
  },
  {
    slug: "why-we-built-altcrew",
    title: "Why we built AltCrew",
    blurb:
      "The story behind the app. A coach who believed, 35 kilos in a year, and the question that started everything.",
    date: "2026-05-11",
    readMin: 8,
  },
  {
    slug: "what-600-km-does-to-a-running-shoe",
    title: "When to replace running shoes: the 600 km rule",
    blurb:
      "Foam compresses, midsole cracks, injury risk spikes. How to track shoe mileage and know exactly when to retire each pair.",
    date: "2026-05-18",
    readMin: 10,
  },
  {
    slug: "flash-album-24-hour-event-photos",
    title: "The 24-hour event album, and why it changes group photos",
    blurb:
      "An album that unlocks at the event, opens for 24 hours, then closes. Shareable to Instagram. Why it beats the WhatsApp dump.",
    date: "2026-05-25",
    readMin: 8,
  },
  {
    slug: "free-workout-spaces-india",
    title: "Free workout spaces in Indian cities, a field guide",
    blurb:
      "Parks, beaches, rooftops, government tracks, outdoor open gyms. Where to find them, how to read suitability, and the safety windows that matter.",
    date: "2026-06-01",
    readMin: 11,
  },
  {
    slug: "complete-beginners-guide-to-joining-a-running-club-india",
    title: "How to join a running club in India: a beginner's guide",
    blurb:
      "How to find a club without knowing anyone, what to wear, what to expect on day one, and the playbook for not quitting in week two.",
    date: "2026-06-08",
    readMin: 11,
  },
  {
    slug: "how-to-start-a-fitness-club-from-scratch-india",
    title: "How to start a fitness club from scratch in India",
    blurb:
      "Pick one discipline, lock the time and place, find your first ten through people you already know. The playbook for going from zero to a self-sustaining crew.",
    date: "2026-04-28",
    readMin: 11,
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AltCrew Learn",
  url: "https://altcrew.in/learn",
  description: "Playbooks, field guides, and origin stories from AltCrew.",
  publisher: { "@type": "Organization", name: "AltCrew" },
  inLanguage: "en-IN",
};

export default function LearnPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="learn-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Learn", href: "/learn" }]} />

            <h1
              id="learn-heading"
              className="mt-8 max-w-[20ch] text-mega font-bold"
            >
              Field guides for finding a crew.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
              Honest writing about training in groups, picking the right club,
              and showing up the first time without quitting. Long-form, no
              fluff, no listicles.
            </p>

            <ul className="mt-16 space-y-12 md:max-w-3xl">
              {posts.map((p) => (
                <li
                  key={p.slug}
                  className="border-t border-hairline pt-10 first:border-t-0 first:pt-0"
                >
                  <Link href={`/learn/${p.slug}`} className="group block">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      <time dateTime={p.date}>
                        {new Date(p.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {" · "}
                      {p.readMin} min read
                    </p>
                    <h2 className="mt-3 text-display max-w-[24ch] font-bold transition-colors group-hover:text-[var(--accent)]">
                      {p.title}
                    </h2>
                    <p className="mt-4 max-w-[60ch] text-base text-fg/80 md:text-lg">
                      {p.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[var(--accent)] underline decoration-2 underline-offset-4">
                      Read
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-16 max-w-[60ch] text-sm text-muted">
              More guides land monthly. Drop your email to know when.
            </p>
            <div className="mt-6">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full border border-fg/40 px-5 py-3 text-sm font-medium text-fg transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Get on the list
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
