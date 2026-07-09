import type { Metadata } from "next";
import Script from "next/script";
import { BottomDepthFade } from "@/components/bottom-depth-fade";
import { ClickBurst } from "@/components/click-burst";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE_VERSION } from "@/lib/site-version";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uniqo",
  description: "The card that thinks before it pays.",
  creator: "FrameLabs LLC",
  publisher: "FrameLabs LLC",
  metadataBase: new URL("https://uniqo.one"),
  icons: {
    icon: [
      { url: "/favicon_light.svg", media: "(prefers-color-scheme: light)", type: "image/svg+xml" },
      { url: "/favicon_dark.svg", media: "(prefers-color-scheme: dark)", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-product="uniqo" data-owner="framelabs">
      <body data-product="uniqo" data-owner="framelabs" data-version={SITE_VERSION}>
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
        <SmoothScroll />
        <ClickBurst />
        {children}
        <BottomDepthFade />
      </body>
    </html>
  );
}
