"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Manifesto() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const paragraphY = useTransform(scrollYProgress, [0.35, 0.78], [120, 0]);
  const paragraphOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const lines = ["We don’t build", "another bank."];

  return (
    <section id="manifesto" ref={ref} className="relative min-h-[854px] overflow-hidden bg-[#ececee]">
      <div className="container sticky top-0 flex min-h-[854px] flex-col justify-start pt-[43.51px]">
      <div>
        {lines.map((line, index) => (
          <div key={line} className="overflow-hidden">
            <motion.h2
              initial={reducedMotion ? false : { y: "110%" }}
              whileInView={reducedMotion ? undefined : { y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.82, ease, delay: index * 0.08 }}
              className="whitespace-nowrap text-[clamp(78px,13.526vw,259.709px)] font-medium leading-[0.94] tracking-normal"
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>
      <motion.p
        style={reducedMotion ? undefined : { y: paragraphY, opacity: paragraphOpacity }}
        className="mt-auto pb-[145px] text-center text-[clamp(34px,3.33vw,63.944px)] font-medium leading-[1.102] text-[rgba(0,0,0,0.4)]"
      >
        <span className="text-black">Uniqo</span> is a financial technology company reimagining how the world pays. No unnecessary features. No hidden fees. Just a card that puts you in charge.
      </motion.p>
      <div className="absolute bottom-[61px] left-1/2 -translate-x-1/2 -rotate-90">
        <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43px] w-[27px]" />
      </div>
      </div>
    </section>
  );
}
