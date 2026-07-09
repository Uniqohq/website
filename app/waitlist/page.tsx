import type { Metadata } from "next";
import { WaitlistPageContent } from "@/components/waitlist-page-content";

export const metadata: Metadata = {
  title: "Join the waitlist | Uniqo",
  description: "Uniqo has not launched yet. Join the waitlist for early access."
};

export default function WaitlistPage() {
  return <WaitlistPageContent />;
}
