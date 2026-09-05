import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";
import { SITE_URL } from "@/lib/site-metadata";

const UPDATED = "September 5, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FrameLabs LLC collects, uses, and protects information for the Uniqo card.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE_URL}/legal/privacy`, siteName: "Uniqo", title: "Uniqo Privacy Policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy" updated={UPDATED}>
      <p>
        This Privacy Policy explains what information FrameLabs LLC (&quot;Uniqo,&quot;
        &quot;we,&quot; &quot;us&quot;) collects when you join the waitlist, apply for, or use a
        Uniqo card, why we collect it, who we share it with, and the choices you have. Uniqo is
        pre-launch: this policy describes the data handling designed into the product ahead of
        public availability.
      </p>

      <h2 className="text-[22px] font-medium">1. Information we collect</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Contact and account information.</strong> Phone number (used for sign-in via a
          one-time code), and any name, date of birth, or email you provide.
        </li>
        <li>
          <strong>Identity verification data.</strong> To meet know-your-customer (KYC) and
          anti-money-laundering (AML) obligations before issuing a card, our identity verification
          partner collects a photo of your government ID and a live selfie, and checks them for
          authenticity and liveness. We receive the verification outcome and, where a check fails,
          the reason code — we do not store your raw ID photos ourselves.
        </li>
        <li>
          <strong>Address.</strong> Your residential address, versioned over time (we keep prior
          addresses on file for as long as required by the regulatory regime you onboarded under,
          rather than overwriting them).
        </li>
        <li>
          <strong>Device and session information.</strong> Device platform and app version, a
          push-notification token if you enable notifications, and session/security metadata
          (sign-in timestamps, approximate region at authentication) used to keep your account
          secure and to detect fraud.
        </li>
        <li>
          <strong>Location.</strong> We only request device location where a specific regional
          program requires it to operate — currently, this applies only to accounts onboarding
          under Uniqo&apos;s Belarus program. If that does not apply to you, the app does not ask
          for or collect your location.
        </li>
        <li>
          <strong>Card and transaction data</strong> (once the card product is live): transaction
          amounts, merchants, and the controls you configure (limits, locks, virtual cards). This
          section will be expanded with specifics before that functionality launches.
        </li>
        <li>
          <strong>Website usage.</strong> Standard web analytics and cookies on uniqo.one — see the{" "}
          <Link href="/legal/cookies" className="underline">
            Cookie Policy
          </Link>{" "}
          (published alongside this policy before launch).
        </li>
      </ul>

      <h2 className="text-[22px] font-medium">2. Why we collect it</h2>
      <p>
        To create and secure your account; to verify your identity as required by financial
        regulation before issuing a card; to detect and prevent fraud and unauthorized use; to
        operate the card and the controls you configure; to communicate with you about your
        account; and to meet our own legal, tax, and regulatory record-keeping obligations.
      </p>

      <h2 className="text-[22px] font-medium">3. Who we share it with</h2>
      <p>
        We share information with the service providers that make the product work: our identity
        verification provider (for KYC/AML checks), our card-issuing processor (once selected), and
        infrastructure providers that host our systems. We do not sell your personal information.
        We disclose information to regulators, law enforcement, or courts where legally required.
      </p>

      <h2 className="text-[22px] font-medium">4. International transfers</h2>
      <p>
        Uniqo is designed to operate across multiple regions. Where your information is processed
        or stored outside the country you live in, we use the service providers&apos; standard
        safeguards for cross-border transfer required under the applicable law (for example,
        Standard Contractual Clauses for transfers from the EEA/UK). Some countries impose
        additional local data-handling or residency requirements on financial data; where that
        applies to you, we will disclose the specifics before you complete onboarding in that
        region.
      </p>

      <h2 className="text-[22px] font-medium">5. Retention</h2>
      <p>
        We retain identity-verification and financial-relationship records for the period required
        by the AML/KYC regulation applicable to your account (commonly five years or more after the
        relationship ends, depending on jurisdiction), and other account data for as long as your
        account is active plus a reasonable period afterward for legal and fraud-prevention
        purposes.
      </p>

      <h2 className="text-[22px] font-medium">6. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, export, or delete your
        personal information, or to object to or restrict certain processing. Deletion requests may
        be limited where we have a legal obligation to retain records (see Retention above). To
        exercise a right, contact{" "}
        <a href="mailto:legal@uniqo.one" className="underline">
          legal@uniqo.one
        </a>
        .
      </p>

      <h2 className="text-[22px] font-medium">7. Children</h2>
      <p>Uniqo is not directed to, and may not be used by, anyone under the age required to hold a payment account in their country.</p>

      <h2 className="text-[22px] font-medium">8. Changes</h2>
      <p>
        We will update this policy as the product develops, particularly around launch. Material
        changes will be reflected by updating the date above; where required by law, we will notify
        you directly.
      </p>

      <h2 className="text-[22px] font-medium">9. Contact</h2>
      <p>
        FrameLabs LLC —{" "}
        <a href="mailto:legal@uniqo.one" className="underline">
          legal@uniqo.one
        </a>
      </p>
    </LegalDocument>
  );
}
