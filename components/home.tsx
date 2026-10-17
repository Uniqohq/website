"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { homeCopy } from "@/lib/home-copy";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

function useHome() {
  const { language, region } = useSiteLocale();
  // The titanium Sirius card isn't offered in the Russian version.
  return { t: homeCopy[language], ru: region === "ru", lang: language };
}

// Revolut-style width: a calm column, never edge to edge except for the films.
function Wrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(calc(100%-32px),1160px)] ${className}`}>{children}</div>;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Pill({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) {
  return (
    <Link
      href={href}
      className={`burst-hover inline-flex h-[50px] items-center justify-center rounded-full px-[28px] text-[17px] font-medium leading-none transition-colors ${
        outline ? "border-2 border-white text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-white/85"
      }`}
    >
      {children}
    </Link>
  );
}



// ------------------------------------------------------------------ hero

export function HomeHero() {
  const { t } = useHome();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex flex-col overflow-hidden bg-black md:h-[100svh] md:min-h-[640px] md:flex-row md:items-center">
      <motion.div
        className="relative h-[62svh] min-h-[380px] md:absolute md:inset-0 md:-z-10 md:h-auto"
        style={reduced ? undefined : { y: imageY }}
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        {/* Plays once and rests on its last frame, the card on the concrete step. */}
        <HeroFilm reduced={Boolean(reduced)} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.55)_42%,rgba(0,0,0,0)_70%)] max-md:bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_35%)]" />
      </motion.div>

      <Wrap className="-mt-[40px] pb-[64px] md:mt-0 md:pb-0">
        <motion.div style={reduced ? undefined : { y: textY, opacity: fade }} className="max-w-[640px] text-white">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.25 }}
            className="text-[clamp(44px,5.4vw,80px)] font-medium leading-[1.02] tracking-[-0.01em]"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.45 }}
            className="mt-[28px] max-w-[520px] text-[clamp(18px,1.3vw,21px)] leading-[1.4] text-white/80"
          >
            {t.hero.copy}
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="mt-[40px]"
          >
            <Pill href="/waitlist">{t.hero.cta}</Pill>
          </motion.div>
        </motion.div>
      </Wrap>
    </section>
  );
}

function HeroFilm({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    video.muted = true;
    void video.play().catch(() => {});
  }, [reduced]);
  return (
    <video
      ref={ref}
      className="size-full object-cover object-[64%_50%] max-md:object-[71%_50%]"
      autoPlay={!reduced}
      muted
      playsInline
      preload="auto"
      poster={reduced ? "/media/home/hero-end.webp" : "/media/home/hero-start.webp"}
      aria-label="A Uniqo Graphite card resting on a concrete step"
    >
      {reduced ? null : (
        <>
          <source src="/media/home/hero.webm" type="video/webm" />
          <source src="/media/home/hero.mp4" type="video/mp4" />
        </>
      )}
    </video>
  );
}

// ------------------------------------------------------------------ carousel

function Carousel({ count, children, className = "" }: { count: number; children: (active: number) => React.ReactNode; className?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const items = Array.from(el.children) as HTMLElement[];
      const centre = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      items.forEach((item, index) => {
        const d = Math.abs(item.offsetLeft + item.offsetWidth / 2 - centre);
        const bd = Math.abs(items[best].offsetLeft + items[best].offsetWidth / 2 - centre);
        if (d < bd) best = index;
      });
      setActive(best);
    };
    // Open on the middle tile, so there are tiles on both sides from the start.
    const middle = el.children[Math.floor(el.children.length / 2)] as HTMLElement | undefined;
    if (middle) el.scrollLeft = middle.offsetLeft + middle.offsetWidth / 2 - el.clientWidth / 2;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (index: number) => {
    const el = track.current;
    const item = el?.children[index] as HTMLElement | undefined;
    if (!el || !item) return;
    el.scrollTo({ left: item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-[20px] overflow-x-auto px-[max(16px,calc(50vw-190px))] pb-[28px] pt-[24px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children(active)}
      </div>
      <div className="flex justify-center gap-[8px]">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => go(index)}
            className={`h-[7px] rounded-full transition-all duration-500 ${index === active ? "w-[22px] bg-white" : "w-[7px] bg-white/35"}`}
          />
        ))}
      </div>
    </div>
  );
}

// Each tile is a SwiftUI render with real Liquid Glass (ios WebTileRender), one per language.
function Tile({ active, src, alt }: { active: boolean; src: string; alt: string }) {
  return (
    <motion.article
      animate={{ y: active ? -14 : 0, opacity: active ? 1 : 0.72 }}
      transition={{ duration: 0.6, ease }}
      className="relative aspect-[380/520] w-[min(78vw,380px)] shrink-0 snap-center overflow-hidden rounded-[24px]"
    >
      <Image src={src} alt={alt} fill sizes="380px" className="object-cover" />
    </motion.article>
  );
}

export function HomeOverview() {
  const { t, lang } = useHome();
  const tiles = t.overview.tiles;

  return (
    <section id="features" className="bg-black py-[96px] text-white md:py-[140px]">
      <Wrap className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[900px] text-[clamp(40px,4.4vw,68px)] font-medium leading-[1.05]">{t.overview.title}</h2>
          <p className="mx-auto mt-[24px] max-w-[520px] text-[19px] leading-[1.45] text-white/80">{t.overview.copy}</p>
          <div className="mt-[36px] flex flex-wrap justify-center gap-[12px]">
            <Pill href="/waitlist">{t.overview.primary}</Pill>
            <Pill href="#plans" outline>
              {t.overview.secondary}
            </Pill>
          </div>
        </Reveal>
      </Wrap>
      <Reveal delay={0.1}>
        <Carousel count={tiles.length} className="mt-[48px]">
          {(active) =>
            tiles.map((tile, index) => (
              <Tile
                key={tile.title}
                active={active === index}
                src={`/media/home/tiles/${lang}/tile-${index + 1}.webp`}
                alt={`${tile.title}. ${tile.chip.title}, ${tile.chip.meta}`}
              />
            ))
          }
        </Carousel>
      </Reveal>
    </section>
  );
}


// ------------------------------------------------------------------ split sections

function Points({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-[28px] grid gap-[12px]">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 + index * 0.06 }}
          className="flex gap-[12px] text-[18px] leading-[1.4] text-white/85"
        >
          <span className="mt-[11px] size-[5px] shrink-0 rounded-full bg-white" />
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

export function HomeMore() {
  const { t } = useHome();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const reduced = useReducedMotion();

  return (
    <section className="bg-black py-[72px] text-white md:py-[120px]">
      <Wrap className="grid items-center gap-[48px] md:grid-cols-[1fr_1fr] md:gap-[72px]">
        <Reveal>
          <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[radial-gradient(110%_80%_at_50%_30%,#3a3d4a_0%,#16171d_70%)]">
            <motion.div className="absolute inset-x-[14%] bottom-[-6%] top-[10%]" style={reduced ? undefined : { y }}>
              <Image src="/assets/uniqo-phone-mockup.png" alt="The Uniqo app showing a found card" fill sizes="(min-width: 768px) 560px, 90vw" className="object-contain object-top" />
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(38px,3.8vw,58px)] font-medium leading-[1.05]">{t.more.title}</h2>
          <p className="mt-[24px] text-[19px] leading-[1.45] text-white/80">{t.more.copy}</p>
          <Points items={t.more.points} />
          <div className="mt-[40px]">
            <Pill href="/waitlist">{t.more.cta}</Pill>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

export function HomeProtect() {
  const { t, lang } = useHome();
  const cards = t.protect.cards;

  return (
    <section id="security" className="overflow-hidden bg-black py-[72px] text-white md:py-[120px]">
      <Wrap className="grid items-center gap-[40px] lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-[clamp(38px,3.8vw,58px)] font-medium leading-[1.05]">{t.protect.title}</h2>
          <p className="mt-[24px] max-w-[520px] text-[19px] leading-[1.45] text-white/80">{t.protect.copy}</p>
          <Points items={t.protect.points} />
          <div className="mt-[40px]">
            <Pill href="/waitlist">{t.protect.cta}</Pill>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <div className="flex snap-x snap-mandatory gap-[20px] overflow-x-auto pb-[8px] [scrollbar-width:none] lg:-mr-[calc(50vw-580px)] [&::-webkit-scrollbar]:hidden">
            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.1 + index * 0.1 }}
                className="relative aspect-[380/532] w-[min(78vw,400px)] shrink-0 snap-start overflow-hidden rounded-[24px]"
              >
                <Image
                  src={`/media/home/tiles/${lang}/tile-${index + 6}.webp`}
                  alt={`${card.title}. ${card.chip.title}, ${card.chip.meta}`}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </motion.article>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

// ------------------------------------------------------------------ film

export function HomeFilm() {
  const { t, ru } = useHome();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const inset = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [32, 0]);
  const clipPath = useTransform([inset, radius], ([i, r]) => `inset(0% ${i}% 0% ${i}% round ${r}px)`);

  useEffect(() => {
    if (reduced) return;
    ref.current?.querySelectorAll("video").forEach((v) => {
      v.muted = true;
      void v.play().catch(() => {});
    });
  }, [reduced]);

  // The plan film shows the titanium Sirius card, so the Russian version skips it.
  if (ru) return null;

  return (
    <section ref={ref} aria-label={t.film.title} className="bg-black py-[48px]">
      <motion.div className="relative h-[70svh] min-h-[420px] overflow-hidden md:h-[100svh]" style={reduced ? undefined : { clipPath }}>
        <video className="size-full object-cover" autoPlay={!reduced} muted loop playsInline preload="metadata" poster="/media/pricing-motion-poster.jpg" aria-hidden>
          <source src="/media/pricing-motion.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(0deg,rgba(0,0,0,0.75),transparent)]" />
        <div className="absolute bottom-[8vh] left-[max(10vw,calc(50vw-580px))] right-[10vw]">
          <Reveal>
            <p className="max-w-[640px] text-[clamp(34px,4vw,64px)] font-medium leading-[1.04] text-white">{t.film.title}</p>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}

// ------------------------------------------------------------------ numbers, plans, manifesto, faq

export function HomeNumbers() {
  const { t, ru } = useHome();
  return (
    <section className="bg-black py-[72px] text-white md:py-[120px]">
      <Wrap>
        <Reveal>
          <h2 className="text-center text-[clamp(38px,3.8vw,58px)] font-medium leading-[1.05]">{t.numbers.title}</h2>
        </Reveal>
        <div className="mt-[56px] grid gap-[20px] md:grid-cols-3">
          {t.numbers.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="flex h-full flex-col items-center rounded-[24px] bg-[#1c1c1f] px-[24px] py-[40px] text-center">
                <span className="text-[clamp(44px,4vw,60px)] font-medium leading-none">{ru && "valueRu" in item ? item.valueRu : item.value}</span>
                <span className="mt-[16px] text-[22px] font-medium">{item.label}</span>
                <span className="mt-[16px] text-[15px] text-white/50">{item.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function HomePlans() {
  const { t, ru } = useHome();
  const plans = t.plans.items.filter((plan) => !(ru && plan.id === "sirius"));
  return (
    <section id="plans" className="bg-black py-[72px] text-white md:py-[120px]">
      <span id="pricing" className="sr-only" />
      <Wrap>
        <Reveal className="text-center">
          <h2 className="text-[clamp(40px,4.4vw,68px)] font-medium leading-[1.05]">{t.plans.title}</h2>
          <div className="mt-[32px] flex flex-wrap justify-center gap-[12px]">
            <Pill href="/waitlist">{t.plans.primary}</Pill>
            <Pill href="/waitlist" outline>
              {t.plans.secondary}
            </Pill>
          </div>
        </Reveal>
        <div className={`mt-[64px] grid gap-[20px] sm:grid-cols-2 ${plans.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.07}>
              <Link href="/waitlist" className="group flex h-full min-h-[300px] flex-col rounded-[24px] bg-[#1c1c1f] p-[28px] transition-colors hover:bg-[#242428]">
                <Image src={`/assets/plans/${plan.id}.webp`} alt="" width={96} height={61} className="h-auto w-[72px] rounded-[6px] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                <h3 className="mt-[28px] text-[26px] font-medium">{plan.name}</h3>
                <p className="mt-[16px] text-[17px] text-white/55">{plan.price === "0" ? t.plans.free : `£${plan.price}${t.plans.month}`}</p>
                <p className="mt-[16px] text-[17px] leading-[1.45] text-white/55">{plan.copy}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

export function HomeManifesto() {
  const { t } = useHome();
  const words = t.manifesto.split(" ");
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  return (
    <section id="manifesto" className="bg-black py-[96px] text-white md:py-[160px]">
      <Wrap>
        <p ref={ref} className="mx-auto max-w-[980px] text-center text-[clamp(32px,3.6vw,56px)] font-medium leading-[1.14]">
          {words.map((word, index) => (
            <Word key={`${word}-${index}`} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>
      </Wrap>
    </section>
  );
}

// Each word lights up as the line scrolls through the screen.
function Word({ children, progress, range }: { children: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {children}{" "}
    </motion.span>
  );
}

export function HomeFaq() {
  const { t, ru } = useHome();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-black py-[72px] text-white md:py-[120px]">
      <Wrap>
        <Reveal className="text-center">
          <p className="text-[24px] font-medium text-white/50">{t.faq.kicker}</p>
          <h2 className="mt-[12px] text-[clamp(40px,4.4vw,68px)] font-medium leading-[1.05]">{t.faq.title}</h2>
        </Reveal>
        <div className="mt-[48px]">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-b border-white/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-[24px] py-[32px] text-left text-[clamp(20px,1.6vw,26px)] font-medium"
                >
                  {item.q}
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.35, ease }} className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Plus size={20} strokeWidth={2.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[820px] pb-[32px] text-[18px] leading-[1.5] text-white/70">{ru && "aRu" in item ? item.aRu : item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="mt-[56px] text-[15px] text-white/50">{t.faq.note}</p>
      </Wrap>
    </section>
  );
}
