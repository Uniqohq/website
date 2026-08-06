import type { SiteRegion } from "@/components/site-locale";

export type CardStyle = "arctic" | "midnight" | "graphite";

const defaultCards: Record<CardStyle, string> = {
  arctic: "/assets/uniqo-card-arctic.webp",
  midnight: "/assets/uniqo-card-midnight.webp",
  graphite: "/assets/uniqo-card-graphite.webp"
};

const mirCards: Record<CardStyle, string> = {
  arctic: "/assets/uniqo-card-arctic-mir.webp",
  midnight: "/assets/uniqo-card-midnight-mir.webp",
  graphite: "/assets/uniqo-card-graphite-mir.webp"
};

export function getCardAsset(region: SiteRegion, style: CardStyle) {
  return region === "ru" ? mirCards[style] : defaultCards[style];
}
