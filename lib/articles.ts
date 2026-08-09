export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  views: number;
  tag: string;
};

// Vistas: valores de referencia hasta conectar analítica real (Vercel Analytics / Plausible).
export const ARTICLES: Article[] = [
  {
    slug: "que-es-commander",
    title: "¿Qué es Commander? La guía completa del formato",
    excerpt:
      "100 cartas, un comandante y hasta 4 rivales en la mesa. Te explicamos las reglas básicas: singleton, identidad de color, impuesto de comandante y daño de combate.",
    readTime: "4 min",
    views: 2340,
    tag: "Reglas",
  },
  {
    slug: "brackets-commander-explicados",
    title: "Sistema de Brackets en Commander: los 5 niveles explicados",
    excerpt:
      "De Exhibición a cEDH: así clasifica Wizards of the Coast el nivel de poder de un mazo de Commander, y por qué te importa antes de sentarte a jugar.",
    readTime: "5 min",
    views: 1560,
    tag: "Brackets",
  },
  {
    slug: "game-changers-y-lista-prohibidas",
    title: "Cartas Decisivas (Game Changers) y lista de prohibidas en Commander",
    excerpt:
      "No todo lo poderoso está prohibido. Descubre qué son las Game Changers, cómo limitan cada bracket y dónde consultar la lista oficial de cartas baneadas.",
    readTime: "3 min",
    views: 980,
    tag: "Reglas",
  },
];

export function getMostViewed(count?: number): Article[] {
  const sorted = [...ARTICLES].sort((a, b) => b.views - a.views);
  return typeof count === "number" ? sorted.slice(0, count) : sorted;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatViews(views: number): string {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(views % 1000 === 0 ? 0 : 1)}k vistas`;
  }
  return `${views} vistas`;
}
