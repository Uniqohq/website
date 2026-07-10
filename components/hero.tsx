"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const arcticOpacity = useTransform(scrollYProgress, [0, 0.16, 0.3], [1, 1, 0]);
  const midnightOpacity = useTransform(scrollYProgress, [0.22, 0.36, 0.54, 0.68], [0, 1, 1, 0]);
  const graphiteOpacity = useTransform(scrollYProgress, [0.6, 0.76, 0.9], [0, 1, 1]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.88, 0.98], [1, 1, 0]);
  const indicatorOne = useTransform(scrollYProgress, [0, 0.18, 0.3], [1, 1, 0.25]);
  const indicatorTwo = useTransform(scrollYProgress, [0.24, 0.38, 0.56, 0.7], [0.25, 1, 1, 0.25]);
  const indicatorThree = useTransform(scrollYProgress, [0.62, 0.78, 0.92], [0.25, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[calc(100dvh+1800px)] overflow-visible bg-[radial-gradient(circle_at_50%_50%,#e9e9ec_0%,#eeeff0_100%)] md:h-[calc(100dvh+2200px)]"
    >
      <motion.div
        style={reducedMotion ? undefined : { opacity: indicatorOpacity }}
        className="pointer-events-none fixed left-[91.68px] top-[375.93px] z-40 hidden md:block"
      >
        <div className="grid gap-[16px]">
          {[indicatorOne, indicatorTwo, indicatorThree].map((opacity, index) => (
            <motion.span key={index} style={reducedMotion ? undefined : { opacity }} className="size-[5px] rounded-full bg-black" />
          ))}
        </div>
      </motion.div>
      <div className="sticky top-0 mx-auto flex h-[100dvh] w-full max-w-[565px] flex-col items-center justify-start overflow-visible px-4 pb-[clamp(24px,5dvh,86px)] pt-[clamp(84px,12dvh,180px)] text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={reducedMotion ? undefined : { opacity: { duration: 0.75, ease }, scale: { duration: 0.75, ease } }}
          className="relative mb-[clamp(22px,4dvh,84px)] aspect-[1.6] w-[min(92vw,565px,58dvh)] overflow-visible"
        >
          <motion.div
            style={reducedMotion ? undefined : { opacity: arcticOpacity }}
            className="absolute inset-0 transform-gpu will-change-[opacity]"
          >
            <CardImage
              src="/assets/uniqo-card-arctic.png"
              alt="Uniqo Arctic card"
              width={522}
              height={353}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div
            style={reducedMotion ? undefined : { opacity: midnightOpacity }}
            className="absolute inset-0 transform-gpu will-change-[opacity]"
          >
            <CardImage
              src="/assets/uniqo-card-midnight.png"
              alt="Uniqo Midnight card"
              width={4800}
              height={3000}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div
            style={reducedMotion ? undefined : { opacity: graphiteOpacity }}
            className="absolute inset-0 transform-gpu will-change-[opacity]"
          >
            <CardImage
              src="/assets/uniqo-card-graphite.png"
              alt="Uniqo Graphite card"
              width={522}
              height={353}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease, delay: 0.25 }}
          className="flex flex-col items-center"
        >
          <span className="mb-[clamp(12px,2dvh,21px)] text-[19.939px] font-medium leading-[1.102] text-[#7c7c7c]">01</span>
          <h1 className="max-w-none text-[clamp(32px,2.394vw,45.974px)] font-medium leading-[1.102] tracking-normal">
            <span className="whitespace-nowrap">{copy.hero.titleTop}</span>
            <br />
            <span className="whitespace-nowrap">{copy.hero.titleBottom}</span>
          </h1>
          <p className="mt-[clamp(16px,2.4dvh,26px)] max-w-[560px] text-[clamp(18px,1.25vw,24px)] font-normal leading-[1.102] text-black opacity-40">
            {copy.hero.copy}
          </p>
        </motion.div>
        <motion.a
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease, delay: 0.5 }}
          href="#products"
          aria-label="Scroll to products"
          className="mt-[clamp(24px,4dvh,60px)]"
        >
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43px] w-[27px]" />
        </motion.a>
      </div>
    </section>
  );
}
