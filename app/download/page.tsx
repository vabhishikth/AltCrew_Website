import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Download the app",
  description:
    "Get AltCrew on iOS and Android. Free for members. India social fitness app launching May 31, 2026 with iOS and Android same-day release.",
  alternates: { canonical: "https://altcrew.in/download" },
};

export default function DownloadPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section
          className="relative border-b border-hairline"
          aria-labelledby="download-heading"
        >
          <div className="container-page py-20 md:py-28">
            <Breadcrumb trail={[{ label: "Download", href: "/download" }]} />

            <h1
              id="download-heading"
              className="mt-8 max-w-[18ch] text-mega font-bold"
            >
              The app drops May 31, 2026.
            </h1>

            <p className="mt-6 max-w-[60ch] text-lg text-muted md:text-xl">
              iOS and Android, same day. On stage at 7:30 PM at the Vizag
              Fitness &amp; Flea Fest. Free for members. Always.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:max-w-xl">
              <div className="rounded-lg border border-hairline bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  ios
                </p>
                <p className="mt-3 text-headline font-bold">App Store</p>
                <p className="mt-2 text-sm text-muted">
                  Listing goes live launch day. Save the page now and we will
                  email you the link.
                </p>
              </div>
              <div className="rounded-lg border border-hairline bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  android
                </p>
                <p className="mt-3 text-headline font-bold">Play Store</p>
                <p className="mt-2 text-sm text-muted">
                  Listing goes live launch day. Save the page now and we will
                  email you the link.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 text-base font-medium text-[var(--accent-fg)] transition hover:bg-[var(--color-rust-deep)] active:scale-[0.98]"
              >
                Email me when the app drops
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
