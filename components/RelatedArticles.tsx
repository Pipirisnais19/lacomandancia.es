import Link from "next/link";
import { IconArrowRight, IconEye } from "@tabler/icons-react";
import { ARTICLES, formatViews } from "@/lib/articles";

export default function RelatedArticles({ excludeSlug }: { excludeSlug: string }) {
  const others = ARTICLES.filter((a) => a.slug !== excludeSlug);

  if (others.length === 0) return null;

  return (
    <div className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-foreground">
          Sigue leyendo
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={`/articulos/${a.slug}`}
              className="glass glow-border-hover group flex flex-col rounded-xl border border-border/60 p-5 hover:border-accent-gold/50"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent-gold">
                {a.tag}
              </p>
              <h3 className="mt-1 text-sm font-bold text-foreground">
                {a.title}
              </h3>
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1">
                  <IconEye className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {formatViews(a.views)}
                </span>
                <span className="flex items-center gap-1 font-semibold text-accent-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Leer
                  <IconArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
