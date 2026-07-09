"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const footerColumns = [
  {
    title: "PRODUCTS",
    links: ["Uniqo Card", "For Personal Use", "For Business", "Pricing", "Compare Plans"]
  },
  {
    title: "COMPANY",
    links: ["Our Manifesto", "About Us", "Careers", "Press Kit", "Contact"]
  },
  {
    title: "RESOURCES",
    links: ["Help centre", "Security", "Terms of Service", "Privacy Policy", "Cookie Policy"]
  }
];

const socialIcons = [
  { src: "/assets/uniqo-social-website.svg", label: "Website" },
  { src: "/assets/uniqo-social-x.svg", label: "X" },
  { src: "/assets/uniqo-social-telegram.svg", label: "Telegram" },
  { src: "/assets/uniqo-social-linkedin.svg", label: "LinkedIn" }
];

export function Footer() {
  const reducedMotion = useReducedMotion();

  return (
    <footer className="h-auto border-t border-[rgba(255,255,255,0.11)] bg-[#050506] text-white md:h-[535px]">
      <div className="container relative grid gap-12 py-[62px] md:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 34 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} className="h-auto w-[136px] invert" />
          <p className="mt-[53px] max-w-[414px] text-[25.14px] font-medium leading-[1.102] text-white opacity-40">
            A financial technology company reimagining how the world pays. Smarter, safer, and designed for total control.
          </p>
          <Image src="/assets/uniqo-country.png" alt="United States" width={180} height={42} className="mt-[53px] h-auto w-[179px]" />
        </motion.div>
        {footerColumns.map((column, columnIndex) => (
          <motion.div
            key={column.title}
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, ease, delay: 0.08 + columnIndex * 0.08 }}
          >
            <h3 className="text-[21.439px] font-medium leading-[1.102] text-white opacity-40">{column.title}</h3>
            <ul className="mt-[45px] grid gap-4">
              {column.links.map((link, index) => (
                <motion.li
                  key={link}
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.18 + columnIndex * 0.06 + index * 0.035 }}
                >
                  <a href="#" className="text-[25.143px] font-medium leading-[1.102] text-white opacity-66">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="container border-t border-[rgba(255,255,255,0.11)]">
        <div className="flex flex-col gap-8 py-[33px] text-[25.143px] font-medium leading-[1.102] text-white opacity-40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 FrameLabs LLC. All rights reserved.</span>
          <div className="flex items-center gap-[24px]">
            {socialIcons.map((icon, index) => (
              <motion.a
                key={icon.label}
                href="#"
                aria-label={icon.label}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.88 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: 0.2 + index * 0.04 }}
              >
                <Image src={icon.src} alt="" width={28} height={28} className="size-[27.526px]" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
