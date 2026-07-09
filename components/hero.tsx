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
  const arcticOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0]);
  const midnightOpacity = useTransform(scrollYProgress, [0.22, 0.38, 0.58, 0.72], [0, 1, 1, 0]);
  const graphiteOpacity = useTransform(scrollYProgress, [0.62, 0.78, 1], [0, 1, 1]);
  const arcticY = useTransform(scrollYProgress, [0, 0.35], [0, -24]);
  const midnightY = useTransform(scrollYProgress, [0.22, 0.5, 0.72], [28, 0, -20]);
  const graphiteY = useTransform(scrollYProgress, [0.62, 1], [30, 0]);

  return (
    <section ref={ref} className="relative min-h-[1780px] overflow-visible bg-[radial-gradient(circle_at_50%_50%,#e9e9ec_0%,#eeeff0_100%)]">
      <div className="pointer-events-none fixed left-[91.68px] top-[375.93px] z-40 hidden h-32 w-2 md:block">
        <Image src="/assets/uniqo-card-indicators.png" alt="" width={8} height={128} className="h-32 w-2" />
      </div>
      <div className="sticky top-0 mx-auto flex min-h-[1080px] w-full max-w-[565px] flex-col items-center justify-center px-4 pb-[86px] pt-[180px] text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: [0, -10, 0], scale: 1 }}
          transition={
            reducedMotion
              ? undefined
              : {
                  opacity: { duration: 0.75, ease },
                  scale: { duration: 0.75, ease },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
          }
          className="relative mb-[84px] h-[353px] w-[min(92vw,565px)]"
        >
          <motion.div style={reducedMotion ? undefined : { opacity: arcticOpacity, y: arcticY }} className="absolute inset-0">
            <CardImage
              src="/assets/uniqo-card-arctic.png"
              alt="Uniqo Arctic card"
              width={522}
              height={353}
              priority
              className="h-full w-full object-contain shadow-[0_42px_78px_rgba(0,0,0,0.10)]"
            />
          </motion.div>
          <motion.div style={reducedMotion ? undefined : { opacity: midnightOpacity, y: midnightY }} className="absolute inset-0">
            <CardImage
              src="/assets/uniqo-hero-card.png"
              alt="Uniqo Midnight card"
              width={565}
              height={353}
              priority
              className="h-full w-full object-contain shadow-[0_42px_78px_rgba(0,0,0,0.16)]"
            />
          </motion.div>
          <motion.div style={reducedMotion ? undefined : { opacity: graphiteOpacity, y: graphiteY }} className="absolute inset-0">
            <CardImage
              src="/assets/uniqo-card-graphite.png"
              alt="Uniqo Graphite card"
              width={522}
              height={353}
              priority
              className="h-full w-full object-contain shadow-[0_42px_78px_rgba(0,0,0,0.14)]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease, delay: 0.25 }}
          className="flex flex-col items-center"
        >
          <span className="mb-[21px] text-[19.939px] font-medium leading-[1.102] text-[#7c7c7c]">01</span>
          <h1 className="max-w-[484px] text-[clamp(36px,2.394vw,45.974px)] font-medium leading-[1.102] tracking-normal">
            The card
            <br />
            that thinks before it pays
          </h1>
          <p className="mt-[26px] max-w-[484px] text-[24px] font-normal leading-[1.102] text-black opacity-40">
            Uniqo analyzes in real time so you always pay smarter, faster and with total control
          </p>
        </motion.div>
        <motion.a
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease, delay: 0.5 }}
          href="#products"
          aria-label="Scroll to products"
          className="mt-[60px]"
        >
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43px] w-[27px]" />
        </motion.a>
      </div>
    </section>
  );
}
