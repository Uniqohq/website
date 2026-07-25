"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/site-metadata";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

const socialIcons = [
  { src: "/assets/uniqo-social-website.svg", label: "Uniqo on TikTok", href: SOCIAL_LINKS.tiktok },
  { src: "/assets/uniqo-social-x.svg", label: "Uniqo on X", href: SOCIAL_LINKS.x },
  { src: "/assets/uniqo-social-telegram.svg", label: "Uniqo on Telegram", href: SOCIAL_LINKS.telegram }
];

const footerLinkHrefs = [
  ["#products", "/waitlist", "/waitlist", "#pricing", "#pricing"],
  ["#manifesto", "/waitlist", "/waitlist", "/waitlist", "mailto:legal@uniqo.one"],
  ["/waitlist", "#security", "/waitlist", "/waitlist", "/waitlist"]
] as const;

const regions = [
  { flag: "/assets/flags/us.svg" },
  { flag: "/assets/flags/eu.svg" },
  { flag: "/assets/flags/gb.svg" },
  { flag: "/assets/flags/ca.svg" },
  { flag: "/assets/flags/au.svg" },
  { flag: "/assets/flags/sg.svg" },
  { flag: "/assets/flags/ae.svg" },
  { flag: "/assets/flags/jp.svg" }
];

function useDropdownDismiss(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        close();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  return ref;
}

function RegionDropdown() {
  const { copy } = useSiteLocale();
  const localizedRegions = regions.map((region, index) => ({ ...region, ...copy.footer.regions[index] }));
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = localizedRegions[selectedIndex];
  const dropdownRef = useDropdownDismiss(open, () => setOpen(false));

  return (
    <div ref={dropdownRef} className="relative w-full max-w-[222px]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="region-menu"
        aria-label={`Region: ${selected.label}`}
        className="flex h-[43px] w-full items-center justify-between rounded-full border border-white/10 bg-[#050506] py-[5px] pl-[6px] pr-[14px] text-left text-[16px] font-medium leading-none text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        <span className="flex min-w-0 items-center gap-[10px]">
          <span className="flex size-[31px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
            <Image src={selected.flag} alt="" width={31} height={31} className="h-full w-full object-cover" />
          </span>
          <span className="truncate">{selected.label}</span>
        </span>
        <ChevronDown className={`size-[17px] shrink-0 text-white/72 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={2.35} />
      </button>
      {open ? (
        <div id="region-menu" role="group" aria-label="Region options" className="absolute bottom-[50px] left-0 z-50 grid w-[222px] overflow-hidden rounded-[16px] border border-white/10 bg-[#111112] py-[6px] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          {localizedRegions.map((region, index) => (
            <button
              key={`${region.label}-${index}`}
              type="button"
              aria-pressed={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                setOpen(false);
              }}
              className="flex h-[34px] items-center gap-[9px] px-[12px] text-left text-[13px] font-medium text-white/78"
            >
              <Image src={region.flag} alt="" width={24} height={16} className="h-[16px] w-[24px] rounded-[3px] object-cover" />
              <span className="truncate">{"menuLabel" in region ? region.menuLabel : region.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function LanguageDropdown() {
  const { language, setLanguage, copy } = useSiteLocale();
  const [open, setOpen] = useState(false);
  const scrollRestoreFrame = useRef<number | null>(null);
  const previousScrollBehavior = useRef<string | null>(null);
  const selected = copy.footer.languages.find((item) => item.code === language) ?? copy.footer.languages[0];
  const dropdownRef = useDropdownDismiss(open, () => setOpen(false));

  useEffect(() => {
    return () => {
      if (scrollRestoreFrame.current !== null) {
        window.cancelAnimationFrame(scrollRestoreFrame.current);
      }

      if (previousScrollBehavior.current !== null) {
        document.documentElement.style.scrollBehavior = previousScrollBehavior.current;
      }
    };
  }, []);

  const selectLanguage = (code: (typeof copy.footer.languages)[number]["code"]) => {
    const root = document.documentElement;

    if (scrollRestoreFrame.current !== null) {
      window.cancelAnimationFrame(scrollRestoreFrame.current);
    }

    previousScrollBehavior.current = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    setLanguage(code);
    setOpen(false);

    let remainingFrames = 45;
    const restorePosition = () => {
      dropdownRef.current?.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });

      remainingFrames -= 1;

      if (remainingFrames > 0) {
        scrollRestoreFrame.current = window.requestAnimationFrame(restorePosition);
        return;
      }

      root.style.scrollBehavior = previousScrollBehavior.current ?? "";
      previousScrollBehavior.current = null;
      scrollRestoreFrame.current = null;
    };

    scrollRestoreFrame.current = window.requestAnimationFrame(restorePosition);
  };

  return (
    <div ref={dropdownRef} className="relative w-[72px] shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="language-menu"
        aria-label={`${copy.footer.language}: ${selected.label}`}
        className="flex h-[43px] w-full items-center justify-between rounded-full border border-white/10 bg-[#050506] pl-[12px] pr-[9px] text-left text-[13px] font-medium leading-none text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        <span>{selected.short}</span>
        <ChevronDown className={`size-[15px] shrink-0 text-white/72 transition-transform duration-200 ${open ? "rotate-180" : ""}`} strokeWidth={2.35} />
      </button>
      {open ? (
        <div id="language-menu" role="group" aria-label={copy.footer.language} className="absolute bottom-[50px] right-0 z-50 grid w-[108px] overflow-hidden rounded-[14px] border border-white/10 bg-[#111112] py-[6px] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          {copy.footer.languages.map((item) => (
            <button
              key={item.code}
              type="button"
              aria-pressed={language === item.code}
              onClick={() => selectLanguage(item.code)}
              className="flex h-[34px] items-center px-[12px] text-left text-[13px] font-medium text-white/78"
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Footer() {
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();

  return (
    <footer className="relative flex min-h-[clamp(430px,24vw,460px)] flex-col justify-between overflow-visible border-t border-[rgba(255,255,255,0.11)] bg-[#050506] text-white">
      <div className="container relative grid grid-cols-2 gap-x-6 gap-y-12 py-[clamp(38px,2.45vw,47px)] md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="col-span-2 md:col-span-1"
        >
          <Link href="/" aria-label="Uniqo home" className="inline-flex">
            <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} className="h-auto w-[clamp(94px,5.1vw,98px)] invert" />
          </Link>
          <p className="mt-[clamp(24px,1.95vw,37px)] max-w-[300px] text-[clamp(14px,0.92vw,17.7px)] font-medium leading-[1.102] text-white opacity-60">
            {copy.footer.companyCopy}
          </p>
          <div className="mt-[clamp(24px,1.95vw,37px)] flex items-center gap-[10px]">
            <RegionDropdown />
            <LanguageDropdown />
          </div>
        </motion.div>
        {copy.footer.columns.map((column, columnIndex) => (
          <motion.div
            key={column.title}
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, ease, delay: 0.08 + columnIndex * 0.08 }}
          >
            <h3 className="text-[clamp(12px,0.78vw,15px)] font-medium leading-[1.102] text-white opacity-60">{column.title}</h3>
            <ul className="mt-[clamp(24px,1.64vw,31px)] grid gap-[clamp(8px,0.6vw,11px)]">
              {column.links.map((link, index) => (
                <motion.li
                  key={link}
                  initial={reducedMotion ? false : { opacity: 0 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.18 + columnIndex * 0.06 + index * 0.035 }}
                >
                  <a href={footerLinkHrefs[columnIndex][index]} className="text-[clamp(14px,0.92vw,17.7px)] font-medium leading-[1.102] text-white opacity-66">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="container">
        <div className="flex flex-col gap-5 py-[clamp(18px,1.2vw,23px)] text-[clamp(14px,0.92vw,17.7px)] font-medium leading-[1.102] text-white opacity-60 md:grid md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-8">
          <span className="md:col-span-3">{copy.footer.copyright}</span>
          <div className="flex items-center justify-start gap-[clamp(14px,0.88vw,17px)] md:col-start-4">
            {socialIcons.map((icon, index) => (
              <motion.a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label}
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={reducedMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: 0.2 + index * 0.04 }}
              >
                <Image src={icon.src} alt="" width={28} height={28} className="size-[clamp(18px,1vw,19px)]" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
