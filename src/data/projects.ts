export type Category = "game" | "tool";

export type Project = {
  slug: string;
  name: string;
  description: string;
  url: string;
  category: Category;
};

export const projects: Project[] = [
  {
    slug: "closet-game",
    name: "closet-game",
    description: "Juego de ordenar prendas",
    url: "https://closet-game-six.vercel.app/",
    category: "game",
  },
  {
    slug: "math-game",
    name: "math-game",
    description: "Juego de mates para primaria",
    url: "https://math-game-two-gray.vercel.app/",
    category: "game",
  },
  {
    slug: "triplo",
    name: "triplo",
    description: "Junta potencias de 2",
    url: "https://triplo-xi.vercel.app/",
    category: "game",
  },
  {
    slug: "qrify",
    name: "qrify",
    description: "Generador de códigos QR",
    url: "https://qrify-me.vercel.app/es",
    category: "tool",
  },
  {
    slug: "my-pdf",
    name: "my-pdf",
    description: "Editor de PDFs en local",
    url: "https://my-pdf-online.vercel.app/",
    category: "tool",
  },
];

export const hostOf = (url: string) => new URL(url).host;
