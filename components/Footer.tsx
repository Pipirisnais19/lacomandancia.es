import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "Torneos", href: "/torneos" },
  { label: "Mazos", href: "/mazos" },
  { label: "Artículos", href: "/articulos" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 border-b border-border pb-6 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt="La Comandancia"
              width={41}
              height={41}
              className="h-[41px] w-[41px]"
            />
            <span className="font-display text-lg font-bold tracking-wide text-foreground">
              LA COMANDANCIA
            </span>
          </Link>

          <div className="flex items-center gap-5">
            {LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-muted transition-colors hover:text-accent-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-muted">
          Magic: The Gathering es marca registrada de Wizards of the Coast.
          La Comandancia es un proyecto comunitario independiente no
          afiliado con Wizards of the Coast.
        </p>

        <div className="mt-3 flex justify-center">
          <Link
            href="/privacidad"
            className="text-[11px] text-muted/70 transition-colors hover:text-accent-gold"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
