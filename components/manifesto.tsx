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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textX = useTransform(scrollYProgress, [0.02, 0.82], [0, endX]);

  useLayoutEffect(() => {
    const updateEndX = () => {
      const left = Math.min(Math.max(window.innerWidth * 0.08542, 42), 164);
      const textWidth = textRef.current?.getBoundingClientRect().width ?? 4111.32;
      setEndX(window.innerWidth - left - textWidth - 48);
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
    <section id="manifesto" ref={ref} className="relative h-[340vh] overflow-visible bg-[#ececee]">
      <div className="sticky top-0 h-[854px] overflow-hidden bg-[#ececee]">
        <h2
          className={`absolute left-[clamp(42px,8.542vw,164px)] top-[112px] font-medium leading-[0.94] tracking-normal text-black ${
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
          style={{ x: textX }}
          className="absolute left-[clamp(42px,8.542vw,164px)] top-[635px] h-[70px] w-max whitespace-nowrap text-left text-[clamp(30px,3.33vw,63.9436px)] font-medium leading-[1.102] text-[#8d8f91]"
        >
          {copy.manifesto.line}
        </motion.p>
        <div className="absolute left-[calc(50%_-_13.585px)] top-[765px] h-[43.32px] w-[27.17px] -rotate-90">
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43.32px] w-[27.17px]" />
        </div>
      </div>
    </section>
  );
}
