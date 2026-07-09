"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CardImage } from "./card-image";

const ease = [0.16, 1, 0.3, 1] as const;

const products = [
  {
    number: "01",
    name: "Arctic",
    copy: "Clean, subtle and timeless. For everyday spending.",
    image: "/assets/uniqo-card-arctic.png",
    width: 522,
    height: 353
  },
  {
    number: "02",
    name: "Mindnight",
    copy: "Bold, minimal and refined. For those who go further.",
    image: "/assets/uniqo-card-midnight.png",
    width: 522,
    height: 353
  },
  {
    number: "03",
    name: "Graphite",
    copy: "Strong, reliable and distinct. For your business and beyond",
    image: "/assets/uniqo-card-graphite.png",
    width: 522,
    height: 353
  }
];

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 54 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.72, ease, delay: index * 0.11 }}
      className="flex h-[740px] w-full flex-col rounded-[35px] bg-[#f7f7f7] px-[30px] pb-[33px] pt-[30px]"
    >
      <div className="h-[281.25px] w-full overflow-visible">
        <CardImage
          src={product.image}
          alt={`${product.name} Uniqo card`}
          width={product.width}
          height={product.height}
          className="ml-[-36px] mt-[-36px] h-auto w-[522px] max-w-none"
        />
      </div>
      <div className="mt-[83px] w-[340px] font-medium leading-[1.102]">
        <span className="text-[19.939px] text-[#7c7c7c]">{product.number}</span>
        <h3 className="mt-[5px] text-[41.456px] text-black">{product.name}</h3>
        <p className="mt-[31px] text-[25.674px] text-[#7c7c7c]">{product.copy}</p>
      </div>
      <button
        type="button"
        aria-label={`View ${product.name}`}
        className="mt-auto flex size-[75px] items-center justify-center rounded-full bg-[#f0f0f0] text-black"
      >
        <ArrowRight size={34} strokeWidth={2.05} />
      </button>
    </motion.article>
  );
}

export function Products() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="products" className="bg-[#ececee]">
      <div className="container min-h-[1218px] py-[58px]">
      <div className="mb-[99px]">
        <span className="section-kicker">02</span>
        <h2 className="section-title mt-[9px]">Products</h2>
      </div>
      <div className="grid gap-[31px] md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
        className="mt-[31px] flex h-[115px] flex-col gap-5 rounded-[35px] bg-[#f7f7f7] px-[19px] py-5 text-[25.674px] font-medium leading-[1.102] md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-[55px]">
          <span className="flex size-[75px] items-center justify-center rounded-[25px] bg-[#f0f0f0]">
            <ArrowRight size={34} strokeWidth={2.05} />
          </span>
          <span>More designs, limited editions and exclusive drops.</span>
        </div>
        <a href="#pricing" className="flex items-center gap-[32px]">
          Discover all cards
          <ArrowRight size={34} strokeWidth={2.05} />
        </a>
      </motion.div>
      </div>
    </section>
  );
}
