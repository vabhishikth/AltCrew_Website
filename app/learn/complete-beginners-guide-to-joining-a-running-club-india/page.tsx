import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "complete-beginners-guide-to-joining-a-running-club-india";
const title = "How to join a running club in India: a beginner's guide";
const description =
  "Never run before? This is the field guide to joining a running club in India. How to find one, what to wear, what to expect on day one, how to not quit week two.";
const datePublished = "2026-06-08";
const dateModified = "2026-06-08";

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
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  author: { "@type": "Person", name: "Abhishikth Veng", jobTitle: "Founder" },
  publisher: {
    "@type": "Organization",
    name: "AltCrew",
    logo: { "@type": "ImageObject", url: "https://altcrew.in/altcrew-logo.svg" },
  },
  datePublished,
  dateModified,
  mainEntityOfPage: `https://altcrew.in/learn/${slug}`,
  inLanguage: "en-IN",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#post-heading", ".prose-altcrew h2"],
  },
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
                <time dateTime={datePublished}>June 8, 2026</time>
                {" · "}11 min read
              </p>
              <h1 id="post-heading" className="mt-4 max-w-[24ch] text-mega font-bold">
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                A running club is a group of people who run together on a
                fixed schedule. India has thousands. They are nearly all
                free, nearly all welcoming, and nearly all invisible until
                you know how to find them. Here is the playbook.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By <Link href="/about/abhishikth-veng" className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]">Abhishikth Veng</Link>, founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">Why solo first is the wrong order.</h2>
                <p className="mt-4">
                  Most beginners assume they should build fitness alone for
                  three months and then earn the right to join a club. The
                  order is backwards. Group accountability is what produces
                  fitness, not the other way around.
                </p>
                <p className="mt-4">
                  Group runners are roughly seventy percent more likely to
                  still be running twelve months later compared to solo
                  starters. The reason is not motivation. It is the social
                  cost of skipping a Saturday when five people expect you.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">What &ldquo;complete beginner&rdquo; actually means.</h2>
                <p className="mt-4">
                  If you have not run more than two kilometres without
                  stopping in the last twelve months, this guide is for
                  you. If you have, treat the first sections as confidence
                  refreshers and skip ahead to the discovery section.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">How to find a club without knowing anyone.</h2>
                <p className="mt-4">
                  Four paths, ranked by yield:
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>The AltCrew waitlist.</strong> Drop your city,
                    we email you when a crew opens near you. Members
                    never pay.{" "}
                    <Link
                      href="/#waitlist"
                      className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                    >
                      Get on the list
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Instagram hashtag scout.</strong> Search
                    &ldquo;running club <em>your city</em>&rdquo; on
                    Instagram. The active clubs post weekly meet photos.
                    Find one with consistent posting in the last month
                    and message them.
                  </li>
                  <li>
                    <strong>Neighbourhood ask.</strong> Walk into the
                    nearest running shoe store. Ask the salesperson which
                    club they recommend for beginners. They know.
                  </li>
                  <li>
                    <strong>RWA channels.</strong> The local Resident
                    Welfare Association WhatsApp group usually has at
                    least one member who knows the local crew scene. Ask
                    once, save the answer.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">The before-you-go checklist.</h2>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Shoes.</strong> Any running shoe you already
                    own. Do not buy gear before the first run. Borrow if
                    you have to.
                  </li>
                  <li>
                    <strong>Clothing.</strong> Whatever you would walk in
                    comfortably. Cotton is fine for the first session;
                    upgrade to synthetic later.
                  </li>
                  <li>
                    <strong>Water.</strong> A small bottle for after the
                    run. Drink before you leave home, not during the run.
                  </li>
                  <li>
                    <strong>Breakfast.</strong> A banana and toast, or
                    coffee and toast. Forty-five minutes before you start
                    is the sweet spot.
                  </li>
                  <li>
                    <strong>Arrival time.</strong> Ten minutes early.
                    This is the social margin you need.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold">The first five minutes.</h2>
                <p className="mt-4">
                  Find one person and tell them you are new. Use those
                  exact words: &ldquo;Hi, I am new, this is my first
                  one.&rdquo; That sentence does the social work for you.
                  The runner you tell will introduce you to two more
                  people in the next four minutes. By the time the
                  warmup starts, you will know three names.
                </p>
                <p className="mt-4">
                  Tell a second person too. Redundancy matters. If the
                  first person gets pulled into the warmup early, the
                  second person picks up.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">The first run.</h2>
                <p className="mt-4">
                  Stay at the back. Run with whoever is the slowest in the
                  pack, and if you need to walk, walk. Nobody cares about
                  your pace on day one. The runners around you are paying
                  attention to whether you came back, not how fast you
                  went.
                </p>
                <p className="mt-4">
                  If the crew is too fast, that is information, not
                  failure. Finish the session in your own way and pick a
                  different crew next week. The mistake is leaving running,
                  not leaving a crew.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">The post-run ritual.</h2>
                <p className="mt-4">
                  Stay for the post-run coffee or breakfast. This is the
                  important part. The run is the excuse. The conversation
                  afterwards is where crews actually become crews.
                </p>
                <p className="mt-4">
                  If the crew has no post-run ritual, that is a yellow
                  flag. The bond is built over twenty minutes of standing
                  in a parking lot, not over the run itself.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Week two is the test.</h2>
                <p className="mt-4">
                  Most beginners quit between session one and session two.
                  Session one feels like an event. Session two feels like
                  a chore because the novelty is gone and the soreness has
                  arrived.
                </p>
                <p className="mt-4">
                  Show up anyway. The runners who become runners are the
                  ones who show up to session two with sore legs. The
                  third session is much easier than the second.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">If the first club is wrong.</h2>
                <p className="mt-4">
                  Some clubs are wrong for you. The pace is off. The vibe
                  is cliquey. The Saturday meet shifted to a day you
                  cannot do. You are allowed to leave.
                </p>
                <p className="mt-4">
                  Try another club within two weeks. Do not let one bad
                  fit become the story of why you do not run. There are
                  more clubs than you think, and you will know within two
                  sessions whether the new one is right.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Indian-specific advice.</h2>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Saturday at 5:30 AM.</strong> The default crew
                    meet across most Indian cities. Heat after 8 AM makes
                    later starts difficult.
                  </li>
                  <li>
                    <strong>Monsoon contingency.</strong> Ask the crew
                    what their wet-day plan is. A good crew has one. A
                    bad one cancels and disappears for a month.
                  </li>
                  <li>
                    <strong>Summer windows.</strong> April through June,
                    even Saturday meets shift earlier (5 AM start) or
                    indoor (rooftop strength sessions).
                  </li>
                  <li>
                    <strong>Festival weeks.</strong> Most crews pause for
                    Diwali, Holi, Eid, and Christmas weekends. Ask about
                    the schedule before you commit a routine.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold">The 90-day arc.</h2>
                <p className="mt-4">
                  Week one, you feel like an alien at a runners&rsquo;
                  meeting. Week four, you are a regular and people have
                  started saving you a spot in the warmup circle. Week
                  twelve, you are the person who tells the next newcomer
                  &ldquo;hi, you must be new.&rdquo;
                </p>
                <p className="mt-4">
                  That is the actual arc. Not the personal-best arc. Not
                  the weight-loss arc. The arc is from outsider to insider,
                  and it takes about ninety days.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">How AltCrew shortcuts the discovery step.</h2>
                <p className="mt-4">
                  Finding the right crew is the part that breaks most
                  beginners before they even start. AltCrew lists every
                  crew, club, and meet in your city, sorted by sport,
                  pace, and welcoming culture. You read before you show
                  up. Free for members.
                </p>
                <p className="mt-4">
                  Launching May 31, 2026 in Visakhapatnam, with more
                  cities opening monthly.{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Drop your city
                  </Link>{" "}
                  and we email you when crews go live near you.
                </p>
                <p className="mt-4">
                  Until then, read{" "}
                  <Link
                    href="/learn/what-makes-a-fitness-crew-worth-showing-up-for"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    what makes a fitness crew worth showing up for
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/learn/how-to-start-running-with-a-crew"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    how to start running with a crew
                  </Link>
                  .
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated June 8, 2026
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
