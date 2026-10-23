import MenuCard from "@/components/MenuCard";
import styles from "./page.module.css";

type Menu = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export default function MenuPage() {
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

  return (
    <section className={styles.container}>
      <h1>Menu</h1>
      <p>Es Jeruk Segar Segar Segar</p>

      <div className={styles.grid}>
        {menus.map((item) => (
          <MenuCard
            key={item.slug}
            slug={item.slug}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
