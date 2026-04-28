import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Abhishikth Veng — Founder of AltCrew",
  description:
    "Abhishikth Veng is the founder of AltCrew, India's social fitness app. He lost 35 kilos in a year through walking, weight training, and structured nutrition, and now builds the discovery layer for the fitness communities he wishes had existed when he started.",
  alternates: { canonical: "https://altcrew.in/about/abhishikth-veng" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@id": "https://altcrew.in/#founder",
  "@type": "Person",
  name: "Abhishikth Veng",
  givenName: "Abhishikth",
  familyName: "Veng",
  jobTitle: "Founder",
  url: "https://altcrew.in/about/abhishikth-veng",
  worksFor: { "@id": "https://altcrew.in/#organization" },
  description:
    "Founder of AltCrew. Lost 35 kg in a year through walking, weight training, and structured nutrition guided by a coach. Building India's social fitness app for people who never felt welcome in fitness rooms.",
  sameAs: ["https://www.linkedin.com/in/abhishikth-vengiteela-4752a182"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  knowsAbout: [
    "social fitness apps",
    "community building",
    "running clubs in India",
    "fitness app product design",
    "founder-led startups",
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Abhishikth Veng — Founder of AltCrew",
  url: "https://altcrew.in/about/abhishikth-veng",
  mainEntity: { "@id": "https://altcrew.in/#founder" },
  inLanguage: "en-IN",
};

const writing = [
  {
    href: "/learn/how-to-start-a-fitness-club-from-scratch-india",
    title: "How to start a fitness club from scratch in India",
    blurb:
      "Pick one discipline, lock the time and place, find your first ten through people you already know. The playbook for going from zero to a self-sustaining crew.",
  },
  {
    href: "/learn/why-we-built-altcrew",
    title: "Why we built AltCrew",
    blurb:
      "A founder note on losing 35 kilos in a year and building the fitness community layer he wishes had existed when he started.",
  },
  {
    href: "/learn/complete-beginners-guide-to-joining-a-running-club-india",
    title: "A complete beginner's guide to joining a running club in India",
    blurb:
      "What to expect at your first group run, how to read pace ranges, and why crews often welcome beginners louder than they advertise.",
  },
  {
    href: "/learn/how-to-start-running-with-a-crew",
    title: "How to start running with a crew",
    blurb:
      "The first month of crew running, week by week. How to find a group, how to show up, and how to keep going past the second Saturday.",
  },
  {
    href: "/learn/what-makes-a-fitness-crew-worth-showing-up-for",
    title: "What makes a fitness crew worth showing up for",
    blurb:
      "The five soft signals that separate a crew you keep coming back to from one you ghost after two sessions.",
  },
  {
    href: "/learn/flash-album-24-hour-event-photos",
    title: "Why event photo albums should expire",
    blurb:
      "How a 24-hour photo window changes what people post, what gets shared, and how the next event sells.",
  },
  {
    href: "/learn/what-600-km-does-to-a-running-shoe",
    title: "What 600 km does to a running shoe",
    blurb:
      "The case for tracking shoe mileage and why most runners are training in dead foam without realising it.",
  },
  {
    href: "/learn/free-workout-spaces-india",
    title: "Free workout spaces in India",
    blurb:
      "A guide to public parks, beaches, and outdoor gym setups across Indian cities — with notes on what each is good for.",
  },
];

export default function AbhishikthVengPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={profilePageSchema} />
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="profile-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb
              trail={[
                { label: "About", href: "/about" },
                { label: "Abhishikth Veng", href: "/about/abhishikth-veng" },
              ]}
            />

            <div className="mt-10 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-4">
                <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-[14px] border border-hairline bg-fg/[0.04]">
                  <Image
                    src="/portraits/founder.jpeg"
                    alt="Abhishikth Veng, founder of AltCrew"
                    fill
                    sizes="(min-width: 768px) 320px, 80vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 space-y-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                  <p className="text-fg">Abhishikth Veng</p>
                  <p>Founder · Visakhapatnam, India</p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/abhishikth-vengiteela-4752a182"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]"
                    >
                      LinkedIn
                    </a>{" "}
                    ·{" "}
                    <a
                      href="mailto:hello@altcrew.in"
                      className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]"
                    >
                      hello@altcrew.in
                    </a>
                  </p>
                </div>
              </aside>

              <div className="md:col-span-8 md:pl-6">
                <h1
                  id="profile-heading"
                  className="text-mega max-w-[18ch] font-bold"
                >
                  Abhishikth Veng.
                </h1>
                <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
                  Founder of AltCrew. Building India&rsquo;s social fitness
                  app for people who never felt welcome in fitness rooms.
                </p>

                <div className="prose-altcrew mt-12 max-w-[68ch] space-y-5 text-base text-fg/85 md:text-lg">
                  <p>
                    For most of my twenties, I wanted to get fit and could
                    not bring myself to start. The rooms didn&rsquo;t feel
                    like they were for someone shaped like me. The people in
                    them didn&rsquo;t make space. The Indian fitness scene
                    looked, from the outside, like a club where you needed
                    to already be lean to be welcomed.
                  </p>
                  <p>
                    Then I got a coach who believed in me before I believed
                    in myself. He gave me a walking plan, a lifting plan,
                    and a way of eating that was specific enough to follow
                    on a bad day. I lost 35 kilos in a year. The body
                    changed. What changed more was the realisation that
                    none of this was complicated — it was just unavailable
                    to most people who needed it.
                  </p>
                  <p>
                    AltCrew is the layer I wish had existed when I started.
                    A way to find a crew to lift, run, stretch, ride, or
                    swim with — in your neighbourhood, at your pace, with
                    people who know what showing up for the first time
                    feels like. We tell members who they can train with.
                    We give organizers the tools to run their clubs
                    without spreadsheets. And we keep both sides free
                    forever, except for a small commission on paid event
                    ticket sales.
                  </p>
                  <p>
                    I write about social fitness, community design,
                    discovery products, and what it actually takes to keep
                    showing up. Most pieces are short. All of them are
                    written from doing it, not from observing it.
                  </p>
                </div>

                <div className="mt-16">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    writing
                  </p>
                  <ul className="mt-6 space-y-6">
                    {writing.map((w) => (
                      <li
                        key={w.href}
                        className="border-t border-hairline pt-5"
                      >
                        <Link
                          href={w.href}
                          className="block hover:text-[var(--accent)]"
                        >
                          <h2 className="text-headline font-bold text-fg group-hover:text-[var(--accent)]">
                            {w.title}
                          </h2>
                          <p className="mt-2 max-w-[60ch] text-base text-muted md:text-lg">
                            {w.blurb}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-16 border-t border-hairline pt-8">
                  <p className="max-w-[60ch] text-base text-fg/80 md:text-lg">
                    Want to talk to me directly? Email{" "}
                    <a
                      href="mailto:hello@altcrew.in"
                      className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                    >
                      hello@altcrew.in
                    </a>{" "}
                    or DM{" "}
                    <a
                      href="https://www.linkedin.com/in/abhishikth-vengiteela-4752a182"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                    >
                      on LinkedIn
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
