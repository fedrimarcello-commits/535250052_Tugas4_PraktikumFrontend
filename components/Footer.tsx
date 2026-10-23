import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <h3>Es Jeruk Segar</h3>
          <p>Beli es jeruk di hari yang panas.</p>
        </div>

        <div>
          <h4>Halaman</h4>
          <ul className={styles.links}>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/tentang">Tentang</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4>Kontak</h4>
          <p>Jl. Merdeka No. 10, Bandung</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <p className={styles.copyright}>© Es Jeruk Segar</p>
    </footer>
  );
}