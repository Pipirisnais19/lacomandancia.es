import { describe, it, expect } from "vitest";
import { TOURNAMENTS, getTournamentBySlug, getAllDecks } from "./tournaments";

describe("getTournamentBySlug", () => {
  it("finds an existing tournament by slug", () => {
    const t = getTournamentBySlug("2a-liga-commander-budget-100-panda-games");
    expect(t?.name).toBe("Final de 2da Liga Panda Games 100€");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getTournamentBySlug("no-existe")).toBeUndefined();
  });
});

describe("TOURNAMENTS data integrity", () => {
  it("has no duplicate slugs", () => {
    const slugs = TOURNAMENTS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every finalizado tournament has a champion", () => {
    for (const t of TOURNAMENTS.filter((t) => t.status === "finalizado")) {
      expect(t.champion, `${t.slug} should have a champion`).toBeDefined();
    }
  });
});

describe("getAllDecks", () => {
  it("includes the champion and top8 decks of finished tournaments", () => {
    const decks = getAllDecks();
    const finished = TOURNAMENTS.find(
      (t) => t.slug === "2a-liga-commander-budget-100-panda-games"
    )!;
    const fromThisTournament = decks.filter((d) => d.tournamentSlug === finished.slug);

    // champion + 7 top8 entries
    expect(fromThisTournament.length).toBe(1 + (finished.top8?.length ?? 0));
  });

  it("marks the champion result as Campeón", () => {
    const decks = getAllDecks();
    const champion = decks.find(
      (d) => d.tournamentSlug === "2a-liga-commander-budget-100-panda-games" && d.result === "Campeón"
    );
    expect(champion?.commander).toBe("Alela, Artful Provocateur");
  });

  it("does not include decks from tournaments with no results yet", () => {
    const decks = getAllDecks();
    const upcoming = TOURNAMENTS.filter((t) => t.status === "proximo").map((t) => t.slug);
    expect(decks.some((d) => upcoming.includes(d.tournamentSlug))).toBe(false);
  });
});
