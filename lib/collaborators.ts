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
    role: "Tienda Amiga",
    description:
      "Organiza y acoge las ligas de Commander Budget que seguimos desde La Comandancia. C/ Oslo 53, CC X-Madrid, planta alta, Alcorcón.",
    url: "https://pandagames.es",
    instagramUrl: "https://www.instagram.com/pandagames.es/",
  },
];
