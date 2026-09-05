import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { LegalBodyText } from "@/components/legal-body-text";
import { fetchLegalDocument } from "@/lib/legal";
import { SITE_URL } from "@/lib/site-metadata";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FrameLabs LLC collects, uses, and protects information for the Uniqo card.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE_URL}/legal/privacy`, siteName: "Uniqo", title: "Uniqo Privacy Policy" }
};

export default async function PrivacyPolicyPage() {
  const document = await fetchLegalDocument("privacy");

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
