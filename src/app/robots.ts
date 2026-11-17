import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Redirections des QR codes : rien à indexer
      disallow: "/go/",
    },
    sitemap: "https://un-bourguignon.com/sitemap.xml",
  };
}
