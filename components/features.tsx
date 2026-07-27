"use client";

import {
  ArrowRight,
  BarChart3,
  CreditCard,
  Layers3,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

const featureCards = [
  { icon: CreditCard },
  { icon: Layers3 },
  { icon: RefreshCw },
  { icon: SlidersHorizontal },
  { icon: ShieldCheck },
  { icon: BarChart3 }
];

export function Features() {
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();
  const localizedCards = featureCards.map((card, index) => ({ ...card, ...copy.features.cards[index] }));

  return (
    <section id="features" className="bg-[#ececee]">
      <div className="container py-[72px] md:py-[96px]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease }}
          className="mx-auto flex max-w-[900px] flex-col items-center text-center"
        >
          <span className="section-kicker">03</span>
          <h2 className="mt-[14px] text-[clamp(44px,4.2vw,76px)] font-medium leading-[0.94]">
            {copy.features.titleTop}
            <br />
            {copy.features.titleBottom}
          </h2>
          <p className="mt-[24px] max-w-[650px] text-[clamp(20px,1.45vw,28px)] font-medium leading-[1.102] text-[#686868]">
            {copy.features.copy}
          </p>
        </motion.div>

        <div className="mt-[64px] grid min-w-0 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {localizedCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={reducedMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.68, ease, delay: index * 0.07 }}
                className="flex min-h-[275px] min-w-0 flex-col rounded-[28px] bg-[#f7f7f7] p-[24px] md:min-h-[330px] md:rounded-[35px] md:p-[30px]"
              >
                <span aria-hidden="true" className="flex size-[62px] shrink-0 items-center justify-center rounded-[21px] bg-[#f0f0f0]">
                  <Icon size={29} strokeWidth={2.05} />
                </span>
                <h3 className="mt-[24px] max-w-[390px] text-[26px] font-medium leading-[1.04] md:mt-[30px] md:text-[30px]">{card.title}</h3>
                <p className="mt-[13px] max-w-[390px] text-[17px] font-medium leading-[1.16] text-[#686868] md:mt-[16px] md:text-[19px]">{card.copy}</p>
                <Link
                  href="/waitlist"
                  aria-label={card.title}
                  className="burst-hover mt-auto flex size-[52px] items-center justify-center rounded-full bg-[#f0f0f0] md:mt-[24px] md:size-[56px]"
                >
                  <ArrowRight size={27} strokeWidth={2.05} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
