import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";

import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToastProvider } from "@/components/toast-provider";
import { getDictionary } from "@/i18n/dictionary";
import { archiveLinks } from "@/lib/site-data";
import { buildMetadata, defaultKeywords } from "@/lib/metadata";

import "./globals.css";

const bodyFont = Rajdhani({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const dictionary = getDictionary("pt-BR");

export const metadata: Metadata = {
  ...buildMetadata({
    title: "FiReS-xXx Clan | Arquivo histórico de Worms 4 Mayhem",
    description:
      "Site dedicado ao acervo do clã {FiReS-xXx}: vídeos, membros, linha do tempo e links arquivados da cena Worms Mayhem.",
  }),
  keywords: defaultKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      id="top"
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ToastProvider>
          <SiteHeader
            brandName={dictionary.brand.name}
            brandTagline={dictionary.brand.tagline}
            navigation={dictionary.navigation}
            ctaLabel={dictionary.header.ctaLabel}
            ctaHref={dictionary.header.ctaHref}
            mobileLabel={dictionary.header.mobileLabel}
          />

          <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
            {children}
          </main>

          <SiteFooter
            brandName={dictionary.brand.name}
            signature={dictionary.footer.signature}
            quickLinksLabel={dictionary.footer.quickLinksLabel}
            quickLinks={dictionary.navigation}
            legalLinksLabel={dictionary.footer.legalLinksLabel}
            legalLinks={dictionary.footer.legalLinks}
            archiveLinksLabel={dictionary.footer.archiveLinksLabel}
            archiveLinks={archiveLinks}
            backToTopLabel={dictionary.common.backToTop}
          />

          <CookieBanner
            title={dictionary.cookieBanner.title}
            description={dictionary.cookieBanner.description}
            acceptLabel={dictionary.cookieBanner.accept}
            rejectLabel={dictionary.cookieBanner.reject}
            acceptedToast={dictionary.cookieBanner.acceptedToast}
            rejectedToast={dictionary.cookieBanner.rejectedToast}
          />
        </ToastProvider>
      </body>
    </html>
  );
}
