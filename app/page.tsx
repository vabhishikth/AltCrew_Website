import { FestivalBar } from "@/components/festival-bar";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Problem } from "@/components/sections/problem";
import { What } from "@/components/sections/what";
import { Features } from "@/components/sections/features";
import { How } from "@/components/sections/how";
import { Stats } from "@/components/sections/stats";
import { Founder } from "@/components/sections/founder";
import { OrganizerApp } from "@/components/sections/organizer-app";
import { Festival } from "@/components/sections/festival";
import { WorldOfMovement } from "@/components/sections/world-of-movement";
import { AudienceSplit } from "@/components/sections/audience-split";
import { Communities } from "@/components/sections/communities";
import { Faq } from "@/components/sections/faq";
import { Waitlist } from "@/components/sections/waitlist";
import {
  JsonLd,
  orgSchema,
  websiteSchema,
  appSchema,
  eventSchema,
  faqSchema,
  founderSchema,
  founderArticleSchema,
  venueSchema,
} from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={appSchema} />
      <JsonLd data={venueSchema} />
      <JsonLd data={eventSchema} />
      <JsonLd data={founderSchema} />
      <JsonLd data={founderArticleSchema} />
      <JsonLd data={faqSchema} />

      <FestivalBar />
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Founder />
        <What />
        <WorldOfMovement />
        <How />
        <Communities />
        <Features />
        <Stats />
        <AudienceSplit />
        <OrganizerApp />
        <Festival />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
