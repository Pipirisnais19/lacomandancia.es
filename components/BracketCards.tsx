import { BRACKETS } from "@/lib/commanderRules";

export default function BracketCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {BRACKETS.map((b) => (
        <div
          key={b.n}
          className="glass glow-border-hover flex flex-col rounded-xl border border-border/60 p-5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current text-sm font-bold ${b.color}`}
            >
              {b.n}
            </span>
            <span className={`text-xs font-bold uppercase tracking-wide ${b.color}`}>
              Bracket {b.n}
            </span>
          </div>
          <h4 className="mt-3 text-base font-bold text-foreground">{b.name}</h4>
          <p className="mt-1 flex-1 text-xs leading-relaxed text-muted">{b.desc}</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${
                  i < b.n ? "bg-current " + b.color : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
