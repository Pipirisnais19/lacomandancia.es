import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-center border-b border-border pb-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-[41px] w-[41px]" />
            <span className="font-display text-lg font-bold tracking-wide text-foreground">
              LA COMANDANCIA
            </span>
          </Link>
        </div>

        <p className="mt-5 text-center text-[11px] text-muted">
          Datos y colaboradores: Panda Games · Cardmarket API · Moxfield
        </p>

        <p className="mt-3 text-center text-xs leading-relaxed text-muted">
          Magic: The Gathering es marca registrada de Wizards of the Coast.
          La Comandancia es un proyecto comunitario independiente no
          afiliado con Wizards of the Coast.
        </p>
      </div>
    </footer>
  );
}
