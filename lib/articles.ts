export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  tag: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "que-es-commander",
    title: "¿Qué es Commander? La guía completa del formato",
    excerpt:
      "100 cartas, un comandante y hasta 4 rivales en la mesa. Te explicamos las reglas básicas: singleton, identidad de color, impuesto de comandante y daño de combate.",
    readTime: "4 min",
    publishedAt: "2026-08-09",
    updatedAt: "2026-08-11",
    tag: "Reglas",
  },
  {
    slug: "brackets-commander-explicados",
    title: "Sistema de Brackets en Commander: los 5 niveles explicados",
    excerpt:
      "De Exhibición a cEDH: así clasifica Wizards of the Coast el nivel de poder de un mazo de Commander, y por qué te importa antes de sentarte a jugar.",
    readTime: "5 min",
    publishedAt: "2026-08-09",
    updatedAt: "2026-08-11",
    tag: "Brackets",
  },
  {
    slug: "game-changers-y-lista-prohibidas",
    title: "Cartas Decisivas (Game Changers) y lista de prohibidas en Commander",
    excerpt:
      "No todo lo poderoso está prohibido. Descubre qué son las Game Changers, cómo limitan cada bracket y dónde consultar la lista oficial de cartas baneadas.",
    readTime: "3 min",
    publishedAt: "2026-08-09",
    updatedAt: "2026-08-11",
    tag: "Reglas",
  },
  {
    slug: "como-armar-tu-primer-mazo-de-100e",
    title: "Cómo armar tu primer mazo de Commander de 100€",
    excerpt:
      "Guía práctica para construir tu primer mazo budget: cómo elegir comandante, dónde mirar precios reales y qué evitar para no pasarte del límite.",
    readTime: "6 min",
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-11",
    tag: "Guías",
  },
  {
    slug: "recap-2da-liga-panda-games",
    title: "Recap: así fue la 2ª Liga de Commander Budget en Panda Games",
    excerpt:
      "55 participantes, 8 jornadas y una final ganada por Alela, Artful Provocateur. Repasamos el Top 4 y lo que deja la segunda liga.",
    readTime: "4 min",
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-11",
    tag: "Resultados",
  },
];

export function getRecentArticles(count?: number): Article[] {
  const sorted = [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return typeof count === "number" ? sorted.slice(0, count) : sorted;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
