import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://altcrew.in";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/find`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/download`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/learn/how-to-start-running-with-a-crew`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/what-makes-a-fitness-crew-worth-showing-up-for`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/why-we-built-altcrew`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/what-600-km-does-to-a-running-shoe`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/flash-album-24-hour-event-photos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/free-workout-spaces-india`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/learn/complete-beginners-guide-to-joining-a-running-club-india`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/organizers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/organizers/host-an-event`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
