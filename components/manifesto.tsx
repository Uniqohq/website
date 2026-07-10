"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useSiteLocale } from "./site-locale";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { copy, language } = useSiteLocale();
  const [endX, setEndX] = useState(-3000);
  const [scrollDistance, setScrollDistance] = useState(1800);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const textX = useTransform(scrollYProgress, [0.03, 0.97], [0, endX]);
  const textTransform = useTransform(textX, (value) => `translate3d(${value}px, 0, 0)`);

  useLayoutEffect(() => {
    const updateEndX = () => {
      const left = Math.min(Math.max(window.innerWidth * 0.08542, 42), 164);
      const textWidth = textRef.current?.getBoundingClientRect().width ?? 4111.32;
      const nextEndX = window.innerWidth - left - textWidth - 48;

      setEndX(nextEndX);
      setScrollDistance(Math.min(Math.max(Math.abs(nextEndX) / 1.55, 1400), 2600));
    };

    const frame = window.requestAnimationFrame(updateEndX);
    document.fonts.ready.then(updateEndX);
    window.addEventListener("resize", updateEndX);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateEndX);
    };
  }, [language, copy.manifesto.line]);

  return (
    <section
      id="manifesto"
      ref={ref}
      style={{ height: `calc(100dvh + ${scrollDistance}px)` }}
      className="relative overflow-visible bg-[#ececee]"
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-[#ececee]">
        <h2
          className={`absolute left-[clamp(42px,8.542vw,164px)] top-[clamp(96px,13.1dvh,112px)] font-medium leading-[0.94] tracking-normal text-black ${
            language === "ru"
              ? "w-[min(88vw,1680px)] text-[clamp(82px,11vw,211px)]"
              : "w-[min(82.917vw,1592px)] text-[clamp(96px,13.526vw,259.709px)]"
          }`}
        >
          {copy.manifesto.headingTop}
          <br />
          {copy.manifesto.headingBottom}
        </h2>
        <motion.p
          ref={textRef}
          style={{ transform: textTransform }}
          className="absolute left-[clamp(42px,8.542vw,164px)] top-[min(74.36dvh,635px)] h-[70px] w-max whitespace-nowrap text-left text-[clamp(30px,3.33vw,63.9436px)] font-medium leading-[1.102] text-[#8d8f91] will-change-transform"
        >
          {copy.manifesto.line}
        </motion.p>
        <div className="absolute left-[calc(50%_-_13.585px)] top-[min(89.6dvh,765px)] h-[43.32px] w-[27.17px] -rotate-90">
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43.32px] w-[27.17px]" />
        </div>
      </div>
    </section>
  );
}
