import styles from "./page.module.css";
import Button from "@/components/Button";
import MenuCard from "@/components/MenuCard";

type Menu = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export default function Home() {
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
    <main>
      <section className = {styles.hero}>
          <h1>Es Jeruk Segar</h1>
          <p> Beli Es Jeruk di hari yang panas</p>
          <div className={styles.tombolhero}>
            <Button href="/menu">Pesan Sekarang</Button>
          </div>
      </section>

      <section className={styles.rekomendasi}>
        <h2>Rekomendasi</h2>
        <div className={styles.daftarmenu}>
          {menus.map((menu) => (
            <MenuCard
              key={menu.slug}
              slug={menu.slug}
              name={menu.name}
              image={menu.image}
              description={menu.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
