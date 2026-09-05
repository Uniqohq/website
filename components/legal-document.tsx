import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalDocument({
  title,
  updated,
  children
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
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
      <article className="container max-w-[720px] pb-24 pt-4">
        <div className="mb-10 rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[13px] leading-[1.5] text-[#686868]">
          <strong className="text-black">Pre-launch draft — not final.</strong> This document is a
          placeholder prepared before Uniqo has been reviewed by an attorney or accepted any real
          users. It exists so onboarding has real text to link to, not as a finished legal
          instrument. Do not rely on it as legal advice or as Uniqo&apos;s final terms. Questions:{" "}
          <a href="mailto:legal@uniqo.one" className="underline">
            legal@uniqo.one
          </a>
          .
        </div>
        <h1 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.05]">{title}</h1>
        <p className="mt-2 text-[14px] text-[#686868]">Last updated {updated}</p>
        <div className="prose-legal mt-10 space-y-6 text-[16px] leading-[1.65] text-black/85">
          {children}
        </div>
      </article>
    </main>
  );
}
