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
import { MANA_COLOR_CLASS, type ManaColor } from "@/lib/metagame";

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
  const description = `${tournament.name} — ${tournament.venue}. ${tournament.dateLabel}.`;
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

  const eventJsonLd = tournament.dateISO
    ? {
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        name: tournament.name,
        startDate: tournament.dateISO,
        eventStatus: "https://schema.org/EventScheduled",
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
      {eventJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      )}
      <main className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_20%_0%,rgba(255,87,87,0.18),transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 py-7 sm:px-6 lg:px-8">
            <Link
              href="/#resultados"
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

        <div className="mx-auto max-w-4xl px-4 py-7 sm:px-6 lg:px-8">
          {(tournament.champion || tournament.status === "en-curso") && (
            <>
          {/* Campeón */}
          <section>
            <h2 className="text-xl font-bold text-foreground">Mazo Campeón</h2>
            {tournament.champion ? (
              <div className="gradient-border glass glow-border group relative mt-4 overflow-hidden rounded-2xl">
                <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-accent-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-background">
                  <IconTrophy className="h-3.5 w-3.5" strokeWidth={2.25} />
                  Campeón
                </div>
                <div className="relative h-56 w-full overflow-hidden bg-surface">
                  <Image
                    src={scryfallArtUrl(tournament.champion.scryfallName)}
                    alt={tournament.champion.commander}
                    fill
                    priority
                    sizes="(min-width: 1024px) 896px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
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
                    <a
                      href={tournament.champion.moxfieldUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent-gold hover:text-accent-gold"
                    >
                      Ver Mazo en Moxfield
                      <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="glass mt-4 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
                {tournament.status === "en-curso"
                  ? "La final se está jugando ahora mismo — el mazo campeón se publica al terminar."
                  : "Resultados pendientes."}
              </div>
            )}
          </section>

          {/* Top 8 */}
          <section className="mt-10">
            {tournament.top8 && tournament.top8.length > 0 ? (
              <>
                {tournament.top8.some((d) => d.tier === "top4") && (
                  <div>
                    <div className="flex flex-col gap-3">
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
                              <a
                                href={deck.moxfieldUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-muted transition-colors hover:text-accent-gold"
                                aria-label={`Ver ${deck.commander} en Moxfield`}
                              >
                                <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
                              </a>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {tournament.top8.some((d) => d.tier === "top8") && (
                  <div className="mt-6">
                    <div className="flex flex-col gap-3">
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
                              <a
                                href={deck.moxfieldUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-muted transition-colors hover:text-accent-gold"
                                aria-label={`Ver ${deck.commander} en Moxfield`}
                              >
                                <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
                              </a>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="glass mt-4 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
                Resultados pendientes — vuelve pronto.
              </div>
            )}
          </section>
            </>
          )}

          {/* Formato de la liga (torneos no finalizados) */}
          {tournament.status !== "finalizado" && tournament.format && (
            <section className={tournament.champion || tournament.status === "en-curso" ? "mt-10" : ""}>
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

          {/* Reglas (torneos no finalizados) */}
          {tournament.status !== "finalizado" && tournament.rulesSections && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-foreground">Reglas</h2>
              <div className="mt-4 flex flex-col gap-6">
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
