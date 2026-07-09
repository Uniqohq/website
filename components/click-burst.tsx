"use client";

import { useEffect } from "react";

export function ClickBurst() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest(".burst-hover") : null;

      if (!target) {
        return;
      }

      const bounds = target.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const count = 9;

      for (let index = 0; index < count; index += 1) {
        const particle = document.createElement("span");
        const angle = -160 + index * 40 + (index % 2 === 0 ? 11 : -9);
        const distance = 24 + (index % 4) * 7;
        const length = 7 + (index % 3) * 3;
        const rotation = angle + 74 + (index % 2 === 0 ? 18 : -16);

        particle.className = "burst-particle";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${length}px`;
        particle.style.setProperty("--burst-x", `${Math.cos((angle * Math.PI) / 180) * distance}px`);
        particle.style.setProperty("--burst-y", `${Math.sin((angle * Math.PI) / 180) * distance}px`);
        particle.style.setProperty("--burst-rotate", `${rotation}deg`);

        target.appendChild(particle);
        window.setTimeout(() => particle.remove(), 620);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
