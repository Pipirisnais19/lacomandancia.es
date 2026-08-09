import { IconChartBar, IconSearch } from "@tabler/icons-react";

export default function HeroBento() {
  return (
    <section className="bg-grain relative overflow-hidden border-b border-border bg-grid">
      {/* Aurora: multicolor wash instead of a single gold shaft */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(227,195,79,0.28),transparent)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-drift -left-24 top-0 h-72 w-72 bg-accent-blue/25" />
        <div className="orb orb-drift-slow -right-16 top-16 h-64 w-64 bg-accent-purple/20" />
        <div className="orb orb-drift left-1/3 top-40 h-56 w-56 bg-accent-green/15" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8">
        <h1 className="text-glow-gold text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          El hogar del{" "}
          <span className="text-gradient-shift">Commander Budget</span> en
          España
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
          La comunidad de Commander más accesible de España. Mazos limitados a{" "}
          <span className="font-semibold text-accent-gold">100€</span>{" "}
          (Cardmarket EUR). 100% Carta Real (Sin Proxies).
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#metajuego"
            className="flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-bold text-background shadow-lg shadow-accent-gold/25 transition-all hover:scale-[1.02] hover:bg-accent-gold-hover hover:shadow-accent-gold/50 active:scale-[0.98]"
          >
            <IconChartBar className="h-4 w-4" strokeWidth={2} />
            Explorar Metajuego
          </a>
          <a
            href="#validador"
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-gold/50 hover:text-accent-gold"
          >
            <IconSearch className="h-4 w-4" strokeWidth={1.75} />
            Validar mi mazo
          </a>
        </div>
      </div>
    </section>
  );
}
