export type Collaborator = {
  name: string;
  role: string;
  description: string;
  url?: string;
  instagramUrl?: string;
  email?: string;
};

export const COLLABORATORS: Collaborator[] = [
  {
    name: "Panda Games",
    role: "Tienda anfitriona",
    description:
      "Sede de todas las ligas de Commander Budget desde el inicio del proyecto. C/ Oslo 53, CC X-Madrid, planta alta, Alcorcón.",
    url: "https://pandagames.es",
    instagramUrl: "https://www.instagram.com/pandagames.es/",
  },
  {
    name: "Asociación Vecinal Sural",
    role: "Co-organizador",
    description:
      "Se sumó a Panda Games para organizar el torneo Commander Ultrabudget 20€, como parte de las Fiestas Patronales de Alcorcón 2026 — la primera colaboración de La Comandancia con una entidad fuera de la tienda.",
    email: "avvsural@gmail.com",
  },
];
