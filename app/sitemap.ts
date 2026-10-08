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
        `${SITE_URL}/assets/uniqo-card-midnight.png`,
        `${SITE_URL}/assets/uniqo-card-graphite.png`,
        `${SITE_URL}/assets/uniqo-card-arctic.png`,
        `${SITE_URL}/assets/uniqo-card-sirius.png`
      ]
    },
    {
      url: `${SITE_URL}/press`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4
    }
  ];
}

