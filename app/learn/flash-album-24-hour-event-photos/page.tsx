import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "flash-album-24-hour-event-photos";
const title = "The 24-hour event album, and why it changes group photos";
const description =
  "A flash album unlocks only at the event, opens for 24 hours, and disappears. Every attendee shares one album. Photos stay shareable to Instagram. Here is how it works and why it beats WhatsApp dumps.";
const datePublished = "2026-05-25";
const dateModified = "2026-05-25";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `https://altcrew.in/learn/${slug}` },
  openGraph: {
    title,
    description,
    type: "article",
    url: `https://altcrew.in/learn/${slug}`,
    publishedTime: datePublished,
    modifiedTime: dateModified,
    authors: ["Abhishikth Veng"],
    images: ["https://altcrew.in/og-default.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  author: { "@id": "https://altcrew.in/#founder" },
  publisher: {
    "@type": "Organization",
    name: "AltCrew",
    logo: { "@type": "ImageObject", url: "https://altcrew.in/altcrew-logo.svg" },
  },
  datePublished,
  dateModified,
  mainEntityOfPage: `https://altcrew.in/learn/${slug}`,
  inLanguage: "en-IN",
};

export default function Post() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <Nav />
      <main id="main">
        <article className="relative border-b border-hairline" aria-labelledby="post-heading">
          <div className="container-page py-20 md:py-28">
            <Breadcrumb
              trail={[
                { label: "Learn", href: "/learn" },
                { label: title, href: `/learn/${slug}` },
              ]}
            />

            <header className="mt-8 max-w-[68ch]">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                <time dateTime={datePublished}>May 25, 2026</time>
                {" · "}8 min read
              </p>
              <h1 id="post-heading" className="mt-4 max-w-[24ch] text-mega font-bold">
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                A flash album is a photo album that unlocks only at the
                event itself. Show up, the album opens. Anyone there drops
                photos in. Twenty-four hours later, access closes. Photos
                stay shareable to Instagram. Nobody outside the event ever
                scrolls a WhatsApp group.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By <Link href="/about/abhishikth-veng" className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]">Abhishikth Veng</Link>, founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">The status quo nobody talks about.</h2>
                <p className="mt-4">
                  Every running club, every yoga studio, every Saturday
                  meet ends the same way. Someone says &ldquo;drop the
                  photos in the WhatsApp group.&rdquo; Twenty people dump
                  three hundred photos over the next two days. Two members
                  scroll through them. Eighteen do not. The next week, it
                  happens again.
                </p>
                <p className="mt-4">
                  The math is brutal. A two-hour event produces an hour of
                  collective scroll-tax across the group. Most photos are
                  never seen by the people in them. The good shots get
                  buried under blurry warmup pics and the &ldquo;where are
                  we meeting?&rdquo; messages that came earlier in the
                  thread.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">What &ldquo;flash&rdquo; means here.</h2>
                <p className="mt-4">
                  Flash means location-gated and time-gated. Two
                  conditions, both have to be met for the album to be
                  active.
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Location.</strong> The album opens only when
                    you are at the event venue, verified by GPS or by
                    scanning the organizer&rsquo;s code at check-in.
                  </li>
                  <li>
                    <strong>Time.</strong> The album closes twenty-four
                    hours after the event ends. After that, no new uploads,
                    no new viewers.
                  </li>
                </ul>
                <p className="mt-4">
                  That is the whole mechanic. No face recognition, no
                  cloud-trained matching, no biometric data. Just two
                  gates: where and when.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">How unlocking works.</h2>
                <p className="mt-4">
                  When you RSVP to an event in AltCrew, the app reserves
                  your slot in the album. On event day, when you arrive at
                  the venue, the album appears in your feed. You can
                  upload from that moment until twenty-four hours after
                  the event end time.
                </p>
                <p className="mt-4">
                  If GPS is unreliable indoors or on a stadium, the
                  organizer can hand out a check-in code. Scan it once,
                  the album unlocks for you for the rest of the event.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Who can upload, who can see.</h2>
                <p className="mt-4">
                  Only RSVPd attendees can upload. Only RSVPd attendees
                  can see. People who did not show up cannot scroll
                  through afterwards. People who showed up but did not
                  RSVP can be added by the organizer in two taps.
                </p>
                <p className="mt-4">
                  This is the privacy default. Photos taken at a private
                  morning run do not end up on the open internet by
                  accident. They live with the people who were actually
                  there.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Why 24 hours.</h2>
                <p className="mt-4">
                  The window matters. Two reasons:
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Urgency drives upload.</strong> If the album
                    closes tonight, photos go in tonight. WhatsApp groups
                    have no urgency, so half the photos never get
                    uploaded.
                  </li>
                  <li>
                    <strong>Signal-to-noise stays high.</strong> A live
                    twenty-four-hour album has the best photos shared by
                    the people most invested in remembering the event.
                    A WhatsApp group accumulates everything forever, so
                    nobody bothers scrolling.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">Instagram sharing, one tap.</h2>
                <p className="mt-4">
                  Every photo in a flash album has a share button.
                  Tap to open Instagram with the photo loaded for your
                  story or grid. Tag handles get pre-filled if attendees
                  have linked their Instagram accounts to AltCrew.
                </p>
                <p className="mt-4">
                  Sharing is opt-in per photo, not per album. You decide
                  which shots leave the private circle and which stay
                  inside it.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">What happens after 24 hours.</h2>
                <p className="mt-4">
                  Three things, in order:
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Live access closes.</strong> No new uploads.
                    No new viewers join.
                  </li>
                  <li>
                    <strong>Each attendee keeps their downloads.</strong>{" "}
                    Photos you saved during the live window stay on your
                    device forever.
                  </li>
                  <li>
                    <strong>The organizer gets a recap link.</strong>{" "}
                    A static page with the top moments, attendee count,
                    and a link to the next event. They can share that
                    recap publicly if they choose.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">How it compares.</h2>
                <p className="mt-4">
                  Three alternatives most crews currently use:
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>WhatsApp dump.</strong> Free, easy, terrible.
                    Photos lost in chat threads, no time-bound urgency,
                    no privacy beyond who is in the group.
                  </li>
                  <li>
                    <strong>Google Photos shared album.</strong> Cleaner
                    but invite-only. Works if the organizer remembers to
                    add everyone, which they usually do not. No expiry.
                  </li>
                  <li>
                    <strong>AirDrop or Quick Share.</strong> Excellent
                    for two people standing next to each other. Useless
                    for a fifty-person event.
                  </li>
                </ul>
                <p className="mt-4">
                  Flash Album fills the gap: many attendees, automatic
                  invitation, time-bound, private, shareable.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">For the organizer.</h2>
                <p className="mt-4">
                  Zero setup. The album is created automatically when the
                  event is created. RSVPd attendees are auto-invited.
                  After the event, the organizer gets a recap page with
                  the top photos and a clean link to the next meet.
                </p>
                <p className="mt-4">
                  No clipboards. No collecting Drive shares afterwards.
                  No admin scrolling through hundreds of photos to pick
                  ones for the club Instagram.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Indian context.</h2>
                <p className="mt-4">
                  Two things make Flash Album especially useful in India.
                  First, the data cost: only event attendees download,
                  and only for twenty-four hours. No long-term cloud
                  storage tax. Second, the friction of consent: a private
                  album that closes after a day is a much easier ask than
                  &ldquo;can we post this on the public Instagram&rdquo;.
                </p>
                <p className="mt-4">
                  Cricket teams, kabaddi clubs, padel ladders, rooftop
                  yoga groups, all of these benefit from a closed album
                  that opens for the people who showed up and closes
                  before the photos sprawl.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Ships at launch.</h2>
                <p className="mt-4">
                  Flash Album is one of the four launch features going
                  live with the AltCrew app on May 31, 2026.{" "}
                  <Link
                    href="/#features"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    See all four features
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    drop your email
                  </Link>{" "}
                  and we tell you when it lands.
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated May 25, 2026
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[var(--accent)] underline decoration-2 underline-offset-4"
                >
                  <span aria-hidden>←</span>
                  More from Learn
                </Link>
                <Link
                  href="/#waitlist"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)]"
                >
                  Join the waitlist
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
