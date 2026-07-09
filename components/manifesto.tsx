"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const manifestoText =
  "Uniqo is a financial technology company reimagining how the world pays. No unnecessary features. No hidden fees. Just a card that puts you in charge.";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [endX, setEndX] = useState(-3000);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textX = useTransform(scrollYProgress, [0.02, 0.94], [0, endX]);

  useEffect(() => {
    const updateEndX = () => {
      const left = Math.min(Math.max(window.innerWidth * 0.08542, 42), 164);
      const textWidth = textRef.current?.scrollWidth ?? 4111.32;
      setEndX(window.innerWidth - left - textWidth - 48);
    };

    updateEndX();
    window.addEventListener("resize", updateEndX);

    return () => window.removeEventListener("resize", updateEndX);
  }, []);

  return (
    <section id="manifesto" ref={ref} className="relative h-[340vh] overflow-visible bg-[#ececee]">
      <div className="sticky top-0 h-[854px] overflow-hidden bg-[#ececee]">
        <h2 className="absolute left-[clamp(42px,8.542vw,164px)] top-[43.51px] w-[min(82.917vw,1592px)] text-[clamp(96px,13.526vw,259.709px)] font-medium leading-[0.94] tracking-normal text-black">
          We don’t build
          <br />
          another bank.
        </h2>
        <motion.p
          ref={textRef}
          style={{ x: textX }}
          className="absolute left-[clamp(42px,8.542vw,164px)] top-[635px] h-[70px] w-[4111.32px] whitespace-nowrap text-center text-[clamp(30px,3.33vw,63.9436px)] font-medium leading-[1.102] text-[#8d8f91]"
        >
          {manifestoText}
        </motion.p>
        <div className="absolute left-[calc(50%_-_13.585px)] top-[765px] h-[43.32px] w-[27.17px] -rotate-90">
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43.32px] w-[27.17px]" />
        </div>
      </div>
    </section>
  );
}
