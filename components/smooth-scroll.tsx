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

    return () => {
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
