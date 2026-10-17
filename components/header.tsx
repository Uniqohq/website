"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteLocale } from "./site-locale";

const navHrefs = ["/#features", "/#security", "/#pricing", "/#manifesto"];

type HeaderProps = {
  // The home page is dark; every other page keeps the light header.
  tone?: "light" | "dark";
  nav?: readonly { label: string; href: string }[];
  // Pill-shaped call to action, as on the home page.
  round?: boolean;
};

export function Header({ tone = "light", nav, round = false }: HeaderProps = {}) {
  const { copy } = useSiteLocale();
  const dark = tone === "dark";
  const links = nav ?? copy.header.nav.map((label, index) => ({ label, href: navHrefs[index] }));

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 backdrop-blur-[18px] ${
        dark ? "bg-[rgba(0,0,0,0.55)] text-white" : "bg-[rgba(236,236,238,0.82)]"
      }`}
    >
      <div className={`flex h-[96px] items-center justify-between ${dark ? "mx-auto w-[min(calc(100%-32px),1160px)]" : "container"}`}>
        <Link href="/" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} priority className={`h-auto w-[102px] ${dark ? "invert" : ""}`} />
        </Link>
        <nav aria-label="Primary navigation" className={`hidden items-center gap-[clamp(34px,3.44vw,66px)] text-[17.681px] font-medium leading-[1.102] xl:flex ${dark ? "text-white" : "text-black"}`}>
          {links.map((link) => (
            <a key={`${link.label}-${link.href}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/waitlist"
          className={
            dark
              ? "burst-hover flex h-[48px] items-center justify-center rounded-full bg-white px-[26px] text-[17px] font-medium leading-none text-black"
              : round
                ? "burst-hover flex h-[48px] items-center justify-center rounded-full bg-black px-[26px] text-[17px] font-medium leading-none text-white"
                : "burst-hover flex h-[52.759px] w-[163.655px] items-center justify-center rounded-[11px] bg-black text-[17.681px] font-medium leading-[1.102] text-white"
          }
        >
          {copy.header.cta}
        </Link>
      </div>
    </header>
  );
}
