import type { ManaColor } from "./metagame";

export type TopDeck = {
  tier: "top4" | "top8";
  commander: string;
  scryfallName: string;
  player?: string;
  moxfieldUrl?: string;
  colorIdentity: ManaColor[];
};

export type RulesSection = {
  title: string;
  items: string[];
};

export type LeagueFormat = {
  jornadas: number;
  bestOf: number;
  schedule: string;
  price: string;
  priceBreakdown: string;
};

export type Tournament = {
  slug: string;
  name: string;
  cap: number;
  venue: string;
  venueUrl?: string;
  announcementUrl?: string;
  dateLabel: string;
  dateISO?: string;
  participants?: number;
  status: "proximo" | "en-curso" | "finalizado";
  format?: LeagueFormat;
  rulesSections?: RulesSection[];
  champion?: TopDeck;
  top8?: TopDeck[];
};

export const TOURNAMENTS: Tournament[] = [
  {
    slug: "torneo-ultra-budget-20-panda-games",
    name: "Commander Ultrabudget 20€ — Asociación Vecinal Sural",
    cap: 20,
    venue: "Panda Games (Alcorcón)",
    venueUrl: "https://pandagames.es",
    announcementUrl: "https://www.instagram.com/p/Dbu7mOsjKX3/?igsh=aWpuZXdkcTd5aHIy",
    dateLabel: "Domingo 6 de septiembre de 2026",
    dateISO: "2026-09-06",
    status: "proximo",
    rulesSections: [
      {
        title: "Detalles del evento",
        items: [
          "Organiza la Asociación Vecinal Sural, en colaboración con Panda Games, como parte de las Fiestas Patronales de Alcorcón 2026.",
          "Inscripción: 3 €, el mismo día del torneo en tienda.",
          "3 rondas de 60 minutos, sin turnos extra.",
          "Multijugador en mesas de 3-4 personas.",
          "Puntuación por posición: 4-2-1-0.",
          "Premio en crédito de tienda para los primeros clasificados.",
        ],
      },
      {
        title: "Normas de construcción del mazo",
        items: [
          "20 € máximo por mazo (sin contar tierras básicas ni el comandante).",
          "Ninguna carta puede superar los 3 €.",
          "Precios de referencia en Moxfield.com.",
          "Se aplica la lista de prohibidas oficial de Commander multijugador, más un baneo propio del evento: Sergeant John Benton.",
          "Prohibidos los combos infinitos antes del turno 6.",
        ],
      },
      {
        title: "Inscripción",
        items: [
          "Imprescindible enviar la lista del mazo antes del día 5 de septiembre a avvsural@gmail.com.",
          "Dudas o consultas: por correo, redes sociales, o pasando por Panda Games (C.C. X-Madrid, planta alta).",
        ],
      },
    ],
  },
  {
    slug: "3a-liga-commander-budget-100-panda-games",
    name: "3ª Liga de Commander Budget 100€ — Panda Games",
    cap: 100,
    venue: "Panda Games (Alcorcón)",
    venueUrl: "https://pandagames.es",
    dateLabel: "Inicio: 12 de septiembre de 2026 (tentativa)",
    dateISO: "2026-09-12",
    status: "proximo",
    format: {
      jornadas: 8,
      bestOf: 4,
      schedule:
        "Los sábados, alternando mañana y tarde cada fin de semana (para que se pueda ir al menos a la mitad de las jornadas).",
      price: "5 €",
      priceBreakdown: "3 € a premios del día, 2 € al pool acumulado para la final.",
    },
    rulesSections: [
      {
        title: "Normas de construcción del mazo",
        items: [
          "100 € máximo por mazo (sin contar tierras básicas ni el comandante).",
          "No se puede jugar ninguna carta con un valor superior a 20 €.",
          "Se usa la versión más barata disponible de cada carta — no varía por edición o arte.",
          "Se aplica la lista de prohibidas oficial de Commander multijugador.",
          "Se usa Moxfield.com para comprobar el coste total del mazo (permite importar listas de otros sitios), con la opción de Cardmarket (MKM) en €.",
        ],
      },
      {
        title: "Estructura del evento",
        items: [
          "Multijugador en mesas de 3-4 personas.",
          "3 rondas de ~50 min + 5 turnos si es necesario.",
          "Puntuación por posición: 4-3-2-1 (en mesas de 3 jugadores: 4-3-2, para no penalizar).",
          "Si una ronda no termina, los puntos restantes se reparten equitativamente entre los jugadores que quedan, redondeando a la baja.",
        ],
      },
      {
        title: "Emparejamientos",
        items: [
          "Primera ronda: pairing aleatorio.",
          "Siguientes rondas: por orden de puntuación.",
        ],
      },
      {
        title: "Consideraciones extra",
        items: [
          "Nivel: Bracket 2/3. Se juega para ganar, pero también para pasarlo bien — no es un GP, ambiente relajado.",
          "Se pueden llevar Game Changers si el mazo cumple el budget y las normas de Bracket 3 (máximo 3).",
          "Fair play \"espíritu Bracket 3\": combar (carta A+B = victoria; maná/daño/vidas/criaturas/turnos extra infinitos) antes del turno 6 (todos los jugadores han jugado 6 turnos) está penalizado. Eliminar jugadores por infectar antes del turno 6 también. Penalización: último lugar en puntuación de la mesa (y un golpe de remo).",
        ],
      },
      {
        title: "Tips extra",
        items: [
          "Varianza de precio: si tu mazo pasó de 97 € a 105 €, no pasa nada. Si llega a 120 €, cambia cartas. Si una carta pasó de 5 € a 18 €, quizás toque quitarla.",
          "Deck check: se presupone la inocencia, pero si se ve que el mazo lleva demasiadas cartas caras (o a alguien se le escapa una de 40 €), se puede pedir revisión de precios.",
        ],
      },
    ],
  },
  {
    slug: "2a-liga-commander-budget-100-panda-games",
    name: "Final de 2da Liga Panda Games 100€",
    cap: 100,
    venue: "Panda Games (Alcorcón)",
    venueUrl: "https://pandagames.es",
    dateLabel: "Final: 9 de agosto de 2026",
    dateISO: "2026-08-09",
    participants: 55,
    status: "finalizado",
    champion: {
      tier: "top4",
      commander: "Alela, Artful Provocateur",
      scryfallName: "Alela, Artful Provocateur",
      player: "Zordiark",
      moxfieldUrl: "https://moxfield.com/decks/6uefAdXRMHmM1C9PoYungQ",
      colorIdentity: ["W", "U", "B"],
    },
    top8: [
      {
        tier: "top4",
        commander: "Omo, Queen of Vesuva",
        scryfallName: "Omo, Queen of Vesuva",
        player: "robercametome",
        moxfieldUrl: "https://moxfield.com/decks/6uefAW1daHGWgd8WBY74kA",
        colorIdentity: ["G", "U"],
      },
      {
        tier: "top8",
        commander: "Doctor Doom, King of Latveria",
        scryfallName: "Doctor Doom, King of Latveria",
        player: "KururuChan",
        moxfieldUrl: "https://moxfield.com/decks/6uefAUmwY3-3ZpRSTx4pDQ",
        colorIdentity: ["U", "B", "R"],
      },
      {
        tier: "top4",
        commander: "Hope Estheim",
        scryfallName: "Hope Estheim",
        player: "RoyAwesome",
        moxfieldUrl: "https://moxfield.com/decks/6uefAavwH3aqyLKkItEX1Q",
        colorIdentity: ["W", "U"],
      },
      {
        tier: "top8",
        commander: "Vren, the Relentless",
        scryfallName: "Vren, the Relentless",
        player: "Alruca",
        moxfieldUrl: "https://moxfield.com/decks/6uefAXWVc3mYn808JAzlNw",
        colorIdentity: ["B", "U"],
      },
      {
        tier: "top4",
        commander: "Sokka, Tenacious Tactician",
        scryfallName: "Sokka, Tenacious Tactician",
        player: "otori",
        moxfieldUrl: "https://moxfield.com/decks/6uefAQJ8CHul_r5zuJzfsw",
        colorIdentity: ["R", "U", "W"],
      },
      {
        tier: "top8",
        commander: "Talion, the Kindly Lord",
        scryfallName: "Talion, the Kindly Lord",
        player: "asnuke33",
        moxfieldUrl: "https://moxfield.com/decks/6uefAdE74HmUGk-mlU3fhg",
        colorIdentity: ["B", "U"],
      },
      {
        tier: "top8",
        commander: "Kadena, Slinking Sorcerer",
        scryfallName: "Kadena, Slinking Sorcerer",
        player: "SilvanoElLechuguero",
        moxfieldUrl: "https://moxfield.com/decks/C-ifAS-tv3-iqhHEHFw_lQ",
        colorIdentity: ["B", "G", "U"],
      },
    ],
    format: {
      jornadas: 8,
      bestOf: 4,
      schedule:
        "Los sábados, alternando mañana y tarde cada fin de semana (para que se pueda ir al menos a la mitad de las jornadas).",
      price: "5 €",
      priceBreakdown: "3 € a premios del día, 2 € al pool acumulado para la final.",
    },
    rulesSections: [
      {
        title: "Normas de construcción del mazo",
        items: [
          "100 € máximo por mazo (sin contar tierras básicas ni el comandante).",
          "No se puede jugar ninguna carta con un valor superior a 20 €.",
          "Se usa la versión más barata disponible de cada carta — no varía por edición o arte.",
          "Se aplica la lista de prohibidas oficial de Commander multijugador.",
          "Se usa Moxfield.com para comprobar el coste total del mazo (permite importar listas de otros sitios), con la opción de Cardmarket (MKM) en €.",
        ],
      },
      {
        title: "Estructura del evento",
        items: [
          "Multijugador en mesas de 3-4 personas.",
          "3 rondas de ~50 min + 5 turnos si es necesario.",
          "Puntuación por posición: 4-3-2-1 (en mesas de 3 jugadores: 4-3-2, para no penalizar).",
          "Si una ronda no termina, los puntos restantes se reparten equitativamente entre los jugadores que quedan, redondeando a la baja.",
        ],
      },
      {
        title: "Emparejamientos",
        items: [
          "Primera ronda: pairing aleatorio.",
          "Siguientes rondas: por orden de puntuación.",
        ],
      },
      {
        title: "Consideraciones extra",
        items: [
          "Nivel: Bracket 2/3. Se juega para ganar, pero también para pasarlo bien — no es un GP, ambiente relajado.",
          "Se pueden llevar Game Changers si el mazo cumple el budget y las normas de Bracket 3 (máximo 3).",
          "Fair play \"espíritu Bracket 3\": combar (carta A+B = victoria; maná/daño/vidas/criaturas/turnos extra infinitos) antes del turno 6 (todos los jugadores han jugado 6 turnos) está penalizado. Eliminar jugadores por infectar antes del turno 6 también. Penalización: último lugar en puntuación de la mesa (y un golpe de remo).",
        ],
      },
      {
        title: "Tips extra",
        items: [
          "Varianza de precio: si tu mazo pasó de 97 € a 105 €, no pasa nada. Si llega a 120 €, cambia cartas. Si una carta pasó de 5 € a 18 €, quizás toque quitarla.",
          "Deck check: se presupone la inocencia, pero si se ve que el mazo lleva demasiadas cartas caras (o a alguien se le escapa una de 40 €), se puede pedir revisión de precios.",
        ],
      },
    ],
  },
];

export function getTournamentBySlug(slug: string): Tournament | undefined {
  return TOURNAMENTS.find((t) => t.slug === slug);
}
