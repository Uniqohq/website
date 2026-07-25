import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Pricing } from "@/components/pricing";
import { Products } from "@/components/products";
import { Security } from "@/components/security";
import { StructuredData } from "@/components/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_IMAGE, SOCIAL_LINKS } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 750,
        alt: "Uniqo Midnight payment card"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@uniqohq",
    creator: "@uniqohq",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE]
  }
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "FrameLabs LLC",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/uniqo-logo.svg`,
      email: "legal@uniqo.one",
      sameAs: [SOCIAL_LINKS.x, SOCIAL_LINKS.telegram, SOCIAL_LINKS.tiktok]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "ru"]
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#product` },
      inLanguage: "en"
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "Uniqo Card",
      description: "A pre-launch intelligent payment card with real-time controls, virtual cards, spending insights and payment protection.",
      brand: { "@type": "Brand", name: SITE_NAME },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
      category: "Payment card",
      image: [
        `${SITE_URL}/assets/uniqo-card-midnight.webp`,
        `${SITE_URL}/assets/uniqo-card-graphite.webp`,
        `${SITE_URL}/assets/uniqo-card-arctic.webp`
      ],
      offers: [
        { "@type": "Offer", name: "Arctic", price: "0", priceCurrency: "USD", availability: "https://schema.org/PreOrder", url: `${SITE_URL}/waitlist` },
        { "@type": "Offer", name: "Midnight monthly", price: "4.99", priceCurrency: "USD", availability: "https://schema.org/PreOrder", url: `${SITE_URL}/waitlist` },
        { "@type": "Offer", name: "Midnight yearly", price: "48", priceCurrency: "USD", availability: "https://schema.org/PreOrder", url: `${SITE_URL}/waitlist` },
        { "@type": "Offer", name: "Graphite monthly", price: "9.99", priceCurrency: "USD", availability: "https://schema.org/PreOrder", url: `${SITE_URL}/waitlist` },
        { "@type": "Offer", name: "Graphite yearly", price: "96", priceCurrency: "USD", availability: "https://schema.org/PreOrder", url: `${SITE_URL}/waitlist` }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <StructuredData data={homeStructuredData} />
      <Header />
      <main id="main-content">
        <Hero />
        <Products />
        <Features />
        <Security />
        <Pricing />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
