import Link from "next/link";

import type { NavItem } from "@/i18n/dictionary";
import type { ArchiveLink } from "@/lib/site-data";

type SiteFooterProps = {
  brandName: string;
  signature: string;
  quickLinksLabel: string;
  quickLinks: NavItem[];
  legalLinksLabel: string;
  legalLinks: NavItem[];
  archiveLinksLabel: string;
  archiveLinks: ArchiveLink[];
  backToTopLabel: string;
};

export function SiteFooter({
  brandName,
  signature,
  quickLinksLabel,
  quickLinks,
  legalLinksLabel,
  legalLinks,
  archiveLinksLabel,
  archiveLinks,
  backToTopLabel,
}: SiteFooterProps) {
  return (
    <footer className="mt-20 border-t border-orange-500/20 bg-zinc-950/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="font-display text-xl tracking-[0.2em] text-orange-300">
            {brandName}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{signature}</p>
          <a
            href="#top"
            className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-orange-200 transition hover:text-orange-100"
          >
            {backToTopLabel}
          </a>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            {quickLinksLabel}
          </h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-200 transition hover:text-orange-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            {legalLinksLabel}
          </h2>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-200 transition hover:text-orange-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            {archiveLinksLabel}
          </h2>
          <ul className="mt-4 space-y-3">
            {archiveLinks.slice(0, 3).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-200 transition hover:text-orange-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
