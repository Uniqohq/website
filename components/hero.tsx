"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { CardImage } from "./card-image";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 140, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 140, damping: 28 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative flex min-h-[760px] items-center justify-center px-4 pb-24 pt-36">
      <div className="pointer-events-none fixed left-[43px] top-[220px] hidden flex-col gap-6 md:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-black" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d8da]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d8da]" />
      </div>
      <div className="mx-auto flex w-full max-w-[660px] flex-col items-center text-center">
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
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="mb-12"
        >
          <CardImage
            src="/assets/uniqo-hero-card.png"
            alt="Uniqo Midnight card"
            width={546}
            height={378}
            priority
            className="w-[min(92vw,546px)] drop-shadow-[0_34px_30px_rgba(13,17,23,0.22)]"
          />
        </motion.div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease, delay: 0.25 }}
          className="flex flex-col items-center"
        >
          <span className="mb-3 text-[12px] font-bold text-[#a5a6aa]">01</span>
          <h1 className="max-w-[520px] text-[clamp(36px,5vw,58px)] font-extrabold leading-[0.92] tracking-normal">
            The card
            <br />
            that thinks before it pays
          </h1>
          <p className="mt-5 max-w-[420px] text-[16px] font-semibold leading-[1.18] text-[#9a9ca0]">
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
          className="mt-12 flex h-8 w-5 items-center justify-center rounded-full border border-[#cfd0d3]"
        >
          <span className="h-2 w-1 rounded-full bg-[#c4c5c8]" />
        </motion.a>
      </div>
    </section>
  );
}
