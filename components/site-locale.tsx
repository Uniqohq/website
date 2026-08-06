"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteCopy, type SiteLanguage } from "@/lib/site-copy";

type LocaleContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  region: SiteRegion;
  setRegion: (region: SiteRegion) => void;
  copy: (typeof siteCopy)[SiteLanguage];
};

export type SiteRegion = "us" | "eu" | "gb" | "ca" | "au" | "sg" | "ae" | "jp" | "ru";

const LANGUAGE_STORAGE_KEY = "uniqo-language";
const REGION_STORAGE_KEY = "uniqo-region";
const regions: SiteRegion[] = ["us", "eu", "gb", "ca", "au", "sg", "ae", "jp", "ru"];

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function SiteLocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const [region, setRegion] = useState<SiteRegion>("us");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const storedRegion = window.localStorage.getItem(REGION_STORAGE_KEY) as SiteRegion | null;

    if (storedLanguage === "en" || storedLanguage === "ru") {
      setLanguage(storedLanguage);
    }

    if (storedRegion && regions.includes(storedRegion)) {
      setRegion(storedRegion);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");
    document.body.setAttribute("translate", "no");
    document.body.classList.add("notranslate");
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(REGION_STORAGE_KEY, region);
  }, [region]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      region,
      setRegion,
      copy: siteCopy[language]
    }),
    [language, region]
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
