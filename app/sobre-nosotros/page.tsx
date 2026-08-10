import type { Metadata } from "next";
import { IconExternalLink, IconBrandInstagram, IconMail } from "@tabler/icons-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COLLABORATORS } from "@/lib/collaborators";

export const metadata: Metadata = {
  title: "Sobre Nosotros | La Comandancia",
  description:
    "Cómo nació La Comandancia, la comunidad de Commander Budget más accesible de España, y quién la hace posible: tiendas, asociaciones y colaboradores.",
};

const CONTACT_EMAIL = "lacomandancia.es@gmail.com";

export default function SobreNosotrosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(227,195,79,0.22),transparent)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              El Proyecto
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sobre La Comandancia
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Cómo nació la comunidad de Commander Budget más accesible de
              España, y quién la hace posible.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            <span className="text-foreground">La Comandancia</span> es un
            proyecto que recién está empezando — todavía no hemos organizado
            nuestro primer torneo. De momento damos visibilidad a los
            torneos y ligas de Commander Budget que ya existen, empezando
            por las que organiza Panda Games en Alcorcón: mazos limitados a
            100€, pensados para que cualquiera pudiera sentarse a jugar sin
            necesitar una colección cara. La 2ª Liga cerró con 55
            participantes en 8 jornadas, y ya viene la 3ª.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            La idea sigue siendo simple:{" "}
            <span className="text-foreground">
              más jugadores, mazos honestos
            </span>{" "}
            (100% carta real, sin proxies) y un lugar donde encontrar
            torneos, resultados reales y mazos de referencia sin tener que
            reconstruirlo todo desde cero cada vez.
          </p>

          <h2 className="mt-12 text-xl font-bold text-foreground">
            Colaboradores
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {COLLABORATORS.map((c) => (
              <div
                key={c.name}
                className="glass glow-border-hover rounded-2xl border border-border/60 p-6"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-accent-gold">
                  {c.role}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent-gold hover:text-accent-gold"
                    >
                      Sitio web
                      <IconExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
                    </a>
                  )}
                  {c.instagramUrl && (
                    <a
                      href={c.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent-gold hover:text-accent-gold"
                    >
                      <IconBrandInstagram className="h-3.5 w-3.5" strokeWidth={1.75} />
                      Instagram
                    </a>
                  )}
                  {c.email && (
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent-gold hover:text-accent-gold"
                    >
                      <IconMail className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {c.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-xl font-bold text-foreground">
            Cómo llevar la comunidad a tu tienda
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            El objetivo es que la comunidad crezca a más tiendas — si la
            tuya quiere sumarse, esto es lo que hace falta y lo que podemos
            ofrecer. Estamos empezando, así que cada caso lo hablamos
            directamente por correo.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <div className="glass rounded-xl border border-border/60 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-gold">
                Qué necesita tu tienda
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {[
                  "Espacio para jugar en mesas de 3-4 personas, con la periodicidad que decidáis (semanal, quincenal...).",
                  "Disposición para adoptar el formato de torneo o liga: mazos con un tope de precio, puntuación por jornada y una final.",
                  "Alguien en la tienda que lleve el día a día del torneo o la liga — no sustituimos a un organizador local.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-xl border border-border/60 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-gold">
                Qué ofrece La Comandancia
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {[
                  "Un espacio en la web para tu tienda: resultados, mazos del top y visibilidad en la comunidad.",
                  "Difusión a través del proyecto (web y comunidad) cuando el torneo o la liga esté listo.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-border p-6 text-center">
            <p className="text-sm text-muted">
              ¿Tu tienda o asociación quiere sumarse a la comunidad?
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-gold px-5 py-2.5 text-sm font-bold text-background transition-all hover:scale-[1.02] hover:bg-accent-gold-hover"
            >
              <IconMail className="h-4 w-4" strokeWidth={1.75} />
              {CONTACT_EMAIL}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
