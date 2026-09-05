import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { SITE_URL } from "@/lib/site-metadata";

const UPDATED = "September 5, 2026";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How uniqo.one uses cookies and similar technologies.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE_URL}/legal/cookies`, siteName: "Uniqo", title: "Uniqo Cookie Policy" }
};

export default function CookiePolicyPage() {
  return (
    <LegalDocument title="Cookie Policy" updated={UPDATED}>
      <p>
        This page covers cookies and similar technologies on the public website at uniqo.one. It
        does not cover the Uniqo mobile app, which does not use browser cookies.
      </p>

      <h2 className="text-[22px] font-medium">What we use today</h2>
      <p>
        uniqo.one currently sets only strictly-necessary cookies: your chosen interface language
        and region, and basic security/session cookies. We do not currently run third-party
        advertising or analytics cookies. If that changes before launch, this page will list each
        cookie, its purpose, and its lifetime, and the site will present a consent banner where
        required by law (for example, under the EU/UK ePrivacy rules) before any non-essential
        cookie is set.
      </p>

      <h2 className="text-[22px] font-medium">Managing cookies</h2>
      <p>
        You can block or delete cookies through your browser settings at any time. Blocking
        strictly-necessary cookies may prevent parts of the site (such as your saved language) from
        working correctly.
      </p>

      <h2 className="text-[22px] font-medium">Contact</h2>
      <p>
        FrameLabs LLC —{" "}
        <a href="mailto:legal@uniqo.one" className="underline">
          legal@uniqo.one
        </a>
      </p>
    </LegalDocument>
  );
}
