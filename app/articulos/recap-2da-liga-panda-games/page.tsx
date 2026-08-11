import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import RelatedArticles from "@/components/RelatedArticles";
import { getArticleBySlug } from "@/lib/articles";
import { getTournamentBySlug } from "@/lib/tournaments";

const article = getArticleBySlug("recap-2da-liga-panda-games")!;
const tournament = getTournamentBySlug("2a-liga-commander-budget-100-panda-games")!;

export const metadata: Metadata = {
  title: `${article.title} | La Comandancia`,
  description: article.excerpt,
  alternates: {
    canonical: "/articulos/recap-2da-liga-panda-games",
  },
};

export default function Page() {
  const top4 = tournament.top8?.filter((d) => d.tier === "top4") ?? [];
  const rest = tournament.top8?.filter((d) => d.tier === "top8") ?? [];

  return (
    <>
      <Header />
      <ArticleJsonLd article={article} />
      <main id="contenido" className="flex-1">
        <ArticleHeader article={article} />

        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            La 2ª Liga de Commander Budget en Panda Games (Alcorcón) cerró
            con <span className="text-foreground">55 participantes</span> a
            lo largo de 8 jornadas, todos con mazos de máximo 100€. Esto es
            lo que dejó la final.
          </p>

          {tournament.champion && (
            <>
              <h2 className="mt-10 text-xl font-bold text-foreground">
                El campeón: {tournament.champion.commander}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {tournament.champion.player} se llevó el título con un mazo{" "}
                {tournament.champion.colorIdentity.join("")} construido
                alrededor de {tournament.champion.commander}.{" "}
                {tournament.champion.moxfieldUrl && (
                  <a
                    href={tournament.champion.moxfieldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent-gold hover:underline"
                  >
                    Puedes ver la lista completa en Moxfield.
                  </a>
                )}
              </p>
            </>
          )}

          {top4.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold text-foreground">
                La mesa final (Top 4)
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Junto a {tournament.champion?.player}, llegaron a la mesa
                final:
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {top4.map((d) => (
                  <li
                    key={d.commander}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                    <span>
                      <span className="text-foreground">{d.player}</span> con{" "}
                      {d.commander}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {rest.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-bold text-foreground">
                También en el Top 8
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {rest.map((d) => (
                  <li
                    key={d.commander}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                    <span>
                      <span className="text-foreground">{d.player}</span> con{" "}
                      {d.commander}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Lo que viene
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Ya está en marcha la 3ª Liga, y en septiembre se suma el torneo
            Commander Ultrabudget 20€ organizado por la Asociación Vecinal
            Sural. Puedes ver las fechas en{" "}
            <Link
              href="/#agenda"
              className="font-semibold text-accent-gold hover:underline"
            >
              Próximos Torneos
            </Link>{" "}
            o repasar el detalle completo de esta liga, con reglas y todos
            los resultados, en su{" "}
            <Link
              href={`/torneos/${tournament.slug}`}
              className="font-semibold text-accent-gold hover:underline"
            >
              página oficial
            </Link>
            . Y si buscas ideas para tu propio mazo, los ocho de esta final
            están en{" "}
            <Link
              href="/mazos"
              className="font-semibold text-accent-gold hover:underline"
            >
              nuestra base de mazos
            </Link>
            .
          </p>
        </article>
      </main>

      <RelatedArticles excludeSlug={article.slug} />
      <Footer />
    </>
  );
}
