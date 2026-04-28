import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "AltCrew is an India-first social fitness app. Our origin, our founder, our principles, and what we mean when we say find your crew.",
  alternates: { canonical: "https://altcrew.in/about" },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AltCrew",
  url: "https://altcrew.in/about",
  description:
    "AltCrew is an India-first social fitness app helping people find a community to train with.",
  mainEntity: {
    "@type": "Organization",
    name: "AltCrew",
    founder: { "@type": "Person", name: "Abhishikth Veng", jobTitle: "Founder" },
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="about-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "About", href: "/about" }]} />

            <h1
              id="about-heading"
              className="mt-8 max-w-[20ch] text-mega font-bold"
            >
              We are building the layer that finds your people.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
              AltCrew is an India-first social fitness app. The premise:
              fitness in India is everywhere, but it is hidden inside private
              groups, on rooftops you have to know about, and in WhatsApp
              chats you were not added to. Our job is to make all of that
              findable.
            </p>

            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  origin
                </p>
              </aside>
              <div className="md:col-span-9 md:pl-6 md:max-w-[60ch]">
                <article className="space-y-5 text-lg text-fg/90 md:text-xl">
                  <div className="flex items-center gap-5">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-fg/20 bg-bg">
                      <Image
                        src="/portraits/founder.jpeg"
                        alt="Abhishikth Veng, founder of AltCrew"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">Abhishikth Veng</div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
                        founder ·{" "}
                        <a
                          href="https://www.linkedin.com/in/abhishikth-vengiteela-4752a182"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-[var(--accent)] decoration-1 underline-offset-2 hover:text-[var(--accent)]"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                  <p>
                    For years I wanted to get fit, but I couldn&rsquo;t bring
                    myself to join anything. The rooms didn&rsquo;t feel like
                    they were for me, and the people in them didn&rsquo;t make
                    space.
                  </p>
                  <p>
                    A coach changed that. He believed in me more than I did.
                    So I walked. I lifted. I ate what he told me to eat. I
                    lost 35 kilos in a year.
                  </p>
                  <p>
                    Most people don&rsquo;t get a coach like that. They give
                    up before they start, or after one bad attempt, because
                    the communities they tried weren&rsquo;t built for someone
                    who looks, or weighs, or feels the way they do.
                  </p>
                  <p>
                    AltCrew is for them. If that&rsquo;s you, we&rsquo;re
                    building this for you.
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    Last updated: April 28, 2026
                  </p>
                </article>
              </div>
            </div>

            <div className="mt-20 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  what we believe
                </p>
              </aside>
              <div className="md:col-span-9 md:pl-6">
                <ul className="grid gap-8 md:max-w-[68ch] md:grid-cols-2">
                  <li>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      crew over solo
                    </p>
                    <p className="mt-3 text-base text-fg/80 md:text-lg">
                      You are more likely to keep going if you train with
                      people. Solo is a stage, not a destination.
                    </p>
                  </li>
                  <li>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      free for members, always
                    </p>
                    <p className="mt-3 text-base text-fg/80 md:text-lg">
                      Discovery is a public good. We monetize organizers, not
                      members.
                    </p>
                  </li>
                  <li>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      pace honesty
                    </p>
                    <p className="mt-3 text-base text-fg/80 md:text-lg">
                      Every crew publishes a real pace range. No
                      &ldquo;all paces welcome&rdquo; without a number.
                    </p>
                  </li>
                  <li>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      india first
                    </p>
                    <p className="mt-3 text-base text-fg/80 md:text-lg">
                      Built in India for Indian sports, weather, prices, and
                      ways of meeting up.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-20 border-t border-hairline pt-10">
              <p className="max-w-[60ch] text-base text-fg/80 md:text-lg">
                Want to be part of it? Drop your email in the{" "}
                <Link
                  href="/#waitlist"
                  className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                >
                  waitlist
                </Link>{" "}
                or reach us at{" "}
                <a
                  href="mailto:hello@altcrew.in"
                  className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
                >
                  hello@altcrew.in
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
