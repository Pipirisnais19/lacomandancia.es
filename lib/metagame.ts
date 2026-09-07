export type ManaColor = "W" | "U" | "B" | "R" | "G";

export type DeckEntry = {
  commander: string;
  scryfallName: string;
  result: "Campeón" | "Top 4";
  player: string;
  colorIdentity: ManaColor[];
  guildName: string;
  colorAccent: "text-accent-gold" | "text-accent-blue" | "text-accent-purple" | "text-accent-red" | "text-accent-green";
  moxfieldUrl: string;
  /** Tope de presupuesto del torneo de origen (100, 20...). */
  cap: number;
};

export const DECKS: DeckEntry[] = [
  {
    commander: "Alela, Artful Provocateur",
    scryfallName: "Alela, Artful Provocateur",
    result: "Campeón",
    player: "Zordiark",
    colorIdentity: ["W", "U", "B"],
    guildName: "Esper",
    colorAccent: "text-accent-purple",
    moxfieldUrl: "https://moxfield.com/decks/6uefAdXRMHmM1C9PoYungQ",
    cap: 100,
  },
  {
    commander: "Omo, Queen of Vesuva",
    scryfallName: "Omo, Queen of Vesuva",
    result: "Top 4",
    player: "robercametome",
    colorIdentity: ["G", "U"],
    guildName: "Simic",
    colorAccent: "text-accent-green",
    moxfieldUrl: "https://moxfield.com/decks/6uefAW1daHGWgd8WBY74kA",
    cap: 100,
  },
  {
    commander: "Sokka, Tenacious Tactician",
    scryfallName: "Sokka, Tenacious Tactician",
    result: "Top 4",
    player: "otori",
    colorIdentity: ["R", "U", "W"],
    guildName: "Jeskai",
    colorAccent: "text-accent-red",
    moxfieldUrl: "https://moxfield.com/decks/6uefAQJ8CHul_r5zuJzfsw",
    cap: 100,
  },
  {
    commander: "Hope Estheim",
    scryfallName: "Hope Estheim",
    result: "Top 4",
    player: "RoyAwesome",
    colorIdentity: ["W", "U"],
    guildName: "Azorius",
    colorAccent: "text-accent-blue",
    moxfieldUrl: "https://moxfield.com/decks/6uefAavwH3aqyLKkItEX1Q",
    cap: 100,
  },
  {
    commander: "Vren, the Relentless",
    scryfallName: "Vren, the Relentless",
    result: "Campeón",
    player: "xa0s3nd3r",
    colorIdentity: ["U", "B"],
    guildName: "Dimir",
    colorAccent: "text-accent-purple",
    moxfieldUrl: "https://moxfield.com/decks/PXqgAW8ceX621NLn7wCSvg",
    cap: 20,
  },
  {
    commander: "Kutzil, Malamet Exemplar",
    scryfallName: "Kutzil, Malamet Exemplar",
    result: "Top 4",
    player: "Rinnegan",
    colorIdentity: ["W", "G"],
    guildName: "Selesnya",
    colorAccent: "text-accent-green",
    moxfieldUrl: "https://moxfield.com/decks/P3qgARIsrnuVPUnIrn3Tfg",
    cap: 20,
  },
];

export const MANA_COLOR_CLASS: Record<ManaColor, string> = {
  W: "bg-accent-gold",
  U: "bg-accent-blue",
  B: "bg-accent-purple",
  R: "bg-accent-red",
  G: "bg-accent-green",
};
