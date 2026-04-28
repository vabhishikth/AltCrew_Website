import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "what-600-km-does-to-a-running-shoe";
const title = "When to replace running shoes: the 600 km rule";
const description =
  "Most running shoes are dead at 600 km. Foam compresses, midsole cracks, injury risk spikes. Here is how to track shoe mileage and know when to retire each pair.";
const datePublished = "2026-05-18";
const dateModified = "2026-05-18";

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
                <time dateTime={datePublished}>May 18, 2026</time>
                {" · "}10 min read
              </p>
              <h1 id="post-heading" className="mt-4 max-w-[24ch] text-mega font-bold">
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                A running shoe is foam that compresses with every footfall.
                After about six hundred kilometres, the foam loses its energy
                return and stops protecting your knees. The shoe still looks
                fine. The shoe is dead.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By Abhishikth, founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">Where the 600 km rule comes from.</h2>
                <p className="mt-4">
                  The number is not from a single laboratory. It is the median
                  output of thirty years of footwear engineering studies and
                  manufacturer guidance. Most major brands publish lifespan
                  ranges between five hundred and eight hundred kilometres.
                  Asics tests at five hundred to seven hundred. Brooks
                  publishes four hundred to six hundred. Salomon trail shoes
                  hold up to eight hundred because they are built denser.
                </p>
                <p className="mt-4">
                  Six hundred is the safe centre point. If you weigh more,
                  drop to five hundred. If you run light and on softer
                  surfaces, you can push past seven hundred. The rule is a
                  guide, not a calendar.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">What &ldquo;dead foam&rdquo; actually means.</h2>
                <p className="mt-4">
                  Most running shoes use one of two foam families: EVA
                  (ethylene-vinyl acetate) or PEBA (polyether block amide).
                  EVA is older, cheaper, and degrades faster. PEBA is newer,
                  found in modern super-shoes, and lasts longer per kilometre
                  but starts more expensive.
                </p>
                <p className="mt-4">
                  Both foams degrade by the same mechanism: the air pockets
                  inside the foam permanently collapse under repeated load. A
                  fresh shoe rebounds back to ninety-five percent of its
                  shape within milliseconds of impact. A dead shoe rebounds
                  to seventy percent and slowly. The energy you used to push
                  off, you now spend compressing dead foam.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Five signs your shoes are gone.</h2>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Uneven outsole wear.</strong> The rubber on the
                    outsole tells you which part of the shoe is doing the
                    most work. Patches worn smooth past the rubber layer
                    mean the shoe is past its halfway point.
                  </li>
                  <li>
                    <strong>Visible midsole creasing.</strong> Press the
                    midsole with your thumb. If it stays compressed for a
                    second instead of bouncing back, the foam is fatigued.
                  </li>
                  <li>
                    <strong>Sole flat patches.</strong> Place the shoe on a
                    flat table. If it rocks or sits unevenly, the midsole
                    has collapsed asymmetrically.
                  </li>
                  <li>
                    <strong>Bounce loss.</strong> The shoe feels heavy and
                    dead in the first kilometre. New shoes feel quick.
                  </li>
                  <li>
                    <strong>Post-run knee or shin soreness.</strong> The most
                    important signal. Your body knows before the visual cues
                    catch up.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">Mileage matters more than time.</h2>
                <p className="mt-4">
                  A two-year-old pair with two hundred kilometres on it is
                  fine. A six-month-old pair with eight hundred kilometres
                  on it is not. Time degrades foam slowly through oxidation;
                  load degrades foam quickly through compression. Compression
                  always wins.
                </p>
                <p className="mt-4">
                  This is why manufacturers publish kilometre ranges, not
                  date ranges. Your training volume sets your replacement
                  cycle, not your purchase date.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">How to actually track mileage.</h2>
                <p className="mt-4">
                  Three ways. From most fragile to most reliable:
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Memory.</strong> You will lose track within ten
                    runs. Do not use this method.
                  </li>
                  <li>
                    <strong>Paper log.</strong> A small notebook by the door,
                    you write the kilometres after each run, you tally
                    weekly. Works if you are disciplined. Most are not.
                  </li>
                  <li>
                    <strong>Per-shoe logging in an app.</strong> You assign a
                    pair to each run, the app tallies automatically and
                    alerts you when you cross a threshold. Strava supports
                    this. AltCrew Shoe Locker does too.
                  </li>
                </ol>
                <p className="mt-4">
                  AltCrew Shoe Locker pings you at five hundred kilometres
                  and again at six hundred. You see retirement coming and
                  budget for a new pair before the foam quits.{" "}
                  <Link
                    href="/#features"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Read more about Shoe Locker
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Indian context: weather, terrain, surface.</h2>
                <p className="mt-4">
                  Three factors shorten shoe lifespan in India:
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Monsoon water absorption.</strong> Repeated
                    soaking and drying breaks down EVA foam structure. If
                    you run in heavy monsoon, deduct ten percent from the
                    shoe&rsquo;s expected lifespan.
                  </li>
                  <li>
                    <strong>Asphalt vs trail.</strong> Indian asphalt is
                    harsher than European or Japanese asphalt due to
                    aggregate composition. Road shoes wear faster here than
                    in temperate-climate testing labs.
                  </li>
                  <li>
                    <strong>Dust and grit.</strong> Fine particulate from
                    Indian roads embeds in mesh uppers and outsole grooves,
                    accelerating mechanical wear without affecting the
                    midsole. Looks tired before it is tired.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold">What rotating two pairs does.</h2>
                <p className="mt-4">
                  A pair of running shoes recovers between thirty and forty
                  eight percent of its compressed structure if you give it
                  twenty-four to forty-eight hours of rest between runs.
                  This is why rotating two pairs extends the lifespan of
                  each pair by roughly thirty percent.
                </p>
                <p className="mt-4">
                  Practical translation: if you run four to five times per
                  week, two pairs is the right number. Three pairs is
                  optimal for high-mileage runners. One pair is the worst
                  case, the foam never gets a recovery cycle.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">When NOT to replace.</h2>
                <p className="mt-4">
                  The shoe looks scuffed but feels fine and the midsole
                  press test passes. The outsole has surface scrapes but no
                  rubber-through patches. You ran in mud and the shoe is
                  cosmetically rough.
                </p>
                <p className="mt-4">
                  None of these are structural. Cosmetic ageing is normal.
                  Replace when the foam dies, not when the upper looks
                  tired.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">The bottom line.</h2>
                <p className="mt-4">
                  Track every kilometre on every pair. Plan for retirement
                  at six hundred. Rotate two pairs to push each toward seven
                  hundred. Listen to your knees before your stopwatch.
                </p>
                <p className="mt-4">
                  AltCrew tracks all of that for you, free for members.{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Join the waitlist
                  </Link>{" "}
                  and we email you when the app drops on May 31, 2026.
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated May 18, 2026
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
