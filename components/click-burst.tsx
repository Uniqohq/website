"use client";

import gsap from "gsap";
import { useEffect } from "react";

function getBurstColor(target: Element) {
  const background = window.getComputedStyle(target).backgroundColor;
  const match = background.match(/\d+(\.\d+)?/g);

  if (!match || match.length < 3) {
    return "#111";
  }

  const [red, green, blue] = match.slice(0, 3).map(Number);
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  return luminance < 0.38 ? "#fff" : "#111";
}

export function ClickBurst() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(".burst-hover") : null;

      if (!target) {
        return;
      }

      const count = 8 + Math.floor(Math.random() * 5);
      const color = getBurstColor(target);
      const offset = Math.random() * Math.PI * 2;

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(target, { scale: 0.975 }, { scale: 1, duration: 0.38, ease: "back.out(2.1)", clearProps: "transform" });
      }

      for (let index = 0; index < count; index += 1) {
        const particle = document.createElement("span");
        const angle = offset + (index / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.34;
        const distance = 24 + Math.random() * 38;
        const length = 5 + Math.random() * 8;
        const rotation = (angle * 180) / Math.PI + (Math.random() - 0.5) * 42;

        particle.className = "burst-particle";
        document.body.appendChild(particle);

        gsap.set(particle, {
          left: event.clientX,
          top: event.clientY,
          width: length,
          height: Math.random() > 0.78 ? 3 : 2,
          backgroundColor: color,
          rotation,
          scaleX: 0.35,
          autoAlpha: 0,
          xPercent: -50,
          yPercent: -50
        });

        gsap.timeline({ onComplete: () => particle.remove() })
          .to(particle, { autoAlpha: 1, scaleX: 1, duration: 0.08, ease: "power2.out" })
          .to(
            particle,
            {
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance + 9 + Math.random() * 13,
              rotation: rotation + (Math.random() - 0.5) * 150,
              autoAlpha: 0,
              duration: 0.38 + Math.random() * 0.22,
              ease: "power2.out"
            },
            0.045 + Math.random() * 0.035
          );
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
