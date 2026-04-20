"use client";

import { useEffect, useState } from "react";

import { useToast } from "@/components/toast-provider";

type CookieBannerProps = {
  title: string;
  description: string;
  acceptLabel: string;
  rejectLabel: string;
  acceptedToast: string;
  rejectedToast: string;
};

const CONSENT_KEY = "fires_xxx_cookie_consent";

export function CookieBanner({
  title,
  description,
  acceptLabel,
  rejectLabel,
  acceptedToast,
  rejectedToast,
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const { pushToast } = useToast();

  useEffect(() => {
    const existing = window.localStorage.getItem(CONSENT_KEY);
    if (!existing) {
      const timer = window.setTimeout(() => {
        setVisible(true);
      }, 0);

      return () => window.clearTimeout(timer);
    }

    return;
  }, []);

  const handleChoice = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    pushToast(value === "accepted" ? acceptedToast : rejectedToast, "info");
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto w-[min(980px,calc(100%-2rem))] rounded-2xl border border-orange-500/40 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur sm:p-5">
      <p className="font-display text-sm tracking-[0.15em] text-orange-300">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="rounded-full border border-orange-300/80 bg-orange-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-orange-100 transition hover:bg-orange-400/30"
        >
          {acceptLabel}
        </button>
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="rounded-full border border-zinc-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-zinc-200 transition hover:border-zinc-300 hover:text-zinc-100"
        >
          {rejectLabel}
        </button>
      </div>
    </div>
  );
}
