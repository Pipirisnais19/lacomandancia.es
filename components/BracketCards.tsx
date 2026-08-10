import { BRACKETS } from "@/lib/commanderRules";

export default function BracketCards() {
  return (
    <div className="flex flex-col gap-3">
      {BRACKETS.map((b) => (
        <div
          key={b.n}
          className="glass glow-border-hover flex flex-col gap-3 rounded-xl border border-border/60 p-5 transition-colors sm:flex-row sm:items-center sm:gap-5"
        >
          <div className="flex shrink-0 items-center gap-3 sm:w-56">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current text-base font-bold ${b.color}`}
            >
              {b.n}
            </span>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-wide ${b.color}`}>
                Bracket {b.n}
              </p>
              <h4 className="text-sm font-bold text-foreground">{b.name}</h4>
            </div>
          </div>

          <p className="flex-1 text-sm leading-relaxed text-muted">{b.desc}</p>

          <div className="flex shrink-0 gap-1 sm:w-32">
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
