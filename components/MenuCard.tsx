import Link from "next/link";
import Image from "next/image";
import styles from "./MenuCard.module.css";

type MenuCardProps = {
  slug: string;
  name: string;
  description: string;
  image:string;
};

export default function MenuCard({ slug, name, description, image }: MenuCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/menu/${slug}`} className={styles.link}>
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className={styles.image}
        />
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    </article>
  );
}