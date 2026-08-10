export function slugifyCardName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Imágenes cacheadas localmente en build-time (ver scripts/fetch-card-images.mjs)
// en vez de pedirlas a Scryfall en cada visita.
export function scryfallArtUrl(name: string): string {
  return `/cards/art/${slugifyCardName(name)}.jpg`;
}

export function scryfallCardImageUrl(name: string): string {
  return `/cards/full/${slugifyCardName(name)}.jpg`;
}
