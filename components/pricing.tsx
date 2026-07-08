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
    yearly: "$49",
    features: ["Everything in Arctic", "Up to 5 physical cards", "AI spending categories", "Smart limits", "Priority support"],
    cta: "Choose midnight",
    dark: true
  },
  {
    name: "Graphite",
    copy: "Total control.",
    monthly: "$9.99",
    yearly: "$99",
    features: ["Everything in Midnight", "Unlimited physical cards", "AI purchase approval", "Merchant control", "Travel insurance"],
    cta: "Choose graphite",
    dark: true
  }
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const reducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="container overflow-hidden py-20">
      <div className="mx-auto mb-20 flex max-w-[540px] flex-col items-center text-center">
        <span className="section-kicker">04</span>
        <h2 className="mt-4 text-[clamp(52px,6vw,86px)] font-extrabold leading-[0.86]">
          One card.
          <br />
          Three ways.
        </h2>
        <p className="section-copy mt-5 max-w-[330px]">Choose the plan that fits your life. Upgrade or downgrade anytime.</p>
        <div className="relative mt-16 grid h-14 w-[230px] grid-cols-2 rounded-full border border-[#9a9ba0] bg-transparent p-1">
          <motion.span
            layout
            transition={{ duration: 0.5, ease }}
            className={`absolute top-1 h-12 w-[108px] rounded-full bg-black ${billing === "monthly" ? "left-1" : "left-[116px]"}`}
          />
          {(["monthly", "yearly"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setBilling(item)}
              className={`relative z-10 rounded-full text-[15px] font-extrabold transition-colors duration-300 ${
                billing === item ? "text-white" : "text-black"
              }`}
            >
              {item === "monthly" ? "Monthly" : "Yearly"}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-7 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={reducedMotion ? false : { opacity: 0, y: 34 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease, delay: index * 0.08 }}
            className={`min-h-[470px] rounded-[22px] p-8 ${plan.dark ? "bg-[#171d24] text-white" : "bg-white text-black"}`}
          >
            <h3 className="text-[32px] font-extrabold leading-none">{plan.name}</h3>
            <p className={`mt-3 text-[15px] font-semibold ${plan.dark ? "text-[#a7adb4]" : "text-[#85878c]"}`}>{plan.copy}</p>
            <div className="mt-10 h-[58px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${plan.name}-${billing}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <p className="text-[34px] font-extrabold leading-none">{billing === "monthly" ? plan.monthly : plan.yearly}</p>
                  <p className={`mt-1 text-[15px] font-bold ${plan.dark ? "text-[#c7cbd0]" : "text-[#77797d]"}`}>
                    / {billing === "monthly" ? "month" : "year"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <ul className="mt-8 grid gap-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[15px] font-extrabold">
                  <Check size={18} strokeWidth={2.4} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-10 h-14 w-full rounded-[10px] text-[15px] font-extrabold ${
                plan.dark ? "bg-white text-black" : "border border-[#dbdcde] bg-white text-black"
              }`}
            >
              {plan.cta}
            </button>
          </motion.article>
        ))}
      </div>
      <div className="mt-24 grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="max-w-[430px] text-[clamp(40px,5vw,70px)] font-extrabold leading-[0.92]">
            Not sure yet?
            <br />
            Start with Arctic.
          </h3>
          <p className="mt-7 max-w-[360px] text-[19px] font-semibold leading-[1.15] text-[#85878c]">You can upgrade, downgrade or cancel in any time</p>
          <a href="#" className="mt-7 inline-flex rounded-[8px] bg-black px-7 py-4 text-[13px] font-bold text-white">
            Get your card
          </a>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 42, rotate: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0, rotate: 6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="max-w-full justify-self-center overflow-hidden"
        >
          <CardImage
            src="/assets/uniqo-pricing-arctic-card.png"
            alt="Uniqo Arctic card"
            width={606}
            height={387}
            className="w-[min(82vw,606px)] drop-shadow-[0_36px_36px_rgba(12,13,18,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
