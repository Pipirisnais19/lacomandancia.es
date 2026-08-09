import { IconSwords, IconBan, IconExternalLink } from "@tabler/icons-react";

export default function GameChangersBanList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="glass glow-border rounded-xl border border-border/60 p-6">
        <div className="flex items-center gap-2 text-accent-gold">
          <IconSwords className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-xs font-bold uppercase tracking-wide">
            Cartas Decisivas
          </span>
        </div>
        <p className="mt-2 text-sm text-muted">
          Las <span className="text-foreground">Game Changers</span> son una
          lista de 53 cartas muy poderosas mantenida por Wizards of the
          Coast. No están prohibidas, pero sí limitadas por bracket: vetadas
          en 1 y 2, hasta 3 copias distintas en el 3, y sin límite en 4 y 5.
        </p>
        <a
          href="https://magic.wizards.com/es/formats/commander"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-gold hover:underline"
        >
          Ver lista completa
          <IconExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>

      <div className="glass glow-border rounded-xl border border-border/60 p-6">
        <div className="flex items-center gap-2 text-accent-red">
          <IconBan className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-xs font-bold uppercase tracking-wide">
            Lista de Prohibidas
          </span>
        </div>
        <p className="mt-2 text-sm text-muted">
          Además de los brackets, existe una lista de cartas completamente
          prohibidas en Commander (Black Lotus, Ancestral Recall, Time
          Walk...). Se actualiza periódicamente, así que consulta siempre la
          fuente oficial.
        </p>
        <a
          href="https://magic.wizards.com/es/banned-restricted-list"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-red hover:underline"
        >
          Ver lista oficial
          <IconExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
