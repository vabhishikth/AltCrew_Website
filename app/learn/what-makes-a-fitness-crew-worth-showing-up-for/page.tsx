import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "what-makes-a-fitness-crew-worth-showing-up-for";
const title = "What makes a fitness crew worth showing up for";
const description =
  "Seven signs of a fitness crew that earns your Saturday morning. Welcoming culture, pace honesty, photo etiquette, drop-back policy, and the rest.";
const datePublished = "2026-05-04";
const dateModified = "2026-05-04";

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
    logo: {
      "@type": "ImageObject",
      url: "https://altcrew.in/altcrew-logo.svg",
    },
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
        <article
          className="relative border-b border-hairline"
          aria-labelledby="post-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb
              trail={[
                { label: "Learn", href: "/learn" },
                { label: title, href: `/learn/${slug}` },
              ]}
            />

            <header className="mt-8 max-w-[68ch]">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                <time dateTime={datePublished}>May 4, 2026</time>
                {" · "}7 min read
              </p>
              <h1
                id="post-heading"
                className="mt-4 max-w-[24ch] text-mega font-bold"
              >
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                The right crew makes you a runner. The wrong one makes you
                quit. Here is how to tell which is which before you commit
                your Saturday.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By <Link href="/about/abhishikth-veng" className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]">Abhishikth Veng</Link>, founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">
                  Sign 1: pace is published, not promised.
                </h2>
                <p className="mt-4">
                  Good crews publish a pace range with actual numbers. Bad
                  crews say &ldquo;all paces welcome&rdquo; and then run a
                  median pace twenty seconds per kilometre faster than they
                  claim. The first kind earns trust. The second kind burns
                  beginners.
                </p>
                <p className="mt-4">
                  When you read a crew&rsquo;s page, look for a number. If
                  there is no number, ask. If they cannot give you one in
                  one message, the crew is not built for you.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Sign 2: there is a drop-back policy.
                </h2>
                <p className="mt-4">
                  Every group run produces a slowest runner. The question is
                  what happens to them. Good crews assign a sweep, a faster
                  runner who drops back to keep the slowest one company. Bad
                  crews leave them behind and pretend not to notice.
                </p>
                <p className="mt-4">
                  This is the single most important culture signal in a
                  running crew. Ask about it directly.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Sign 3: a named newcomer host.
                </h2>
                <p className="mt-4">
                  Good crews have a person whose job, formal or informal, is
                  to spot the new face and introduce them to the regulars.
                  Without that person, newcomers stand on the edge of the
                  warmup feeling invisible until session three when they
                  give up.
                </p>
                <p className="mt-4">
                  If you ask &ldquo;who do I look for if I am new?&rdquo;
                  and the crew has an answer, that is a good crew.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Sign 4: photo etiquette is set, not assumed.
                </h2>
                <p className="mt-4">
                  Crews take photos. That is part of the culture. But
                  not everyone wants their face online. Good crews ask
                  before they post. Good crews have a private group album
                  and a public one, and members opt in to the public one.
                </p>
                <p className="mt-4">
                  If a crew posts photos to public Instagram with no
                  consent step, that is a yellow flag. Some people are
                  fine with it. Many are not.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Sign 5: the post-run ritual is real.
                </h2>
                <p className="mt-4">
                  The run is the excuse. The post-run is where crews become
                  crews. Coffee. Breakfast. Standing in the parking lot for
                  fifteen minutes after stretching. Whatever the ritual, it
                  matters more than the run itself.
                </p>
                <p className="mt-4">
                  A crew that finishes the run and disperses immediately is
                  a workout, not a community. Both are valid, but you came
                  here for community. Pick accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Sign 6: the schedule is consistent.
                </h2>
                <p className="mt-4">
                  Saturday at 6 AM, every Saturday, for two years. That is
                  what builds a habit. A crew that meets &ldquo;most
                  weekends&rdquo; or &ldquo;when the organizer is in
                  town&rdquo; is not a crew. It is a series of one-off
                  events.
                </p>
                <p className="mt-4">
                  Look at the crew&rsquo;s last six meets. If they hit at
                  least five of them on schedule, the crew is real.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Sign 7: you can leave without drama.
                </h2>
                <p className="mt-4">
                  Good crews understand that not every member stays
                  forever. Life moves. Schedules change. The pace you
                  needed in week one is not the pace you need in month
                  twelve. A good crew lets you go and welcomes you back.
                </p>
                <p className="mt-4">
                  If a crew makes leaving feel like a betrayal, that is
                  not loyalty. That is something else.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  How AltCrew helps you find these crews.
                </h2>
                <p className="mt-4">
                  We tag every crew with their pace range, their drop-back
                  policy, their newcomer-welcome posture, and their
                  photo-consent practice. You can read the tags before you
                  RSVP.
                </p>
                <p className="mt-4">
                  Free for members, always. Drop your city in the{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    waitlist
                  </Link>{" "}
                  and we email you the day a good crew opens near you.
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated May 4, 2026
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
