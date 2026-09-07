import type { MetadataRoute } from "next";
import { TOURNAMENTS } from "@/lib/tournaments";
import { ARTICLES } from "@/lib/articles";

const BASE_URL = "https://www.lacomandancia.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/torneos`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/articulos`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/mazos`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sobre-nosotros`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacidad`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/articulos/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const tournamentRoutes: MetadataRoute.Sitemap = TOURNAMENTS.map((t) => {
    // Las ligas en curso no tienen dateISO propio; se usa la fecha de
    // la primera jornada con fecha conocida como respaldo.
    const lastModified = t.dateISO ?? t.jornadas?.find((j) => j.dateISO)?.dateISO;
    return {
      url: `${BASE_URL}/torneos/${t.slug}`,
      ...(lastModified && { lastModified }),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...articleRoutes, ...tournamentRoutes];
}
