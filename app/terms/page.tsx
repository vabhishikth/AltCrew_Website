import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "AltCrew terms of service. India-aligned terms covering the website, the upcoming app, organizer tools, and the launch event.",
  alternates: { canonical: "https://altcrew.in/terms" },
};

const updated = "April 27, 2026";

export default function Terms() {
  return (
    <>
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="terms-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Terms", href: "/terms" }]} />

            <div className="mt-8 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  terms
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  Last updated {updated}
                </p>
              </aside>

              <article className="md:col-span-9 md:pl-6">
                <h1
                  id="terms-heading"
                  className="text-display max-w-[22ch] font-bold"
                >
                  The rules for using AltCrew.
                </h1>

                <div className="mt-10 space-y-8 text-base text-fg/85 md:max-w-[68ch] md:text-lg">
                  <section>
                    <h2 className="text-headline font-bold">Who we are</h2>
                    <p className="mt-3">
                      AltCrew is operated by AltCrew Technologies, a company
                      based in Visakhapatnam, India. Reach us at{" "}
                      <a
                        href="mailto:hello@altcrew.in"
                        className="underline decoration-[var(--accent)] decoration-2 underline-offset-4"
                      >
                        hello@altcrew.in
                      </a>
                      .
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">What you get</h2>
                    <p className="mt-3">
                      Use of the AltCrew website, the AltCrew mobile app
                      (iOS and Android, launching May 31, 2026), and any
                      organizer tools provided to you under our pre-launch
                      free tier through August 2026.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">
                      What we expect from you
                    </h2>
                    <p className="mt-3">
                      Honest information when joining the waitlist or signing
                      up. Respectful behaviour towards other members and
                      organizers. No spam, no scraping, no automated misuse,
                      no impersonation.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Content you post</h2>
                    <p className="mt-3">
                      You retain ownership of photos, comments, and event
                      content you post. You grant AltCrew a non-exclusive
                      licence to display that content within the app and on
                      altcrew.in for the purpose of running the service. We
                      will remove content you ask us to remove.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">
                      Organizer responsibilities
                    </h2>
                    <p className="mt-3">
                      Organizers are responsible for the safety and conduct
                      of their events, the accuracy of pace and capacity
                      claims, valid waivers where applicable, and compliance
                      with local laws and venue rules. AltCrew provides
                      tools, not legal cover.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">
                      No medical advice
                    </h2>
                    <p className="mt-3">
                      AltCrew is not a medical service. We do not give
                      training plans tailored to your health. Consult a
                      qualified professional before starting any new fitness
                      programme, especially if you have existing health
                      conditions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Pricing changes</h2>
                    <p className="mt-3">
                      Members use AltCrew free, always. Organizers use it
                      free through August 2026. The paid organizer tier
                      launches September 2026 with INR pricing announced
                      shortly. We will email all active organizers thirty
                      days before any pricing change takes effect.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Termination</h2>
                    <p className="mt-3">
                      You can stop using AltCrew at any time and ask us to
                      delete your account. We may suspend accounts that
                      violate these terms, with notice where possible.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Liability</h2>
                    <p className="mt-3">
                      AltCrew is provided as is. We are not liable for
                      injuries sustained at events listed on AltCrew, for
                      organizer conduct, or for indirect or consequential
                      losses. Our maximum aggregate liability for any claim
                      is capped at amounts you have paid us in the preceding
                      twelve months.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">
                      Governing law and disputes
                    </h2>
                    <p className="mt-3">
                      These terms are governed by Indian law. Disputes will
                      be resolved in courts of Visakhapatnam, Andhra Pradesh.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Changes</h2>
                    <p className="mt-3">
                      Material changes to these terms will be announced at
                      least fourteen days before they take effect, by email
                      to anyone with an account or waitlist entry.
                    </p>
                  </section>
                </div>

                <div className="mt-16 border-t border-hairline pt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[var(--accent)] underline decoration-2 underline-offset-4"
                  >
                    <span aria-hidden>←</span>
                    Back to altcrew.in
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
