import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DecksExplorer from "@/components/DecksExplorer";
import { getAllDecks } from "@/lib/tournaments";

export const metadata: Metadata = {
  title: "Mazos de Commander Budget | La Comandancia",
  description:
    "Todos los mazos que han competido en nuestros torneos: comandante, colores, resultado y link a Moxfield. Ideas reales de mazos de Commander bajo 100€.",
  alternates: {
    canonical: "/mazos",
  },
};

export default function MazosPage() {
  const decks = getAllDecks();

  return (
    <>
      <Header />
      <main id="contenido" className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(79,143,252,0.2),transparent)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Metajuego
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mazos
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Todos los mazos que han hecho Top en nuestros torneos. Filtra
              por color, comandante, fecha, y mira la lista completa en
              Moxfield.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <DecksExplorer decks={decks} />
        </div>
      </main>
      <Footer />
    </>
  );
}
