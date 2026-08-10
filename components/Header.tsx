"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Logo from "./Logo";

const WHATSAPP_URL = "https://chat.whatsapp.com/LXHM7cDECVUDUTxdvoCRpT";

export default function Header() {
  return (
    <header className="glass sticky top-0 z-50 border-b border-border/60">
      <div className="wubrg-gradient h-[3px] w-full" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo className="h-[41px] w-[41px]" />
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            LA COMANDANCIA
          </span>
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click")}
          aria-label="Únete por WhatsApp"
          className="flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-bold text-background shadow-lg shadow-accent-gold/20 transition-all hover:scale-[1.03] hover:bg-accent-gold-hover hover:shadow-accent-gold/40 active:scale-[0.98]"
        >
          <IconBrandWhatsapp className="h-5 w-5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Únete</span>
        </a>
      </div>
    </header>
  );
}
