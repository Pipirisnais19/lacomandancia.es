import { describe, it, expect } from "vitest";
import { slugifyCardName, scryfallArtUrl, scryfallCardImageUrl } from "./scryfall";

describe("slugifyCardName", () => {
  it("lowercases and hyphenates", () => {
    expect(slugifyCardName("Alela, Artful Provocateur")).toBe("alela-artful-provocateur");
  });

  it("strips accents/diacritics", () => {
    expect(slugifyCardName("Señor Cárdenas")).toBe("senor-cardenas");
  });

  it("collapses repeated separators and trims leading/trailing hyphens", () => {
    expect(slugifyCardName("Doctor Doom, King of Latveria!!")).toBe(
      "doctor-doom-king-of-latveria"
    );
  });

  it("handles apostrophes", () => {
    expect(slugifyCardName("O'Brien's Test Card")).toBe("o-brien-s-test-card");
  });
});

describe("scryfallArtUrl / scryfallCardImageUrl", () => {
  it("builds a local cached art path", () => {
    expect(scryfallArtUrl("Hope Estheim")).toBe("/cards/art/hope-estheim.jpg");
  });

  it("builds a local cached full-card path", () => {
    expect(scryfallCardImageUrl("Hope Estheim")).toBe("/cards/full/hope-estheim.jpg");
  });
});
