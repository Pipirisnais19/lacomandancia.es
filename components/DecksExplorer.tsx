"use client";

import { useState } from "react";
import { IconExternalLink, IconSearch, IconX } from "@tabler/icons-react";
import { scryfallCardImageUrl } from "@/lib/scryfall";
import { MANA_COLOR_CLASS, type ManaColor } from "@/lib/metagame";
import type { DeckRecord } from "@/lib/tournaments";

const COLORS: ManaColor[] = ["W", "U", "B", "R", "G"];

const DATE_RANGES = [
  { value: "todas", label: "Todas", days: null },
  { value: "30", label: "Últimos 30 días", days: 30 },
  { value: "90", label: "Últimos 90 días", days: 90 },
  { value: "365", label: "Último año", days: 365 },
] as const;

const BADGE_CLASS: Record<DeckRecord["result"], string> = {
  Campeón: "bg-accent-gold text-background",
  "Top 4": "bg-accent-blue text-background",
  "Top 8": "bg-card/90 text-foreground border border-border",
};

export default function DecksExplorer({ decks }: { decks: DeckRecord[] }) {
  const [colors, setColors] = useState<ManaColor[]>([]);
  const [dateRange, setDateRange] = useState<string>("todas");
  const [query, setQuery] = useState("");

  function toggleColor(c: ManaColor) {
    setColors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  const selectedRange = DATE_RANGES.find((r) => r.value === dateRange);

  const filtered = decks
    .filter((d) => {
      if (colors.length > 0 && !colors.every((c) => d.colorIdentity.includes(c))) return false;
      if (selectedRange?.days) {
        if (!d.dateISO) return false;
        const deckDate = new Date(d.dateISO);
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - selectedRange.days);
        if (deckDate < cutoff) return false;
      }
      if (query.trim() && !d.commander.toLowerCase().includes(query.trim().toLowerCase()))
        return false;
      return true;
    })
    .sort((a, b) => a.commander.localeCompare(b.commander, "es"));

  const hasActiveFilters = colors.length > 0 || dateRange !== "todas" || query.trim() !== "";

  function clearFilters() {
    setColors([]);
    setDateRange("todas");
    setQuery("");
  }

  return (
    <div>
      <div className="glass flex flex-col gap-4 rounded-2xl border border-border/60 p-5">
        <div className="relative">
          <IconSearch
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            strokeWidth={1.75}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por comandante..."
            className="w-full rounded-lg border border-border bg-surface/80 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Colores
            </span>
            <div className="flex gap-1.5">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleColor(c)}
                  aria-pressed={colors.includes(c)}
                  aria-label={`Filtrar por color ${c}`}
                  className={`h-6 w-6 rounded-full transition-all ${MANA_COLOR_CLASS[c]} ${
                    colors.includes(c)
                      ? "ring-2 ring-foreground ring-offset-2 ring-offset-card"
                      : "opacity-40 hover:opacity-70"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Fecha
            </span>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-xs font-semibold text-foreground focus:border-accent-gold focus:outline-none"
            >
              {DATE_RANGES.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-accent-gold"
            >
              <IconX className="h-3.5 w-3.5" strokeWidth={2} />
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted">
        {filtered.length} {filtered.length === 1 ? "mazo" : "mazos"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((d, i) => (
            <div
              key={`${d.tournamentSlug}-${d.commander}-${i}`}
              className="glass glow-border-hover group flex flex-col overflow-hidden rounded-2xl border border-border/60 hover:border-accent-gold/50"
            >
              <div className="relative aspect-[488/680] w-full overflow-hidden bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={scryfallCardImageUrl(d.scryfallName)}
                  alt={d.commander}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide shadow-sm ${BADGE_CLASS[d.result]}`}
                >
                  {d.result}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3">
                <h3 className="text-sm font-bold leading-snug text-foreground">
                  {d.commander}
                </h3>
                <div className="mt-1 flex items-center gap-1">
                  {d.colorIdentity.map((c) => (
                    <span key={c} className={`h-2 w-2 rounded-full ${MANA_COLOR_CLASS[c]}`} />
                  ))}
                </div>
                {d.player && (
                  <p className="mt-1.5 truncate text-xs text-muted">{d.player}</p>
                )}
                <p className="mt-0.5 truncate text-[11px] text-muted/70">
                  {d.dateLabel}
                </p>

                {d.moxfieldUrl && (
                  <a
                    href={d.moxfieldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-gold transition-colors hover:underline"
                  >
                    Ver en Moxfield
                    <IconExternalLink className="h-3 w-3" strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass mt-4 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted">
          Ningún mazo coincide con esos filtros.
        </div>
      )}
    </div>
  );
}
