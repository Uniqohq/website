"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteCopy, type SiteLanguage } from "@/lib/site-copy";

type LocaleContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  copy: (typeof siteCopy)[SiteLanguage];
};

const STORAGE_KEY = "uniqo-language";

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function SiteLocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ru") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
    document.body.setAttribute("translate", "no");
    document.body.classList.add("notranslate");
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: siteCopy[language]
    }),
    [language]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useSiteLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useSiteLocale must be used within SiteLocaleProvider");
  }

  return context;
}
