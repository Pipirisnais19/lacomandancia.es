import Image from "next/image";
import { IconBrandInstagram, IconExternalLink } from "@tabler/icons-react";

export default function TournamentsSection() {
  return (
    <section id="torneos" className="ambient-green overflow-hidden border-b border-border bg-surface">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
          Torneo Presencial
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          ¿Dónde Jugar?
        </h2>

        <div className="mt-6 max-w-md">
          <div className="glass glow-border-hover rounded-2xl border border-accent-green/25 p-5 hover:border-accent-green/50">
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent-green">
              Tienda Amiga
            </p>
            <Image
              src="/logos/panda-games.webp"
              alt="Panda Games"
              width={650}
              height={231}
              className="mt-2 h-10 w-auto"
            />

            <p className="mt-4 text-sm text-muted">
              C/ Oslo 53, CC X-Madrid, planta alta
              <br />
              Alcorcón, Madrid
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://pandagames.es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent-green hover:text-accent-green"
              >
                pandagames.es
                <IconExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
              <a
                href="https://www.instagram.com/pandagames.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent-green hover:text-accent-green"
              >
                <IconBrandInstagram className="h-3.5 w-3.5" strokeWidth={1.75} />
                @pandagames.es
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
