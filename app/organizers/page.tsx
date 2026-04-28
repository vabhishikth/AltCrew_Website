import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Host a club",
  description:
    "Run your fitness club without spreadsheets. Schedules, RSVPs, digital waivers, group photos, gear tracking, member messaging. Free for clubs; small commission only on paid event ticket sales.",
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
    description:
      "Free for community organizers; AltCrew takes a small commission only on paid event ticket sales.",
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
              without spreadsheets, group-chat chaos, or three different
              apps duct-taped together. Free to run your club. Paid events
              pay a small commission on ticket sales. Nothing else.
            </p>

            <div className="mt-10 max-w-[68ch] space-y-5 text-base text-[var(--color-cream)]/85 md:text-lg">
              <p>
                If you captain a run club, teach yoga out of a park, run a
                weekend HIIT crew, or coach a neighbourhood pickleball ladder,
                you already do the hardest part: showing up, week after week,
                and getting other people to show up with you. The boring part,
                the admin, is what burns most organizers out long before the
                community does.
              </p>
              <p>
                AltCrew handles the boring part. Schedules in one place. RSVPs
                that you can actually trust. Waivers signed once and reused
                across every event a member ever joins. A photo album that
                opens at the meet, stays open for twenty-four hours, and gives
                your members something to share. Pace pairings done in seconds
                instead of in your head at 5:30 AM.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="mailto:hello@altcrew.in?subject=Organizer%20interest"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cream)] px-6 py-4 text-base font-medium text-[var(--color-ground)] transition hover:bg-[var(--color-lime)] active:scale-[0.98]"
              >
                Run a community? Get in touch
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-cream)]/60">
                  what it looks like
                </p>
              </aside>
              <div className="md:col-span-9 md:pl-6 max-w-[68ch] space-y-5 text-base text-[var(--color-cream)]/90 md:text-lg">
                <h2 className="text-display max-w-[22ch] font-bold text-[var(--color-cream)]">
                  Sixty members, one captain, twenty minutes a week.
                </h2>
                <p>
                  Picture a captain of a sixty-member run club. Three pace
                  groups. A Saturday long run, a Tuesday tempo session, a
                  Thursday recovery jog. Before AltCrew, that is one calendar
                  invite, two WhatsApp groups, a Google Form for waivers, a
                  shared Drive of photos nobody ever opens, and a Notes app
                  full of names with question marks next to them.
                </p>
                <p>
                  After AltCrew, it is one screen. The captain posts the
                  Saturday run on Sunday night. Members RSVP in the app. New
                  joiners sign a waiver once, ever; it follows them to every
                  event they ever attend with any crew that uses AltCrew.
                  Pace groups auto-suggest based on each runner&rsquo;s
                  recent kilometres logged. The post-run Flash Album opens
                  the moment the run starts and closes twenty-four hours
                  later, so people actually post their photos that day
                  instead of saving them for &ldquo;later.&rdquo;
                </p>
                <p>
                  Twenty minutes a week of admin instead of three hours.
                  And, more importantly, members who keep coming back because
                  the experience between events feels as cared-for as the
                  events themselves.
                </p>
              </div>
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
                  Free for clubs. Commission only on paid tickets.
                </h2>
                <p className="mt-6 max-w-[60ch] text-lg text-[var(--color-cream)]/85 md:text-xl">
                  Running a recurring club is free, forever. The only time
                  AltCrew charges anything is when you sell tickets to a paid
                  event — and then it is a small commission on those sales,
                  not a platform fee or a subscription. No credit card. No
                  expiring trial. No paywalled feature.
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
