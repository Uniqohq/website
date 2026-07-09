"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";

const ease = [0.16, 1, 0.3, 1] as const;

export function WaitlistPageContent() {
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
          Back to site
        </a>
      </motion.header>
      <section className="container flex min-h-[calc(100vh-96px)] items-center justify-center pb-[96px] pt-[24px]">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.78, ease }}
          className="mx-auto flex w-full max-w-[820px] flex-col items-center text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease, delay: 0.08 }}
            className="max-w-[780px] text-[clamp(58px,7.2vw,138px)] font-medium leading-[0.94] tracking-normal"
          >
            Uniqo is not live yet.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease, delay: 0.18 }}
            className="mt-[28px] max-w-[620px] text-[clamp(22px,1.75vw,33.579px)] font-medium leading-[1.102] text-[#7c7c7c]"
          >
            We are preparing access by region. Leave your email and we will let you in when Uniqo opens.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease, delay: 0.3 }}
            className="w-full"
          >
            <WaitlistForm />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
