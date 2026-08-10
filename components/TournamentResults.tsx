import Link from "next/link";
import {
  IconTrophy,
  IconMapPin,
  IconArrowRight,
  IconCalendarStats,
} from "@tabler/icons-react";
import { TOURNAMENTS } from "@/lib/tournaments";

const STATUS_LABEL: Record<string, string> = {
  "en-curso": "En juego",
  proximo: "Próximo",
  finalizado: "Finalizado",
};

const STATUS_CLASS: Record<string, string> = {
  "en-curso": "border-accent-red/40 bg-accent-red/10 text-accent-red",
  proximo: "border-accent-gold/40 bg-accent-gold/10 text-accent-gold",
  finalizado: "border-accent-green/40 bg-accent-green/10 text-accent-green",
};

export default function TournamentResults() {
  const pastTournaments = TOURNAMENTS.filter((t) => t.status !== "proximo");

  return (
    <section id="resultados" className="ambient-red overflow-hidden border-b border-border bg-surface">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
          Resultados
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          Torneos Recientes
        </h2>

        <div className="mt-6 flex max-w-md flex-col gap-4">
          {pastTournaments.map((t) => (
            <Link
              key={t.slug}
              href={`/torneos/${t.slug}`}
              className={`glass glow-border-hover group flex flex-col rounded-2xl p-6 hover:border-accent-gold/40 ${
                t.status === "en-curso" ? "gradient-border" : "border border-border/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${STATUS_CLASS[t.status]}`}
                >
                  {t.status === "en-curso" && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-red" />
                  )}
                  {STATUS_LABEL[t.status]}
                </span>
                <span className="text-xs font-bold text-muted">{t.cap}€</span>
              </div>

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

              {t.champion && (
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-accent-gold/25 bg-accent-gold/5 px-3 py-2">
                  <IconTrophy className="h-4 w-4 shrink-0 text-accent-gold" strokeWidth={1.75} />
                  <p className="min-w-0 text-xs text-foreground">
                    <span className="font-bold">{t.champion.player}</span>{" "}
                    <span className="text-muted">con</span>{" "}
                    <span className="font-semibold">{t.champion.commander}</span>
                  </p>
                </div>
              )}

              <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent-gold opacity-0 transition-opacity group-hover:opacity-100">
                Ver torneo
                <IconArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
