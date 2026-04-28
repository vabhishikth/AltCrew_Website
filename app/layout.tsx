import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://altcrew.in"),
  title: {
    default: "AltCrew: Find a fitness community to train with.",
    template: "%s · AltCrew",
  },
  description:
    "India's social fitness app. Find a crew to lift, run, stretch, ride, or swim with, in your neighbourhood, at your pace. Launching May 31, 2026.",
  keywords: [
    "fitness community India",
    "running club Vizag",
    "social fitness app",
    "Visakhapatnam fitness",
    "yoga group India",
    "AltCrew",
  ],
  openGraph: {
    title: "AltCrew: Find your Crew",
    description:
      "Find a crew to lift, run, stretch, ride, or swim with. India's social fitness app.",
    url: "https://altcrew.in",
    siteName: "AltCrew",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "AltCrew: Find a fitness community to train with.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AltCrew",
    description:
      "Find a crew to lift, run, stretch, ride, or swim with. India's social fitness app.",
    images: ["/og-default.jpg"],
  },
  alternates: { canonical: "https://altcrew.in" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ebdd" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1714" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${figtree.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
