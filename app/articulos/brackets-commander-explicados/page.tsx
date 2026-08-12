import type { Metadata } from "next";
import Header from "@/components/Header";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import BracketCards from "@/components/BracketCards";
import RelatedArticles from "@/components/RelatedArticles";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("brackets-commander-explicados")!;

export const metadata: Metadata = {
  title: `${article.title} | La Comandancia`,
  description: article.excerpt,
  alternates: {
    canonical: "/articulos/brackets-commander-explicados",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticleJsonLd article={article} />
      <main id="contenido" className="flex-1">
        <ArticleHeader article={article} />

        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            No todos los mazos de Commander se juegan igual. Un mazo temático
            de goblins y un mazo afinado para torneos competitivos son ambos
            "Commander legal", pero sentarlos en la misma mesa suele acabar
            en una paliza para uno de los dos bandos. Para resolver ese
            desajuste, Wizards of the Coast introdujo el{" "}
            <span className="text-foreground">sistema de Brackets</span>: una
            escala de 5 niveles que describe qué tan optimizado está un
            mazo.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted">
            Acordar el bracket antes de jugar es, junto con el propio cap de
            100€ de nuestra liga, la mejor forma de garantizar partidas
            parejas y divertidas.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Los 5 brackets
          </h2>
          <div className="mt-6">
            <BracketCards />
          </div>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            ¿Qué son las cartas "Game Changer"?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Cada bracket tiene un límite distinto de{" "}
            <span className="text-foreground">Game Changers</span>: una
            lista curada de cartas especialmente poderosas. No están
            prohibidas, pero sí restringidas por bracket — te contamos todo
            en el siguiente artículo, junto con la lista oficial de cartas
            prohibidas en Commander.
          </p>
          <a
            href="/articulos/game-changers-y-lista-prohibidas"
            className="mt-2 inline-block font-semibold text-accent-gold hover:underline"
          >
            Leer: Game Changers y lista de prohibidas →
          </a>

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
