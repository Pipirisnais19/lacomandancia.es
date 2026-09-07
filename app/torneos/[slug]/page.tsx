import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  IconArrowLeft,
  IconMapPin,
  IconTrophy,
  IconExternalLink,
  IconClockHour4,
  IconUsers,
  IconCalendarStats,
  IconCoin,
} from "@tabler/icons-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TOURNAMENTS, getTournamentBySlug } from "@/lib/tournaments";
import { scryfallArtUrl } from "@/lib/scryfall";
import { MANA_COLOR_CLASS, metagameBreakdown, colorCounts, type ManaColor } from "@/lib/metagame";
import MoxfieldLink from "@/components/MoxfieldLink";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

function ColorPips({ colors }: { colors: ManaColor[] }) {
  return (
    <span className="inline-flex items-center gap-1 align-middle">
      {colors.map((c) => (
        <span key={c} className={`h-2.5 w-2.5 rounded-full ${MANA_COLOR_CLASS[c]}`} />
      ))}
    </span>
  );
}

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

export function generateStaticParams() {
  return TOURNAMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tournament = getTournamentBySlug(slug);
  if (!tournament) return {};
  const title = `${tournament.name} | La Comandancia`;
  let description = `${tournament.name} — ${tournament.venue}. ${tournament.dateLabel}.`;
  if (tournament.champion) {
    description += ` Campeón: ${tournament.champion.player} con ${tournament.champion.commander}.`;
  }
  if (tournament.fieldDecks && tournament.fieldDecks.length > 0) {
    description += " Incluye análisis del metajuego: colores, cartas más jugadas y curva de maná.";
  }
  return {
    title,
    description,
    alternates: { canonical: `/torneos/${slug}` },
    openGraph: { title, description, type: "article", images: ["/opengraph-image"] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function TournamentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getTournamentBySlug(slug);
  if (!tournament) notFound();

  // Las ligas en curso no tienen una fecha única propia (dateISO):
  // se usa la de la primera jornada con fecha conocida como respaldo,
  // para que la página siga teniendo structured data de SportsEvent.
  const effectiveStartDate = tournament.dateISO ?? tournament.jornadas?.find((j) => j.dateISO)?.dateISO;

  const eventJsonLd = effectiveStartDate
    ? {
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        name: tournament.name,
        startDate: effectiveStartDate,
        eventStatus: "https://schema.org/EventScheduled",
        image: "https://www.lacomandancia.es/opengraph-image",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: tournament.venue,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Alcorcón",
            addressRegion: "Madrid",
            addressCountry: "ES",
          },
        },
        organizer: tournament.organizerName
          ? { "@type": "Organization", name: tournament.organizerName }
          : {
              "@type": "SportsOrganization",
              name: "La Comandancia",
              url: "https://www.lacomandancia.es",
            },
        ...(tournament.champion && {
          winner: {
            "@type": "Person",
            name: tournament.champion.player,
          },
        }),
      }
    : null;

  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Torneos", path: "/torneos" },
          { name: tournament.name, path: `/torneos/${slug}` },
        ]}
      />
      {eventJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      )}
      <main id="contenido" className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_20%_0%,rgba(255,87,87,0.18),transparent)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
            <Link
              href="/torneos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <IconArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              Volver a torneos
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${STATUS_CLASS[tournament.status]}`}
              >
                {tournament.status === "en-curso" && (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-red" />
                )}
                {STATUS_LABEL[tournament.status]}
              </span>
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {tournament.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <IconMapPin className="h-4 w-4" strokeWidth={1.75} />
                {tournament.venueUrl ? (
                  <a
                    href={tournament.venueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold hover:underline"
                  >
                    {tournament.venue}
                  </a>
                ) : (
                  tournament.venue
                )}
              </span>
              <span className="flex items-center gap-1.5">
                <IconClockHour4 className="h-4 w-4" strokeWidth={1.75} />
                {tournament.dateLabel}
              </span>
              {tournament.participants && (
                <span className="flex items-center gap-1.5">
                  <IconUsers className="h-4 w-4" strokeWidth={1.75} />
                  {tournament.participants} participantes
                  {tournament.format && ` (${tournament.format.jornadas} jornadas)`}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          {!tournament.jornadas && (tournament.champion ||
            tournament.status === "en-curso" ||
            tournament.status === "finalizado") && (
            <>
          {tournament.resultsUnavailable ? (
            <section>
              <h2 className="text-xl font-bold text-foreground">Resultados</h2>
              <div className="glass mt-4 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
                No pudimos recopilar los mazos de este torneo.
              </div>
            </section>
          ) : (
            <section>
              <h2 className="text-xl font-bold text-foreground">Resultados</h2>
              <div className="mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:items-start">
                {tournament.champion ? (
                  <div className="gradient-border glass glow-border group relative overflow-hidden rounded-2xl lg:col-span-2">
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-accent-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-background">
                      <IconTrophy className="h-3.5 w-3.5" strokeWidth={2.25} />
                      Campeón
                    </div>
                    <div className="relative h-56 w-full overflow-hidden bg-surface sm:h-80">
                      <Image
                        src={scryfallArtUrl(tournament.champion.scryfallName)}
                        alt={tournament.champion.commander}
                        fill
                        priority
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="flex flex-wrap items-center gap-2 text-xl font-bold text-foreground">
                        {tournament.champion.commander}
                        <ColorPips colors={tournament.champion.colorIdentity} />
                      </h3>
                      {tournament.champion.player && (
                        <p className="mt-1 text-sm text-muted">
                          Piloteado por {tournament.champion.player}
                        </p>
                      )}
                      {tournament.champion.moxfieldUrl && (
                        <MoxfieldLink
                          href={tournament.champion.moxfieldUrl}
                          commander={tournament.champion.commander}
                          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent-gold hover:text-accent-gold"
                        >
                          Ver Mazo en Moxfield
                          <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
                        </MoxfieldLink>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="glass rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted lg:col-span-2">
                    {tournament.status === "en-curso"
                      ? "La final se está jugando ahora mismo — el mazo campeón se publica al terminar."
                      : "Resultados pendientes."}
                  </div>
                )}

                {tournament.top8 && tournament.top8.length > 0 ? (
                  <div className="flex flex-col gap-3 lg:col-start-3">
                    {tournament.top8
                      .filter((d) => d.tier === "top4")
                      .map((deck) => (
                        <div
                          key={deck.commander}
                          className="glass flex items-center gap-3 overflow-hidden rounded-xl border border-accent-gold/25 p-3"
                        >
                          <span className="w-10 shrink-0 text-[10px] font-bold uppercase tracking-wide text-accent-gold">
                            Top4
                          </span>
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface">
                            <Image
                              src={scryfallArtUrl(deck.scryfallName)}
                              alt={deck.commander}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="flex flex-wrap items-center gap-1.5 truncate text-sm font-bold text-foreground">
                              {deck.commander}
                              <ColorPips colors={deck.colorIdentity} />
                            </p>
                            {deck.player && (
                              <p className="truncate text-xs text-muted">{deck.player}</p>
                            )}
                          </div>
                          {deck.moxfieldUrl && (
                            <MoxfieldLink
                              href={deck.moxfieldUrl}
                              commander={deck.commander}
                              className="-m-2 shrink-0 p-2 text-muted transition-colors hover:text-accent-gold"
                            >
                              <span className="sr-only">{`Ver ${deck.commander} en Moxfield`}</span>
                              <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
                            </MoxfieldLink>
                          )}
                        </div>
                      ))}

                    {tournament.top8
                      .filter((d) => d.tier === "top8")
                      .map((deck) => (
                        <div
                          key={deck.commander}
                          className="glass flex items-center gap-3 overflow-hidden rounded-xl border border-border/60 p-3"
                        >
                          <span className="w-10 shrink-0 text-[10px] font-bold uppercase tracking-wide text-muted">
                            Top8
                          </span>
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface">
                            <Image
                              src={scryfallArtUrl(deck.scryfallName)}
                              alt={deck.commander}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="flex flex-wrap items-center gap-1.5 truncate text-sm font-bold text-foreground">
                              {deck.commander}
                              <ColorPips colors={deck.colorIdentity} />
                            </p>
                            {deck.player && (
                              <p className="truncate text-xs text-muted">{deck.player}</p>
                            )}
                          </div>
                          {deck.moxfieldUrl && (
                            <MoxfieldLink
                              href={deck.moxfieldUrl}
                              commander={deck.commander}
                              className="-m-2 shrink-0 p-2 text-muted transition-colors hover:text-accent-gold"
                            >
                              <span className="sr-only">{`Ver ${deck.commander} en Moxfield`}</span>
                              <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
                            </MoxfieldLink>
                          )}
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="glass flex items-center justify-center rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted lg:col-start-3">
                    Resultados pendientes — vuelve pronto.
                  </div>
                )}
              </div>
            </section>
          )}
            </>
          )}

          {/* Metajuego: distribución de colores del campo completo */}
          {tournament.fieldDecks && tournament.fieldDecks.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-foreground">Análisis del Metajuego</h2>
              <p className="mt-1 text-sm text-muted">
                Colores, cartas y curva de maná de los mazos del torneo.
              </p>

              <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-muted">
                Por color individual
              </h3>
              <div className="glass mt-2 flex flex-col gap-3 rounded-xl border border-border/60 p-5">
                {(() => {
                  const rows = colorCounts(tournament.fieldDecks);
                  const max = Math.max(...rows.map((r) => r.count));
                  return rows.map((row) => (
                    <div key={row.color} className="flex items-center gap-3">
                      <div className="flex w-32 shrink-0 items-center gap-1.5 sm:w-40">
                        <span className={`h-3.5 w-3.5 shrink-0 rounded-full ${MANA_COLOR_CLASS[row.color]}`} />
                        <span className="truncate text-sm font-semibold text-foreground">
                          {row.label}
                        </span>
                      </div>
                      <div className="h-5 flex-1 overflow-hidden rounded-full bg-surface">
                        <div
                          className={`h-full rounded-full ${MANA_COLOR_CLASS[row.color]}`}
                          style={{ width: max > 0 ? `${(row.count / max) * 100}%` : "0%" }}
                        />
                      </div>
                      <span className="w-6 shrink-0 text-right text-sm font-bold text-foreground">
                        {row.count}
                      </span>
                    </div>
                  ));
                })()}
              </div>

              <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-muted">
                Por combinación de color
              </h3>
              <div className="glass mt-2 flex flex-col gap-3 rounded-xl border border-border/60 p-5">
                {(() => {
                  const rows = metagameBreakdown(tournament.fieldDecks);
                  const max = Math.max(...rows.map((r) => r.count));
                  return rows.map((row) => (
                    <div key={row.guild} className="flex items-center gap-3">
                      <div className="flex w-32 shrink-0 items-center gap-1.5 sm:w-40">
                        <ColorPips colors={row.colors} />
                        <span className="truncate text-sm font-semibold text-foreground">
                          {row.guild}
                        </span>
                      </div>
                      <div className="h-5 flex-1 overflow-hidden rounded-full bg-surface">
                        <div
                          className="h-full rounded-full bg-accent-gold"
                          style={{ width: `${(row.count / max) * 100}%` }}
                        />
                      </div>
                      <span className="w-6 shrink-0 text-right text-sm font-bold text-foreground">
                        {row.count}
                      </span>
                    </div>
                  ));
                })()}
              </div>

              {tournament.topCards && tournament.topCards.length > 0 && (
                <>
                  <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-muted">
                    Cartas más jugadas (sin tierras básicas)
                  </h3>
                  <div className="glass mt-2 flex flex-col gap-3 rounded-xl border border-border/60 p-5">
                    {(() => {
                      const max = Math.max(...tournament.topCards.map((c) => c.count));
                      return tournament.topCards.map((card) => (
                        <div key={card.name} className="flex items-center gap-3">
                          <span className="w-32 shrink-0 truncate text-sm font-semibold text-foreground sm:w-40">
                            {card.name}
                          </span>
                          <div className="h-5 flex-1 overflow-hidden rounded-full bg-surface">
                            <div
                              className={`h-full rounded-full ${
                                card.color
                                  ? MANA_COLOR_CLASS[card.color]
                                  : card.land
                                    ? "bg-[#8b6f47]"
                                    : "bg-muted"
                              }`}
                              style={{ width: `${(card.count / max) * 100}%` }}
                            />
                          </div>
                          <span className="w-6 shrink-0 text-right text-sm font-bold text-foreground">
                            {card.count}
                          </span>
                        </div>
                      ));
                    })()}
                  </div>
                </>
              )}

              {tournament.manaCurve && tournament.manaCurve.length > 0 && (
                <>
                  <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-muted">
                    Curva de maná
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">
                    Composición por Curva de Maná (incluyendo tierras)
                  </p>
                  <div className="glass mt-2 rounded-xl border border-border/60 p-5">
                    {(() => {
                      const bars: { label: string; value: number; land?: boolean }[] = [
                        ...tournament.manaCurve.map((p) => ({ label: p.cmc, value: p.avgPerDeck })),
                        ...(tournament.avgLandsPerDeck
                          ? [{ label: "Tierras", value: tournament.avgLandsPerDeck, land: true }]
                          : []),
                      ];
                      const max = Math.max(...bars.map((b) => b.value));
                      return (
                        <>
                          <div className="flex h-36 items-end gap-2 sm:gap-4">
                            {bars.map((bar) => (
                              <div
                                key={bar.label}
                                className="flex h-full flex-1 flex-col items-center justify-end gap-1.5"
                              >
                                <span className="text-xs font-bold text-foreground">
                                  {bar.value.toFixed(1)}
                                </span>
                                <div
                                  className={`w-full max-w-10 rounded-t-md ${bar.land ? "bg-[#8b6f47]" : "bg-accent-gold"}`}
                                  style={{ height: `${Math.max((bar.value / max) * 100, 3)}%` }}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 flex gap-2 sm:gap-4">
                            {bars.map((bar) => (
                              <span
                                key={bar.label}
                                className="flex-1 text-center text-xs font-semibold text-muted"
                              >
                                {bar.label}
                              </span>
                            ))}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </>
              )}
            </section>
          )}

          {/* Formato de la liga (torneos no finalizados) */}
          {tournament.status !== "finalizado" && tournament.format && (
            <section
              className={
                !tournament.jornadas && (tournament.champion || tournament.status === "en-curso")
                  ? "mt-10"
                  : ""
              }
            >
              <h2 className="text-xl font-bold text-foreground">
                Formato de la Liga
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="glass rounded-xl border border-border/60 p-4">
                  <IconCalendarStats className="h-5 w-5 text-accent-gold" strokeWidth={1.5} />
                  <p className="mt-2 text-lg font-bold text-foreground">
                    {tournament.format.jornadas} jornadas
                  </p>
                  <p className="text-xs text-muted">
                    Cuentan los {tournament.format.bestOf} mejores resultados
                  </p>
                </div>
                <div className="glass rounded-xl border border-border/60 p-4">
                  <IconClockHour4 className="h-5 w-5 text-accent-blue" strokeWidth={1.5} />
                  <p className="mt-2 text-sm font-bold text-foreground">Calendario</p>
                  <p className="text-xs text-muted">{tournament.format.schedule}</p>
                </div>
                <div className="glass rounded-xl border border-border/60 p-4">
                  <IconCoin className="h-5 w-5 text-accent-green" strokeWidth={1.5} />
                  <p className="mt-2 text-lg font-bold text-foreground">
                    {tournament.format.price} / jornada
                  </p>
                  <p className="text-xs text-muted">{tournament.format.priceBreakdown}</p>
                </div>
              </div>
            </section>
          )}

          {/* Jornadas de la liga */}
          {tournament.jornadas && tournament.jornadas.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-foreground">Jornadas</h2>
              <p className="mt-1 text-sm text-muted">
                Cada jornada es un mini-torneo aparte; sus puntos suman para la
                clasificación de la final de la liga.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {tournament.jornadas.map((jornada) => (
                  <div
                    key={jornada.number}
                    className="glass rounded-xl border border-border/60 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-bold text-foreground">
                        Jornada {jornada.number}
                      </span>
                      <span
                        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${STATUS_CLASS[jornada.status]}`}
                      >
                        {jornada.status === "en-curso" && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-red" />
                        )}
                        {STATUS_LABEL[jornada.status]}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                      <IconCalendarStats className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                      {jornada.dateLabel}
                    </div>
                    {jornada.champion ? (
                      <div className="mt-3 flex items-center gap-2 rounded-lg border border-accent-gold/25 bg-accent-gold/5 px-3 py-2">
                        <IconTrophy className="h-4 w-4 shrink-0 text-accent-gold" strokeWidth={1.75} />
                        <p className="min-w-0 text-xs text-foreground">
                          <span className="font-bold">{jornada.champion.player}</span>{" "}
                          <span className="text-muted">con</span>{" "}
                          <span className="font-semibold">{jornada.champion.commander}</span>
                        </p>
                      </div>
                    ) : (
                      jornada.status === "finalizado" && (
                        <p className="mt-3 text-xs text-muted">Resultados pendientes.</p>
                      )
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Reglas: siempre que existan, o placeholder mientras el torneo no haya terminado */}
          {(tournament.rulesSections || tournament.status !== "finalizado") && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-foreground">Reglas</h2>
              {tournament.rulesSections ? (
                <div className="mt-4 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tournament.rulesSections.map((section) => (
                    <div
                      key={section.title}
                      className="glass rounded-xl border border-border/60 p-5"
                    >
                      <h3 className="text-sm font-bold uppercase tracking-wide text-accent-gold">
                        {section.title}
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass mt-4 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
                  Próximamente.
                </div>
              )}
            </section>
          )}

          {tournament.announcementUrl && (
            <section className="mt-10">
              <a
                href={tournament.announcementUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent-gold hover:text-accent-gold"
              >
                Ver anuncio oficial
                <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
