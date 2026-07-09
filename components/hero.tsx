"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CardImage } from "./card-image";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const arcticOpacity = useTransform(scrollYProgress, [0, 0.09, 0.17], [1, 1, 0]);
  const midnightOpacity = useTransform(scrollYProgress, [0.14, 0.22, 0.3, 0.38], [0, 1, 1, 0]);
  const graphiteOpacity = useTransform(scrollYProgress, [0.34, 0.44, 0.98], [0, 1, 1]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.68, 0.78], [1, 1, 0]);
  const indicatorOne = useTransform(scrollYProgress, [0, 0.11, 0.2], [1, 1, 0.25]);
  const indicatorTwo = useTransform(scrollYProgress, [0.16, 0.24, 0.32, 0.42], [0.25, 1, 1, 0.25]);
  const indicatorThree = useTransform(scrollYProgress, [0.36, 0.47, 0.72], [0.25, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[380vh] overflow-visible bg-[radial-gradient(circle_at_50%_50%,#e9e9ec_0%,#eeeff0_100%)] md:h-[410vh] lg:h-[450vh] xl:h-[470vh]"
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
      <div className="sticky top-0 mx-auto flex h-screen w-full max-w-[565px] flex-col items-center justify-start overflow-visible px-4 pb-[clamp(24px,5vh,86px)] pt-[clamp(84px,12vh,180px)] text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={reducedMotion ? undefined : { opacity: { duration: 0.75, ease }, scale: { duration: 0.75, ease } }}
          className="relative mb-[clamp(22px,4vh,84px)] aspect-[1.6] w-[min(92vw,565px,58vh)] overflow-visible"
        >
          <motion.div style={reducedMotion ? undefined : { opacity: arcticOpacity }} className="absolute inset-0">
            <CardImage
              src="/assets/uniqo-card-arctic.png"
              alt="Uniqo Arctic card"
              width={522}
              height={353}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div style={reducedMotion ? undefined : { opacity: midnightOpacity }} className="absolute inset-0">
            <CardImage
              src="/assets/uniqo-card-midnight.png"
              alt="Uniqo Midnight card"
              width={4800}
              height={3000}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div style={reducedMotion ? undefined : { opacity: graphiteOpacity }} className="absolute inset-0">
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
          <span className="mb-[clamp(12px,2vh,21px)] text-[19.939px] font-medium leading-[1.102] text-[#7c7c7c]">01</span>
          <h1 className="max-w-none text-[clamp(32px,2.394vw,45.974px)] font-medium leading-[1.102] tracking-normal">
            <span className="whitespace-nowrap">The card</span>
            <br />
            <span className="whitespace-nowrap">that thinks before it pays</span>
          </h1>
          <p className="mt-[clamp(16px,2.4vh,26px)] max-w-[560px] text-[clamp(18px,1.25vw,24px)] font-normal leading-[1.102] text-black opacity-40">
            Uniqo analyzes in real time so you always pay smarter, faster and with total control
          </p>
        </motion.div>
        <motion.a
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease, delay: 0.5 }}
          href="#products"
          aria-label="Scroll to products"
          className="mt-[clamp(24px,4vh,60px)]"
        >
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43px] w-[27px]" />
        </motion.a>
      </div>
    </section>
  );
}
