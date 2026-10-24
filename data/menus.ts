type Menu = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

const menus: Menu[] = [
  {
    slug: "jeruk-original",
    name: "Es Jeruk Original",
    description: "Jeruk peras segar dengan es batu.",
    image: "/images/es-jeruk-original.jpg",
  },
  {
    slug: "jeruk-madu",
    name: "Es Jeruk Madu",
    description: "Perpaduan jeruk segar dan madu asli.",
    image: "/images/es-jeruk-madu.jpeg",
  },
  {
    slug: "jeruk-selasih",
    name: "Es Jeruk Selasih",
    description: "Jeruk segar dengan biji selasih.",
    image: "/images/es-jeruk-selasih.jpeg",
  },
];

export default menus;
