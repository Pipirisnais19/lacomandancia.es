// Descarga y cachea localmente el arte de Scryfall que usa el sitio,
// para no depender de una llamada en vivo a Scryfall en cada visita.
//
// Uso: node scripts/fetch-card-images.mjs
// Volver a correrlo cada vez que se agregue un comandante nuevo a
// lib/tournaments.ts o lib/metagame.ts.

import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const CARD_NAMES = [
  "Alela, Artful Provocateur",
  "Omo, Queen of Vesuva",
  "Doctor Doom, King of Latveria",
  "Hope Estheim",
  "Vren, the Relentless",
  "Sokka, Tenacious Tactician",
  "Talion, the Kindly Lord",
  "Kadena, Slinking Sorcerer",
];

const VERSIONS = [
  { name: "art_crop", dir: "art" },
  { name: "border_crop", dir: "full" },
];

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const PUBLIC_DIR = path.join(process.cwd(), "public", "cards");

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchImage(name, version) {
  const url = `https://api.scryfall.com/cards/named?format=image&version=${version.name}&fuzzy=${encodeURIComponent(name)}`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${name} (${version.name})`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const dir = path.join(PUBLIC_DIR, version.dir);
  await mkdir(dir, { recursive: true });
  const filePath = path.join(dir, `${slugify(name)}.jpg`);
  await writeFile(filePath, buffer);
  return filePath;
}

async function main() {
  let downloaded = 0;
  let skipped = 0;

  for (const name of CARD_NAMES) {
    for (const version of VERSIONS) {
      const filePath = path.join(PUBLIC_DIR, version.dir, `${slugify(name)}.jpg`);
      if (existsSync(filePath)) {
        skipped++;
        continue;
      }
      try {
        await fetchImage(name, version);
        console.log(`✓ ${name} (${version.name})`);
        downloaded++;
        await sleep(400);
      } catch (err) {
        console.error(`✗ ${name} (${version.name}): ${err.message}`);
      }
    }
  }

  console.log(`\nListo. ${downloaded} descargadas, ${skipped} ya existían.`);
}

main();
