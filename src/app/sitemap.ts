import type { MetadataRoute } from "next";

const baseUrl = "https://fires-xxx-clan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/historia",
    "/videos",
    "/membros",
    "/contato",
    "/termos",
    "/privacidade",
    "/exclusao-de-dados",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
