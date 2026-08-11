import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import RuleCardsGrid from "@/components/RuleCardsGrid";
import RelatedArticles from "@/components/RelatedArticles";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("que-es-commander")!;

export const metadata: Metadata = {
  title: `${article.title} | La Comandancia`,
  description: article.excerpt,
  alternates: {
    canonical: "/articulos/que-es-commander",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeader article={article} />

        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            <span className="text-foreground">Commander</span> (también
            conocido como EDH, Elder Dragon Highlander) es el formato
            multijugador más social de Magic: The Gathering. En vez de
            duelos 1 contra 1, aquí se juega normalmente en mesas de 3 a 5
            personas, con partidas más largas y mazos construidos alrededor
            de una carta protagonista: tu comandante.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            En La Comandancia jugamos exactamente este formato, con una
            única condición extra: cada mazo tiene que costar 100€ o
            menos en Cardmarket. Pero antes de llegar a eso, repasemos las
            reglas que definen Commander en cualquier mesa del mundo.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Las 4 reglas que necesitas conocer
          </h2>
          <div className="mt-6">
            <RuleCardsGrid />
          </div>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            ¿Por qué es tan popular?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Commander premia la creatividad más que la eficiencia pura:
            puedes construir un mazo alrededor de cualquier tema, desde
            goblins hasta dragones, sin necesidad de perseguir la
            estrategia "óptima". Al jugarse en mesas de varios jugadores,
            las partidas suelen girar en torno a la política de mesa,
            las alianzas temporales y los grandes momentos de mesa —no solo
            en quién gana más rápido.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted">
            Eso sí, no todos los mazos de Commander son iguales en poder.
            Para eso existe el{" "}
            <a
              href="/articulos/brackets-commander-explicados"
              className="font-semibold text-accent-gold hover:underline"
            >
              sistema de Brackets
            </a>
            , que te contamos en detalle en el siguiente artículo.
          </p>

          <p className="mt-8 text-xs text-muted">
            Fuente:{" "}
            <a
              href="https://magic.wizards.com/es/formats/commander"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              magic.wizards.com/es/formats/commander
            </a>
          </p>
        </article>
      </main>

      <RelatedArticles excludeSlug={article.slug} />
      <Footer />
    </>
  );
}
