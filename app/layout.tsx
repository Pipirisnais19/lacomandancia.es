import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

const title = "La Comandancia — El Hogar del Commander Budget en España";
const description =
  "Torneos, mazos, metajuego y comunidad de Commander Budget en España. Liga de 100€. 100% carta real, sin proxies.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.lacomandancia.es"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    siteName: "La Comandancia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a12",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "La Comandancia",
  description,
  url: "https://www.lacomandancia.es",
  sport: "Magic: The Gathering Commander",
  sameAs: ["https://www.instagram.com/lacomandancia.es"],
  location: {
    "@type": "Place",
    name: "Panda Games",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alcorcón",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
