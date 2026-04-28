import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://altcrew.in";
  return [
    { url: `${base}/`, lastModified: new Date("2026-04-28"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/download`, lastModified: new Date("2026-04-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn`, lastModified: new Date("2026-04-28"), changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/learn/how-to-start-running-with-a-crew`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/what-makes-a-fitness-crew-worth-showing-up-for`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/why-we-built-altcrew`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/what-600-km-does-to-a-running-shoe`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/flash-album-24-hour-event-photos`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/free-workout-spaces-india`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/complete-beginners-guide-to-joining-a-running-club-india`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/how-to-start-a-fitness-club-from-scratch-india`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/about/abhishikth-veng`, lastModified: new Date("2026-04-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/organizers`, lastModified: new Date("2026-04-28"), changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/organizers/host-an-event`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${base}/about`, lastModified: new Date("2026-04-28"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/help`, lastModified: new Date("2026-04-28"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: new Date("2026-04-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date("2026-04-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
