import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { LegalBodyText } from "@/components/legal-body-text";
import { fetchLegalDocument } from "@/lib/legal";
import { SITE_URL } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How uniqo.one uses cookies and similar technologies.",
  alternates: { canonical: "/legal/cookies" },
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE_URL}/legal/cookies`, siteName: "Uniqo", title: "Uniqo Cookie Policy" }
};

export default async function CookiePolicyPage() {
  const document = await fetchLegalDocument("cookies");

  return (
    <LegalDocument title={document.title} updated={document.updatedAt}>
      <LegalBodyText text={document.intro} />
      {document.sections.map((section) => (
        <div key={section.heading} className="space-y-3">
          <h2 className="text-[22px] font-medium">{section.heading}</h2>
          <LegalBodyText text={section.body} />
        </div>
      ))}
    </LegalDocument>
  );
}
