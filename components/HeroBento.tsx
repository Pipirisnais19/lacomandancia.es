import Link from "next/link";
import Image from "next/image";
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
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.09]"
      >
        <div className="relative h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] lg:h-[680px] lg:w-[680px]">
          <Image src="/logo-mark.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-6 text-center sm:px-6 sm:py-8 lg:px-8">
        <h1 className="text-glow-gold text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          El hogar del{" "}
          <span className="text-gradient-shift">Commander Budget</span> en
          España
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
          La comunidad de Commander más accesible de España.
          <br className="hidden sm:block" /> Mazos limitados a{" "}
          <span className="font-semibold text-accent-gold">100€</span> (Sin
          Proxies).
        </p>

        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/mazos"
            className="flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-bold text-background shadow-lg shadow-accent-gold/25 transition-all hover:scale-[1.02] hover:bg-accent-gold-hover hover:shadow-accent-gold/50 active:scale-[0.98]"
          >
            <IconChartBar className="h-4 w-4" strokeWidth={2} />
            Explorar Mazos
          </Link>
        </div>
      </div>
    </section>
  );
}
