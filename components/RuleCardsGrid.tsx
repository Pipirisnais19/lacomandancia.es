import { RULES } from "@/lib/commanderRules";

export default function RuleCardsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {RULES.map((rule) => (
        <div
          key={rule.title}
          className="glass glow-border rounded-xl border border-border/60 p-5"
        >
          <rule.icon className="h-6 w-6 text-accent-gold" strokeWidth={1.5} />
          <h3 className="mt-3 text-sm font-bold text-foreground">{rule.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted">{rule.desc}</p>
        </div>
      ))}
    </div>
  );
}
