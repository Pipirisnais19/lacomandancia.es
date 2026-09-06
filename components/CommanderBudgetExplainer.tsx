import { IconCoin, IconCards, IconUsers } from "@tabler/icons-react";

const POINTS = [
  {
    icon: IconCoin,
    title: "Accesible",
    desc: "Mazos competitivos por menos de 100€.",
  },
  {
    icon: IconCards,
    title: "100% Cartas Reales",
    desc: "Sin proxies. Magic como debe jugarse.",
  },
  {
    icon: IconUsers,
    title: "Comunidad",
    desc: "Jugadores y tiendas en toda España.",
  },
];

export default function CommanderBudgetExplainer() {
  return (
    <section className="ambient-purple overflow-hidden border-b border-border bg-surface">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
          El Concepto
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
          ¿Qué significa Commander Budget?
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
          Que el presupuesto no decida quién puede sentarse a jugar. Mazos
          limitados a un tope real, 100% cartas auténticas, sin proxies — así
          cualquiera compite con las mismas reglas, sin necesitar una
          colección cara.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="glass flex items-start gap-3 rounded-xl border border-border/60 p-4"
            >
              <point.icon
                className="h-5 w-5 shrink-0 text-accent-gold"
                strokeWidth={1.75}
              />
              <div>
                <p className="text-sm font-bold text-foreground">{point.title}</p>
                <p className="mt-0.5 text-xs text-muted">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
