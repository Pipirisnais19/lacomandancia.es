import { IconUsers, IconTrophy, IconCards, IconChartBar } from "@tabler/icons-react";

const STATS = [
  { icon: IconUsers, value: "7.800+", label: "Jugadores" },
  { icon: IconTrophy, value: "1.200+", label: "Torneos" },
  { icon: IconCards, value: "12.500+", label: "Mazos" },
  { icon: IconChartBar, value: "38.000+", label: "Partidas Registradas" },
];

export default function StatsShowcase() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted">
          Ejemplo — así se verá La Comandancia con la comunidad activa
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl border border-border/60 px-4 py-5 text-center"
            >
              <stat.icon className="mx-auto h-5 w-5 text-accent-gold" strokeWidth={1.5} />
              <p className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                {stat.value}
              </p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
