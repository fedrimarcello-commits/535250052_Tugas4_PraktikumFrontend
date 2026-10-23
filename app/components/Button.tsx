import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function Button({ href, className = "", children }: ButtonProps) {
  return (
    <Link href={href} className={`${styles.tombols} ${className}`}>
      {children}
    </Link>
  );
}