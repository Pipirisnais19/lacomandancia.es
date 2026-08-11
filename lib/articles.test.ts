import { describe, it, expect } from "vitest";
import { ARTICLES, getArticleBySlug, getRecentArticles, formatArticleDate } from "./articles";

describe("getArticleBySlug", () => {
  it("finds an existing article", () => {
    expect(getArticleBySlug("que-es-commander")?.tag).toBe("Reglas");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getArticleBySlug("no-existe")).toBeUndefined();
  });
});

describe("ARTICLES data integrity", () => {
  it("has no duplicate slugs", () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every article's updatedAt is on or after its publishedAt", () => {
    for (const a of ARTICLES) {
      expect(a.updatedAt >= a.publishedAt, `${a.slug} updatedAt before publishedAt`).toBe(true);
    }
  });
});

describe("getRecentArticles", () => {
  it("sorts by publishedAt descending", () => {
    const sorted = getRecentArticles();
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i - 1].publishedAt >= sorted[i].publishedAt).toBe(true);
    }
  });

  it("respects the count argument", () => {
    expect(getRecentArticles(2)).toHaveLength(2);
  });
});

describe("formatArticleDate", () => {
  it("formats an ISO date in Spanish, long form", () => {
    expect(formatArticleDate("2026-08-09")).toBe("9 de agosto de 2026");
  });
});
