import Link from "next/link";
import { IconChartBar } from "@tabler/icons-react";

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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.1]"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="absolute right-0 top-1/2 h-[240px] w-[240px] -translate-y-1/2 translate-x-1/4 sm:right-4 sm:h-[320px] sm:w-[320px] sm:translate-x-0 lg:right-10 lg:h-[400px] lg:w-[400px]"
        >
          <defs>
            <linearGradient id="hero-lc-gold" x1="0" y1="0" x2="0.85" y2="1">
              <stop offset="0%" stopColor="#f0d878" />
              <stop offset="48%" stopColor="#e3c34f" />
              <stop offset="100%" stopColor="#9c7a1a" />
            </linearGradient>
          </defs>
          <path d="M50 4 A46 46 0 0 1 93.72 35.55 L84.26 38.63 A36 36 0 0 0 50 14 Z" fill="#e3c34f" />
          <path d="M93.72 35.55 A46 46 0 0 1 77.17 87.24 L71.12 78.88 A36 36 0 0 0 84.26 38.63 Z" fill="#4f8ffc" />
          <path d="M77.17 87.24 A46 46 0 0 1 22.83 87.24 L28.88 78.88 A36 36 0 0 0 71.12 78.88 Z" fill="#b34ff5" />
          <path d="M22.83 87.24 A46 46 0 0 1 6.28 35.55 L15.74 38.63 A36 36 0 0 0 28.88 78.88 Z" fill="#ff5757" />
          <path d="M6.28 35.55 A46 46 0 0 1 50 4 L50 14 A36 36 0 0 0 15.74 38.63 Z" fill="#2ed573" />
          <path d="M50 4 A46 46 0 1 1 49.999 4" fill="none" stroke="#e3c34f" strokeWidth="1.25" />
          <path d="M50 14 A36 36 0 1 1 49.999 14" fill="none" stroke="#e3c34f" strokeWidth="1.05" />
          <path d="M20 48 L50 22 L80 48 L76.2 52 L50 29.2 L23.8 52 Z" fill="url(#hero-lc-gold)" />
          <path d="M27 48 L27 73 L33 73 L33 43 Z M73 48 L73 73 L67 73 L67 43 Z" fill="#e3c34f" />
          <path d="M35 39 Q50 33.5 65 39 L65 60 Q64 71 50 79 Q36 71 35 60 Z" fill="#0a0a12" stroke="#e3c34f" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-6 text-center sm:px-6 sm:py-8 lg:px-8">
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

        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/mazos"
            className="flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-bold text-background shadow-lg shadow-accent-gold/25 transition-all hover:scale-[1.02] hover:bg-accent-gold-hover hover:shadow-accent-gold/50 active:scale-[0.98]"
          >
            <IconChartBar className="h-4 w-4" strokeWidth={2} />
            Explorar Metajuego
          </Link>
        </div>
      </div>
    </section>
  );
}
