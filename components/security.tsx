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
    <section id="security" className="container overflow-hidden py-20">
      <div className="mb-14">
        <span className="section-kicker">03</span>
        <h2 className="section-title mt-4">Security</h2>
        <p className="section-copy mt-4 max-w-[290px]">Built to protect your money, before anything happens</p>
      </div>
      <div className="grid gap-7 md:grid-cols-4">
        {securityCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.62, ease, delay: index * 0.07 }}
              className="flex min-h-[270px] flex-col rounded-[20px] bg-white p-7"
            >
              <div className="mb-12 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#f4f4f5]">
                <Icon size={27} strokeWidth={2.15} />
              </div>
              <h3 className="text-[20px] font-extrabold leading-[1.02]">{card.title}</h3>
              <p className="mt-4 text-[13px] font-semibold leading-[1.16] text-[#85878c]">{card.copy}</p>
              <button type="button" aria-label={card.title} className="mt-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f4f5]">
                <ArrowRight size={18} strokeWidth={2.4} />
              </button>
            </motion.article>
          );
        })}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 30 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease }}
        className="mt-7 grid min-h-[220px] overflow-hidden rounded-[20px] bg-white md:grid-cols-[1fr_1.35fr]"
      >
        <div className="flex flex-col p-8">
          <h3 className="max-w-[260px] text-[28px] font-extrabold leading-[0.96]">Lost your card? Someone else can return it.</h3>
          <p className="mt-4 max-w-[300px] text-[14px] font-semibold leading-[1.15] text-[#85878c]">
            If your card is lost, anyone can tap it with their phone to contact you securely and help return it.
          </p>
          <button type="button" aria-label="Lost card help" className="mt-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f4f5]">
            <ArrowRight size={18} strokeWidth={2.4} />
          </button>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 42 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="relative flex min-w-0 items-end justify-center gap-16 overflow-hidden px-6 pt-4"
        >
          <CardImage
            src="/assets/uniqo-security-card.png"
            alt="Uniqo card security preview"
            width={348}
            height={300}
            className="mb-8 w-[min(45vw,348px)] rotate-[-7deg] drop-shadow-[0_18px_32px_rgba(12,13,18,0.22)]"
          />
          <CardImage src="/assets/uniqo-phone-mockup.png" alt="Uniqo phone capture screen" width={219} height={354} className="w-[min(26vw,219px)] self-end" />
        </motion.div>
      </motion.div>
    </section>
  );
}
