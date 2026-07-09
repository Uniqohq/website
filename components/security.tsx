"use client";

import { ArrowRight, BellRing, Shield, SlidersHorizontal, Snowflake } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CardImage } from "./card-image";

const ease = [0.16, 1, 0.3, 1] as const;

const securityCards = [
  {
    title: "Fraud Detection",
    copy: "Card analyzes every transaction in real time and blocks suspicious activity before it causes harm.",
    icon: Shield
  },
  {
    title: "Freeze in One Tap",
    copy: "Lock your card instantly from the app. Unfreeze it when you're ready.",
    icon: Snowflake
  },
  {
    title: "Real-time Alerts",
    copy: "Get notified instantly about every transaction, login and security event.",
    icon: BellRing
  },
  {
    title: "You're in Control",
    copy: "Set limits, control where your card works and manage everything your way.",
    icon: SlidersHorizontal
  }
];

export function Security() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="security" className="bg-[#ececee]">
      <div className="container min-h-[1220px] overflow-hidden py-[58px]">
      <div className="mb-[78px]">
        <span className="section-kicker">03</span>
        <h2 className="section-title mt-[9px]">Security</h2>
        <p className="mt-[16px] max-w-[330px] text-[25.674px] font-medium leading-[1.102] text-[#7c7c7c]">Built to protect your money, before anything happens</p>
      </div>
      <div className="grid gap-[31px] md:grid-cols-4">
        {securityCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={reducedMotion ? false : { opacity: 0, y: 44 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.68, ease, delay: index * 0.09 }}
              className="flex min-h-[420px] flex-col rounded-[35px] bg-[#f7f7f7] p-[34px]"
            >
              <div className="mb-[82px] flex size-[75px] items-center justify-center rounded-[25px] bg-[#f0f0f0]">
                <Icon size={34} strokeWidth={2.05} />
              </div>
              <h3 className="text-[31px] font-medium leading-[1.102]">{card.title}</h3>
              <p className="mt-[20px] text-[20px] font-medium leading-[1.102] text-[#7c7c7c]">{card.copy}</p>
              <button type="button" aria-label={card.title} className="mt-auto flex size-[55px] items-center justify-center rounded-full bg-[#f0f0f0]">
                <ArrowRight size={25} strokeWidth={2.05} />
              </button>
            </motion.article>
          );
        })}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 46 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, ease }}
        className="mt-[31px] grid min-h-[330px] overflow-hidden rounded-[35px] bg-[#f7f7f7] md:grid-cols-[0.9fr_1.4fr]"
      >
        <div className="flex flex-col p-[34px]">
          <h3 className="max-w-[500px] text-[41.456px] font-medium leading-[1.102]">Lost your card? Someone else can return it.</h3>
          <p className="mt-[22px] max-w-[520px] text-[25.674px] font-medium leading-[1.102] text-[#7c7c7c]">
            If your card is lost, anyone can tap it with their phone to contact you securely and help return it.
          </p>
          <button type="button" aria-label="Lost card help" className="mt-auto flex size-[75px] items-center justify-center rounded-full bg-[#f0f0f0]">
            <ArrowRight size={34} strokeWidth={2.05} />
          </button>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 54 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="relative flex min-w-0 flex-col items-center justify-end gap-6 overflow-hidden px-6 pt-4 md:flex-row md:items-end md:gap-[96px]"
        >
          <CardImage
            src="/assets/uniqo-card-midnight.png"
            alt="Uniqo card security preview"
            width={522}
            height={353}
            className="mb-0 w-[min(78vw,420px)] rotate-[-7deg] md:mb-[82px] md:w-[min(42vw,420px)]"
          />
          <CardImage
            src="/assets/uniqo-phone-mockup.png"
            alt="Uniqo phone capture screen"
            width={1310}
            height={2708}
            className="h-[260px] w-auto self-center object-contain md:h-[330px] md:self-end"
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
