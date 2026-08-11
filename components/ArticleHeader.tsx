import Link from "next/link";
import { IconArrowLeft, IconClock, IconCalendar } from "@tabler/icons-react";
import { formatArticleDate, type Article } from "@/lib/articles";

export default function ArticleHeader({ article }: { article: Article }) {
  return (
    <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_0%,rgba(179,79,245,0.18),transparent)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-7 sm:px-6 lg:px-8">
        <Link
          href="/articulos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <IconArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Volver a artículos
        </Link>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-gold">
          {article.tag}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {article.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <IconClock className="h-4 w-4" strokeWidth={1.75} />
            {article.readTime} de lectura
          </span>
          <span className="flex items-center gap-1.5">
            <IconCalendar className="h-4 w-4" strokeWidth={1.75} />
            Publicado el {formatArticleDate(article.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
