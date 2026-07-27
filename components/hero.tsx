"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function Hero() {
  const { copy, language } = useSiteLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardStackRef = useRef<HTMLDivElement>(null);
  const midnightRef = useRef<HTMLDivElement>(null);
  const graphiteRef = useRef<HTMLDivElement>(null);
  const arcticRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const indicatorRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const kickerRef = useRef<HTMLSpanElement>(null);
  const scrollLinkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      const stack = cardStackRef.current;
      const midnight = midnightRef.current;
      const graphite = graphiteRef.current;
      const arctic = arcticRef.current;
      const indicators = indicatorsRef.current;
      const title = titleRef.current;

      if (!section || !stage || !stack || !midnight || !graphite || !arctic || !indicators || !title) {
        return;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)"
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions as {
            desktop: boolean;
            reduceMotion: boolean;
          };

          gsap.set([graphite, arctic], { autoAlpha: 0 });
          gsap.set(midnight, { autoAlpha: 1 });
          gsap.set(indicators, { autoAlpha: desktop && !reduceMotion ? 1 : 0 });

          if (!desktop || reduceMotion) {
            return;
          }

          const cards = [midnight, graphite, arctic];
          const dots = indicatorRefs.current.filter(Boolean);
          const cardTimeline = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              id: "uniqo-hero",
              trigger: section,
              start: "top top",
              end: () => `+=${Math.max(window.innerHeight * 1.65, 1250)}`,
              pin: stage,
              pinSpacing: true,
              scrub: 0.42,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          });

          gsap.set(dots, { opacity: 0.24, scale: 0.82 });
          gsap.set(dots[0], { opacity: 1, scale: 1 });

          cardTimeline
            .to({}, { duration: 0.12 })
            .to(midnight, { autoAlpha: 0, scale: 0.955, rotation: -2.4, yPercent: -2, duration: 0.16 })
            .fromTo(
              graphite,
              { autoAlpha: 0, scale: 1.045, rotation: 2.2, yPercent: 3 },
              { autoAlpha: 1, scale: 1, rotation: 0, yPercent: 0, duration: 0.16 },
              "<0.035"
            )
            .to(dots[0], { opacity: 0.24, scale: 0.82, duration: 0.08 }, "<")
            .to(dots[1], { opacity: 1, scale: 1, duration: 0.08 }, "<")
            .to({}, { duration: 0.1 })
            .to(graphite, { autoAlpha: 0, scale: 0.955, rotation: -2.4, yPercent: -2, duration: 0.16 })
            .fromTo(
              arctic,
              { autoAlpha: 0, scale: 1.045, rotation: 2.2, yPercent: 3 },
              { autoAlpha: 1, scale: 1, rotation: 0, yPercent: 0, duration: 0.16 },
              "<0.035"
            )
            .to(dots[1], { opacity: 0.24, scale: 0.82, duration: 0.08 }, "<")
            .to(dots[2], { opacity: 1, scale: 1, duration: 0.08 }, "<")
            .to({}, { duration: 0.16 })
            .to(indicators, { autoAlpha: 0, y: 8, duration: 0.09 });

          return () => {
            cardTimeline.scrollTrigger?.kill();
            cardTimeline.kill();
            gsap.set(cards, { clearProps: "all" });
          };
        }
      );

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(stack, { autoAlpha: 0, scale: 0.97 }, { autoAlpha: 1, scale: 1, duration: 0.72 }, 0)
        .fromTo(
          [kickerRef.current, copyRef.current],
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 },
          0.36
        )
        .fromTo(scrollLinkRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, 0.62);

      const split = SplitText.create(title, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 105,
            autoAlpha: 0,
            duration: 0.76,
            stagger: 0.09,
            ease: "power3.out"
          });
        }
      });

      const refresh = () => ScrollTrigger.refresh();
      document.fonts.ready.then(refresh);
      window.addEventListener("load", refresh, { once: true });

      return () => {
        split.revert();
        intro.kill();
        media.revert();
        window.removeEventListener("load", refresh);
      };
    },
    { scope: sectionRef, dependencies: [language, copy.hero.titleTop, copy.hero.titleBottom], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-visible bg-[radial-gradient(circle_at_50%_50%,#e9e9ec_0%,#eeeff0_100%)]"
    >
      <div
        ref={stageRef}
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[565px] flex-col items-center justify-center overflow-visible px-4 pb-8 pt-[112px] text-center md:h-[100dvh] md:min-h-0 md:justify-start md:pb-[clamp(24px,5dvh,86px)] md:pt-[clamp(84px,12dvh,180px)]"
      >
        <div
          ref={indicatorsRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-[91.68px] top-[375.93px] z-40 hidden md:grid md:gap-[16px]"
        >
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              ref={(node) => {
                indicatorRefs.current[index] = node;
              }}
              className="size-[5px] rounded-full bg-black"
            />
          ))}
        </div>

        <div ref={cardStackRef} className="relative mb-[22px] aspect-[1.6] w-[min(88vw,480px)] md:mb-[clamp(22px,4dvh,84px)] md:w-[min(92vw,565px,58dvh)]">
          <div ref={midnightRef} className="absolute inset-0 transform-gpu will-change-transform">
            <CardImage
              src="/assets/uniqo-card-midnight.webp"
              alt="Uniqo Midnight card"
              width={2400}
              height={1500}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div ref={graphiteRef} className="invisible absolute inset-0 hidden opacity-0 transform-gpu will-change-transform md:block">
            <CardImage
              src="/assets/uniqo-card-graphite.webp"
              alt="Uniqo Graphite card"
              width={2400}
              height={1500}
              className="h-full w-full object-contain"
            />
          </div>
          <div ref={arcticRef} className="invisible absolute inset-0 hidden opacity-0 transform-gpu will-change-transform md:block">
            <CardImage
              src="/assets/uniqo-card-arctic.webp"
              alt="Uniqo Arctic card"
              width={2400}
              height={1500}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span ref={kickerRef} className="mb-[clamp(12px,2dvh,21px)] text-[19.939px] font-medium leading-[1.102] text-[#686868]">
            01
          </span>
          <h1 ref={titleRef} className="max-w-full text-[clamp(30px,2.394vw,45.974px)] font-medium leading-[1.102] tracking-normal">
            <span className="md:whitespace-nowrap">{copy.hero.titleTop}</span>
            <br />
            <span className="md:whitespace-nowrap">{copy.hero.titleBottom}</span>
          </h1>
          <p ref={copyRef} className="mt-[clamp(16px,2.4dvh,26px)] max-w-[560px] text-[clamp(18px,1.25vw,24px)] font-normal leading-[1.102] text-[#686868]">
            {copy.hero.copy}
          </p>
        </div>
        <a ref={scrollLinkRef} href="#products" aria-label="Scroll to products" className="mt-[clamp(24px,4dvh,60px)]">
          <Image src="/assets/uniqo-scroll-indicator.png" alt="" width={28} height={44} className="h-[43px] w-[27px]" />
        </a>
      </div>
    </section>
  );
}
