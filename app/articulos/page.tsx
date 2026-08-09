import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconArrowRight, IconClock, IconEye, IconFlame } from "@tabler/icons-react";
import { getMostViewed, formatViews } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artículos | La Comandancia",
  description:
    "Aprende Commander: reglas del formato, sistema de brackets, Game Changers y la lista de cartas prohibidas.",
};

export default function ArticlesIndex() {
  const [featured, ...rest] = getMostViewed();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_0%,rgba(179,79,245,0.18),transparent)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-gold">
              Artículos
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Aprende Commander
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Reglas, brackets y las cartas que hay que conocer antes de
              sentarte a jugar.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {featured && (
            <Link
              href={`/articulos/${featured.slug}`}
              className="gradient-border glass glow-border-hover group relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 sm:flex-row sm:items-center lg:p-10"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-gold/15 text-accent-gold">
                <IconFlame className="h-8 w-8" strokeWidth={1.5} />
              </span>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-background">
                    Más leído
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-accent-gold">
                    {featured.tag}
                  </p>
                </div>
                <h2 className="mt-2 text-xl font-bold leading-snug text-foreground sm:text-2xl">
                  {featured.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <IconClock className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {featured.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <IconEye className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {formatViews(featured.views)}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-accent-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Leer
                    <IconArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="mt-4 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/articulos/${a.slug}`}
                className="glass glow-border-hover group flex flex-col rounded-2xl border border-border/60 p-6 hover:border-accent-gold/50"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-accent-gold">
                  {a.tag}
                </p>
                <h2 className="mt-1.5 text-base font-bold leading-snug text-foreground">
                  {a.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <IconClock className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {a.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconEye className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {formatViews(a.views)}
                    </span>
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
      </main>
      <Footer />
    </>
  );
}
