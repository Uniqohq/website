import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uniqo",
  description: "The card that thinks before it pays.",
  creator: "FrameLabs LLC",
  publisher: "FrameLabs LLC",
  metadataBase: new URL("https://uniqo.one")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-product="uniqo" data-owner="framelabs">
      <body data-product="uniqo" data-owner="framelabs">{children}</body>
    </html>
  );
}
