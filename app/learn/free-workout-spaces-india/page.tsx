import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

const slug = "free-workout-spaces-india";
const title = "Free workout spaces in Indian cities, a field guide";
const description =
  "Parks, beaches, rooftops, government tracks, outdoor open gyms. A practical guide to finding free workout spaces in any Indian city, no membership required.";
const datePublished = "2026-06-01";
const dateModified = "2026-06-01";

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
                <time dateTime={datePublished}>June 1, 2026</time>
                {" · "}11 min read
              </p>
              <h1 id="post-heading" className="mt-4 max-w-[24ch] text-mega font-bold">
                {title}
              </h1>
              <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                A free workout space is any public or semi-public location
                where you can run, walk, lift, or stretch without paying a
                membership. Indian cities have more of these than residents
                realize. The barrier is not access. The barrier is knowing
                they exist.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                By Abhishikth Veng, founder of AltCrew
              </p>
            </header>

            <div className="prose-altcrew mt-16 max-w-[68ch] space-y-10 text-base text-fg/85 md:text-lg">
              <section>
                <h2 className="text-headline font-bold">The five categories.</h2>
                <p className="mt-4">
                  Most free workout spaces in Indian cities fall into five
                  buckets. Knowing the buckets makes searching faster.
                </p>
                <ol className="mt-6 list-decimal space-y-2 pl-5">
                  <li>Parks and gardens.</li>
                  <li>Beaches, lakes, and waterfronts.</li>
                  <li>Rooftops, residential and commercial.</li>
                  <li>
                    Government tracks: stadiums, district sports authority
                    grounds, school grounds.
                  </li>
                  <li>Outdoor open gyms (Smart Cities Mission installations).</li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">Parks: how to read suitability.</h2>
                <p className="mt-4">
                  Not every park is good for fitness. The four signals
                  that matter:
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Loop distance.</strong> A park with a marked
                    loop between four hundred metres and one kilometre is
                    ideal for intervals. Parks with no loop force you to
                    do out-and-backs, which kill flow.
                  </li>
                  <li>
                    <strong>Surface.</strong> Compacted earth or paved
                    walking paths work. Loose gravel does not. Grass-only
                    parks are fine for yoga, bad for running.
                  </li>
                  <li>
                    <strong>Lighting.</strong> Lights on at 5 AM matter if
                    you train before sunrise. Most major Indian city parks
                    light up by 5:30 AM in summer.
                  </li>
                  <li>
                    <strong>Peak hours.</strong> Most parks empty out
                    between 7 AM and 9 AM after the morning walkers leave.
                    Use that window for hill repeats or strides without
                    weaving through pedestrians.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold">Beaches and waterfronts: the morning rule.</h2>
                <p className="mt-4">
                  Indian beaches and lake waterfronts are excellent free
                  workout spaces with one rule: morning only. By 9 AM the
                  sand is too hot, the foot traffic too dense, and the
                  vendors are setting up. From 5 AM to 8 AM the same
                  beach is empty, cool, and surface-firm.
                </p>
                <p className="mt-4">
                  The wet sand strip, that band three to five metres from
                  the waterline, is the best running surface a beach
                  offers. It is firm under load, soft on impact, and self-
                  cooled by tide.
                </p>
                <p className="mt-4">
                  Lake fronts are a bigger window than beaches. Many city
                  lake parks stay usable through 10 AM in winter. Check
                  the local norm before you commit a routine.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Rooftops: the residential model.</h2>
                <p className="mt-4">
                  Rooftops are the most underused free workout space in
                  India. Most residential cooperative buildings have a
                  rooftop the building secretary can grant access to. The
                  ask is much smaller than people think.
                </p>
                <p className="mt-4">
                  Practical script: speak to the building secretary, offer
                  to keep the space clean, agree a window (usually 5 AM to
                  7 AM and 6 PM to 8 PM), confirm whether shoes are okay
                  on the floor. Most buildings will say yes if you ask.
                </p>
                <p className="mt-4">
                  Rooftop yoga, bodyweight strength, mobility work, and
                  early morning crew warmups all work here. What does not
                  work: heavy weights (the rooftop is not load-rated for
                  dropped barbells), and music after 8 AM (neighbours).
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Government tracks.</h2>
                <p className="mt-4">
                  Most Indian cities have at least one publicly accessible
                  athletics track. They are usually run by the District
                  Sports Authority or the state Sports Authority of India
                  (SAI) office. Public hours vary. The standard pattern:
                  weekday early mornings open to the public, afternoons
                  reserved for athletes, evenings open again.
                </p>
                <p className="mt-4">
                  Walk into the office, ask about public hours, ask if
                  there is a token system. Some tracks have a small token
                  fee, some are free. None are aware of you until you
                  ask.
                </p>
                <p className="mt-4">
                  School grounds with weekend public access are a second
                  category here. Many schools, especially CBSE and ICSE
                  campuses, open their fields on Saturday and Sunday
                  mornings to local residents.
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Outdoor open gyms.</h2>
                <p className="mt-4">
                  The Smart Cities Mission, launched in 2015, installed
                  outdoor open gyms in thousands of Indian neighbourhoods.
                  Pull-up bars, dip bars, leg-press machines, ellipticals,
                  all bolted into concrete pads, all free, most underused.
                </p>
                <p className="mt-4">
                  The challenge: they are rarely mapped on Google Maps
                  with the right tag. Search for &ldquo;open gym&rdquo;
                  near your locality and pin the ones you find. Many
                  cities have these spaced every kilometre or two.
                </p>
                <p className="mt-4">
                  What works on these: bodyweight strength circuits,
                  pull-up volume, dip work, light cardio. What does not
                  work: anything requiring weight progression beyond
                  bodyweight (the equipment is fixed-load).
                </p>
              </section>

              <section>
                <h2 className="text-headline font-bold">Etiquette for free spaces.</h2>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Cleanup.</strong> Carry out everything you
                    bring in. Empty water bottles, sweat towels, fruit
                    peels. The space exists because previous users
                    treated it well.
                  </li>
                  <li>
                    <strong>Noise.</strong> Music on speakers in public
                    parks is cultural friction. Wear headphones. The
                    other walkers came for quiet.
                  </li>
                  <li>
                    <strong>Space sharing.</strong> If a track is busy,
                    run in the outer lanes. If open gym equipment is in
                    use, do not hover, work in.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold">Safety windows.</h2>
                <p className="mt-4">
                  Three Indian-specific safety considerations:
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Heatwave windows.</strong> April through June
                    in most cities, training before 6:30 AM is the only
                    safe outdoor option. After 7:30 AM, wet bulb readings
                    can cross dangerous thresholds.
                  </li>
                  <li>
                    <strong>Monsoon.</strong> Outdoor surfaces become
                    slick and standing water hides potholes. Shift to
                    rooftops or covered open-gym installations during
                    the heaviest weeks.
                  </li>
                  <li>
                    <strong>Foot traffic and lighting.</strong> Avoid
                    isolated parks before sunrise if you train alone. The
                    crew solution helps here, several pairs of eyes
                    change the equation.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold">How to find spaces without local contacts.</h2>
                <p className="mt-4">
                  Three searches that uncover most of what is around you:
                </p>
                <ol className="mt-6 list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Google Maps satellite scout.</strong> Switch
                    to satellite, zoom to your neighbourhood, look for
                    green polygons (parks) and rectangular athletic
                    surfaces (tracks). Pin every one you find within a
                    five kilometre radius.
                  </li>
                  <li>
                    <strong>RWA WhatsApp groups.</strong> The local
                    Resident Welfare Association group will know which
                    parks are popular and which open gym installations
                    are functional vs broken. Ask once, save the answer.
                  </li>
                  <li>
                    <strong>City open-data portals.</strong> Most major
                    Indian cities now have open-data portals (data.gov.in
                    or municipal-corporation-specific). Outdoor gym
                    installations are often catalogued there.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-headline font-bold">Stay in touch.</h2>
                <p className="mt-4">
                  AltCrew launches May 31, 2026. We email when new cities
                  open, when guides like this drop, and when crews go
                  live near you. Drop your city in the{" "}
                  <Link
                    href="/#waitlist"
                    className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                  >
                    waitlist
                  </Link>
                  . Free for members. Always.
                </p>
              </section>
            </div>

            <footer className="mt-16 max-w-[68ch] border-t border-hairline pt-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Last updated June 1, 2026
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
