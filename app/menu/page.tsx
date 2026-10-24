import MenuCard from "@/components/MenuCard";
import menus from "@/data/menus";
import styles from "./page.module.css";

export default function MenuPage() {
  return (
    <section className={styles.container}>
      <h1>Menu</h1>
      <p>Es Jeruk Segar Segar Segar</p>

      <div className={styles.grid}>
        {menus.map((item) => (
          <MenuCard
            key={item.slug}
            slug={item.slug}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
