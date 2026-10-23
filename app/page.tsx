import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Home() {
  return (
    <section className = {styles.hero}>
        <h1>Es Jeruk Segar</h1>
        <p> Beli Es Jeruk di hari yang panas</p>
        <div className={styles.tombolhero}>
          <Button href="/">Pesan Sekarang</Button>
        </div>
    </section>

  );
}
