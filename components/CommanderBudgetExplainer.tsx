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
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          Que el presupuesto no decida quién puede sentarse a jugar.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="glass flex flex-col items-center gap-1.5 rounded-xl border border-border/60 p-3 text-center sm:flex-row sm:items-start sm:gap-3 sm:p-4 sm:text-left"
            >
              <point.icon
                className="h-5 w-5 shrink-0 text-accent-gold"
                strokeWidth={1.75}
              />
              <div>
                <p className="text-xs font-bold leading-tight text-foreground sm:text-sm">
                  {point.title}
                </p>
                <p className="mt-0.5 hidden text-xs text-muted sm:block">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
