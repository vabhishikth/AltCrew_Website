import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Help",
  description:
    "Help center for AltCrew. Common questions about the waitlist, the app launch, organizer tools, and how to reach us.",
  alternates: { canonical: "https://altcrew.in/help" },
};

const helpFaqs = [
  {
    q: "When does the AltCrew app launch?",
    a: "On stage at 7:30 PM, Sunday May 31, 2026, at the Vizag Fitness and Flea Fest. iOS and Android same day.",
  },
  {
    q: "Is AltCrew free?",
    a: "Yes for members, always. Community organizers use it free through August 2026. A paid organizer tier launches September 2026 with INR pricing announced shortly.",
  },
  {
    q: "How do I join the waitlist?",
    a: "Drop your email and city on the homepage. We email twice before launch and once on launch day. No spam.",
  },
  {
    q: "Which cities does AltCrew open in?",
    a: "Vizag at launch. More cities open as we have the people to support them well. Add your city to the waitlist to influence the rollout order.",
  },
  {
    q: "I run a club. How do I list it?",
    a: "Email hello@altcrew.in or use the host page. We onboard you free through August 2026.",
  },
  {
    q: "How do I delete my data?",
    a: "Email hello@altcrew.in with the subject line DPDP request. We respond within seven working days.",
  },
  {
    q: "Where can I follow updates?",
    a: "On Instagram at @altcrew.in or on the Learn section of the website.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: helpFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HelpPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="help-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Help", href: "/help" }]} />

            <h1
              id="help-heading"
              className="mt-8 max-w-[20ch] text-mega font-bold"
            >
              Common questions, plain answers.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
              Cannot find what you are looking for? Email{" "}
              <a
                href="mailto:hello@altcrew.in"
                className="underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--accent)]"
              >
                hello@altcrew.in
              </a>{" "}
              and a human will respond.
            </p>

            <ul className="mt-16 max-w-3xl divide-y divide-hairline border-y border-hairline">
              {helpFaqs.map((f) => (
                <li key={f.q} className="py-8">
                  <h2 className="text-headline font-bold">{f.q}</h2>
                  <p className="mt-3 max-w-[60ch] text-fg/85">{f.a}</p>
                </li>
              ))}
            </ul>

            <div className="mt-16 flex flex-wrap gap-4">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)]"
              >
                Join the waitlist
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-fg/40 px-5 py-3 text-sm font-medium text-fg transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Read the playbook
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
