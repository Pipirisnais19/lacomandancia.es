import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | La Comandancia",
  description:
    "Qué datos recoge lacomandancia.es, para qué los usamos y cómo contactarnos si tienes dudas.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="bg-grain relative overflow-hidden border-b border-border bg-grid">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(227,195,79,0.22),transparent)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-7 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Legal
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Política de Privacidad
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Última actualización: 10 de agosto de 2026.
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted">
            La Comandancia es un proyecto comunitario, no una empresa. Esta
            página explica de forma simple qué datos recoge{" "}
            <span className="text-foreground">lacomandancia.es</span>, para
            qué los usamos, y qué pasa cuando nos contactas fuera del sitio
            (correo, Instagram).
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Qué datos recogemos en el sitio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            El sitio no tiene formularios, registro ni cuentas de usuario:
            no te pedimos ni guardamos tu nombre, correo o teléfono por
            navegar en lacomandancia.es.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Usamos{" "}
            <a
              href="https://vercel.com/docs/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-gold hover:underline"
            >
              Vercel Analytics
            </a>{" "}
            para ver, de forma agregada y anónima, cuánta gente visita el
            sitio y qué páginas funcionan mejor. No usa cookies ni identifica
            a personas individuales. También registramos, de forma anónima,
            cuándo alguien hace clic en "Síguenos" en Instagram o en "Ver
            detalles" de un torneo — nos sirve para saber qué le interesa a
            la comunidad, no para identificarte.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Cookies
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            El sitio no usa cookies propias. No hay inicio de sesión,
            carrito ni preferencias que guardar.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Si nos escribes o nos sigues en Instagram
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Si nos escribes a{" "}
            <a
              href="mailto:lacomandancia.es@gmail.com"
              className="font-semibold text-accent-gold hover:underline"
            >
              lacomandancia.es@gmail.com
            </a>{" "}
            o nos sigues en Instagram, esa relación queda en Gmail o
            Instagram, según sus propias políticas de privacidad — no la
            guardamos aparte ni la usamos para nada distinto de responder tu
            mensaje o gestionar la comunidad.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Enlaces a otros sitios
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Enlazamos a Moxfield, Scryfall, Instagram y las webs de tiendas
            colaboradoras como Panda Games. Cada uno de esos sitios tiene su
            propia política de privacidad, que no controlamos.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Tus derechos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Como no guardamos datos personales en el sitio, no hay nada que
            pedirnos borrar de aquí. Si tienes dudas sobre algo que nos
            escribiste por correo o Instagram, contáctanos a{" "}
            <a
              href="mailto:lacomandancia.es@gmail.com"
              className="font-semibold text-accent-gold hover:underline"
            >
              lacomandancia.es@gmail.com
            </a>{" "}
            y lo resolvemos directamente.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Cambios a esta política
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Si el sitio empieza a recoger más datos (por ejemplo, si en el
            futuro añadimos un formulario de inscripción), actualizaremos
            esta página para reflejarlo.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
