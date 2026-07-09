import type { Metadata } from "next";
import Image from "next/image";
import { CardImage } from "@/components/card-image";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Join the waitlist | Uniqo",
  description: "Uniqo has not launched yet. Join the waitlist for early access."
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ececee] text-black">
      <header className="container flex h-[96px] items-center justify-between">
        <a href="/" aria-label="Uniqo home" className="flex items-center">
          <Image src="/assets/uniqo-logo.svg" alt="Uniqo" width={867} height={224} priority className="h-auto w-[102px]" />
        </a>
        <a href="/" className="text-[17.681px] font-medium leading-[1.102] text-black opacity-60">
          Back to site
        </a>
      </header>
      <section className="container grid min-h-[calc(100vh-96px)] items-center gap-[56px] pb-[80px] pt-[24px] md:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-[720px]">
          <span className="section-kicker">Waitlist</span>
          <h1 className="mt-[18px] text-[clamp(64px,7.2vw,138px)] font-medium leading-[0.94] tracking-normal">
            Uniqo is not live yet.
          </h1>
          <p className="mt-[28px] max-w-[610px] text-[clamp(24px,1.75vw,33.579px)] font-medium leading-[1.102] text-[#7c7c7c]">
            We are preparing the card, app and availability by region. Leave your email and we will let you in when access opens.
          </p>
          <WaitlistForm />
        </div>
        <div className="relative min-h-[420px] overflow-visible md:min-h-[620px]">
          <div className="absolute left-[4%] top-[16%] h-[72%] w-[86%] rounded-full bg-white/60 blur-[70px]" />
          <CardImage
            src="/assets/uniqo-card-midnight.png"
            alt="Uniqo Midnight card"
            width={4800}
            height={3000}
            priority
            className="absolute left-1/2 top-1/2 w-[min(86vw,720px)] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] drop-shadow-[0_42px_80px_rgba(0,0,0,0.18)]"
          />
          <CardImage
            src="/assets/uniqo-card-arctic.png"
            alt="Uniqo Arctic card"
            width={4800}
            height={3000}
            className="absolute bottom-[7%] right-[2%] w-[min(58vw,430px)] rotate-[6deg] opacity-95 drop-shadow-[0_28px_70px_rgba(0,0,0,0.12)]"
          />
        </div>
      </section>
    </main>
  );
}
