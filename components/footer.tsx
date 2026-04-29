import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <Link href="/" aria-label="AltCrew home" className="inline-block">
            <Logo className="h-12" />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-muted">
            Find a fitness community to train with.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs font-mono uppercase tracking-widest text-muted">
            <span aria-hidden>iOS &amp; Android, May 31, 2026</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
            Find
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/find" className="hover:text-accent">
                Find a crew
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-accent">
                Download
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-accent">
                Features
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
            Host
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/organizers" className="hover:text-accent">
                Host a club
              </Link>
            </li>
            <li>
              <Link href="/organizers/host-an-event" className="hover:text-accent">
                Host an event
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@altcrew.in?subject=Organizer%20interest"
                className="hover:text-accent"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
            Read
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/learn" className="hover:text-accent">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-accent">
                Help
              </Link>
            </li>
            <li>
              <Link href="/#festival" className="hover:text-accent">
                Festival
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:hello@altcrew.in" className="hover:text-accent">
                hello@altcrew.in
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/altcrewapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram @altcrewapp
              </a>
            </li>
            <li>
              <Link href="/#waitlist" className="hover:text-accent">
                Join the waitlist
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-widest text-muted md:flex-row md:items-center">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            <span>© 2026 AltCrew Technologies</span>
            <time dateTime="2026-04-29" className="text-muted/70">
              Last updated April 29, 2026
            </time>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
            <a href="/llms.txt" className="hover:text-accent">
              llms.txt
            </a>
            <a href="/robots.txt" className="hover:text-accent">
              robots.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
