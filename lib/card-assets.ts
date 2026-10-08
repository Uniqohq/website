import type { SiteRegion } from "@/components/site-locale";

export type CardStyle = "arctic" | "midnight" | "graphite" | "sirius";

const defaultCards: Record<CardStyle, string> = {
  arctic: "/assets/uniqo-card-arctic.png",
  midnight: "/assets/uniqo-card-midnight.png",
  graphite: "/assets/uniqo-card-graphite.png",
  sirius: "/assets/uniqo-card-sirius.png"
};

const mirCards: Record<CardStyle, string> = {
  arctic: "/assets/uniqo-card-arctic-mir.png",
  midnight: "/assets/uniqo-card-midnight-mir.png",
  graphite: "/assets/uniqo-card-graphite-mir.png",
  // No MIR render of Sirius yet: the default render is used in every region.
  sirius: "/assets/uniqo-card-sirius.png"
};

export function getCardAsset(region: SiteRegion, style: CardStyle) {
  return region === "ru" ? mirCards[style] : defaultCards[style];
}
