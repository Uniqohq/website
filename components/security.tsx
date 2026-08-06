"use client";

import { ArrowRight, BellRing, Shield, SlidersHorizontal, Snowflake } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";
import { getCardAsset } from "@/lib/card-assets";

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
  const { copy, region } = useSiteLocale();
  const localizedCards = securityCards.map((card, index) => ({ ...card, ...copy.security.cards[index] }));

  return (
    <section id="security" className="bg-[#ececee]">
      <div className="container min-h-[1220px] overflow-hidden py-[58px]">
      <div className="mb-[78px]">
        <span className="section-kicker">04</span>
        <h2 className="section-title mt-[9px]">{copy.security.title}</h2>
        <p className="mt-[16px] max-w-[330px] text-[25.674px] font-medium leading-[1.102] text-[#686868]">{copy.security.copy}</p>
      </div>
      <div className="grid gap-[31px] md:grid-cols-2 xl:grid-cols-4">
        {localizedCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={reducedMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.68, ease, delay: index * 0.065 }}
              className="flex min-h-[300px] min-w-0 flex-col rounded-[28px] bg-[#f7f7f7] p-[24px] md:min-h-[360px] md:rounded-[35px] md:p-[30px] xl:min-h-[420px] xl:p-[34px]"
            >
              <div className="mb-[36px] flex size-[58px] items-center justify-center rounded-[20px] bg-[#f0f0f0] md:mb-[54px] md:size-[68px] md:rounded-[23px] xl:mb-[82px] xl:size-[75px] xl:rounded-[25px]">
                <Icon className="size-[28px] md:size-[31px] xl:size-[34px]" strokeWidth={2.05} />
              </div>
              <h3 className="break-words text-[26px] font-medium leading-[1.06] md:text-[29px] xl:text-[31px]">{card.title}</h3>
              <p className="mt-[14px] break-words text-[17px] font-medium leading-[1.12] text-[#686868] md:mt-[18px] md:text-[19px] xl:mt-[20px] xl:text-[20px]">{card.copy}</p>
              <Link href="/waitlist" aria-label={card.title} className="burst-hover mt-auto flex size-[52px] items-center justify-center rounded-full bg-[#f0f0f0] md:size-[55px]">
                <ArrowRight size={25} strokeWidth={2.05} />
              </Link>
            </motion.article>
          );
        })}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, ease }}
        className="mt-[24px] grid overflow-hidden rounded-[28px] bg-[#f7f7f7] md:mt-[31px] md:rounded-[35px] xl:h-[330px] xl:grid-cols-[0.95fr_1.25fr]"
      >
        <div className="flex min-h-[280px] min-w-0 flex-col p-[24px] md:min-h-[330px] md:p-[34px] xl:min-h-0">
          <h3 className="max-w-[660px] break-words text-[28px] font-medium leading-[1.04] md:text-[40px] md:leading-[1.102]">{copy.security.lostCardTitle}</h3>
          <p className="mt-[16px] max-w-[620px] break-words text-[17px] font-medium leading-[1.12] text-[#686868] md:mt-[18px] md:text-[23px] md:leading-[1.102]">
            {copy.security.lostCardCopy}
          </p>
          <Link href="/waitlist" aria-label="Lost card help" className="burst-hover mt-[28px] flex size-[56px] items-center justify-center rounded-full bg-[#f0f0f0] md:mt-auto md:size-[64px]">
            <ArrowRight className="size-[27px] md:size-[30px]" strokeWidth={2.05} />
          </Link>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="relative h-[275px] min-w-0 overflow-hidden px-4 md:h-auto md:min-h-[330px] md:px-6"
        >
          <CardImage
            src={getCardAsset(region, "midnight")}
            alt="Uniqo card security preview"
            width={2400}
            height={1500}
            className="absolute left-[4%] top-[22px] w-[min(67vw,260px)] rotate-[-7deg] md:left-[8%] md:top-[42px] md:w-[min(72vw,430px)] xl:left-[2%] xl:top-[46px] xl:w-[min(31vw,392px)]"
          />
          <CardImage
            src="/assets/uniqo-phone-mockup.png"
            alt="Uniqo phone capture screen"
            width={1310}
            height={2708}
            className="absolute bottom-[-82px] right-[2%] h-[330px] w-auto object-contain md:bottom-[-120px] md:right-[8%] md:h-[420px]"
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
