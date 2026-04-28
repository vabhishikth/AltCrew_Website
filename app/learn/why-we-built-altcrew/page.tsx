import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "why-we-built-altcrew";
const title = "Why we built AltCrew";
const description =
  "The story behind the app. A coach who believed, 35 kilos in a year, and the question that started everything: why doesn't fitness make space for the people who need it most?";
const datePublished = "2026-05-11";
const dateModified = "2026-05-11";

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
    logo: {
      "@type": "ImageObject",
      url: "https://altcrew.in/altcrew-logo.svg",
    },
  },
  datePublished,
  dateModified,
  image: "https://altcrew.in/portraits/founder.jpeg",
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
                <time dateTime={datePublished}>May 11, 2026</time>
                {" · "}8 min read
              </p>
              <h1
                id="post-heading"
                className="mt-4 max-w-[20ch] text-mega font-bold"
              >
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                A founder note, told longer. Why a fitness app exists at
                all, who it is for, and what we mean when we say find your
                crew.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-fg/20 bg-bg">
                  <Image
                    src="/portraits/founder.jpeg"
                    alt="Abhishikth Veng, founder of AltCrew"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Abhishikth Veng</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    founder
                  </p>
                </div>
              </div>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">
                  The thing nobody tells you about getting fit.
                </h2>
                <p className="mt-4">
                  Most people who try fitness do not fail at the workouts.
                  They fail at the rooms. The rooms feel wrong. The people
                  in them feel wrong. The mirrors feel wrong. After three
                  attempts, they decide they are not the kind of person who
                  goes to the gym, and they stop.
                </p>
                <p className="mt-4">
                  I was that person for years. I wanted to get fit. I knew
                  the workouts. I just could not bring myself to walk into
                  any of the rooms.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  The coach who changed it.
                </h2>
                <p className="mt-4">
                  A coach changed it for me. He did not have a magic
                  programme. He had patience and belief, and that was the
                  whole intervention. He believed I would do the work
                  before I believed I could. So I walked. I lifted. I ate
                  what he told me to eat. I lost thirty-five kilos in a
                  year.
                </p>
                <p className="mt-4">
                  The truth I sat with for a long time afterwards is that
                  most people do not get a coach like that. They get a
                  Google search, a YouTube channel, and a free trial at a
                  gym where the staff have their own KPIs. Then they get
                  the rooms.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  The question that started AltCrew.
                </h2>
                <p className="mt-4">
                  If the thing that worked for me was a person, not a
                  programme, what is the smallest version of that we can
                  build for everyone?
                </p>
                <p className="mt-4">
                  Not a coach. Coaches do not scale. But a crew. A handful
                  of people who train at your pace, in your city, on a
                  schedule you can keep. Not a class. Not a one-off event.
                  A crew. The same five faces every Saturday until the
                  Saturday becomes a habit.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Why this is hard in India.
                </h2>
                <p className="mt-4">
                  The crews already exist. There are running clubs in every
                  Indian city. Yoga collectives on rooftops. Cycling groups
                  that meet at 5 AM. Walking communities. Open-water
                  swimmers. Padel ladders. They are real, they are
                  thriving, and they are completely invisible unless you
                  already know somebody in them.
                </p>
                <p className="mt-4">
                  They live in WhatsApp groups you were not added to. On
                  Instagram pages you would have to know to follow. On
                  rooftops and in parks you would have to know to look at.
                  The discovery layer in India is broken. That is the
                  problem AltCrew exists to solve.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Three principles we are not flexible on.
                </h2>
                <ol className="mt-6 list-decimal space-y-4 pl-5">
                  <li>
                    <strong>Members never pay.</strong> Discovery is a
                    public good. Charging members to find a crew turns the
                    product into a paywall on community, which is the
                    opposite of why we are building it.
                  </li>
                  <li>
                    <strong>Pace honesty over inclusivity theatre.</strong>{" "}
                    A crew that says &ldquo;all paces welcome&rdquo;
                    without a number is not being kind. It is being lazy.
                    Real inclusivity is publishing your real pace and
                    helping new runners find a crew where they actually
                    fit.
                  </li>
                  <li>
                    <strong>India first, India built.</strong> The product
                    is built in India by people who train in Indian cities.
                    Vernacular sports are first-class. Indian payment
                    rails. Indian organizer economics. Not a US product
                    with a translated landing page.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  What we are not building.
                </h2>
                <p className="mt-4">
                  We are not building Strava. We are not building a
                  competing tracker. We are not asking you to log every
                  kilometre and obsess over your splits. Many AltCrew
                  members will keep a tracker on their wrist. That is
                  fine. The tracker is not the community.
                </p>
                <p className="mt-4">
                  We are not building a marketplace either. AltCrew is
                  not a place where you book paid yoga classes. Some
                  crews charge, most do not. The economics are between
                  the organizer and the member. We provide the rails.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Who this is for.
                </h2>
                <p className="mt-4">
                  AltCrew is for the person who has tried to start fitness
                  and not made it past week three. For the person who
                  knows the workouts but cannot find the room they want
                  to walk into. For the beginner who needs a coach but
                  cannot afford one. For the organizer running a club out
                  of seven WhatsApp groups, exhausted.
                </p>
                <p className="mt-4">
                  If any of that is you, we built this for you.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  What happens next.
                </h2>
                <p className="mt-4">
                  The app launches Sunday May 31, 2026 at 7:30 PM, on
                  stage at the Vizag Fitness and Flea Fest. iOS and
                  Android, same day. Free for members. Free for
                  organizers through August 2026.
                </p>
                <p className="mt-4">
                  Drop your email and city in the{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    waitlist
                  </Link>
                  . We open new cities by demand. Yours helps decide the
                  order.
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated May 11, 2026
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
