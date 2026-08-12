"use client";

import Link from "next/link";
import Image from "next/image";
import { track } from "@vercel/analytics";
import { IconBrandInstagram } from "@tabler/icons-react";

const INSTAGRAM_URL = "https://www.instagram.com/lacomandancia.es";

export default function Header() {
  return (
    <header className="glass sticky top-0 z-50 border-b border-border/60">
      <a
        href="#contenido"
        className="sr-only rounded-lg bg-accent-gold px-4 py-2 text-sm font-bold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Saltar al contenido
      </a>
      <div className="wubrg-gradient h-[3px] w-full" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo-mark.png"
            alt="La Comandancia"
            width={41}
            height={41}
            className="h-[41px] w-[41px]"
            priority
          />
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            LA COMANDANCIA
          </span>
        </Link>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("instagram_click")}
          aria-label="Síguenos en Instagram"
          className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-bold text-background shadow-lg shadow-accent-gold/20 transition-all hover:scale-[1.03] hover:bg-accent-gold-hover hover:shadow-accent-gold/40 active:scale-[0.98]"
        >
          <IconBrandInstagram className="h-5 w-5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Síguenos</span>
        </a>
      </div>
    </header>
  );
}
