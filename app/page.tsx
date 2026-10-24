import styles from "./page.module.css";
import Button from "@/components/Button";
import MenuCard from "@/components/MenuCard";
import menus from "@/data/menus";

export default function Home() {
  return (
    <main>
      <section className = {styles.hero}>
          <h1>Es Jeruk Segar</h1>
          <p> Beli Es Jeruk di hari yang panas</p>
          <div className={styles.tombolhero}>
            <Button href="/menu">Pesan Sekarang</Button>
            <Button href="/menu" className={styles.tombolgaris}>Lihat Menu</Button>
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
