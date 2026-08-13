import type { Metadata } from "next";
import Link from "next/link";
import {
  IconMapPin,
  IconCalendarStats,
  IconTrophy,
  IconArrowRight,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TOURNAMENTS } from "@/lib/tournaments";

export const metadata: Metadata = {
  title: "Torneos de Commander Budget en Madrid | La Comandancia",
  description:
    "Todos los torneos de Commander Budget en Panda Games (Alcorcón): próximos eventos, ligas en curso y resultados finalizados.",
  alternates: {
    canonical: "/torneos",
  },
};

const STATUS_CLASS: Record<string, string> = {
  "en-curso": "border-accent-red/40 bg-accent-red/10 text-accent-red",
  proximo: "border-accent-gold/40 bg-accent-gold/10 text-accent-gold",
  finalizado: "border-accent-green/40 bg-accent-green/10 text-accent-green",
};

export default function TorneosPage() {
  const proximos = TOURNAMENTS.filter((t) => t.status === "proximo");
  const enCurso = TOURNAMENTS.filter((t) => t.status === "en-curso");
  const finalizados = TOURNAMENTS.filter((t) => t.status === "finalizado");

  return (
    <>
      <Header />
      <main id="contenido" className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(255,87,87,0.18),transparent)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Calendario
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Torneos
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Ligas y torneos de Commander Budget en Panda Games (Alcorcón):
              lo que viene, lo que se está jugando ahora y lo que ya terminó.
            </p>
          </div>
        </div>

        {/* En curso */}
        {enCurso.length > 0 && (
          <section className="ambient-red overflow-hidden border-b border-border bg-surface">
            <div className="relative z-[1] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                En curso
              </h2>
              <div className="mt-5 flex flex-wrap gap-4">
                {enCurso.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/torneos/${t.slug}`}
                    className="gradient-border glass glow-border-hover group flex w-full max-w-md flex-col rounded-2xl p-6"
                  >
                    <span
                      className={`flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${STATUS_CLASS["en-curso"]}`}
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-red" />
                      En juego
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
                    <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Ver torneo
                      <IconArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Próximos */}
        <section className="ambient-gold overflow-hidden border-b border-border bg-background">
          <div className="relative z-[1] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Próximos
            </h2>

            {proximos.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-4">
                {proximos.map((t) => (
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
              </div>
            ) : (
              <div className="glass mt-5 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
                No hay torneos anunciados por ahora — vuelve pronto.
              </div>
            )}
          </div>
        </section>

        {/* Finalizados */}
        <section className="ambient-green overflow-hidden bg-surface">
          <div className="relative z-[1] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Finalizados
            </h2>

            {finalizados.length > 0 ? (
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {finalizados.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/torneos/${t.slug}`}
                    className="glass glow-border-hover group flex flex-col rounded-2xl border border-border/60 p-6 hover:border-accent-gold/40"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${STATUS_CLASS.finalizado}`}
                      >
                        Finalizado
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
            ) : (
              <div className="glass mt-5 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
                Todavía no hay torneos finalizados.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
