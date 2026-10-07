"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSiteLocale } from "./site-locale";

// A quiet pause between Features and Security: the card on concrete, full bleed.
// On desktop the film starts as a regular 35px-rounded tile and opens to the screen edges as it
// pins, then the line fades in over the side of the block at the bottom left.
export function ConcreteFilm() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const inset = useTransform(scrollYProgress, [0, 0.45], [4, 0]);
  const radius = useTransform(scrollYProgress, [0, 0.45], [35, 0]);
  const clipPath = useTransform([inset, radius], ([i, r]) => `inset(${i}% ${i}% ${i}% ${i}% round ${r}px)`);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.65], [24, 0]);

  // React doesn't reflect `muted` to the DOM attribute before load, so browsers can refuse
  // autoplay; set it on the element and start playback ourselves.
  useEffect(() => {
    if (reducedMotion) return;
    ref.current?.querySelectorAll("video").forEach((element) => {
      element.muted = true;
      void element.play().catch(() => {});
    });
  }, [reducedMotion]);

  const video = (
    <video
      className="size-full object-cover object-[50%_40%]"
      autoPlay={!reducedMotion}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/media/concrete-film-poster.jpg"
      aria-hidden
    >
      <source src="/media/concrete-film.webm" type="video/webm" />
      <source src="/media/concrete-film.mp4" type="video/mp4" />
    </video>
  );

  const line = (
    <>
      <p className="max-w-[560px] text-[34px] font-medium leading-[1.04] text-[#161616] md:text-[56px] md:leading-[1.02]">
        {copy.film.title}
      </p>
      <p className="mt-[14px] max-w-[420px] text-[17px] font-medium leading-[1.12] text-[#686868] md:text-[22px] md:leading-[1.102] md:text-[#3d3d3d]">
        {copy.film.copy}
      </p>
    </>
  );

  return (
    <section ref={ref} aria-label={copy.film.title} className="relative bg-[#ececee] md:h-[220vh]">
      {/* Phone: a rounded film tile with the line underneath. */}
      <div className="container py-[58px] md:hidden">
        <div className="aspect-[4/5] overflow-hidden rounded-[28px]">{video}</div>
        <div className="mt-[24px]">{line}</div>
      </div>

      {/* Desktop: pinned, opening to full bleed. */}
      <div className="sticky top-0 hidden h-screen md:block">
        <motion.div className="absolute inset-0 overflow-hidden" style={reducedMotion ? undefined : { clipPath }}>
          {video}
          <motion.div
            className="absolute bottom-[8vh] left-[6vw]"
            style={reducedMotion ? undefined : { opacity: textOpacity, y: textY }}
          >
            {line}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
