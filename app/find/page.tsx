import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Find a crew",
  description:
    "Find a fitness crew to train with: running, lifting, yoga, cycling, swimming, walking. Crews go live May 31, 2026 across India. Drop your city to influence the rollout.",
  alternates: { canonical: "https://altcrew.in/find" },
  robots: { index: false, follow: true },
};

export default function FindPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="find-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Find a crew", href: "/find" }]} />

            <h1
              id="find-heading"
              className="mt-8 max-w-[20ch] text-mega font-bold"
            >
              Crews go live May 31, 2026.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
              Browse and join fitness crews near you, filter by sport, pace,
              and how welcoming they really are. The map is empty until launch
              day. Drop your email and city. We open new cities by demand.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)] active:scale-[0.98] md:py-3 md:text-base"
              >
                Join the waitlist
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-fg/40 px-5 py-3.5 text-sm font-medium text-fg transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:py-3 md:text-base"
              >
                Read the playbook
              </Link>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  what you will see
                </p>
                <p className="mt-3 text-base text-fg/80">
                  Every crew, club, class, and meet in your city, on one map.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  how it matches
                </p>
                <p className="mt-3 text-base text-fg/80">
                  By sport, your level (casual, intermediate, athlete), and
                  schedule fit. You see how many people at your pace are
                  going, before you go.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  what it costs
                </p>
                <p className="mt-3 text-base text-fg/80">
                  Free for members. Always.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
