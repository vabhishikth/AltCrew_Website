import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "how-to-start-a-fitness-club-from-scratch-india";
const title = "How to start a fitness club from scratch in India";
const description =
  "A practical playbook for starting a running, lifting, yoga, or movement club in India from zero — choosing a focus, finding your first ten members, picking a meeting spot, setting expectations, and keeping it alive past month three.";
const datePublished = "2026-04-28";
const dateModified = "2026-04-28";

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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://altcrew.in/og-default.jpg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  author: { "@id": "https://altcrew.in/#founder" },
  publisher: { "@id": "https://altcrew.in/#organization" },
  datePublished,
  dateModified,
  mainEntityOfPage: `https://altcrew.in/learn/${slug}`,
  inLanguage: "en-IN",
  keywords: [
    "start a fitness club",
    "how to run a running club",
    "fitness community India",
    "start a yoga group",
    "start a lifting crew",
  ],
  about: { "@id": "https://altcrew.in/#organization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I start a fitness club in India with no members?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick a single discipline, a single time slot, and a single meeting point. Tell ten people you already know — friends, gym acquaintances, neighbours — that you are starting it and the first session is on a specific date at a specific place. Three will show. Run it the same way the next week. By week six you have a regular crew of eight to twelve.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best meeting spot for a new fitness club in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Public parks with a clear landmark — a specific gate, a flagpole, a banyan tree — work better than gyms or studios for new clubs. They are free, neutral, and visible. Beachfronts, lake circuits, and stadium tracks also work well. Avoid private property unless you have explicit permission and a backup spot.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a new fitness club meet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once a week is the right cadence for the first three months. Same day, same time, same place. Predictability is the single most important property of a young club. Twice a week is for clubs that have proven they can sustain once a week for at least eight weeks straight.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to charge a membership fee for a fitness club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most successful community fitness clubs in India are free for the first year. Charging too early shrinks the funnel before the community has formed. If you eventually want to monetise, do it through paid events, branded gear, or a pro tier with extras — not by gating the weekly meet.",
      },
    },
    {
      "@type": "Question",
      name: "What is the hardest month for a new fitness club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Month three. The early-adopter excitement has faded, the founding member is starting to feel the time cost, and a few people have stopped showing up. The clubs that survive month three are the ones that have a small ritual — a shared meal, a finish-line photo, a pace-group split — that gives people a reason beyond the workout to be there.",
      },
    },
  ],
};

export default function Post() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
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
                <time dateTime={datePublished}>April 28, 2026</time>
                {" · "}11 min read
              </p>
              <h1
                id="post-heading"
                className="mt-4 max-w-[22ch] text-mega font-bold"
              >
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                A playbook for going from zero members to a self-sustaining
                fitness crew in India. Same time, same place, same people —
                until it isn&rsquo;t just you anymore.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By{" "}
                <Link
                  href="/about/abhishikth-veng"
                  className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]"
                >
                  Abhishikth Veng
                </Link>
                , founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">
                  Pick one thing. Not three.
                </h2>
                <p className="mt-3">
                  The mistake every first-time organizer makes is launching
                  &ldquo;a fitness community&rdquo; — running plus yoga
                  plus calisthenics plus weekly hikes. It dilutes the
                  identity before the community exists. Pick a single
                  discipline. Running is the easiest to start; weightlifting
                  is the hardest because it needs equipment; yoga and
                  bodyweight work sit in the middle. Whatever you pick,
                  call it that thing. &ldquo;Vizag Beach Runners.&rdquo;
                  &ldquo;Lower Parel Lift Club.&rdquo; &ldquo;Indiranagar
                  Sunday Yoga.&rdquo; The name does the filtering for you.
                </p>
                <p className="mt-3">
                  You can branch later. After six months of consistent
                  running, your crew will have its own internal pull
                  towards adjacent activities — the runners will start
                  asking about strength training because they want to run
                  faster; the yogis will start asking about mobility for
                  marathon training. Let those branches grow from a
                  trunk, not as the trunk itself.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Lock the time and place before you tell anyone.
                </h2>
                <p className="mt-3">
                  Decide the day, the time, and the meeting point before
                  you share the club with a single person. Saturday at
                  6:00 AM at the south gate of the city park is a club.
                  &ldquo;We&rsquo;ll figure out the time depending on
                  what works for everyone&rdquo; is a Slack channel that
                  will be dead in three weeks.
                </p>
                <p className="mt-3">
                  In Indian cities, early morning is the right answer
                  for outdoor disciplines. Before 7:00 AM in summer,
                  before 6:30 AM in the monsoon, around 6:00 AM in
                  winter. Heat, traffic, and air quality all conspire
                  against later windows. Sunday mornings work better than
                  Saturday for cities where Saturday is a working day for
                  many. Pick whatever your city does, not what feels
                  ergonomic on paper.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Find your first ten through the people you already know.
                </h2>
                <p className="mt-3">
                  Do not start with social media posts. Start with a
                  message to ten specific people. The neighbour who
                  walks past your gate in athletic shoes. The colleague
                  who mentioned wanting to run a 10K. The college friend
                  who has been complaining about gym motivation. Send
                  each of them a short, specific message: the discipline,
                  the time, the place, the date of the first session.
                  Ask them to reply yes or no.
                </p>
                <p className="mt-3">
                  Three or four will say yes. Two will show. That is
                  enough. The friend who showed will bring a friend the
                  following week. By week four you have six people. By
                  week eight you have eight to twelve. This is the
                  beginning of a club. Posting on Instagram now will
                  amplify what already exists; posting before it exists
                  attracts a queue of people who will never show.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Set a pace honesty rule on day one.
                </h2>
                <p className="mt-3">
                  The single biggest reason fitness clubs lose new
                  members in their first month is pace mismatch. The
                  intermediate runner who joins a &ldquo;beginner-friendly,
                  all paces welcome&rdquo; group, gets dropped at
                  kilometre two, and never comes back. From session
                  one, publish a pace range. &ldquo;Saturday long run,
                  6:00–7:00 minutes per kilometre, 8 km, beach loop.&rdquo;
                  If your group has a wider spread, run two pace groups
                  with two named pacers. This is the difference between
                  a real crew and a scattered &ldquo;event.&rdquo;
                </p>
                <p className="mt-3">
                  The same principle applies outside running. A yoga
                  group should publish the level (gentle, intermediate,
                  power) and the duration. A lifting crew should publish
                  the working set range and any equipment needed. The
                  honesty respects everyone&rsquo;s time, including
                  yours.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Build a small ritual that is not the workout.
                </h2>
                <p className="mt-3">
                  Workouts alone do not hold a community. The ritual
                  around the workout does. Coffee at the same chai shop
                  after every Saturday run. A photo at the same
                  landmark, every week, with whoever showed up. A
                  pre-session question — &ldquo;what was your win this
                  week?&rdquo; — answered while everyone laces up. The
                  ritual is what people miss when they skip a session,
                  not the run itself.
                </p>
                <p className="mt-3">
                  This is also what makes month three survivable. By
                  month three the workout has become routine and the
                  novelty has worn off. The ritual is what people show
                  up for now. Without one, the crew quietly thins until
                  it&rsquo;s just you and the founding member who feels
                  obliged.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Decide what counts as &ldquo;official&rdquo; and what doesn&rsquo;t.
                </h2>
                <p className="mt-3">
                  Members will spawn side groups. Tuesday recovery jogs.
                  A WhatsApp circle for race signups. A weekend hike
                  channel. Most organizers panic about losing control
                  and try to absorb every offshoot back into the main
                  group. Don&rsquo;t. The side activities are a sign of
                  health. What matters is that there is a single
                  flagship session — the Saturday run, the Sunday yoga
                  — that is unambiguously the club. Everything else can
                  flex.
                </p>
                <p className="mt-3">
                  Set one rule: only the flagship session goes in the
                  official feed. Side groups are member-organized,
                  member-attended, member-named. This protects the
                  brand of the club from getting fuzzy as it grows.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  When (and how) to start charging.
                </h2>
                <p className="mt-3">
                  Most successful Indian fitness clubs operate free for
                  the first year. The flywheel is consistency, not
                  revenue. When you do start charging, do it through
                  events, not membership. A paid 10K race. A weekend
                  retreat. Branded merchandise. A photography day. The
                  weekly meet should stay free as long as the club is
                  not your full-time job.
                </p>
                <p className="mt-3">
                  If the club becomes your full-time job — and some do —
                  the model that works in India is paid events, with a
                  small fee per attendee, plus optional sponsorships
                  from local fitness brands, run stores, or beverage
                  companies. Stay away from a recurring monthly
                  membership for as long as possible. It&rsquo;s the
                  fastest way to lose the casual middle of your
                  community.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  Use tools that don&rsquo;t add admin work.
                </h2>
                <p className="mt-3">
                  Every hour you spend on club admin is an hour you
                  don&rsquo;t spend showing up well at the session.
                  Stop using a different tool for RSVPs, waivers,
                  photos, and member messages. Pick one tool that
                  handles the operational layer end to end so you can
                  focus on the parts only a human can do — sponsor
                  conversations, route safety, the energy of the
                  session itself.
                </p>
                <p className="mt-3">
                  AltCrew was built for exactly this layer. Schedules,
                  RSVPs, digital waivers, group photo albums, member
                  messaging, gear and shoe tracking, pace pairing.{" "}
                  <Link
                    href="/organizers"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    Run a club
                  </Link>{" "}
                  for free; if you eventually host a paid event,
                  AltCrew takes a small commission only on those ticket
                  sales. No platform fee, no monthly subscription, no
                  charges on the weekly free meet.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  The only metric that matters in year one.
                </h2>
                <p className="mt-3">
                  It is not member count. It is not Instagram followers.
                  It is the number of consecutive weeks the club has
                  met without skipping. A 40-week unbroken streak with a
                  small, loyal crew is worth ten times more than a
                  300-member group that runs once a month. Compound
                  consistency is the only asset that survives a year of
                  bad weather, exam season, and the founder having a
                  personal crisis. Protect the streak.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">FAQ.</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-bold text-fg">
                      How do I start a fitness club in India with no
                      members?
                    </h3>
                    <p className="mt-2">
                      Pick a single discipline, a single time slot, and a
                      single meeting point. Tell ten people you already
                      know — friends, gym acquaintances, neighbours —
                      that you are starting it and the first session is on
                      a specific date at a specific place. Three will
                      show. Run it the same way the next week. By week
                      six you have a regular crew of eight to twelve.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-fg">
                      What is the best meeting spot for a new fitness
                      club in India?
                    </h3>
                    <p className="mt-2">
                      Public parks with a clear landmark — a specific
                      gate, a flagpole, a banyan tree — work better than
                      gyms or studios for new clubs. They are free,
                      neutral, and visible. Beachfronts, lake circuits,
                      and stadium tracks also work well. Avoid private
                      property unless you have explicit permission and a
                      backup spot.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-fg">
                      How often should a new fitness club meet?
                    </h3>
                    <p className="mt-2">
                      Once a week is the right cadence for the first
                      three months. Same day, same time, same place.
                      Predictability is the single most important
                      property of a young club. Twice a week is for clubs
                      that have proven they can sustain once a week for
                      at least eight weeks straight.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-fg">
                      Do I need to charge a membership fee for a fitness
                      club?
                    </h3>
                    <p className="mt-2">
                      No. Most successful community fitness clubs in
                      India are free for the first year. Charging too
                      early shrinks the funnel before the community has
                      formed. If you eventually want to monetise, do it
                      through paid events, branded gear, or a pro tier
                      with extras — not by gating the weekly meet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-fg">
                      What is the hardest month for a new fitness club?
                    </h3>
                    <p className="mt-2">
                      Month three. The early-adopter excitement has
                      faded, the founding member is starting to feel the
                      time cost, and a few people have stopped showing
                      up. The clubs that survive month three are the
                      ones that have a small ritual — a shared meal, a
                      finish-line photo, a pace-group split — that gives
                      people a reason beyond the workout to be there.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-headline font-bold">
                  What happens next.
                </h2>
                <p className="mt-3">
                  AltCrew launches Sunday May 31, 2026 at 7:30 PM, on
                  stage at the Vizag Fitness and Flea Fest. iOS and
                  Android, same day. Free for members. Free for clubs.
                  Paid events pay a small commission on ticket sales.
                </p>
                <p className="mt-3">
                  If you are starting a club — or already running one —
                  drop your email and city in the{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    waitlist
                  </Link>{" "}
                  or email{" "}
                  <a
                    href="mailto:hello@altcrew.in"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    hello@altcrew.in
                  </a>
                  . We onboard organizers free.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
