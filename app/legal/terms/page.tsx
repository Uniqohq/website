import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";
import { SITE_URL } from "@/lib/site-metadata";

const UPDATED = "September 5, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Uniqo card and app.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE_URL}/legal/terms`, siteName: "Uniqo", title: "Uniqo Terms of Service" }
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument title="Terms of Service" updated={UPDATED}>
      <p>
        These Terms govern your access to and use of Uniqo, a product owned and operated by
        FrameLabs LLC (&quot;Uniqo,&quot; &quot;we,&quot; &quot;us&quot;). By creating an account
        or joining the waitlist, you agree to these Terms and to our{" "}
        <Link href="/legal/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2 className="text-[22px] font-medium">1. Eligibility</h2>
      <p>
        You must be old enough to hold a payment account under the law of the country you reside
        in, and able to form a binding contract. Uniqo is not currently available to the public —
        access is granted by region as onboarding opens.
      </p>

      <h2 className="text-[22px] font-medium">2. Your account</h2>
      <p>
        You sign in with your phone number and a one-time code. You are responsible for keeping
        access to that phone number secure and for all activity under your account. Tell us
        immediately at{" "}
        <a href="mailto:legal@uniqo.one" className="underline">
          legal@uniqo.one
        </a>{" "}
        if you believe your account has been accessed without authorization.
      </p>

      <h2 className="text-[22px] font-medium">3. Identity verification</h2>
      <p>
        Before we can issue a card, applicable law requires us to verify your identity, which
        includes a government ID and a live selfie check through our identity verification
        partner. We may decline, suspend, or close an account where verification fails, cannot be
        completed, or where we reasonably suspect fraud, money laundering, or another violation of
        law or these Terms.
      </p>

      <h2 className="text-[22px] font-medium">4. The card and plans</h2>
      <p>
        Uniqo offers card plans (currently shown publicly as Arctic, Midnight, and Graphite) with
        different features, limits, and pricing, described at{" "}
        <Link href="/#pricing" className="underline">
          uniqo.one
        </Link>
        . Features, eligibility, and pricing are pre-launch information and may change before
        general availability. You can change or cancel your plan at any time through the app; fees
        already incurred are not refunded except where required by law.
      </p>

      <h2 className="text-[22px] font-medium">5. Acceptable use</h2>
      <p>
        You may not use Uniqo for any unlawful purpose, including money laundering, sanctions
        evasion, or fraud; to violate any card network rule; to attempt to circumvent our fraud or
        security controls; or to access the service through any means other than the interfaces we
        provide.
      </p>

      <h2 className="text-[22px] font-medium">6. Suspension and termination</h2>
      <p>
        We may suspend or close your account or decline a transaction where we reasonably believe
        it is necessary to comply with law, to prevent fraud or loss, or where you have breached
        these Terms. You may close your account at any time by contacting us.
      </p>

      <h2 className="text-[22px] font-medium">7. Disclaimers and liability</h2>
      <p>
        Uniqo is provided on a pre-launch, &quot;as available&quot; basis. To the fullest extent
        permitted by law, FrameLabs LLC is not liable for indirect, incidental, or consequential
        damages arising from your use of the service. Nothing in these Terms limits liability that
        cannot be limited under applicable law, including for fraud or for losses that a card
        network or regulation requires us to cover.
      </p>

      <h2 className="text-[22px] font-medium">8. Changes to these Terms</h2>
      <p>
        We may update these Terms as the product develops, particularly around general
        availability. We will update the date above and, where required by law, notify you before
        a material change takes effect.
      </p>

      <h2 className="text-[22px] font-medium">9. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Wyoming, USA, without regard to
        conflict-of-law principles, except where local consumer-protection law in your country of
        residence requires otherwise.
      </p>

      <h2 className="text-[22px] font-medium">10. Contact</h2>
      <p>
        FrameLabs LLC —{" "}
        <a href="mailto:legal@uniqo.one" className="underline">
          legal@uniqo.one
        </a>
      </p>
    </LegalDocument>
  );
}
