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
    width: 429,
    height: 255
  },
  {
    number: "02",
    name: "Midnight",
    copy: "Bold, minimal and refined. For those who go further.",
    image: "/assets/uniqo-card-midnight.png",
    width: 429,
    height: 255
  },
  {
    number: "03",
    name: "Graphite",
    copy: "Strong, reliable and distinct. For your business and beyond",
    image: "/assets/uniqo-card-graphite.png",
    width: 432,
    height: 255
  }
];

export function Products() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="products" className="container py-12">
      <div className="mb-16">
        <span className="section-kicker">02</span>
        <h2 className="section-title mt-4">Products</h2>
      </div>
      <div className="grid gap-7 md:grid-cols-3">
        {products.map((product, index) => (
          <motion.article
            key={product.name}
            initial={reducedMotion ? false : { opacity: 0, y: 34 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease, delay: index * 0.08 }}
            className="group flex min-h-[470px] flex-col rounded-[22px] bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(12,13,16,0.12)]"
          >
            <div className="overflow-hidden rounded-[14px]">
              <CardImage
                src={product.image}
                alt={`${product.name} Uniqo card`}
                width={product.width}
                height={product.height}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-10">
              <span className="text-[12px] font-bold text-[#a0a1a5]">{product.number}</span>
              <h3 className="mt-2 text-[28px] font-extrabold leading-none">{product.name}</h3>
              <p className="mt-4 max-w-[250px] text-[15px] font-semibold leading-[1.15] text-[#85878c]">{product.copy}</p>
            </div>
            <button
              type="button"
              aria-label={`View ${product.name}`}
              className="mt-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f3f4] text-black transition-transform duration-500 group-hover:translate-x-1"
            >
              <ArrowRight size={20} strokeWidth={2.4} />
            </button>
          </motion.article>
        ))}
      </div>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
        className="mt-7 flex flex-col gap-5 rounded-[22px] bg-white px-6 py-5 text-[15px] font-bold shadow-[0_1px_0_rgba(0,0,0,0.03)] md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f4f5]">
            <ArrowRight size={18} strokeWidth={2.4} />
          </span>
          <span>More designs, limited editions and exclusive drops.</span>
        </div>
        <a href="#pricing" className="flex items-center gap-4">
          Discover all cards
          <ArrowRight size={20} strokeWidth={2.4} />
        </a>
      </motion.div>
    </section>
  );
}
