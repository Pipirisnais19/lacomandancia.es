import Link from "next/link";
import { IconCalendarStats, IconMapPin, IconBrandInstagram } from "@tabler/icons-react";
import { TOURNAMENTS } from "@/lib/tournaments";

const MIN_CARDS = 2;

export default function UpcomingTournaments() {
  const upcoming = TOURNAMENTS.filter((t) => t.status === "proximo");
  const placeholders = Math.max(0, MIN_CARDS - upcoming.length);

  return (
    <section className="ambient-gold overflow-hidden border-b border-border bg-background">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
          Agenda
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Próximos Torneos
        </h2>

        <div className="mt-6 flex flex-wrap gap-4">
          {upcoming.map((t) => (
            <div
              key={t.slug}
              className="glass flex w-full max-w-md flex-col rounded-2xl border border-accent-gold/30 p-6"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-gold">
                Próximamente
              </span>

              <h3 className="mt-3 text-base font-bold leading-snug text-foreground">
                {t.name}
              </h3>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <IconMapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                {t.venue}
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <IconCalendarStats className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                {t.dateLabel}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href={`/torneos/${t.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gold px-4 py-2.5 text-sm font-bold text-background transition-all hover:scale-[1.02] hover:bg-accent-gold-hover"
                >
                  Ver detalles
                </Link>
                {t.announcementUrl && (
                  <a
                    href={t.announcementUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent-gold hover:text-accent-gold"
                  >
                    <IconBrandInstagram className="h-4 w-4" strokeWidth={1.75} />
                    Ver anuncio
                  </a>
                )}
              </div>
            </div>
          ))}

          {Array.from({ length: placeholders }).map((_, i) => (
            <div
              key={`pending-${i}`}
              className="glass flex w-full max-w-md flex-col rounded-2xl border border-dashed border-border p-6"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                Por anunciar
              </span>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <IconMapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                Sede: <span className="text-foreground">por confirmar</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <IconCalendarStats className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                Fecha: <span className="text-foreground">por confirmar</span>
              </div>

              <a
                href="https://www.instagram.com/pandagames.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent-gold hover:text-accent-gold"
              >
                <IconBrandInstagram className="h-4 w-4" strokeWidth={1.75} />
                Preguntar en Panda Games
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
