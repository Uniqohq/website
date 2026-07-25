import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { BottomDepthFade } from "@/components/bottom-depth-fade";
import { ClickBurst } from "@/components/click-burst";
import { SiteLocaleProvider } from "@/components/site-locale";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE_VERSION } from "@/lib/site-version";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Uniqo — The card that thinks before it pays",
    template: "%s | Uniqo"
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "FrameLabs LLC", url: SITE_URL }],
  creator: "FrameLabs LLC",
  publisher: "FrameLabs LLC",
  metadataBase: new URL(SITE_URL),
  category: "finance",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    google: "notranslate"
  },
  icons: {
    icon: [
      { url: "/favicon_light.svg", media: "(prefers-color-scheme: light)", type: "image/svg+xml" },
      { url: "/favicon_dark.svg", media: "(prefers-color-scheme: dark)", type: "image/svg+xml" }
    ]
  }
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ececee"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" className="notranslate" data-product="uniqo" data-owner="framelabs">
      <body translate="no" className="notranslate" data-product="uniqo" data-owner="framelabs" data-version={SITE_VERSION}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Script
          id="uniqo-version"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              Object.defineProperty(window, "version", {
                value: ${JSON.stringify(SITE_VERSION)},
                configurable: true,
                writable: false
              });
              Object.defineProperty(window, "uniqoVersion", {
                value: ${JSON.stringify(SITE_VERSION)},
                configurable: true,
                writable: false
              });
              Object.defineProperty(globalThis, "version", {
                value: ${JSON.stringify(SITE_VERSION)},
                configurable: true,
                writable: false
              });
              Object.defineProperty(globalThis, "uniqoVersion", {
                value: ${JSON.stringify(SITE_VERSION)},
                configurable: true,
                writable: false
              });
            `
          }}
        />
        <SiteLocaleProvider>
          <SmoothScroll />
          <ClickBurst />
          {children}
          <BottomDepthFade />
        </SiteLocaleProvider>
      </body>
    </html>
  );
}
