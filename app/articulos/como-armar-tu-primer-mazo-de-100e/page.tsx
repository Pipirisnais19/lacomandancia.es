import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/ArticleHeader";
import RelatedArticles from "@/components/RelatedArticles";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("como-armar-tu-primer-mazo-de-100e")!;

export const metadata: Metadata = {
  title: `${article.title} | La Comandancia`,
  description: article.excerpt,
  alternates: {
    canonical: "/articulos/como-armar-tu-primer-mazo-de-100e",
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
            <span className="text-foreground">100€ suena poco</span> para un
            mazo de Commander, pero alcanza de sobra si sabes dónde mirar.
            Esta es la guía que nos hubiera gustado tener antes de armar
            nuestro primer mazo budget.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            1. Elige un comandante barato y flexible
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Antes de enamorarte de un comandante, mira su precio real. Hay
            legendarias con reimpresiones baratas en varios sets, y otras
            cuya única versión jugable está en un producto especial caro —
            aunque sea la misma carta, el precio puede ser muy distinto
            según la edición. Busca el comandante en{" "}
            <a
              href="https://scryfall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-gold hover:underline"
            >
              Scryfall
            </a>{" "}
            y revisa todas sus versiones antes de decidir. Si no sabes por
            dónde empezar, echa un vistazo a nuestros{" "}
            <Link
              href="/mazos"
              className="font-semibold text-accent-gold hover:underline"
            >
              Mazos Destacados
            </Link>
            : son comandantes que ya compitieron y demostraron que
            funcionan por menos de 100€.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            2. Usa Moxfield con precios en Cardmarket EUR
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Arma tu lista en Moxfield y cambia la moneda a Cardmarket (EUR).
            Activa el filtro{" "}
            <span className="text-foreground">
              &ldquo;Update to Cheapest Printing&rdquo;
            </span>{" "}
            para que cada carta se cotice por su versión más barata
            disponible, no por la primera que aparezca. Es exactamente lo
            que usamos para validar los mazos de nuestros torneos.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            3. La base de maná no tiene que costar nada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Las tierras básicas son gratis y no cuentan contra tu límite.
            Antes de comprar una dual land cara, pregúntate si de verdad la
            necesitas — muchos mazos de dos o tres colores funcionan bien
            con básicas más un puñado de tierras comunes de fijado.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            4. Busca el efecto, no la carta de moda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Casi todos los efectos que hacen fuerte a un mazo (remoción,
            rampa, robo de cartas) tienen una versión barata igual de
            funcional que la staple cara que todo el mundo juega. No
            necesitas la carta que sale en las listas de EDHREC si hay diez
            alternativas de 1-2€ que cumplen el mismo rol.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            5. Revisa la lista de prohibidas y el bracket
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Antes de dar por cerrada la lista, comprueba que ninguna carta
            esté en la{" "}
            <Link
              href="/articulos/game-changers-y-lista-prohibidas"
              className="font-semibold text-accent-gold hover:underline"
            >
              lista de prohibidas o de Game Changers
            </Link>{" "}
            fuera del límite de tu bracket. La mayoría de ligas budget,
            incluida la nuestra, juegan en Bracket 2-3.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Antes de tu primera partida
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Revisa el precio total una última vez — pequeñas variaciones de
            mercado son normales y no pasa nada si tu mazo pasó de 97€ a
            105€. Si quieres inspiración real, en{" "}
            <Link
              href="/mazos"
              className="font-semibold text-accent-gold hover:underline"
            >
              nuestra base de mazos
            </Link>{" "}
            puedes ver listas que ya compitieron por menos de 100€, con
            comandante, colores y link directo a Moxfield.
          </p>
        </article>
      </main>

      <RelatedArticles excludeSlug={article.slug} />
      <Footer />
    </>
  );
}
