import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Host a club",
  description:
    "Run your fitness club without spreadsheets. Schedules, RSVPs, digital waivers, group photos, gear tracking, member messaging. Free for organizers through August 2026.",
  alternates: { canonical: "https://altcrew.in/organizers" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AltCrew for Organizers",
  serviceType: "Community management software for fitness organizers",
  provider: { "@type": "Organization", name: "AltCrew" },
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Schedules, RSVPs, digital waivers, group photo albums, member messaging, gear and shoe tracking, and pace-based pairing for fitness clubs and crews.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    priceValidUntil: "2026-08-31",
    description: "Free for organizers through August 2026",
  },
};

const items = [
  ["Schedules and RSVPs", "Drop runs, classes, and meets. Members RSVP in two taps."],
  ["Digital waivers", "Sign once. Every organizer who needs it gets it instantly."],
  ["Flash Album", "One album per meet, unlocks at the event, open for 24 hours, shareable to Instagram."],
  ["Member messaging", "Group threads, broadcast to attendees, no WhatsApp clutter."],
  ["Gear and shoe tracking", "Members log their gear. You see who needs new shoes."],
  ["Pace-based pairing", "Match runners within fifteen seconds per kilometre of each other."],
];

export default function OrganizersPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="org-heading"
          style={{
            background: "var(--color-moss, #3F4A2A)",
            color: "var(--color-cream)",
          }}
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Host a club", href: "/organizers" }]} />

            <h1
              id="org-heading"
              className="mt-8 max-w-[20ch] text-mega font-bold"
            >
              Stop running your club out of seven WhatsApp groups.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-[var(--color-cream)]/85 md:text-xl">
              AltCrew gives community organizers the tools to run a club
              without spreadsheets. Free through August 2026. Paid tier
              launches September 2026, INR-priced.
            </p>

            <div className="mt-10">
              <a
                href="mailto:hello@altcrew.in?subject=Organizer%20interest"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cream)] px-6 py-4 text-base font-medium text-[var(--color-ground)] transition hover:bg-[var(--color-lime)] active:scale-[0.98]"
              >
                Run a community? Get in touch
                <span aria-hidden>→</span>
              </a>
            </div>

            <ul className="mt-20 grid gap-8 md:max-w-3xl md:grid-cols-2">
              {items.map(([k, v]) => (
                <li key={k}>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/60">
                    {k}
                  </p>
                  <p className="mt-3 text-base text-[var(--color-cream)]/90 md:text-lg">
                    {v}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/60">
                  pricing
                </p>
              </aside>
              <div className="md:col-span-9 md:pl-6">
                <h2 className="text-display max-w-[20ch] font-bold">
                  Free through August 2026.
                </h2>
                <p className="mt-6 max-w-[60ch] text-lg text-[var(--color-cream)]/85 md:text-xl">
                  Every organizer who joins before September 2026 gets the
                  full toolkit free for the entire pre-launch and early-growth
                  window. Paid tier from September 2026 onwards. Prices
                  announced shortly. INR-billed.
                </p>
              </div>
            </div>

            <div className="mt-20 border-t border-[var(--color-cream)]/15 pt-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/60">
                also see
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="/organizers/host-an-event"
                  className="font-mono text-[12px] uppercase tracking-widest text-[var(--color-lime)] underline decoration-2 underline-offset-4 hover:text-[var(--color-cream)]"
                >
                  Host a one-time event →
                </Link>
                <Link
                  href="/learn"
                  className="font-mono text-[12px] uppercase tracking-widest text-[var(--color-lime)] underline decoration-2 underline-offset-4 hover:text-[var(--color-cream)]"
                >
                  Read the playbook →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
