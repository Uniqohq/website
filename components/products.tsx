"use client";

import { ArrowRight, Paintbrush } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CardImage } from "./card-image";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  {
    image: "/assets/uniqo-card-arctic.webp",
    width: 2400,
    height: 1500
  },
  {
    image: "/assets/uniqo-card-midnight.webp",
    width: 2400,
    height: 1500
  },
  {
    image: "/assets/uniqo-card-graphite.webp",
    width: 2400,
    height: 1500
  }
];

function ProductCard({ product, index }: { product: (typeof products)[number] & { number: string; name: string; copy: string }; index: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.72, ease, delay: index * 0.07 }}
      className="flex h-auto min-h-[560px] min-w-0 w-full flex-col rounded-[35px] bg-[#f7f7f7] px-[24px] pb-[28px] pt-[24px] md:h-[740px] md:px-[30px] md:pb-[33px] md:pt-[30px]"
    >
      <div className="aspect-[1.6] w-full overflow-visible">
        <CardImage
          src={product.image}
          alt={`${product.name} Uniqo card`}
          width={product.width}
          height={product.height}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="mt-[52px] w-full max-w-[340px] font-medium leading-[1.102] md:mt-[83px]">
        <span className="text-[16px] text-[#686868] md:text-[19.939px]">{product.number}</span>
        <h3 className="mt-[5px] text-[32px] text-black md:text-[41.456px]">{product.name}</h3>
        <p className="mt-[22px] text-[20px] text-[#686868] md:mt-[31px] md:text-[25.674px]">{product.copy}</p>
      </div>
      <Link
        href="/waitlist"
        aria-label={`View ${product.name}`}
        className="burst-hover mt-auto flex size-[60px] items-center justify-center rounded-full bg-[#f0f0f0] text-black md:size-[75px]"
      >
        <ArrowRight className="size-[28px] md:size-[34px]" strokeWidth={2.05} />
      </Link>
    </motion.article>
  );
}

export function Products() {
  const reducedMotion = useReducedMotion();
  const { copy } = useSiteLocale();
  const localizedProducts = products.map((product, index) => ({ ...product, ...copy.products.cards[index] }));

  return (
    <section id="products" className="bg-[#ececee]">
      <div className="container min-h-[1218px] py-[58px]">
      <div className="mb-[99px]">
        <span className="section-kicker">02</span>
        <h2 className="section-title mt-[9px]">{copy.products.title}</h2>
      </div>
      <div className="grid min-w-0 gap-[31px] md:grid-cols-[repeat(3,minmax(0,1fr))]">
        {localizedProducts.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={reducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
        className="mt-[31px] flex min-h-[92px] flex-col gap-4 rounded-[30px] bg-[#f7f7f7] px-[22px] py-[14px] text-[25.674px] font-medium leading-[1.102] md:flex-row md:items-center md:justify-between md:pr-[25px]"
      >
        <div className="flex min-w-0 items-center gap-[36px]">
          <span className="flex size-[58px] shrink-0 items-center justify-center rounded-[20px] bg-[#f0f0f0]">
            <Paintbrush size={28} strokeWidth={2.05} />
          </span>
          <span className="min-w-0">{copy.products.moreDesigns}</span>
        </div>
        <a href="#pricing" className="burst-hover flex shrink-0 items-center gap-[22px]">
          {copy.products.discover}
          <ArrowRight size={31} strokeWidth={2.05} />
        </a>
      </motion.div>
      </div>
    </section>
  );
}
