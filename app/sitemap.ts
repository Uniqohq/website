import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/assets/uniqo-card-midnight.webp`,
        `${SITE_URL}/assets/uniqo-card-graphite.webp`,
        `${SITE_URL}/assets/uniqo-card-arctic.webp`
      ]
    }
  ];
}

