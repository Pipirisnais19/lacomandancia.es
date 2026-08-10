import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import GameChangersBanList from "@/components/GameChangersBanList";
import RelatedArticles from "@/components/RelatedArticles";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("game-changers-y-lista-prohibidas")!;

export const metadata: Metadata = {
  title: `${article.title} | La Comandancia`,
  description: article.excerpt,
  alternates: {
    canonical: "/articulos/game-changers-y-lista-prohibidas",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ArticleHeader article={article} />

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            Cuando hablamos de "cartas problemáticas" en Commander, en
            realidad estamos hablando de dos listas distintas mantenidas por
            Wizards of the Coast, y es fácil confundirlas: las{" "}
            <span className="text-foreground">Game Changers</span> y la{" "}
            <span className="text-foreground">lista de prohibidas</span>.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Game Changers: poderosas, no prohibidas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Son 53 cartas legales en Commander, pero lo bastante fuertes
            como para desequilibrar una mesa casual. En vez de prohibirlas,
            Wizards decidió limitarlas por{" "}
            <a
              href="/articulos/brackets-commander-explicados"
              className="font-semibold text-accent-gold hover:underline"
            >
              bracket
            </a>
            : vetadas en los brackets 1 y 2, hasta 3 copias distintas en el
            3, y sin restricción en 4 y 5.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            La lista de prohibidas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Estas sí son cartas completamente ilegales en Commander, sin
            importar el bracket: piezas históricas como Black Lotus,
            Ancestral Recall o Time Walk, junto con otras que han generado
            problemas específicos del formato multijugador. La lista se
            revisa periódicamente, así que en vez de copiarla aquí (y
            arriesgarnos a que quede desactualizada), te dejamos siempre el
            enlace a la fuente oficial.
          </p>

          <div className="mt-6">
            <GameChangersBanList />
          </div>

          <p className="mt-8 text-base leading-relaxed text-muted">
            Antes de llevar un mazo a nuestra liga, recuerda comprobar
            también el{" "}
            <a
              href="/articulos/que-es-commander"
              className="font-semibold text-accent-gold hover:underline"
            >
              resto de reglas del formato
            </a>
            .
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
