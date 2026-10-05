import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-metadata";

const PDF_PATH = "/brand/Uniqo-Brand-Guidelines.pdf";

const PREVIEWS = [
  { src: "/brand/page-01.jpg", label: "Cover" },
  { src: "/brand/page-03.jpg", label: "Philosophy" },
  { src: "/brand/page-06.jpg", label: "Wordmark" },
  { src: "/brand/page-10.jpg", label: "Colour" },
  { src: "/brand/page-14.jpg", label: "Native by design" },
  { src: "/brand/page-17.jpg", label: "The app" }
] as const;

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description: "The Uniqo brand: philosophy, logo, colour, typography, cards and product.",
  alternates: { canonical: "/brand" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/brand`,
    siteName: "Uniqo",
    title: "Uniqo Brand Guidelines",
    description: "The Uniqo brand: philosophy, logo, colour, typography, cards and product."
  }
};

export default function BrandPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#ececee] text-black">
      <header className="container flex h-[96px] items-center justify-between">
        <Link href="/" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} priority className="h-auto w-[102px]" />
        </Link>
        <Link href="/" className="text-[15px] font-medium text-black opacity-60 transition-opacity duration-200 hover:opacity-100">
          Back to site
        </Link>
      </header>

      <section className="container max-w-[1100px] pb-24 pt-8">
        <p className="text-[15px] font-medium text-[#686868]">Brand</p>
        <h1 className="mt-3 text-[clamp(40px,5.5vw,88px)] font-medium leading-[1.02] tracking-[-0.02em]">Brand Guidelines</h1>
        <p className="mt-6 max-w-[620px] text-[clamp(18px,1.4vw,24px)] leading-[1.3] text-[#686868]">
          Philosophy, logo, colour, typography, cards and the app. Everything you need to represent Uniqo.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={PDF_PATH}
            download
            className="inline-flex h-[52px] items-center rounded-full bg-black px-8 text-[16px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Download PDF
          </a>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] items-center rounded-full bg-white px-8 text-[16px] font-medium text-black transition-opacity hover:opacity-85"
          >
            Open in a new tab
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEWS.map((page) => (
            <li key={page.src} className="overflow-hidden rounded-[24px] bg-[#f7f7f7]">
              <a href={PDF_PATH} target="_blank" rel="noopener noreferrer" aria-label={`Open the guidelines: ${page.label}`}>
                <Image src={page.src} alt={page.label} width={960} height={540} className="h-auto w-full" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[14px] leading-[1.5] text-[#686868]">
          Permissions and licensing:{" "}
          <a href="mailto:legal@uniqo.one" className="underline">
            legal@uniqo.one
          </a>
          . Uniqo is a pre-launch product by FrameLabs LLC and is not a bank.
        </p>
      </section>
    </main>
  );
}
