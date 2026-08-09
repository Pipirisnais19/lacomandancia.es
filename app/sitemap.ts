import type { MetadataRoute } from "next";
import { TOURNAMENTS } from "@/lib/tournaments";
import { ARTICLES } from "@/lib/articles";

const BASE_URL = "https://lacomandancia.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/articulos`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/articulos/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const tournamentRoutes: MetadataRoute.Sitemap = TOURNAMENTS.map((t) => ({
    url: `${BASE_URL}/torneos/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes, ...tournamentRoutes];
}
