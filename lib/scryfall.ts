export function scryfallArtUrl(name: string): string {
  return `https://api.scryfall.com/cards/named?format=image&version=art_crop&fuzzy=${encodeURIComponent(
    name
  )}`;
}
