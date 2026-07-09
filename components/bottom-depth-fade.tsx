"use client";

import { useEffect, useState } from "react";

export function BottomDepthFade() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) {
      setHidden(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      threshold: 0.01
    });

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return <div aria-hidden="true" className={`bottom-depth-fade pointer-events-none fixed inset-x-0 bottom-0 z-[70] ${hidden ? "is-hidden" : ""}`} />;
}
