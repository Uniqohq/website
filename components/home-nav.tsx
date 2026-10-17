"use client";

import { Header } from "./header";
import { useSiteLocale } from "./site-locale";
import { homeCopy } from "@/lib/home-copy";

const hrefs = ["#features", "#security", "#plans", "#faq"];

// The dark header with the home page's own section links.
export function HomeNav() {
  const { language } = useSiteLocale();
  const nav = homeCopy[language].nav.map((label, index) => ({ label, href: hrefs[index] }));
  return <Header nav={nav} />;
}
