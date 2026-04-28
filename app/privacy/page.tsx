import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How AltCrew collects, uses, and protects your data. India DPDP-aligned privacy notice for the AltCrew waitlist and app.",
  alternates: { canonical: "https://altcrew.in/privacy" },
};

const updated = "April 27, 2026";

export default function Privacy() {
  return (
    <>
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="privacy-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Privacy", href: "/privacy" }]} />
            <div className="mt-8 grid gap-12 md:grid-cols-12">
              <aside className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  privacy
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted/70">
                  Last updated {updated}
                </p>
              </aside>

              <article className="prose-altcrew md:col-span-9 md:pl-6">
                <h1
                  id="privacy-heading"
                  className="text-display max-w-[20ch] font-bold"
                >
                  What we collect, why, and how to opt out.
                </h1>

                <div className="mt-10 space-y-8 text-base text-fg/85 md:max-w-[68ch] md:text-lg">
                  <section>
                    <h2 className="text-headline font-bold">Who runs this site</h2>
                    <p className="mt-3">
                      AltCrew Technologies operates altcrew.in from
                      Visakhapatnam, India. Reach us at{" "}
                      <a
                        href="mailto:hello@altcrew.in"
                        className="underline decoration-[var(--accent)] decoration-2 underline-offset-4"
                      >
                        hello@altcrew.in
                      </a>{" "}
                      for any privacy question, request, or complaint.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">What we collect</h2>
                    <p className="mt-3">
                      When you join the waitlist we collect three things: your
                      email address, your city, and the sports you train (if
                      you choose to share them). That is the entire dataset.
                      We do not collect your name, phone number, address,
                      payment details, or any device fingerprint beyond
                      standard server logs.
                    </p>
                    <p className="mt-3">
                      Vercel Analytics and Vercel Speed Insights run on this
                      site to measure performance and aggregate page views.
                      Both are configured in privacy-friendly mode and do not
                      use cookies or persistent identifiers.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Why we collect it</h2>
                    <p className="mt-3">
                      Email and city let us notify you when AltCrew launches
                      in your area and decide which cities to open next. Sport
                      tags help us match you to a relevant crew on day one.
                      That is the only purpose. No advertising profiling. No
                      sale to third parties.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">How long we keep it</h2>
                    <p className="mt-3">
                      Waitlist entries are retained until thirty days after
                      the AltCrew app launches in your city, after which the
                      record is migrated into your app account or deleted on
                      request. You can request deletion at any time before
                      then.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">How we email you</h2>
                    <p className="mt-3">
                      Two emails before launch and one on launch day. After
                      that we only email if you opted into a specific update
                      inside the app. Every email has a one-click unsubscribe
                      link. No marketing partners receive your address.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Your DPDP rights</h2>
                    <p className="mt-3">
                      Under India&rsquo;s Digital Personal Data Protection Act
                      2023, you can ask us to confirm what data we hold,
                      correct it, delete it, or stop processing it. Email{" "}
                      <a
                        href="mailto:hello@altcrew.in?subject=DPDP%20request"
                        className="underline decoration-[var(--accent)] decoration-2 underline-offset-4"
                      >
                        hello@altcrew.in
                      </a>{" "}
                      with the subject line &ldquo;DPDP request&rdquo; and we
                      respond within seven working days. You can also raise a
                      complaint with the Data Protection Board of India if you
                      believe we have mishandled your data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Security</h2>
                    <p className="mt-3">
                      The site runs on Vercel over HTTPS. The waitlist
                      database is encrypted at rest. Access is restricted to
                      the founder and is audited. We will disclose any breach
                      that affects your data to you and to the Data Protection
                      Board within seventy-two hours of discovery.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-headline font-bold">Changes</h2>
                    <p className="mt-3">
                      Material changes to this notice will be announced by
                      email to anyone on the waitlist at the time of change,
                      with a fourteen-day grace period before the new terms
                      take effect.
                    </p>
                  </section>
                </div>

                <div className="mt-16 border-t border-hairline pt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-[var(--accent)] underline decoration-2 underline-offset-4 hover:text-fg"
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
