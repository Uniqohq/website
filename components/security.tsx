"use client";

import { ArrowRight, BellRing, Shield, SlidersHorizontal, Snowflake } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

const securityCards = [
  {
    icon: Shield
  },
  {
    icon: Snowflake
  },
  {
    icon: BellRing
  },
  {
    icon: SlidersHorizontal
  }
];

export function Security() {
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();
  const localizedCards = securityCards.map((card, index) => ({ ...card, ...copy.security.cards[index] }));

  return (
    <section id="security" className="bg-[#ececee]">
      <div className="container min-h-[1220px] overflow-hidden py-[58px]">
      <div className="mb-[78px]">
        <span className="section-kicker">03</span>
        <h2 className="section-title mt-[9px]">{copy.security.title}</h2>
        <p className="mt-[16px] max-w-[330px] text-[25.674px] font-medium leading-[1.102] text-[#7c7c7c]">{copy.security.copy}</p>
      </div>
      <div className="grid gap-[31px] md:grid-cols-4">
        {localizedCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={reducedMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.68, ease, delay: index * 0.09 }}
              className="flex min-h-[420px] flex-col rounded-[35px] bg-[#f7f7f7] p-[34px]"
            >
              <div className="mb-[82px] flex size-[75px] items-center justify-center rounded-[25px] bg-[#f0f0f0]">
                <Icon size={34} strokeWidth={2.05} />
              </div>
              <h3 className="text-[31px] font-medium leading-[1.102]">{card.title}</h3>
              <p className="mt-[20px] text-[20px] font-medium leading-[1.102] text-[#7c7c7c]">{card.copy}</p>
              <a href="/waitlist" aria-label={card.title} className="burst-hover mt-auto flex size-[55px] items-center justify-center rounded-full bg-[#f0f0f0]">
                <ArrowRight size={25} strokeWidth={2.05} />
              </a>
            </motion.article>
          );
        })}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, ease }}
        className="mt-[31px] grid h-[330px] overflow-hidden rounded-[35px] bg-[#f7f7f7] md:grid-cols-[0.95fr_1.25fr]"
      >
        <div className="flex flex-col p-[34px]">
          <h3 className="max-w-[660px] text-[40px] font-medium leading-[1.102]">{copy.security.lostCardTitle}</h3>
          <p className="mt-[18px] max-w-[620px] text-[23px] font-medium leading-[1.102] text-[#7c7c7c]">
            {copy.security.lostCardCopy}
          </p>
          <a href="/waitlist" aria-label="Lost card help" className="burst-hover mt-auto flex size-[64px] items-center justify-center rounded-full bg-[#f0f0f0]">
            <ArrowRight size={30} strokeWidth={2.05} />
          </a>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="relative min-h-[330px] min-w-0 overflow-hidden px-6"
        >
          <CardImage
            src="/assets/uniqo-card-midnight.png"
            alt="Uniqo card security preview"
            width={522}
            height={353}
            className="absolute left-[4%] top-[42px] w-[min(52vw,392px)] rotate-[-7deg] md:left-[2%] md:top-[46px] md:w-[min(31vw,392px)]"
          />
          <CardImage
            src="/assets/uniqo-phone-mockup.png"
            alt="Uniqo phone capture screen"
            width={1310}
            height={2708}
            className="absolute bottom-[-116px] right-[6%] h-[388px] w-auto object-contain md:bottom-[-120px] md:right-[8%] md:h-[420px]"
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
