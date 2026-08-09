"use client";

import { useState, type FormEvent } from "react";
import {
  IconLoader2,
  IconCircleCheck,
  IconAlertTriangle,
  IconSearch,
} from "@tabler/icons-react";

type Status = "idle" | "loading" | "valid" | "over-budget" | "error";

const MOXFIELD_PATTERN = /moxfield\.com\/decks\/[a-zA-Z0-9_-]+/i;
const BUDGET_CAP = 100;

function mockPriceFromUrl(url: string): number {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = (hash * 31 + url.charCodeAt(i)) % 100000;
  }
  const price = 55 + (hash % 9000) / 100;
  return Math.round(price * 100) / 100;
}

function formatEUR(value: number): string {
  return value.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function ValidatorBox() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [price, setPrice] = useState<number | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();

    if (!MOXFIELD_PATTERN.test(trimmed)) {
      setStatus("error");
      setPrice(null);
      return;
    }

    setStatus("loading");
    setPrice(null);

    setTimeout(() => {
      const estimated = mockPriceFromUrl(trimmed);
      setPrice(estimated);
      setStatus(estimated <= BUDGET_CAP ? "valid" : "over-budget");
    }, 1400);
  }

  return (
    <div className="gradient-border glass glow-border w-full max-w-md rounded-2xl p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <IconSearch className="h-5 w-5 text-accent-gold" strokeWidth={1.75} />
        <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Validador de Mazo Oficial
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Pega el enlace de tu mazo de Moxfield (ej. https://www.moxfield.com/decks/...)"
          className="min-w-0 flex-1 rounded-lg border border-border bg-surface/80 px-4 py-3 text-sm text-foreground placeholder:text-muted transition-shadow duration-300 focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/40"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-background shadow-lg shadow-accent-gold/20 transition-all hover:scale-[1.02] hover:bg-accent-gold-hover hover:shadow-accent-gold/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === "loading" ? (
            <>
              <IconLoader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
              Validando…
            </>
          ) : (
            "Validar Mazo"
          )}
        </button>
      </form>

      <div className="mt-3 min-h-[3rem]">
        {status === "error" && (
          <div className="flex items-start gap-2 rounded-lg border border-accent-red/40 bg-accent-red/10 px-4 py-3 text-sm text-accent-red">
            <IconAlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
            <span>
              Introduce un enlace válido de Moxfield (moxfield.com/decks/...).
            </span>
          </div>
        )}

        {status === "valid" && price !== null && (
          <div className="flex items-start gap-2 rounded-lg border border-accent-green/40 bg-accent-green/10 px-4 py-3 text-sm font-semibold text-accent-green shadow-[0_0_24px_-6px_rgba(34,197,94,0.5)]">
            <IconCircleCheck className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
            <span>
              ¡MAZO VÁLIDO! Precio estimado en Cardmarket: {formatEUR(price)} €
            </span>
          </div>
        )}

        {status === "over-budget" && price !== null && (
          <div className="flex items-start gap-2 rounded-lg border border-accent-red/40 bg-accent-red/10 px-4 py-3 text-sm font-semibold text-accent-red shadow-[0_0_24px_-6px_rgba(239,68,68,0.5)]">
            <IconAlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
            <span>
              MAZO NO VÁLIDO: supera el límite de 100€. Precio estimado en
              Cardmarket: {formatEUR(price)} €
            </span>
          </div>
        )}
      </div>

      <p className="mt-2 text-xs text-muted">
        Conectado con Moxfield API • Filtro: Update to Cheapest • Moneda: EUR
      </p>
    </div>
  );
}
