"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { NavItem } from "@/i18n/dictionary";

type SiteHeaderProps = {
  brandName: string;
  brandTagline: string;
  navigation: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  mobileLabel: string;
};

export function SiteHeader({
  brandName,
  brandTagline,
  navigation,
  ctaLabel,
  ctaHref,
  mobileLabel,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group min-w-0">
          <p className="font-display text-xl font-semibold tracking-[0.2em] text-orange-300 transition-colors group-hover:text-orange-200">
            {brandName}
          </p>
          <p className="truncate text-xs text-zinc-400">{brandTagline}</p>
        </Link>

        <button
          type="button"
          className="rounded-md border border-orange-500/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-200 sm:hidden"
          aria-label={mobileLabel}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 sm:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  active ? "text-orange-200" : "text-zinc-300 hover:text-orange-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-orange-400/70 bg-orange-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-100 transition hover:border-orange-300 hover:bg-orange-400/25 sm:inline-block"
        >
          {ctaLabel}
        </a>
      </div>

      {isOpen ? (
        <div className="border-t border-orange-500/20 bg-zinc-950 px-4 py-4 sm:hidden">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-zinc-700 px-3 py-2 text-sm font-semibold text-zinc-100 transition hover:border-orange-400 hover:text-orange-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-orange-500/70 px-3 py-2 text-sm font-semibold text-orange-200"
            >
              {ctaLabel}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
