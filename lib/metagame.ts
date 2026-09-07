export type ManaColor = "W" | "U" | "B" | "R" | "G";

export const MANA_COLOR_CLASS: Record<ManaColor, string> = {
  W: "bg-accent-gold",
  U: "bg-accent-blue",
  B: "bg-accent-purple",
  R: "bg-accent-red",
  G: "bg-accent-green",
};

const GUILD_NAMES: Record<string, string> = {
  "": "Incoloro",
  B: "Mono-Negro",
  G: "Mono-Verde",
  R: "Mono-Rojo",
  U: "Mono-Azul",
  W: "Mono-Blanco",
  UW: "Azorius",
  BU: "Dimir",
  BR: "Rakdos",
  GR: "Gruul",
  GW: "Selesnya",
  BW: "Orzhov",
  RU: "Izzet",
  BG: "Golgari",
  RW: "Boros",
  GU: "Simic",
  BUW: "Esper",
  BRU: "Grixis",
  BGR: "Jund",
  GRW: "Naya",
  GUW: "Bant",
  BGW: "Abzan",
  RUW: "Jeskai",
  BGU: "Sultai",
  BRW: "Mardu",
  GRU: "Temur",
  BGRUW: "Cinco Colores",
};

function colorKey(colors: ManaColor[]): string {
  return Array.from(new Set(colors)).sort().join("");
}

/** Nombre de la guilda/shard/wedge WUBRG a partir de la identidad de
 * color de un mazo (Esper, Simic, Jeskai...), para el pequeño rótulo
 * de color sobre cada comandante en las tarjetas de mazo. */
export function guildNameFor(colors: ManaColor[]): string {
  return GUILD_NAMES[colorKey(colors)] ?? "Multicolor";
}

/** Color de acento representativo de una identidad de color, priorizando
 * negro > rojo > verde > azul > blanco (los colores más "distintivos"
 * de la guilda, dejando blanco/azul para cuando son los únicos presentes). */
export function accentFor(
  colors: ManaColor[]
): "text-accent-gold" | "text-accent-blue" | "text-accent-purple" | "text-accent-red" | "text-accent-green" {
  if (colors.includes("B")) return "text-accent-purple";
  if (colors.includes("R")) return "text-accent-red";
  if (colors.includes("G")) return "text-accent-green";
  if (colors.includes("U")) return "text-accent-blue";
  return "text-accent-gold";
}

export type MetagameRow = {
  guild: string;
  colors: ManaColor[];
  count: number;
};

/** Agrupa una lista de mazos por identidad de color (guilda) y cuenta
 * cuántos hay de cada una, de mayor a menor — para el bloque de
 * Metajuego en la página de un torneo. */
export function metagameBreakdown(decks: { colorIdentity: ManaColor[] }[]): MetagameRow[] {
  const buckets = new Map<string, { colors: ManaColor[]; count: number }>();
  for (const deck of decks) {
    const key = colorKey(deck.colorIdentity);
    const existing = buckets.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      buckets.set(key, { colors: deck.colorIdentity, count: 1 });
    }
  }
  return Array.from(buckets.values())
    .map(({ colors, count }) => ({ guild: guildNameFor(colors), colors, count }))
    .sort((a, b) => b.count - a.count || a.guild.localeCompare(b.guild, "es"));
}
