import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://un-bourguignon.com/",
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://un-bourguignon.com/mentions-legales",
      lastModified: new Date("2026-11-17"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
