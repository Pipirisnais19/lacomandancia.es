import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "La Comandancia — El Hogar del Commander Budget en España",
    short_name: "La Comandancia",
    description:
      "Torneos, mazos, metajuego y comunidad de Commander Budget en España.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0b0a",
    theme_color: "#0d0b0a",
    lang: "es-ES",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
