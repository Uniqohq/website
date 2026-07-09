"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const stripHash = () => {
      if (window.location.hash) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
    };

    const onAnchorClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;

      if (!link) {
        return;
      }

      const hash = link.getAttribute("href");

      if (!hash) {
        return;
      }

      event.preventDefault();

      if (hash !== "#") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    stripHash();
    document.addEventListener("click", onAnchorClick);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => document.removeEventListener("click", onAnchorClick);
    }

    let target = window.scrollY;
    let current = window.scrollY;
    let frame = 0;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const animate = () => {
      current += (target - current) * 0.16;

      if (Math.abs(target - current) < 0.35) {
        current = target;
      }

      window.scrollTo(0, current);

      if (current !== target) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      target = Math.max(0, Math.min(maxScroll(), target + event.deltaY));

      if (!frame) {
        frame = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      if (!frame) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
