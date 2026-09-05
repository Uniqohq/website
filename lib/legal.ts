const API_BASE_URL = process.env.NEXT_PUBLIC_WAITLIST_API_URL ?? "https://api.uniqo.one";

export type LegalDocumentKind = "terms" | "privacy" | "cookies";

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalDocumentContent {
  kind: LegalDocumentKind;
  version: string;
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

// Legal copy lives in the API (src/modules/legal/legal-content.ts in the
// uniqo/api repo) so the website and the iOS app render the same text
// instead of keeping separate copies that can drift apart.
export async function fetchLegalDocument(kind: LegalDocumentKind): Promise<LegalDocumentContent> {
  const response = await fetch(`${API_BASE_URL}/api/v1/legal/${kind}`, {
    next: { revalidate: 300 }
  });
  if (!response.ok) {
    throw new Error(`Failed to load legal document "${kind}": ${response.status}`);
  }
  return (await response.json()) as LegalDocumentContent;
}
