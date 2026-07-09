"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-[34px] w-full max-w-[568px]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex min-h-[72px] flex-col gap-3 rounded-[18px] bg-white p-[7px] shadow-[0_28px_80px_rgba(0,0,0,0.06)] md:flex-row md:items-center">
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          className="min-h-[58px] min-w-0 flex-1 rounded-[13px] bg-transparent px-[18px] text-[20px] font-medium leading-[1.102] text-black outline-none placeholder:text-[#8d8f91]"
        />
        <button
          type="submit"
          className="burst-hover inline-flex h-[58px] shrink-0 items-center justify-center gap-[12px] rounded-[13px] bg-black px-[22px] text-[18px] font-medium leading-[1.102] text-white"
        >
          Join waitlist
          <ArrowRight size={21} strokeWidth={2.1} />
        </button>
      </div>
      <div className="mt-[18px] min-h-[28px] text-[18px] font-medium leading-[1.25] text-[#7c7c7c]">
        {submitted ? (
          <span className="inline-flex items-center gap-[9px] text-black">
            <Check size={20} strokeWidth={2.2} />
            You're on the list. We'll email you before launch.
          </span>
        ) : (
          "No spam. Just launch access and important availability updates."
        )}
      </div>
    </form>
  );
}
