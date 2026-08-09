import { IconExternalLink, IconTrophy } from "@tabler/icons-react";
import { scryfallArtUrl } from "@/lib/scryfall";
import { DECKS, MANA_COLOR_CLASS } from "@/lib/metagame";

export default function MetagameGrid() {
  const [featured, ...rest] = DECKS;

  return (
    <section id="metajuego" className="ambient-blue overflow-hidden border-b border-border bg-background">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Metajuego Destacado
        </h2>

        <div className="mt-6 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-2">
          <article className="gradient-border glass glow-border-hover group relative overflow-hidden rounded-2xl hover:border-accent-gold/50 lg:col-span-2 lg:row-span-2">
            <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-accent-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-background">
              <IconTrophy className="h-3.5 w-3.5" strokeWidth={2.25} />
              Campeón
            </div>
            <div className="relative h-64 w-full overflow-hidden bg-surface sm:h-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={scryfallArtUrl(featured.scryfallName)}
                alt={featured.commander}
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card via-card/60 to-transparent" />
            </div>
            <div className="p-6">
              <p className={`text-xs font-semibold uppercase tracking-wide ${featured.colorAccent}`}>
                {featured.guildName}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-foreground">
                {featured.commander}
              </h3>

              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted">Resultado</p>
                  <p className="text-lg font-bold text-accent-gold">{featured.result}</p>
                </div>
                <div>
                  <p className="text-muted">Jugador</p>
                  <p className="text-lg font-bold text-foreground">{featured.player}</p>
                </div>
                <div>
                  <p className="text-muted">Colores</p>
                  <div className="mt-1.5 flex gap-1.5">
                    {featured.colorIdentity.map((c) => (
                      <span key={c} className={`h-3.5 w-3.5 rounded-full ${MANA_COLOR_CLASS[c]}`} />
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={featured.moxfieldUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent-gold hover:text-accent-gold"
              >
                Ver Mazo en Moxfield
                <IconExternalLink className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:contents">
            {rest.map((deck) => (
              <article
                key={deck.commander}
                className="glass glow-border-hover group flex overflow-hidden rounded-2xl border border-border/60 hover:border-accent-gold/50"
              >
                <div className="relative w-28 shrink-0 overflow-hidden bg-surface min-[480px]:w-24 sm:w-36">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={scryfallArtUrl(deck.scryfallName)}
                    alt={deck.commander}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/70" />
                </div>

                <div className="flex flex-1 flex-col justify-center p-4">
                  <p className={`text-[11px] font-semibold uppercase tracking-wide ${deck.colorAccent}`}>
                    {deck.guildName}
                  </p>
                  <h3 className="mt-0.5 text-sm font-bold leading-snug text-foreground">
                    {deck.commander}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                    <span className="font-bold text-accent-gold">{deck.result}</span>
                    <span className="text-muted">{deck.player}</span>
                    <span className="flex gap-1">
                      {deck.colorIdentity.map((c) => (
                        <span key={c} className={`h-2.5 w-2.5 rounded-full ${MANA_COLOR_CLASS[c]}`} />
                      ))}
                    </span>
                  </div>

                  <a
                    href={deck.moxfieldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-accent-gold"
                  >
                    Ver en Moxfield
                    <IconExternalLink className="h-3 w-3" strokeWidth={2} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
