"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

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

      if (hash === "#manifesto") {
        ScrollTrigger.refresh();
        const manifestoTrigger = ScrollTrigger.getById("uniqo-manifesto");
        const destination = manifestoTrigger?.start;

        if (typeof destination === "number") {
          gsap.killTweensOf(window);
          gsap.to(window, {
            duration: 0.9,
            scrollTo: { y: destination + 1, autoKill: false },
            ease: "power3.inOut",
            overwrite: "auto"
          });
        } else {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (hash !== "#") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    stripHash();
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
