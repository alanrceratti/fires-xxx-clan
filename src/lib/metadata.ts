import type { Metadata } from "next";

const siteUrl = "https://fires-xxx-clan.vercel.app";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "FiReS-xXx Clan",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "https://i.ytimg.com/vi/xv6y2nW2Z6k/hqdefault.jpg",
          width: 480,
          height: 360,
          alt: "Worms 4 Mayhem PRO {FiReS-xXx}",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://i.ytimg.com/vi/xv6y2nW2Z6k/hqdefault.jpg"],
    },
  };
}

export const defaultKeywords = [
  "FiReS-xXx",
  "Worms 4 Mayhem",
  "Worms 3D",
  "ropers",
  "clã worms",
  "alanrc2008",
];
