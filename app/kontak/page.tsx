import Button from "@/components/Button";
import styles from "./page.module.css";

export default function KontakPage() {
  return (
    <section className={styles.container}>
      <h1>Mau pesan Ya</h1>
      <p>Langsung chat di WhatsApp </p>

      <Button href="https://wa.me/6281272124925">Chat via WhatsApp</Button>

      <p className={styles.info}>Jl. Baru Desa Trubus · 00.00–21.00</p>
    </section>
  );
}
