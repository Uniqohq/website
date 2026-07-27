"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { useSiteLocale } from "./site-locale";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Manifesto() {
  const { copy, language } = useSiteLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const panel = panelRef.current;
      const heading = headingRef.current;
      const text = textRef.current;
      const indicator = indicatorRef.current;

      if (!section || !panel || !heading || !text || !indicator) {
        return;
      }

      const getEndX = () => {
        return Math.min(0, window.innerWidth - text.offsetLeft - text.scrollWidth - Math.max(24, window.innerWidth * 0.035));
      };

      const media = gsap.matchMedia();

      media.add(
        {
          animate: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px)"
        },
        (context) => {
          const { animate, desktop } = context.conditions as { animate: boolean; desktop: boolean };

          if (!animate) {
            gsap.set(text, { x: getEndX() });
            return;
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              id: "uniqo-manifesto",
              trigger: section,
              start: "top top",
              end: () => {
                const distance = Math.abs(getEndX());
                const speed = desktop ? 1.18 : 0.9;
                return `+=${Math.max(distance / speed, desktop ? 1450 : 1100)}`;
              },
              pin: panel,
              pinSpacing: true,
              scrub: 0.65,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          });

          timeline
            .set(text, { x: 0, autoAlpha: 0.45 })
            .to(text, { autoAlpha: 1, duration: 0.08, ease: "power1.out" })
            .to(text, { x: getEndX, duration: 0.84, ease: "none" })
            .to({}, { duration: 0.06 })
            .to(indicator, { autoAlpha: 0, y: 8, duration: 0.02 });

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        }
      );

      const headingReveal = gsap.fromTo(heading, { autoAlpha: 0 }, {
        autoAlpha: 1,
        duration: 0.72,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true
        }
      });

      const refresh = () => ScrollTrigger.refresh();
      const resizeObserver = new ResizeObserver(refresh);
      resizeObserver.observe(text);
      document.fonts.ready.then(refresh);

      return () => {
        headingReveal.scrollTrigger?.kill();
        headingReveal.kill();
        resizeObserver.disconnect();
        media.revert();
      };
    },
    { scope: sectionRef, dependencies: [language, copy.manifesto.line], revertOnUpdate: true }
  );

  return (
    <section id="manifesto" ref={sectionRef} className="relative min-h-[100svh] overflow-visible bg-[#ececee]">
      <div ref={panelRef} className="relative h-[100svh] overflow-hidden bg-[#ececee]">
        <h2
          ref={headingRef}
          className={`absolute left-[clamp(24px,8.542vw,164px)] right-[clamp(24px,4vw,76px)] top-[clamp(92px,13.1dvh,112px)] font-medium leading-[0.94] tracking-normal text-black ${
            language === "ru"
              ? "text-[clamp(48px,13vw,104px)] md:text-[clamp(72px,10.6vw,203px)]"
              : "text-[clamp(54px,15vw,112px)] md:text-[clamp(84px,13.526vw,259.709px)]"
          }`}
        >
          <span className="block md:whitespace-nowrap">{copy.manifesto.headingTop}</span>
          <span className="block md:whitespace-nowrap">{copy.manifesto.headingBottom}</span>
        </h2>
        <p
          ref={textRef}
          className="absolute left-[clamp(24px,8.542vw,164px)] top-[64dvh] h-[70px] w-max whitespace-nowrap text-left text-[clamp(30px,6vw,46px)] font-medium leading-[1.102] text-[#8d8f91] will-change-transform md:top-[min(74.36dvh,635px)] md:text-[clamp(30px,3.33vw,63.9436px)]"
        >
          {copy.manifesto.line}
        </p>
        <div
          ref={indicatorRef}
          className="absolute left-[calc(50%_-_13.585px)] top-[84dvh] h-[43.32px] w-[27.17px] -rotate-90 md:top-[min(89.6dvh,765px)]"
        >
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43.32px] w-[27.17px]" />
        </div>
      </div>
    </section>
  );
}
