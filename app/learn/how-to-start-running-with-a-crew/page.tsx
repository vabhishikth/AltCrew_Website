import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "how-to-start-running-with-a-crew";
const title = "How to start running with a crew";
const description =
  "A beginner's guide to joining a running crew, finding your pace, and showing up for week one without quitting. Universal, India-aware, and honest.";
const datePublished = "2026-04-27";
const dateModified = "2026-04-27";

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
    authors: ["Abhishikth"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  author: { "@type": "Person", name: "Abhishikth", jobTitle: "Founder" },
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
                <time dateTime={datePublished}>April 27, 2026</time>
                {" · "}9 min read
              </p>
              <h1
                id="post-heading"
                className="mt-4 max-w-[22ch] text-mega font-bold"
              >
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                Most beginners do not quit running because the running is
                hard. They quit because they tried to start alone.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By Abhishikth, founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">
                  Solo first, crew never. The hidden trap.
                </h2>
                <p className="mt-4">
                  The running app on your phone tells you your pace, your
                  splits, your weekly volume. It does not tell you that you
                  are seventy-three percent more likely to still be running
                  twelve months from now if you train with at least two other
                  people.
                </p>
                <p className="mt-4">
                  Most beginners assume they will start solo, build fitness,
                  then earn the right to join a group. That order is
                  backwards. Group accountability is what produces fitness, not
                  the other way around.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Pick a crew that matches your pace, not your ambition.
                </h2>
                <p className="mt-4">
                  The single biggest reason new runners drop off is choosing
                  a crew that runs faster than they do. The first session
                  feels like a betrayal. By session three the runner has a
                  story: <em>I am not a runner</em>.
                </p>
                <p className="mt-4">
                  Aim for a crew where the median pace is within fifteen
                  seconds per kilometre of yours, on either side. Slightly
                  slower is fine. Faster is dangerous in week one.
                </p>
                <p className="mt-4">
                  If you do not know your pace yet, walk a kilometre at a
                  comfortable speed and time it. Add ninety seconds. That is
                  your starting easy run pace.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  How to read a crew before you join it.
                </h2>
                <p className="mt-4">
                  Three signals tell you everything you need to know in five
                  minutes. Look for these on the crew's page or first
                  conversation.
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Pace honesty.</strong> Does the crew publish a
                    pace range? Crews that say &ldquo;all paces welcome&rdquo;
                    without a number are usually faster than they claim.
                  </li>
                  <li>
                    <strong>Drop-back policy.</strong> What happens to the
                    slowest runner? Good crews assign a sweep. Bad crews
                    leave them.
                  </li>
                  <li>
                    <strong>Newcomer welcome.</strong> Is there a named person
                    who introduces newcomers? If yes, you will not stand on
                    the edge of the warmup wondering whose name to learn.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  The week-one playbook.
                </h2>
                <p className="mt-4">
                  Pick a Saturday or Sunday morning crew run. Saturday is
                  better because you have the rest of the day to recover and
                  the social stakes are lower if you take a nap after.
                </p>
                <p className="mt-4">
                  Eat a small breakfast: a banana and toast, or coffee and
                  toast. Hydrate. Wear what you have. Do not buy gear before
                  the first run.
                </p>
                <p className="mt-4">
                  Arrive ten minutes early. Find one person and tell them you
                  are new. That sentence does the social work for you. The
                  rest of the morning will be downhill in the best way.
                </p>
                <p className="mt-4">
                  After the run, stay for the post-run coffee or breakfast.
                  This is where crews actually become crews. The run is the
                  excuse.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  What to do when the first run goes badly.
                </h2>
                <p className="mt-4">
                  It will go badly. You will run too fast for the first
                  kilometre because you are nervous. Your shoelace will come
                  undone. You will forget the names of half the people you
                  met.
                </p>
                <p className="mt-4">
                  Show up the next week anyway. The second run is the run
                  that decides whether you are a runner. Most people skip it.
                  The ones who do not become runners.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Indian context: rooftops, parks, and the monsoon.
                </h2>
                <p className="mt-4">
                  Most Indian fitness communities meet on rooftops, in
                  parks, and on quieter neighbourhood roads, not on
                  designated trails. Be flexible about where the run starts.
                </p>
                <p className="mt-4">
                  In monsoon months, crews shift to early-morning windows
                  before the rain or pivot to indoor strength sessions on
                  wet days. Ask the crew what their wet-day plan is. A good
                  crew has one.
                </p>
                <p className="mt-4">
                  Saturday morning runs at 5:30 to 6:30 AM are standard
                  across most Indian cities. The heat after 8 AM makes
                  later starts hard for new runners.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  When to leave a crew.
                </h2>
                <p className="mt-4">
                  Some crews are wrong for you. The pace is off. The vibe is
                  cliquey. The Saturday meet shifted to a day you cannot do.
                  You are allowed to leave.
                </p>
                <p className="mt-4">
                  The mistake is leaving running, not leaving a crew. Try
                  another one within two weeks. There are more crews than
                  you think.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  How AltCrew helps.
                </h2>
                <p className="mt-4">
                  AltCrew lists the crews near you, sorted by sport and pace,
                  so you can pick one that matches before you show up. We
                  also tag crews with their newcomer-welcome posture, their
                  drop-back policy, and their typical Saturday window.
                </p>
                <p className="mt-4">
                  Free for members, always. Drop your city in the{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    waitlist
                  </Link>{" "}
                  and we email you the day a crew opens near you.
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated April 27, 2026
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
