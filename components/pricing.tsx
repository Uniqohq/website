"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";

gsap.registerPlugin(Flip, ScrollTrigger, useGSAP);

const ease = [0.16, 1, 0.3, 1] as const;

const plans = [
  {
    monthly: "$0",
    yearly: "$0",
    dark: false
  },
  {
    monthly: "$4.99",
    yearly: "$48",
    dark: true
  },
  {
    monthly: "$9.99",
    yearly: "$96",
    dark: true
  }
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const reducedMotion = useReducedMotion();
  const { copy, language } = useSiteLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const switchThumbRef = useRef<HTMLSpanElement>(null);
  const switchStateRef = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const localizedPlans = plans.map((plan, index) => ({ ...plan, ...copy.pricing.plans[index] }));

  useLayoutEffect(() => {
    if (!switchStateRef.current || reducedMotion) {
      switchStateRef.current = null;
      return;
    }

    Flip.from(switchStateRef.current, {
      duration: 0.46,
      ease: "power3.out",
      scale: true,
      absolute: false
    });
    switchStateRef.current = null;
  }, [billing, reducedMotion]);

  useGSAP(
    () => {
      if (!headingRef.current || reducedMotion) {
        return;
      }

      const reveal = gsap.fromTo(headingRef.current, { autoAlpha: 0 }, {
        autoAlpha: 1,
        duration: 0.68,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 82%",
          once: true
        }
      });

      return () => {
        reveal.scrollTrigger?.kill();
        reveal.kill();
      };
    },
    { scope: sectionRef, dependencies: [language, reducedMotion], revertOnUpdate: true }
  );

  const selectBilling = (nextBilling: "monthly" | "yearly") => {
    if (nextBilling === billing) {
      return;
    }

    if (!reducedMotion && switchThumbRef.current) {
      switchStateRef.current = Flip.getState(switchThumbRef.current);
    }
    setBilling(nextBilling);
  };

  return (
    <section id="pricing" ref={sectionRef} className="bg-[#ececee]">
      <div className="container min-h-[1320px] overflow-visible py-[64px]">
      <div className="mx-auto mb-[72px] flex max-w-[520px] flex-col items-center text-center">
        <span className="section-kicker">05</span>
        <h2 ref={headingRef} className="mt-[12px] max-w-full text-[clamp(42px,3.6vw,69px)] font-medium leading-[0.94]">
          {copy.pricing.titleTop}
          <br />
          {copy.pricing.titleBottom}
        </h2>
        <p className="mt-[16px] max-w-[430px] text-[20px] font-medium leading-[1.102] text-[#686868]">{copy.pricing.copy}</p>
        <div role="group" aria-label="Billing period" className="relative mt-[52px] flex h-[58px] w-full max-w-[340px] rounded-full border border-black md:h-[62px] md:max-w-none md:w-[336px]">
          <span
            ref={switchThumbRef}
            data-flip-id="pricing-switch-thumb"
            className={`absolute top-[-1px] h-[58px] rounded-full bg-black md:h-[62px] ${
              billing === "monthly" ? "left-[-1px] w-[47%] md:w-[157px]" : "left-[47%] w-[53%] md:left-[156px] md:w-[181px]"
            }`}
          />
          {(["monthly", "yearly"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectBilling(item)}
              aria-pressed={billing === item}
              className={`relative z-10 flex h-full items-center justify-center rounded-full text-[22px] font-medium leading-[0.94] transition-colors duration-300 md:text-[25px] ${
                billing === item ? "text-white" : "text-black"
              } ${item === "monthly" ? "w-[47%] md:w-[157px]" : "w-[53%] md:w-[181px]"}`}
            >
              {item === "monthly" ? copy.pricing.monthly : copy.pricing.yearly}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1160px] gap-[24px] md:grid-cols-3">
        {localizedPlans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              opacity: { duration: 0.72, ease, delay: index * 0.07 }
            }}
            className={`flex min-h-[540px] min-w-0 transform-gpu flex-col gap-[28px] rounded-[28px] pb-[24px] pl-[24px] pr-[20px] pt-[38px] will-change-transform md:pl-[28px] md:pr-[24px] ${
              plan.dark ? "bg-[linear-gradient(144.34deg,#252729_0%,#1c1e1f_127.74%)] text-white" : "bg-[#f7f7f7] text-black"
            }`}
          >
            <div className="font-medium leading-[0.94]">
              <h3 className="text-[38px]">{plan.name}</h3>
              <p className={`mt-[12px] text-[22px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#686868]"}`}>{plan.copy}</p>
            </div>
            <div className="h-[76px]">
              {plan.monthly === plan.yearly ? (
                <div className="font-medium leading-[0.94]">
                  <p className="text-[38px]">{plan.yearly}</p>
                  <p className={`mt-[12px] text-[22px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#686868]"}`}>
                    / {copy.pricing.forever}
                  </p>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${plan.name}-${billing}`}
                    initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                    animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -24 }}
                    transition={{ duration: 0.34, ease }}
                    className="font-medium leading-[0.94]"
                  >
                    <p className="text-[38px]">{billing === "monthly" ? plan.monthly : plan.yearly}</p>
                    <p className={`mt-[12px] text-[22px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#686868]"}`}>
                      / {billing === "monthly" ? copy.pricing.month : copy.pricing.year}
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
            <ul className="grid gap-[13px]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex min-w-0 items-start gap-[12px] text-[18px] font-medium leading-[1.05] md:items-center md:gap-[14px] md:text-[21px] md:leading-[0.94]">
                  <Check className="size-[24px] shrink-0 md:size-[28px]" strokeWidth={2.2} />
                  <span className="min-w-0 break-words">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/waitlist"
              className={`burst-hover mt-auto flex h-[62px] w-full items-center justify-center rounded-[16px] text-[22px] font-medium leading-[0.94] ${
                plan.dark ? "bg-white text-black" : "border border-[#dbdcde] bg-white text-black"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="mt-[64px] grid items-center gap-[20px] md:mt-[96px] md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        <div>
          <h3 className="max-w-[540px] text-[36px] font-medium leading-[0.96] md:text-[54px] md:leading-[0.94]">
            {copy.pricing.startTitleTop}
            <br />
            {copy.pricing.startTitleBottom}
          </h3>
          <p className="mt-[22px] max-w-[421px] text-[21px] font-medium leading-[1.06] text-[#686868] md:mt-[36px] md:text-[28px] md:leading-[0.94]">{copy.pricing.startCopy}</p>
          <Link href="/waitlist" className="burst-hover mt-[28px] inline-flex h-[58px] w-[180px] items-center justify-center rounded-[13px] bg-black text-[18px] font-medium leading-[1.102] text-white md:mt-[36px] md:h-[62px] md:w-[190px] md:text-[20px]">
            {copy.pricing.startCta}
          </Link>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="relative mt-[8px] max-w-full justify-self-center overflow-visible px-2 py-0 md:mt-0 md:px-4 md:py-8"
        >
          <span className="pointer-events-none absolute bottom-[26px] left-1/2 h-[90px] w-[72%] -translate-x-1/2 rotate-[4deg] rounded-full bg-black/16 blur-[38px]" />
          <CardImage
            src="/assets/uniqo-card-arctic.webp"
            alt="Uniqo Arctic card"
            width={2400}
            height={1500}
            className="relative z-10 h-auto w-[min(76vw,640px)] rotate-[4deg]"
          />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
