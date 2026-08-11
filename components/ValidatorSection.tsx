import { IconCoin, IconRefresh, IconBolt } from "@tabler/icons-react";
import ValidatorBox from "./ValidatorBox";

const TRUST_POINTS = [
  { icon: IconCoin, label: "Precios en Cardmarket EUR" },
  { icon: IconRefresh, label: "Filtro Update to Cheapest" },
  { icon: IconBolt, label: "Resultado al instante" },
];

export default function ValidatorSection() {
  return (
    <section id="validador" className="ambient-gold overflow-hidden border-b border-border bg-background">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Herramienta
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              ¿Tu mazo entra en 100€?
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
              Pega tu lista de Moxfield y te decimos al instante si cumple el
              cap de la liga, con precio estimado en Cardmarket.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {TRUST_POINTS.map((point) => (
                <li key={point.label} className="flex items-center gap-2.5 text-sm text-muted">
                  <point.icon className="h-4 w-4 shrink-0 text-accent-gold" strokeWidth={1.75} />
                  {point.label}
                </li>
              ))}
            </ul>
          </div>

          <ValidatorBox />
        </div>
      </div>
    </section>
  );
}
