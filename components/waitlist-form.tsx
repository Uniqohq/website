"use client";

import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSiteLocale } from "./site-locale";

const ease = [0.16, 1, 0.3, 1] as const;

export function WaitlistForm() {
  const { copy } = useSiteLocale();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      aria-label={`${copy.waitlist.join} — Uniqo`}
      className="mx-auto mt-[30px] w-full max-w-[492px]"
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_WAITLIST_API_URL ?? "https://api.uniqo.one"}/waitlist`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({ email, source: "website" })
          });

          if (!response.ok) {
            const body = await response.json().catch(() => null);
            throw new Error(body?.error ?? copy.waitlist.error);
          }

          setSubmitted(true);
        } catch (caughtError) {
          setError(caughtError instanceof Error ? caughtError.message : copy.waitlist.error);
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="flex min-h-[62px] flex-col gap-2 rounded-[16px] bg-white p-[6px] shadow-[0_18px_58px_rgba(0,0,0,0.04)] md:flex-row md:items-center">
        <label htmlFor="waitlist-email" className="sr-only">
          {copy.waitlist.email}
        </label>
        <input
          id="waitlist-email"
          required
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          placeholder={copy.waitlist.email}
          aria-label={copy.waitlist.email}
          aria-describedby="waitlist-status"
          className="min-h-[50px] min-w-0 flex-1 rounded-[11px] bg-transparent px-[16px] text-[18px] font-medium leading-[1.102] text-black outline-none placeholder:text-[#8d8f91]"
        />
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="burst-hover inline-flex h-[50px] shrink-0 items-center justify-center gap-[10px] rounded-[11px] bg-black px-[18px] text-[16px] font-medium leading-[1.102] text-white"
        >
          {loading ? copy.waitlist.joining : copy.waitlist.join}
          <ArrowRight size={19} strokeWidth={2.1} />
        </button>
      </div>
      <span id="waitlist-status" role="status" aria-live="polite" className="sr-only">
        {error || (submitted ? copy.waitlist.success : "")}
      </span>
      <AnimatePresence mode="wait">
        {error || submitted ? (
          <div className="mt-[16px] min-h-[24px] text-center text-[16px] font-medium leading-[1.25] text-[#686868]">
            {error ? (
              <motion.span
                key="error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease }}
                className="block text-black"
              >
                {error}
              </motion.span>
            ) : (
              <motion.span
                key="submitted"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease }}
                className="inline-flex items-center justify-center gap-[9px] text-black"
              >
                <Check size={20} strokeWidth={2.2} />
                {copy.waitlist.success}
              </motion.span>
            )}
          </div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
