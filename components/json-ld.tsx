type Json = Record<string, unknown> | unknown[];

export function JsonLd({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const orgSchema = {
  "@context": "https://schema.org",
  "@id": "https://altcrew.in/#organization",
  "@type": "Organization",
  name: "AltCrew",
  url: "https://altcrew.in",
  logo: "https://altcrew.in/altcrew-logo.svg",
  foundingDate: "2026",
  founder: { "@id": "https://altcrew.in/#founder" },
  email: "hello@altcrew.in",
  sameAs: ["https://instagram.com/altcrew.in"],
  description:
    "AltCrew is an Indian social fitness app helping people find a community to train with: running, lifting, yoga, cycling, swimming, walking, and more.",
  areaServed: { "@type": "Country", name: "India" },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AltCrew",
  url: "https://altcrew.in",
  inLanguage: "en-IN",
  publisher: { "@id": "https://altcrew.in/#organization" },
};

export const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "AltCrew",
  url: "https://altcrew.in/download",
  operatingSystem: "iOS, Android",
  applicationCategory: "HealthApplication",
  description:
    "Find a fitness community to train with. Discovery, pace-matching, group photos, gear tracking, digital waivers.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  datePublished: "2026-05-31",
};

export const venueSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Sai Priya Resorts",
  url: "https://altcrew.in/#festival",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.7833,
    longitude: 83.3667,
  },
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Vizag Fitness & Flea Fest 2026",
  startDate: "2026-05-31T09:00:00+05:30",
  endDate: "2026-05-31T22:00:00+05:30",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Sai Priya Resorts",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Day-long fitness festival and flea market in Visakhapatnam. AltCrew app launches at 7:30 PM during the on-stage Founders Q&A.",
  organizer: { "@type": "Organization", name: "AltCrew Technologies" },
  performer: { "@type": "Organization", name: "AltCrew" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    url: "https://altcrew.in/#waitlist",
    availability: "https://schema.org/PreOrder",
    validFrom: "2026-04-28",
  },
};

export const founderArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A note from the founder",
  about:
    "The personal story behind AltCrew, an Indian social fitness app. Founder Abhishikth Veng on losing 35 kg in a year, the coach who believed in him, and why AltCrew exists for people who never felt welcome in fitness rooms.",
  author: { "@id": "https://altcrew.in/#founder" },
  publisher: {
    "@type": "Organization",
    name: "AltCrew",
    logo: {
      "@type": "ImageObject",
      url: "https://altcrew.in/altcrew-logo.svg",
    },
  },
  image: "https://altcrew.in/portraits/founder.jpeg",
  datePublished: "2026-04-27",
  dateModified: "2026-04-28",
  mainEntityOfPage: "https://altcrew.in/learn/why-we-built-altcrew",
  inLanguage: "en-IN",
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@id": "https://altcrew.in/#founder",
  "@type": "Person",
  name: "Abhishikth Veng",
  givenName: "Abhishikth",
  familyName: "Veng",
  jobTitle: "Founder",
  url: "https://altcrew.in/about",
  worksFor: { "@id": "https://altcrew.in/#organization" },
  description:
    "Founder of AltCrew. Lost 35 kg in a year through walking, weight training, and structured nutrition guided by a coach.",
  sameAs: ["https://www.linkedin.com/in/abhishikth-vengiteela-4752a182"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What cities is AltCrew live in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vizag at launch. More cities open as we have the people to support them well. Drop your city in the waitlist.",
      },
    },
    {
      "@type": "Question",
      name: "Is AltCrew free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Free for members, always. Free for community organizers running a club. The only time AltCrew charges is on paid event ticket sales — a small commission on what is sold. No platform fees, no subscriptions.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of fitness does it cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of it. Running, lifting, yoga, walking, cycling, swimming, padel, badminton, kabaddi. Anything physical you do with other people.",
      },
    },
    {
      "@type": "Question",
      name: "When does the app launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On stage at 7:30 PM, May 31, 2026, at the Vizag Fitness & Flea Fest. iOS and Android, same day.",
      },
    },
  ],
};
