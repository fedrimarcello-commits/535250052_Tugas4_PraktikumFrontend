import Link from "next/link";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";

const menu = [
  { href: "/", jenis: "Beranda" },
  { href: "/about", jenis: "Tentang" },
  { href: "/kontak", jenis: "Kontak" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>
        Fedri Marcello
      </h1>
      <ul className={styles.menu}>
        {menu.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href}>{item.jenis}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}