import Link from "next/link";
import Logo from "./Logo";

const LINKS = [{ label: "Sobre Nosotros", href: "/sobre-nosotros" }];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 border-b border-border pb-6 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-[41px] w-[41px]" />
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
      </div>
    </footer>
  );
}
