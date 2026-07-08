"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Manifesto() {
  const reducedMotion = useReducedMotion();
  const lines = ["We don’t build", "another bank."];

  return (
    <section id="manifesto" className="container overflow-hidden py-28">
      <div className="space-y-2">
        {lines.map((line, index) => (
          <div key={line} className="overflow-hidden">
            <motion.h2
              initial={reducedMotion ? false : { y: "110%" }}
              whileInView={reducedMotion ? undefined : { y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.82, ease, delay: index * 0.08 }}
              className="text-[clamp(72px,13vw,245px)] font-extrabold leading-[0.9] tracking-normal"
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>
      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 22 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease, delay: 0.25 }}
        className="mt-20 max-w-[1580px] text-[clamp(26px,3.3vw,62px)] font-extrabold leading-[1.02] text-[#a6a8ab]"
      >
        <span className="text-black">Uniqo</span> is a financial technology company reimagining how the world pays.
      </motion.p>
      <div className="mx-auto mt-20 h-5 w-10 rounded-full border border-[#d2d3d5]" />
    </section>
  );
}
