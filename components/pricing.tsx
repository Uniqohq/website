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
      <div className="container min-h-[1320px] overflow-visible py-[64px]">
      <div className="mx-auto mb-[72px] flex max-w-[520px] flex-col items-center text-center">
        <span className="section-kicker">04</span>
        <h2 className="mt-[12px] text-[clamp(52px,3.6vw,69px)] font-medium leading-[0.94]">
          One card.
          <br />
          Three ways.
        </h2>
        <p className="mt-[16px] max-w-[430px] text-[20px] font-medium leading-[1.102] text-[#7c7c7c]">Choose the plan that fits your life. Upgrade or downgrade anytime.</p>
        <div className="relative mt-[52px] flex h-[58px] w-full max-w-[340px] rounded-full border border-black md:h-[62px] md:max-w-none md:w-[336px]">
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 390, damping: 34, mass: 0.8 }}
            className={`absolute top-[-1px] h-[58px] rounded-full bg-black md:h-[62px] ${
              billing === "monthly" ? "left-[-1px] w-[47%] md:w-[157px]" : "left-[47%] w-[53%] md:left-[156px] md:w-[181px]"
            }`}
          />
          {(["monthly", "yearly"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setBilling(item)}
              className={`relative z-10 flex h-full items-center justify-center rounded-full text-[22px] font-medium leading-[0.94] transition-colors duration-300 md:text-[25px] ${
                billing === item ? "text-white" : "text-black"
              } ${item === "monthly" ? "w-[47%] md:w-[157px]" : "w-[53%] md:w-[181px]"}`}
            >
              {item === "monthly" ? "Monthly" : "Yearly"}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1160px] gap-[24px] md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={reducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            whileHover={reducedMotion ? undefined : { scale: 1.024, y: -7 }}
            transition={{
              opacity: { duration: 0.72, ease, delay: index * 0.1 },
              scale: { type: "spring", stiffness: 300, damping: 30 },
              y: { type: "spring", stiffness: 300, damping: 30 }
            }}
            className={`flex min-h-[540px] transform-gpu flex-col gap-[28px] rounded-[28px] pb-[24px] pl-[28px] pr-[24px] pt-[38px] ${
              plan.dark ? "bg-[linear-gradient(144.34deg,#252729_0%,#1c1e1f_127.74%)] text-white" : "bg-[#f7f7f7] text-black"
            }`}
          >
            <div className="font-medium leading-[0.94]">
              <h3 className="text-[38px]">{plan.name}</h3>
              <p className={`mt-[12px] text-[22px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#7c7c7c]"}`}>{plan.copy}</p>
            </div>
            <div className="h-[76px]">
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
                  <p className={`mt-[12px] text-[22px] ${plan.dark ? "text-[#cbcbcb]" : "text-[#7c7c7c]"}`}>
                    / {billing === "monthly" ? "month" : "year"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <ul className="grid gap-[13px]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-[14px] text-[21px] font-medium leading-[0.94]">
                  <Check size={28} strokeWidth={2.2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`burst-hover mt-auto h-[62px] w-full rounded-[16px] text-[22px] font-medium leading-[0.94] ${
                plan.dark ? "bg-white text-black" : "border border-[#dbdcde] bg-white text-black"
              }`}
            >
              {plan.cta}
            </button>
          </motion.article>
        ))}
      </div>
      <div className="mt-[96px] grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="max-w-[540px] text-[54px] font-medium leading-[0.94]">
            Not sure yet?
            <br />
            Start with Arctic.
          </h3>
          <p className="mt-[36px] max-w-[421px] text-[28px] font-medium leading-[0.94] text-[#7c7c7c]">You can upgrade, downgrade or cancel in any time</p>
          <a href="#" className="burst-hover mt-[36px] inline-flex h-[62px] w-[190px] items-center justify-center rounded-[13px] bg-black text-[20px] font-medium leading-[1.102] text-white">
            Get your card
          </a>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="relative max-w-full justify-self-center overflow-visible px-4 py-8"
        >
          <span className="pointer-events-none absolute bottom-[26px] left-1/2 h-[90px] w-[72%] -translate-x-1/2 rotate-[4deg] rounded-full bg-black/16 blur-[38px]" />
          <CardImage
            src="/assets/uniqo-card-arctic.png"
            alt="Uniqo Arctic card"
            width={4800}
            height={3000}
            className="relative z-10 h-auto w-[min(76vw,640px)] rotate-[4deg]"
          />
        </motion.div>
      </div>
      </div>
    </section>
  );
}
