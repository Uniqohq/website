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

function FeaturePreview({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="absolute bottom-[6px] right-0 h-[106px] w-[174px] rounded-[18px] bg-[#202224] p-[16px] text-white shadow-[0_18px_30px_rgba(0,0,0,0.12)]">
        <div className="h-[15px] w-[22px] rounded-[4px] bg-[#bfc1c3]" />
        <div className="absolute bottom-[16px] left-[16px] h-[8px] w-[72px] rounded-full bg-white/[0.38]" />
        <div className="absolute bottom-[14px] right-[16px] h-[18px] w-[34px] rounded-full bg-white/[0.14] p-[3px]">
          <span className="block size-[12px] translate-x-[16px] rounded-full bg-white" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="absolute bottom-[8px] right-[4px] h-[116px] w-[184px]">
        <span className="absolute right-[26px] top-0 h-[82px] w-[138px] rotate-[7deg] rounded-[16px] border border-black/[0.08] bg-[#d9dadd]" />
        <span className="absolute right-[12px] top-[15px] h-[82px] w-[138px] rotate-[2deg] rounded-[16px] border border-black/[0.08] bg-[#c5c7c8]" />
        <span className="absolute bottom-0 right-0 h-[82px] w-[138px] rounded-[16px] bg-[#202224] p-[14px] text-white shadow-[0_16px_28px_rgba(0,0,0,0.12)]">
          <span className="block h-[7px] w-[52px] rounded-full bg-white/[0.45]" />
          <span className="absolute bottom-[13px] right-[14px] text-[13px] font-medium tabular-nums text-white/[0.72]">05</span>
        </span>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="absolute bottom-[12px] right-0 flex h-[96px] w-[190px] flex-col justify-between rounded-[20px] border border-black/[0.07] bg-white p-[17px] shadow-[0_14px_28px_rgba(0,0,0,0.035)]">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-medium tabular-nums text-[#7c7c7c]">00:30</span>
          <RefreshCw size={17} strokeWidth={2} />
        </div>
        <span className="text-[19px] font-medium tabular-nums">•••• 4821</span>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="absolute bottom-[4px] right-0 grid w-[190px] gap-[11px]">
        {[86, 118, 98].map((width, itemIndex) => (
          <div key={width} className="flex h-[30px] items-center justify-between">
            <span className="h-[7px] rounded-full bg-black/[0.12]" style={{ width }} />
            <span className={`h-[24px] w-[44px] rounded-full p-[4px] ${itemIndex === 1 ? "bg-[#c5c7c8]" : "bg-black"}`}>
              <span className={`block size-[16px] rounded-full bg-white ${itemIndex === 1 ? "" : "translate-x-[20px]"}`} />
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="absolute bottom-[2px] right-[18px] flex size-[126px] items-center justify-center rounded-full border-[12px] border-[#d9dadd] border-t-black">
        <div className="flex size-[76px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
          <ShieldCheck size={34} strokeWidth={1.9} />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-[6px] right-0 flex h-[112px] w-[194px] items-end justify-between gap-[8px] border-b border-black/10 px-[9px] pb-[10px]">
      {[42, 68, 54, 86, 72, 98].map((height, itemIndex) => (
        <span
          key={`${height}-${itemIndex}`}
          className={`w-[18px] rounded-t-[6px] ${itemIndex === 5 ? "bg-black" : "bg-[#c5c7c8]"}`}
          style={{ height }}
        />
      ))}
    </div>
  );
}

export function Features() {
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();
  const localizedCards = featureCards.map((card, index) => ({ ...card, ...copy.features.cards[index] }));

  return (
    <section id="features" className="bg-[#ececee]">
      <div className="container py-[72px] md:py-[96px]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
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
          <p className="mt-[24px] max-w-[650px] text-[clamp(20px,1.45vw,28px)] font-medium leading-[1.102] text-[#7c7c7c]">
            {copy.features.copy}
          </p>
        </motion.div>

        <div className="mt-[72px] grid min-w-0 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {localizedCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.68, ease, delay: index * 0.07 }}
                className="flex min-h-[410px] min-w-0 flex-col rounded-[35px] bg-[#f7f7f7] p-[24px] md:p-[30px]"
              >
                <div aria-hidden="true" className="relative h-[158px] shrink-0">
                  <span className="flex size-[62px] items-center justify-center rounded-[21px] bg-[#f0f0f0]">
                    <Icon size={29} strokeWidth={2.05} />
                  </span>
                  <FeaturePreview index={index} />
                </div>
                <h3 className="mt-[28px] max-w-[390px] text-[30px] font-medium leading-[1.02]">{card.title}</h3>
                <p className="mt-[17px] max-w-[410px] text-[19px] font-medium leading-[1.15] text-[#7c7c7c] md:text-[20px]">{card.copy}</p>
                <a
                  href="/waitlist"
                  aria-label={card.title}
                  className="burst-hover mt-auto flex size-[58px] items-center justify-center rounded-full bg-[#f0f0f0]"
                >
                  <ArrowRight size={27} strokeWidth={2.05} />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.a
          href="/waitlist"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease, delay: 0.12 }}
          className="burst-hover mx-auto mt-[42px] flex h-[62px] w-fit items-center justify-center gap-[22px] rounded-full bg-black px-[29px] text-[19px] font-medium text-white"
        >
          {copy.features.explore}
          <ArrowRight size={24} strokeWidth={2.05} />
        </motion.a>
      </div>
    </section>
  );
}
