import type { Metadata } from "next";
import Link from "next/link";
import { IconHome, IconCards } from "@tabler/icons-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada | La Comandancia",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenido" className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(227,195,79,0.22),transparent)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Zona de exilio
            </p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              404
            </h1>
            <p className="mt-4 max-w-md text-base text-muted">
              Esta carta no está en el pool. La página que buscas no existe o
              se movió de sitio.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-bold text-background shadow-lg shadow-accent-gold/25 transition-all hover:scale-[1.02] hover:bg-accent-gold-hover hover:shadow-accent-gold/50 active:scale-[0.98]"
              >
                <IconHome className="h-4 w-4" strokeWidth={2} />
                Volver al inicio
              </Link>
              <Link
                href="/mazos"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-gold/50 hover:text-accent-gold"
              >
                <IconCards className="h-4 w-4" strokeWidth={1.75} />
                Ver mazos
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
