"use client";

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
      const target = event.target instanceof Element ? event.target.closest(".burst-hover") : null;

      if (!target) {
        return;
      }

      const count = 7 + Math.floor(Math.random() * 4);
      const color = getBurstColor(target);

      for (let index = 0; index < count; index += 1) {
        const particle = document.createElement("span");
        const angle = Math.random() * Math.PI * 2;
        const distance = 18 + Math.random() * 42;
        const length = 5 + Math.random() * 8;
        const height = Math.random() > 0.72 ? 3 : 2;
        const drift = (Math.random() - 0.5) * 18;
        const rotation = Math.random() * 220 - 110;
        const duration = 360 + Math.random() * 240;

        particle.className = "burst-particle";
        particle.style.left = `${event.clientX}px`;
        particle.style.top = `${event.clientY}px`;
        particle.style.width = `${length}px`;
        particle.style.height = `${height}px`;
        particle.style.animationDuration = `${duration}ms`;
        particle.style.setProperty("--burst-x", `${Math.cos(angle) * distance + drift}px`);
        particle.style.setProperty("--burst-y", `${Math.sin(angle) * distance - 8 - Math.random() * 22}px`);
        particle.style.setProperty("--burst-rotate", `${rotation}deg`);
        particle.style.setProperty("--burst-end-rotate", `${rotation + Math.random() * 180 - 90}deg`);
        particle.style.setProperty("--burst-color", color);

        document.body.appendChild(particle);
        window.setTimeout(() => particle.remove(), duration + 80);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
