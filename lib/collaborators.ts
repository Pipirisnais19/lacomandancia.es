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
    role: "Organiza las ligas de Commander Budget",
    description:
      "Organiza y acoge las ligas de Commander Budget que seguimos desde La Comandancia. C/ Oslo 53, CC X-Madrid, planta alta, Alcorcón.",
    url: "https://pandagames.es",
    instagramUrl: "https://www.instagram.com/pandagames.es/",
  },
  {
    name: "Asociación Vecinal Sural",
    role: "Organizador",
    description:
      "Organiza el torneo Commander Ultrabudget 20€ en colaboración con Panda Games, como parte de las Fiestas Patronales de Alcorcón 2026. La Comandancia no lo organiza, pero lo promovemos porque encaja con nuestro objetivo de acercar Commander budget a más jugadores.",
    email: "avvsural@gmail.com",
  },
];
