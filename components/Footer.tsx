import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

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
          <p>Jl. Baru Desa Trubus</p>
          <a href="https://wa.me/6281272124925" target="_blank">
            WhatsApp Penjual
          </a>
        </div>
      </div>

      <p className={styles.copyright}>© Fedri Marcello</p>
    </footer>
  );
}