import NavLink from "./NavLink";
import styles from "./Navbar.module.css";

const menu = [
  { href: "/", jenis: "Beranda" },
  { href: "/menu", jenis: "Menu" },
  { href: "/about", jenis: "Tentang" },
  { href: "/kontak", jenis: "Kontak" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.isi}>
        <h1 className={styles.logo}>
          Jeruk Es Segar
        </h1>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.jenis}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}