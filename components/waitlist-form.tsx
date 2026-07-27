"use client";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { useSiteLocale } from "./site-locale";

gsap.registerPlugin(Flip);

const ease = [0.16, 1, 0.3, 1] as const;

export function WaitlistForm() {
  const { copy } = useSiteLocale();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const reducedMotion = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const successStateRef = useRef<ReturnType<typeof Flip.getState> | null>(null);

  useLayoutEffect(() => {
    if (!successStateRef.current || reducedMotion) {
      successStateRef.current = null;
      return;
    }

    Flip.from(successStateRef.current, {
      duration: 0.58,
      ease: "power3.out",
      scale: true,
      absolute: false
    });
    successStateRef.current = null;

    gsap.fromTo(
      shellRef.current?.children ?? [],
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.36, ease: "power3.out", stagger: 0.04 }
    );
  }, [reducedMotion, submitted]);

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

          if (!reducedMotion && shellRef.current) {
            successStateRef.current = Flip.getState(shellRef.current);
          }
          setSubmitted(true);
        } catch (caughtError) {
          setError(caughtError instanceof Error ? caughtError.message : copy.waitlist.error);
        } finally {
          setLoading(false);
        }
      }}
    >
      <div
        ref={shellRef}
        data-flip-id="waitlist-form-shell"
        className={`mx-auto flex min-h-[62px] rounded-[16px] bg-white p-[6px] shadow-[0_18px_58px_rgba(0,0,0,0.04)] ${
          submitted ? "max-w-[390px] items-center justify-center" : "max-w-[492px] flex-col gap-2 md:flex-row md:items-center"
        }`}
      >
        {submitted ? (
          <div className="flex h-[50px] items-center justify-center gap-[10px] px-[18px] text-[16px] font-medium leading-[1.102] text-black">
            <Check size={20} strokeWidth={2.2} />
            {copy.waitlist.success}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <span id="waitlist-status" role="status" aria-live="polite" className="sr-only">
        {error || (submitted ? copy.waitlist.success : "")}
      </span>
      <AnimatePresence mode="wait">
        {error ? (
          <div className="mt-[16px] min-h-[24px] text-center text-[16px] font-medium leading-[1.25] text-[#686868]">
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
          </div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
