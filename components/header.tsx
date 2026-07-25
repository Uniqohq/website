"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteLocale } from "./site-locale";

const navHrefs = ["#products", "#features", "#security", "#pricing", "#manifesto"];

export function Header() {
  const { copy } = useSiteLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(236,236,238,0.82)] backdrop-blur-[18px]">
      <div className="container flex h-[96px] items-center justify-between">
        <Link href="/" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} priority className="h-auto w-[102px]" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-[66px] text-[17.681px] font-medium leading-[1.102] text-black md:flex">
          {copy.header.nav.map((label, index) => (
            <a key={`${label}-${navHrefs[index]}`} href={navHrefs[index]}>
              {label}
            </a>
          ))}
        </nav>
        <Link
          href="/waitlist"
          className="burst-hover flex h-[52.759px] w-[163.655px] items-center justify-center rounded-[11px] bg-black text-[17.681px] font-medium leading-[1.102] text-white"
        >
          {copy.header.cta}
        </Link>
      </div>
    </header>
  );
}
