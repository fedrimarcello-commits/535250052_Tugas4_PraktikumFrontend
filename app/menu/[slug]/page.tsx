import Image from "next/image";
import Button from "@/components/Button";
import styles from "./page.module.css";

type Menu = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export default async function DetailMenuPage({ params }: PageProps<"/menu/[slug]">) {
  const { slug } = await params;

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

  const menu = menus.find((item) => item.slug === slug);

  if (!menu) {
    return (
      <section className={styles.container}>
        <h1>Menu tidak ditemukan</h1>
        <Button href="/menu">Kembali ke Menu</Button>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h1>{menu.name}</h1>
      <Image
        src={menu.image}
        alt={menu.name}
        width={600}
        height={400}
        className={styles.image}
      />
      <p>{menu.description}</p>
      <Button href="/menu">Kembali ke Menu</Button>
    </section>
  );
}
