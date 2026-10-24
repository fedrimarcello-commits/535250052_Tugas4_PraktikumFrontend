import Image from "next/image";
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <section className={styles.container}>
      <Image
        src="/images/Jeruks.jpeg"
        alt="Jeruk segar"
        width={430}
        height={465}
        className={styles.foto}
      />

      <div className={styles.teks}>
        <h1>Tentang Kami</h1>
        <p>
          Berawal dari hari panas, jadi kepikiran menum es jeruk,
          jadi pengen jualan es jeruk. Es jeruk, segar segar segar !
        </p>
        <Button href="/menu">Lihat Menu</Button>
      </div>
    </section>
  );
}
