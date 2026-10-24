import Image from "next/image";
import Button from "@/components/Button";
import menus from "@/data/menus";
import styles from "./page.module.css";

export default async function DetailMenuPage({ params }: PageProps<"/menu/[slug]">) {
  const { slug } = await params;

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
      <Image
        src={menu.image}
        alt={menu.name}
        width={400}
        height={400}
        className={styles.image}
      />

      <div className={styles.teks}>
        <h1>{menu.name}</h1>
        <p>{menu.description}</p>
        <Button href="/menu">Kembali ke Menu</Button>
      </div>
    </section>
  );
}
