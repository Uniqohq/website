"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";
import { getCardAsset, type CardStyle } from "@/lib/card-assets";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, useGSAP);

const ease = [0.16, 1, 0.3, 1] as const;

type Billing = "monthly" | "yearly";

const plans: Array<{ monthly: string; yearly: string; style: CardStyle }> = [
  { monthly: "$0", yearly: "$0", style: "arctic" },
  { monthly: "$4.99", yearly: "$48", style: "midnight" },
  { monthly: "$9.99", yearly: "$96", style: "graphite" },
  { monthly: "$19.99", yearly: "$192", style: "sirius" }
];

// Scroll distance of one plan, in timeline seconds. The crossfade sits at the start of each segment.
const SEGMENT = 1;
const HOLD = 0.3;

function BillingSwitch({ billing, onChange, monthly, yearly }: { billing: Billing; onChange: (next: Billing) => void; monthly: string; yearly: string }) {
  return (
    <div role="group" aria-label="Billing period" className="relative flex h-[48px] w-[236px] rounded-full border border-black p-[3px]">
      <span
        aria-hidden="true"
        className={`absolute bottom-[3px] left-[3px] top-[3px] w-[calc(50%-3px)] rounded-full bg-black transition-transform duration-[460ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          billing === "monthly" ? "translate-x-0" : "translate-x-full"
        }`}
      />
      {(["monthly", "yearly"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          aria-pressed={billing === item}
          className={`relative z-10 flex h-full w-1/2 items-center justify-center rounded-full text-[17px] font-medium leading-none transition-colors duration-300 ${
            billing === item ? "text-white" : "text-black"
          }`}
        >
          {item === "monthly" ? monthly : yearly}
        </button>
      ))}
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const { copy, language, region } = useSiteLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const localizedPlans = plans.map((plan, index) => ({ ...plan, ...copy.pricing.plans[index] }));

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setPinned(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!headingRef.current || reducedMotion) {
        return;
      }

      const reveal = gsap.fromTo(headingRef.current, { autoAlpha: 0 }, {
        autoAlpha: 1,
        duration: 0.68,
        ease: "power2.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 82%", once: true }
      });

      return () => {
        reveal.scrollTrigger?.kill();
        reveal.kill();
      };
    },
    { scope: sectionRef, dependencies: [language, reducedMotion], revertOnUpdate: true }
  );

  // Desktop: one pinned scene. The card panel stays in place, the plan's card swaps inside it,
  // then the plan's benefits appear one by one before the next plan takes over.
  useGSAP(
    () => {
      const scene = sceneRef.current;
      const cards = cardRefs.current.filter((node): node is HTMLDivElement => Boolean(node));
      const texts = textRefs.current.filter((node): node is HTMLDivElement => Boolean(node));

      if (!pinned || !scene || cards.length !== plans.length || texts.length !== plans.length) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          id: "uniqo-pricing",
          trigger: scene,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 4.2, 3200)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true
        },
        onUpdate: () => {
          const index = Math.min(plans.length - 1, Math.max(0, Math.floor((timeline.time() - 0.12) / SEGMENT)));
          setActive((current) => (current === index ? current : index));
        }
      });

      gsap.set([...cards.slice(1), ...texts.slice(1)], { autoAlpha: 0 });

      texts.forEach((text, index) => {
        const items = text.querySelectorAll<HTMLElement>("[data-plan-feature]");
        const start = index * SEGMENT;

        gsap.set(items, { autoAlpha: 0, y: 10 });

        if (index > 0) {
          timeline
            .to(cards[index - 1], { autoAlpha: 0, yPercent: -4, duration: 0.2 }, start)
            .to(texts[index - 1], { autoAlpha: 0, y: -16, duration: 0.18 }, start)
            .fromTo(cards[index], { autoAlpha: 0, yPercent: 4 }, { autoAlpha: 1, yPercent: 0, duration: 0.24 }, start + 0.06)
            .fromTo(text, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.2 }, start + 0.1);
        }

        timeline.to(items, { autoAlpha: 1, y: 0, duration: 0.12, stagger: 0.06, ease: "power2.out" }, start + 0.26);
      });

      timeline.to({}, { duration: HOLD }, (plans.length - 1) * SEGMENT + 0.9);

      // This pin is created after the sections below it (it waits for the media query), so re-order
      // the triggers by page position and recalculate, otherwise the Manifesto pin starts too early.
      ScrollTrigger.sort();
      ScrollTrigger.refresh();

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
        gsap.set([...cards, ...texts], { clearProps: "all" });
        texts.forEach((text) => gsap.set(text.querySelectorAll("[data-plan-feature]"), { clearProps: "all" }));
      };
    },
    { scope: sectionRef, dependencies: [pinned, language], revertOnUpdate: true }
  );

  const goToPlan = (index: number) => {
    const trigger = ScrollTrigger.getById("uniqo-pricing");

    if (!trigger) {
      return;
    }

    const duration = (plans.length - 1) * SEGMENT + 0.9 + HOLD;
    const target = trigger.start + (trigger.end - trigger.start) * ((index * SEGMENT + 0.86) / duration);
    gsap.to(window, { scrollTo: { y: target, autoKill: true }, duration: 0.9, ease: "power3.inOut" });
  };

  const price = (plan: (typeof localizedPlans)[number]) => (
    <div className="min-h-[64px] font-medium leading-[0.94]">
      {plan.monthly === plan.yearly ? (
        <p className="text-[44px]">
          {plan.yearly}
          <span className="ml-[10px] text-[20px] text-[#686868]">/ {copy.pricing.forever}</span>
        </p>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={`${plan.name}-${billing}`}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease }}
            className="text-[44px]"
          >
            {billing === "monthly" ? plan.monthly : plan.yearly}
            <span className="ml-[10px] text-[20px] text-[#686868]">/ {billing === "monthly" ? copy.pricing.month : copy.pricing.year}</span>
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );

  const details = (plan: (typeof localizedPlans)[number], index: number) => (
    <>
      <span className="text-[19px] font-medium leading-[1.102] text-[#686868]">
        {String(index + 1).padStart(2, "0")} / {String(plans.length).padStart(2, "0")}
      </span>
      <h3 className="mt-[8px] text-[clamp(40px,3.4vw,58px)] font-medium leading-[0.98]">{plan.name}</h3>
      <p className="mt-[14px] max-w-[440px] text-[19px] font-medium leading-[1.16] text-[#686868] md:text-[21px]">{plan.copy}</p>
      <div className="mt-[28px]">{price(plan)}</div>
      <ul className="mt-[24px] grid gap-[12px]">
        <li data-plan-feature className="flex min-w-0 items-start gap-[12px] text-[18px] font-medium leading-[1.15] md:text-[19px]">
          <Check className="size-[22px] shrink-0" strokeWidth={2.2} />
          <span className="min-w-0">
            {copy.pricing.cardIncluded}: {plan.card}
          </span>
        </li>
        {plan.features.map((feature) => (
          <li key={feature} data-plan-feature className="flex min-w-0 items-start gap-[12px] text-[18px] font-medium leading-[1.15] md:text-[19px]">
            <Check className="size-[22px] shrink-0" strokeWidth={2.2} />
            <span className="min-w-0 break-words">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/waitlist"
        className="burst-hover mt-[32px] inline-flex h-[58px] min-w-[200px] self-start items-center justify-center rounded-[13px] bg-black px-[28px] text-[19px] font-medium leading-none text-white"
      >
        {plan.cta}
      </Link>
    </>
  );

  return (
    <section id="pricing" ref={sectionRef} className="bg-[#ececee]">
      <div className="container pt-[72px] md:pt-[96px]">
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <span className="section-kicker">04</span>
          <h2 ref={headingRef} className="mt-[14px] max-w-full text-[clamp(44px,4.2vw,76px)] font-medium leading-[0.94]">
            {copy.pricing.titleTop}
            <br />
            {copy.pricing.titleBottom}
          </h2>
          <p className="mt-[24px] max-w-[520px] text-[clamp(20px,1.45vw,28px)] font-medium leading-[1.102] text-[#686868]">{copy.pricing.copy}</p>
          {!pinned && (
            <div className="mt-[40px]">
              <BillingSwitch billing={billing} onChange={setBilling} monthly={copy.pricing.monthly} yearly={copy.pricing.yearly} />
            </div>
          )}
        </div>
      </div>

      {pinned ? (
        <div ref={sceneRef} className="relative h-[100svh]">
          <div className="container flex h-full flex-col pb-[32px] pt-[120px]">
            <div className="grid min-h-0 flex-1 grid-cols-[1.12fr_0.88fr] items-center gap-[clamp(40px,4.5vw,88px)]">
              <div className="relative flex aspect-[1.32] max-h-full w-full items-center justify-center rounded-[35px] bg-[#f7f7f7]">
                {localizedPlans.map((plan, index) => (
                  <div
                    key={plan.name}
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    className="absolute inset-0 flex items-center justify-center px-[9%]"
                  >
                    <CardImage
                      src={getCardAsset(region, plan.style)}
                      alt={`${plan.name} Uniqo card`}
                      width={1600}
                      height={1019}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
              <div className="relative h-full min-w-0">
                {localizedPlans.map((plan, index) => (
                  <div
                    key={plan.name}
                    ref={(node) => {
                      textRefs.current[index] = node;
                    }}
                    aria-hidden={active !== index}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    {details(plan, index)}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[28px] flex items-center justify-between gap-6">
              <div role="tablist" aria-label="Plans" className="flex items-center gap-[2px] rounded-full bg-[#f7f7f7] p-[4px]">
                {localizedPlans.map((plan, index) => (
                  <button
                    key={plan.name}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    onClick={() => goToPlan(index)}
                    className={`h-[40px] rounded-full px-[20px] text-[17px] font-medium leading-none transition-colors duration-300 ${
                      active === index ? "bg-black text-white" : "text-black hover:bg-[#ececee]"
                    }`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
              <BillingSwitch billing={billing} onChange={setBilling} monthly={copy.pricing.monthly} yearly={copy.pricing.yearly} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-[56px] grid gap-[24px]">
          {localizedPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={reducedMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              aria-label={plan.name}
              className="grid items-center gap-[28px] md:grid-cols-2 md:gap-[40px]"
            >
              <div className="flex aspect-[1.32] w-full items-center justify-center rounded-[28px] bg-[#f7f7f7] px-[9%] md:rounded-[35px]">
                <CardImage src={getCardAsset(region, plan.style)} alt={`${plan.name} Uniqo card`} width={1600} height={1019} className="h-auto w-full" />
              </div>
              <div className="min-w-0 pb-[24px]">{details(plan, index)}</div>
            </motion.article>
          ))}
        </div>
      )}

      <div className="container pb-[72px] pt-[48px] md:pb-[96px]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="rounded-[28px] bg-[#f7f7f7] px-[24px] py-[32px] md:rounded-[35px] md:px-[40px] md:py-[44px]"
        >
          <h3 className="text-[28px] font-medium leading-[0.96] md:text-[38px]">{copy.pricing.cardsTitle}</h3>
          <ul className="mt-[28px] grid gap-[24px] md:grid-cols-2 xl:grid-cols-4">
            {copy.pricing.cards.map((item) => (
              <li key={item.title} className="font-medium leading-[1.1]">
                <p className="text-[21px] text-black">{item.title}</p>
                <p className="mt-[8px] text-[18px] text-[#686868]">{item.copy}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
