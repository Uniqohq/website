"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

export function WaitlistPageContent() {
  const { copy } = useSiteLocale();

  return (
    <main className="min-h-screen overflow-hidden bg-[#ececee] text-black">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        className="container flex h-[96px] items-center justify-between"
      >
        <a href="/" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} priority className="h-auto w-[102px]" />
        </a>
        <a href="/" className="text-[17.681px] font-medium leading-[1.102] text-black opacity-60 transition-opacity duration-200 hover:opacity-100">
          {copy.waitlist.back}
        </a>
      </motion.header>
      <section className="container flex min-h-[calc(100vh-96px)] items-center justify-center pb-[96px] pt-[12px]">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.78, ease }}
          className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease, delay: 0.08 }}
            className="max-w-full text-[clamp(46px,5vw,82px)] font-medium leading-[0.94] tracking-normal md:whitespace-nowrap"
          >
            {copy.waitlist.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease, delay: 0.18 }}
            className="mt-[22px] max-w-[520px] text-[clamp(18px,1.24vw,24px)] font-medium leading-[1.18] text-[#7c7c7c]"
          >
            {copy.waitlist.copy}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease, delay: 0.3 }}
            className="w-full max-w-[660px]"
          >
            <WaitlistForm />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
