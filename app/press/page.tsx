import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site-metadata";

const PRESS = "/press";

export const metadata: Metadata = {
  title: "Press kit",
  description: "Uniqo brand guidelines, logos, card renders, app screens and colours for press and partners.",
  alternates: { canonical: "/press" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/press`,
    siteName: "Uniqo",
    title: "Uniqo press kit",
    description: "Brand guidelines, logos, card renders, app screens and colours."
  }
};

const logos = [
  { name: "Wordmark, black", dark: false, svg: `${PRESS}/logo/uniqo-logo-black.svg`, png: `${PRESS}/logo/uniqo-logo-black.png` },
  { name: "Wordmark, white", dark: true, svg: `${PRESS}/logo/uniqo-logo-white.svg`, png: `${PRESS}/logo/uniqo-logo-white.png` }
] as const;

const cards = [
  { name: "Arctic", note: "Free", src: `${PRESS}/cards/uniqo-card-arctic.png` },
  { name: "Midnight", note: "$4.99 / month", src: `${PRESS}/cards/uniqo-card-midnight.png` },
  { name: "Graphite", note: "$9.99 / month", src: `${PRESS}/cards/uniqo-card-graphite.png` }
] as const;

const screens = [
  { name: "Welcome", file: "uniqo-app-01-welcome" },
  { name: "Phone and code", file: "uniqo-app-02-phone" },
  { name: "ID check", file: "uniqo-app-03-verify" },
  { name: "Home", file: "uniqo-app-04-home" },
  { name: "Cards", file: "uniqo-app-05-cards" },
  { name: "Plans", file: "uniqo-app-06-plans" },
  { name: "Your own card", file: "uniqo-app-07-custom-card" },
  { name: "Account details", file: "uniqo-app-08-account-details" },
  { name: "Bank transfer", file: "uniqo-app-09-bank-transfer" }
] as const;

const colours = [
  { name: "Ink", hex: "#050505" },
  { name: "Muted", hex: "#686868" },
  { name: "Background", hex: "#ECECEE" },
  { name: "Surface", hex: "#F7F7F7" },
  { name: "Night", hex: "#0E1013" },
  { name: "Arctic", hex: "#CCCFD6" },
  { name: "Midnight", hex: "#3D4D75" },
  { name: "Graphite", hex: "#6B6B70" }
] as const;

const previews = [
  { src: `${PRESS}/page-01.jpg`, label: "Cover" },
  { src: `${PRESS}/page-03.jpg`, label: "Philosophy" },
  { src: `${PRESS}/page-06.jpg`, label: "Wordmark" },
  { src: `${PRESS}/page-10.jpg`, label: "Colour" },
  { src: `${PRESS}/page-14.jpg`, label: "Native by design" },
  { src: `${PRESS}/page-17.jpg`, label: "The app" }
] as const;

const pdf = `${PRESS}/Uniqo-Brand-Guidelines.pdf`;

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-black/10 pt-12">
      <h2 className="text-[clamp(26px,2.4vw,40px)] font-medium leading-[1.1] tracking-[-0.01em]">{title}</h2>
      {intro ? <p className="mt-3 max-w-[620px] text-[17px] leading-[1.35] text-[#686868]">{intro}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function DownloadLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} download className="inline-flex h-[38px] items-center rounded-full bg-black px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-85">
      {children}
    </a>
  );
}

export default function PressPage() {
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

      <div className="container max-w-[1100px] space-y-16 pb-24 pt-8">
        <div>
          <p className="text-[15px] font-medium text-[#686868]">Press</p>
          <h1 className="mt-3 text-[clamp(40px,5.5vw,88px)] font-medium leading-[1.02] tracking-[-0.02em]">Press kit</h1>
          <p className="mt-6 max-w-[620px] text-[clamp(18px,1.4vw,24px)] leading-[1.3] text-[#686868]">
            Everything you need to write about Uniqo: the brand guidelines, logos, card renders, app screens and colours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${PRESS}/uniqo-press-kit.zip`} download className="inline-flex h-[52px] items-center rounded-full bg-black px-8 text-[16px] font-medium text-white transition-opacity hover:opacity-85">
              Download everything (ZIP, 19 MB)
            </a>
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-flex h-[52px] items-center rounded-full bg-white px-8 text-[16px] font-medium text-black transition-opacity hover:opacity-85">
              Open brand guidelines
            </a>
          </div>
        </div>

        <Section id="brand-guidelines" title="Brand guidelines" intro="Philosophy, logo, colour, typography, cards and the app, in one document.">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previews.map((page) => (
              <li key={page.src} className="overflow-hidden rounded-[24px] bg-[#f7f7f7]">
                <a href={pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open the guidelines: ${page.label}`}>
                  <Image src={page.src} alt={page.label} width={960} height={540} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="h-auto w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-flex h-[38px] items-center rounded-full bg-black px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-85">
              Open PDF
            </a>
            <DownloadLink href={pdf}>Download PDF (8.8 MB)</DownloadLink>
          </div>
        </Section>

        <Section id="logo" title="Logo" intro="Use the wordmark in black on light and in white on dark. Do not recolour, outline, stretch or add effects. Keep a margin of one logo height around it.">
          <div className="grid gap-4 sm:grid-cols-2">
            {logos.map((logo) => (
              <div key={logo.name}>
                <div className={`flex h-[220px] items-center justify-center rounded-[28px] ${logo.dark ? "bg-[#050505]" : "bg-[#f7f7f7]"}`}>
                  <Image src={logo.svg} alt={logo.name} width={867} height={224} className="h-auto w-[200px]" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-[15px] font-medium">{logo.name}</span>
                  <span className="flex gap-2">
                    <DownloadLink href={logo.svg}>SVG</DownloadLink>
                    <DownloadLink href={logo.png}>PNG</DownloadLink>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Image src={`${PRESS}/icon/uniqo-app-icon-1024.png`} alt="Uniqo app icon" width={96} height={96} className="size-[96px] rounded-[22px] border border-black/10" />
            <div>
              <p className="text-[15px] font-medium">App icon</p>
              <p className="text-[14px] text-[#686868]">For the app and stores only. Never next to the wordmark.</p>
              <div className="mt-2">
                <DownloadLink href={`${PRESS}/icon/uniqo-app-icon-1024.png`}>PNG, 1024 px</DownloadLink>
              </div>
            </div>
          </div>
        </Section>

        <Section id="cards" title="Cards" intro="Three designs, three plans. Plans and prices are pre-launch information and may change.">
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card) => (
              <div key={card.name}>
                <div className="flex h-[210px] items-center justify-center rounded-[28px] bg-[#e3e4e8] p-6">
                  <Image src={card.src} alt={`Uniqo ${card.name} card`} width={1600} height={1019} sizes="(min-width: 640px) 320px, 100vw" className="h-auto w-full" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-[15px] font-medium">
                    {card.name} <span className="font-normal text-[#686868]">· {card.note}</span>
                  </span>
                  <DownloadLink href={card.src}>PNG</DownloadLink>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="app" title="App screens" intro="Native iOS, light theme, shown on an iPhone. Transparent PNG.">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {screens.map((screen) => (
              <li key={screen.file}>
                <div className="flex items-center justify-center rounded-[24px] bg-[#f7f7f7] p-3">
                  <Image src={`${PRESS}/screens/${screen.file}.png`} alt={`Uniqo app: ${screen.name}`} width={792} height={1619} sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw" className="h-auto w-full" />
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-[13px] font-medium">{screen.name}</span>
                  <a href={`${PRESS}/screens/${screen.file}.png`} download className="text-[13px] font-medium underline">
                    PNG
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="colour" title="Colour" intro="Quiet greys and black. The card carries the colour.">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colours.map((colour) => (
              <li key={colour.name}>
                <div className="h-[84px] rounded-[20px] border border-black/10" style={{ backgroundColor: colour.hex }} />
                <p className="mt-2 text-[14px] font-medium">{colour.name}</p>
                <p className="text-[13px] text-[#686868]">{colour.hex}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <DownloadLink href={`${PRESS}/colors/uniqo-colors.json`}>Colours (JSON)</DownloadLink>
            <DownloadLink href={`${PRESS}/colors/uniqo-colors.css`}>Colours (CSS)</DownloadLink>
          </div>
        </Section>

        <Section id="about" title="About Uniqo">
          <div className="max-w-[720px] space-y-4 text-[17px] leading-[1.5] text-black/85">
            <p>
              <strong className="font-medium text-black">Uniqo is the card that thinks before it pays.</strong> It is a pre-launch financial technology
              product by FrameLabs LLC, designed around control: not another bank and not another card, but a simpler way to manage how money moves.
            </p>
            <p>
              Planned features include virtual and physical cards, instant freeze and unfreeze, spending limits, real-time notifications and AI-assisted
              fraud protection. Plans: Arctic (free), Midnight ($4.99 per month) and Graphite ($9.99 per month).
            </p>
            <p className="text-[15px] text-[#686868]">
              Uniqo is not a bank and is not currently available as a financial service. Please do not describe it as one.
            </p>
          </div>
          <div className="mt-6">
            <DownloadLink href={`${PRESS}/uniqo-boilerplate.txt`}>Boilerplate (TXT)</DownloadLink>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-[17px] leading-[1.5]">
            Press and licensing:{" "}
            <a href="mailto:legal@uniqo.one" className="underline">
              legal@uniqo.one
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
}
