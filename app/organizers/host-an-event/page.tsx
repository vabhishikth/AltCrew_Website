import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Host an event",
  description:
    "Host a one-time fitness event on AltCrew. Festivals, races, retreats, charity runs. Ticketing, RSVPs, digital waivers, group albums, on-site check-in. Free for organizers.",
  alternates: { canonical: "https://altcrew.in/organizers/host-an-event" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AltCrew for Event Organizers",
  serviceType: "Event hosting tools for one-time fitness events",
  provider: { "@type": "Organization", name: "AltCrew" },
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Tools for hosting one-time fitness events: festivals, races, retreats, charity runs. Includes ticketing, RSVPs, digital waivers, group photo albums, and on-site check-in.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free for event organizers",
  },
};

const blocks = [
  {
    k: "ticketing",
    title: "Ticketing and tiers",
    body: "Free, paid, members-only, sponsor-comp. Set capacity, manage waitlist, see sales in real time.",
  },
  {
    k: "rsvps",
    title: "RSVPs and check-in",
    body: "Members RSVP from the AltCrew app. Day of, scan or tap to check in. No clipboards.",
  },
  {
    k: "waivers",
    title: "Digital waivers",
    body: "Custom waiver per event. Members sign once and the signature is reused next time.",
  },
  {
    k: "albums",
    title: "Flash Album",
    body: "Album unlocks at the event. Anyone there drops in photos. Every attendee gets access for 24 hours, then it closes. Shareable to Instagram.",
  },
  {
    k: "messaging",
    title: "Pre-event messaging",
    body: "Reach all RSVPs at once. Last-minute changes, route updates, weather calls.",
  },
  {
    k: "post",
    title: "Post-event recap",
    body: "Auto-generated recap page with photos, finishers, and a link to the next event.",
  },
];

export default function HostAnEventPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="event-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb
              trail={[
                { label: "Host a club", href: "/organizers" },
                { label: "Host an event", href: "/organizers/host-an-event" },
              ]}
            />

            <h1
              id="event-heading"
              className="mt-8 max-w-[22ch] text-mega font-bold"
            >
              One event. Every tool you need to run it.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
              Hosting a 5K? A yoga retreat? A pickleball tournament? A
              charity run? AltCrew handles the operational layer so you can
              focus on the people who showed up.
            </p>

            <div className="mt-10 max-w-[68ch] space-y-5 text-base text-fg/85 md:text-lg">
              <p>
                A one-time event is, secretly, a four-week project. Marketing
                the date. Selling or releasing tickets. Collecting waivers
                from people who have never heard of your event before. Sending
                last-minute change-of-route messages. Manning a check-in
                table at 5:30 AM with a clipboard and a printed spreadsheet.
                Then trying, somehow, to capture the energy of the day so the
                next one sells faster.
              </p>
              <p>
                Most of that work happens in five different tools, none of
                which talk to each other. Hosts spend more time stitching
                tools together than they spend with the community they
                built. AltCrew puts the whole stack into one app: ticketing
                that supports free, paid, members-only, and sponsor-comped
                tiers. RSVPs visible in real time. Digital waivers that sign
                once and follow the member forever. A pre-event broadcast
                channel for weather calls and route updates. On-site
                check-in with a tap or a scan.
              </p>
              <p>
                The differentiator that hosts come back for, though, is the
                post-event recap. The Flash Album opens the moment the event
                starts and closes twenty-four hours later. Every attendee
                drops in their photos in the window. The recap page
                auto-generates with photos, finishers, and a one-tap link to
                your next event. Hosts who use it consistently see the next
                event sell faster, because the recap is the marketing.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@altcrew.in?subject=Host%20an%20event"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)] md:py-3 md:text-base"
              >
                Talk to us about your event
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/organizers"
                className="inline-flex items-center gap-2 rounded-full border border-fg/40 px-5 py-3.5 text-sm font-medium text-fg transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:py-3 md:text-base"
              >
                Hosting a recurring club instead?
              </Link>
            </div>

            <div className="mt-20 grid gap-px border border-hairline bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
              {blocks.map((b) => (
                <article key={b.k} className="bg-bg p-8 md:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {b.k}
                  </p>
                  <h2 className="mt-4 text-headline font-bold">{b.title}</h2>
                  <p className="mt-3 text-fg/80">{b.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-20 max-w-[60ch] border-t border-hairline pt-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                pricing
              </p>
              <h2 className="mt-3 text-display font-bold">
                Free for hosts. Until further notice.
              </h2>
              <p className="mt-6 text-lg text-fg/85">
                Zero platform fees on free or paid events. Use every tool on
                this page without a credit card or a trial clock. We will
                tell you well in advance if anything ever changes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
