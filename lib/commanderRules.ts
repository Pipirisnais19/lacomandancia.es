import {
  IconCards,
  IconPalette,
  IconCoins,
  IconHeart,
  type Icon,
} from "@tabler/icons-react";

export type Rule = {
  icon: Icon;
  title: string;
  desc: string;
};

export const RULES: Rule[] = [
  {
    icon: IconCards,
    title: "100 cartas, singleton",
    desc: "99 cartas + 1 comandante. Solo una copia de cada carta, excepto tierras básicas.",
  },
  {
    icon: IconPalette,
    title: "Identidad de color",
    desc: "Todas las cartas del mazo deben usar solo los símbolos de maná que aparecen en tu comandante.",
  },
  {
    icon: IconCoins,
    title: "Impuesto de comandante",
    desc: "Cada vez que lanzas tu comandante desde la zona de mando, cuesta 2 maná genérico más.",
  },
  {
    icon: IconHeart,
    title: "40 de vida",
    desc: "Partidas de 3-5 jugadores. 21 puntos de daño de combate de un mismo comandante eliminan a un jugador.",
  },
];

export type Bracket = {
  n: number;
  name: string;
  desc: string;
  color: string;
};

export const BRACKETS: Bracket[] = [
  {
    n: 1,
    name: "Exhibición",
    desc: "Mazos ultra-casuales centrados en un tema o historia por encima del poder. No se permiten cartas Game Changer.",
    color: "text-accent-green",
  },
  {
    n: 2,
    name: "Básico",
    desc: "Mazos sencillos y sin optimizar, pensados para partidas relajadas. Tampoco permite Game Changers.",
    color: "text-accent-blue",
  },
  {
    n: 3,
    name: "Mejorado",
    desc: "Mazos con sinergias más fuertes y algo de optimización. Permite hasta 3 cartas Game Changer.",
    color: "text-accent-gold",
  },
  {
    n: 4,
    name: "Optimizado",
    desc: "Máximo nivel de poder sin llegar a cEDH. Sin restricciones de cartas Game Changer.",
    color: "text-accent-red",
  },
  {
    n: 5,
    name: "cEDH",
    desc: "Mazos afinados al máximo para torneos competitivos: metagame, combos y velocidad por encima de todo.",
    color: "text-accent-purple",
  },
];
