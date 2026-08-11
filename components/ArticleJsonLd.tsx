import type { Article } from "@/lib/articles";

export default function ArticleJsonLd({ article }: { article: Article }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "es-ES",
    author: {
      "@type": "Organization",
      name: "La Comandancia",
      url: "https://www.lacomandancia.es",
    },
    publisher: {
      "@type": "Organization",
      name: "La Comandancia",
      url: "https://www.lacomandancia.es",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.lacomandancia.es/articulos/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
