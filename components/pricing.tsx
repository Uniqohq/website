"use client";

import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { CardImage } from "./card-image";

const ease = [0.16, 1, 0.3, 1] as const;

const plans = [
  {
    name: "Arctic",
    copy: "Build for essentials.",
    monthly: "$0",
    yearly: "$0",
    features: ["Virtual card", "Up to 3 physical card", "Real-time push'es", "Spending insights", "Card freeze"],
    cta: "Get started",
    dark: false
  },
  {
    name: "Midnight",
    copy: "More control.",
    monthly: "$4.99",
    yearly: "$49.99",
    features: ["Everything in Arctic", "Up to 5 physical cards", "AI spending categories", "Smart limits", "Priority support"],
    cta: "Choose midnight",
    dark: true
  },
  {
    name: "Graphite",
    copy: "Total control.",
    monthly: "$9.99",
    yearly: "$99.99",
    features: ["Everything in Midnight", "Unlimited physical cards", "AI purchase approval", "Merchant control", "Travel insurance"],
    cta: "Choose graphite",
    dark: true
  }
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const reducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="bg-[#ececee]">
      <div className="container min-h-[2137px] overflow-hidden py-[92px]">
      <div className="mx-auto mb-[118px] flex max-w-[620px] flex-col items-center text-center">
        <span className="section-kicker">04</span>
        <h2 className="mt-[16px] text-[clamp(60px,4.8vw,92.19px)] font-medium leading-[0.94]">
          One card.
          <br />
          Three ways.
        </h2>
        <p className="mt-[18px] max-w-[520px] text-[25.674px] font-medium leading-[1.102] text-[#7c7c7c]">Choose the plan that fits your life. Upgrade or downgrade anytime.</p>
        <div className="relative mt-[86px] flex h-[82.441px] w-[444.678px] rounded-full border border-black">
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 390, damping: 34, mass: 0.8 }}
            className={`absolute top-[-1px] h-[82.441px] rounded-full bg-black ${billing === "monthly" ? "left-[-1px] w-[207.678px]" : "left-[206px] w-[237px]"}`}
          />
          {(["monthly", "yearly"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setBilling(item)}
              className={`relative z-10 flex h-full items-center justify-center rounded-full text-[33.579px] font-medium leading-[0.94] transition-colors duration-300 ${
                billing === item ? "text-white" : "text-black"
              } ${item === "monthly" ? "w-[207.678px]" : "w-[237px]"}`}
            >
              {item === "monthly" ? "Monthly" : "Yearly"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-[31px] md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={reducedMotion ? false : { opacity: 0, y: 58 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.72, ease, delay: index * 0.1 }}
            className={`flex min-h-[769.562px] flex-col gap-[46px] rounded-[38.703px] pb-[32px] pl-[34px] pr-[32px] pt-[60px] ${
              plan.dark ? "bg-[linear-gradient(144.34deg,#252729_0%,#1c1e1f_127.74%)] text-white" : "bg-[#f7f7f7] text-black"
            }`}
          >
            <div className="font-medium leading-[0.94]">
              <h3 className="text-[50.864px]">{plan.name}</h3>
              <p className={`mt-[18px] text-[30.65px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#7c7c7c]"}`}>{plan.copy}</p>
            </div>
            <div className="h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${plan.name}-${billing}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.42, ease }}
                  className="font-medium leading-[0.94]"
                >
                  <p className="text-[50.864px]">{billing === "monthly" ? plan.monthly : plan.yearly}</p>
                  <p className={`mt-[18px] text-[30.65px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#7c7c7c]"}`}>
                    / {billing === "monthly" ? "month" : "year"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <ul className="grid gap-[18px]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-[19.089px] text-[29.198px] font-medium leading-[0.94]">
                  <Check size={38} strokeWidth={2.2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-auto h-[85.37px] w-full rounded-[20px] text-[30.65px] font-medium leading-[0.94] ${
                plan.dark ? "bg-white text-black" : "border border-[#dbdcde] bg-white text-black"
              }`}
            >
              {plan.cta}
            </button>
          </motion.article>
        ))}
      </div>
      <div className="mt-[128px] grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="max-w-[540px] text-[61.971px] font-medium leading-[0.94]">
            Not sure yet?
            <br />
            Start with Arctic.
          </h3>
          <p className="mt-[42px] max-w-[421px] text-[33.579px] font-medium leading-[0.94] text-[#7c7c7c]">You can upgrade, downgrade or cancel in any time</p>
          <a href="#" className="mt-[42px] inline-flex h-[71.205px] w-[220.871px] items-center justify-center rounded-[14.846px] bg-black text-[23.862px] font-medium leading-[1.102] text-white">
            Get your card
          </a>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 42, rotate: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, rotate: 6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="relative max-w-full justify-self-center overflow-visible"
        >
          <CardImage
            src="/assets/uniqo-pricing-arctic-card.png"
            alt="Uniqo Arctic card"
            width={683}
            height={462}
            className="relative z-10 w-[min(82vw,683px)] shadow-[0_38px_70px_rgba(0,0,0,0.12)]"
          />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
