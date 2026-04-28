import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Host an event",
  description:
    "Host a one-time fitness event on AltCrew. Festivals, races, retreats, charity runs. Ticketing, RSVPs, digital waivers, group albums, on-site check-in. Free events free. Paid events: small commission on ticket sales.",
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
    description:
      "Free events are free. Paid events: AltCrew takes a small commission on ticket sales.",
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

            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  the timeline
                </p>
              </aside>
              <div className="md:col-span-9 md:pl-6 max-w-[68ch] space-y-5 text-base text-fg/85 md:text-lg">
                <h2 className="text-display max-w-[24ch] font-bold text-fg">
                  Four weeks out, on a 200-runner 5K, day by day.
                </h2>
                <p>
                  Take a 200-person community 5K on a beachside boulevard.
                  Course mapped, sponsors lined up, permits in flight. Here
                  is what AltCrew handles between &ldquo;event live&rdquo;
                  and &ldquo;runners crossing the finish line.&rdquo;
                </p>
                <p>
                  <strong className="text-fg">Week minus four.</strong> You
                  spin up the event in two minutes. Set capacity at 200.
                  Pick your tier mix: 30 free spots for community partners,
                  150 paid at &#8377;500 each, 20 sponsor comps. Add a
                  custom waiver covering route, weather, and medical
                  consent. Drop a 500-word event description with start
                  time, route map, parking, and gear advice. Hit publish.
                  The event is live and shareable.
                </p>
                <p>
                  <strong className="text-fg">Weeks minus three to
                  minus one.</strong> Tickets sell in real time on the
                  dashboard. Members who already have a waiver on file
                  skip the form on signup. Anyone with questions emails
                  the address you set in the listing — replies thread
                  back to you. Two days before the race, you broadcast a
                  pre-event message: bib pickup window, weather call,
                  start-line landmark. It lands in everyone&rsquo;s app,
                  inbox, or both, depending on their notification
                  settings.
                </p>
                <p>
                  <strong className="text-fg">Race morning.</strong> Three
                  volunteers at the check-in table tap each runner&rsquo;s
                  name on a tablet to mark them in. No printed bib list,
                  no clipboard, no &ldquo;wait, are you on the list?&rdquo;
                  conversations. The Flash Album opens at the gun. Anyone
                  on-site can drop in photos. The shared album updates
                  live for the next 24 hours, then locks.
                </p>
                <p>
                  <strong className="text-fg">Sunday evening.</strong>
                  The recap page is auto-generated: top photos, finishers,
                  pace splits if you imported timing data, sponsor logos,
                  and a one-tap &ldquo;join the next one&rdquo; button
                  that pre-fills your next listed event. You share the
                  recap link to your community. People who missed the
                  race see what they missed. The next event sells faster
                  than this one did.
                </p>
              </div>
            </div>

            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  organizer FAQ
                </p>
              </aside>
              <div className="md:col-span-9 md:pl-6 max-w-[68ch] space-y-6">
                <div>
                  <h3 className="text-headline font-bold text-fg">
                    What is the commission rate on paid event ticket sales?
                  </h3>
                  <p className="mt-2 text-base text-fg/85 md:text-lg">
                    AltCrew takes a small commission on tickets sold for
                    paid events. The exact rate is shared with you when
                    we onboard your event so you can price tickets with
                    full visibility. There are no platform fees, no
                    monthly subscriptions, and no charges on free events.
                  </p>
                </div>
                <div>
                  <h3 className="text-headline font-bold text-fg">
                    Do attendees need to download the app to RSVP?
                  </h3>
                  <p className="mt-2 text-base text-fg/85 md:text-lg">
                    No. Anyone can register through the web. The app is
                    optional and unlocks the deeper experience — Flash
                    Album, pace pairing, member messaging — but a
                    first-time attendee can buy a ticket, sign a waiver,
                    and show up without ever installing anything.
                  </p>
                </div>
                <div>
                  <h3 className="text-headline font-bold text-fg">
                    Can a runner re-use a waiver across different events?
                  </h3>
                  <p className="mt-2 text-base text-fg/85 md:text-lg">
                    Yes. A waiver signed for one organizer&rsquo;s event
                    is logged on the runner&rsquo;s profile. The next
                    time they register for an event with the same waiver
                    template, the form is auto-filled and a one-tap
                    confirmation finishes the signing.
                  </p>
                </div>
                <div>
                  <h3 className="text-headline font-bold text-fg">
                    What happens if I cancel a paid event?
                  </h3>
                  <p className="mt-2 text-base text-fg/85 md:text-lg">
                    You issue full refunds to attendees from the
                    dashboard in a single action. The commission is
                    refunded along with the ticket cost — you do not pay
                    AltCrew for tickets that were ultimately refunded.
                  </p>
                </div>
                <div>
                  <h3 className="text-headline font-bold text-fg">
                    Can I cap capacity and run a waitlist?
                  </h3>
                  <p className="mt-2 text-base text-fg/85 md:text-lg">
                    Yes. Set capacity at any number. Once tickets sell
                    out, registration switches to a waitlist. If a
                    refund frees up a spot, the next person on the
                    waitlist gets a notification with a 24-hour window
                    to claim it.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 max-w-[60ch] border-t border-hairline pt-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                pricing
              </p>
              <h2 className="mt-3 text-display font-bold">
                Free events: free. Paid events: a small commission.
              </h2>
              <p className="mt-6 text-lg text-fg/85">
                Free events stay free, forever. For paid events, AltCrew
                takes a small commission on ticket sales — that is the only
                way we charge organizers. No platform fees, no monthly
                subscription, no credit card to start. You only pay when you
                sell tickets, and only out of what you sell.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
