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
