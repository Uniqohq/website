import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { LegalBodyText } from "@/components/legal-body-text";
import { fetchLegalDocument } from "@/lib/legal";
import { SITE_URL } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Uniqo card and app.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE_URL}/legal/terms`, siteName: "Uniqo", title: "Uniqo Terms of Service" }
};

export default async function TermsOfServicePage() {
  const document = await fetchLegalDocument("terms");

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
