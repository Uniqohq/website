import type { Metadata } from "next";
import { WaitlistPageContent } from "@/components/waitlist-page-content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: "Join the Uniqo waitlist to hear when the pre-launch intelligent card experience becomes available in your region.",
  alternates: {
    canonical: "/waitlist"
  },
  robots: {
    index: false,
    follow: true
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/waitlist`,
    siteName: SITE_NAME,
    title: "Join the Uniqo waitlist",
    description: SITE_DESCRIPTION,
    images: [{ url: SOCIAL_IMAGE, width: 1200, height: 750, alt: "Uniqo Midnight payment card" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Uniqo waitlist",
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE]
  }
};

export default function WaitlistPage() {
  return <WaitlistPageContent />;
}
