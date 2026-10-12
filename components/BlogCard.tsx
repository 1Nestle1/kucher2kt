import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

type BlogCardProps = {
  title: string;
  text: string;
  color: string;
  filled: boolean;
};

export default function BlogCard({ title, text, color, filled }: BlogCardProps) {
  const arrow = filled ? "/assets/blog-arrow-button-filled.svg" : "/assets/blog-arrow-button-outline.svg";

  return (
    <article className={styles.card}>
      <span className={styles.dot} style={{ background: color }} />
      <span className={styles.time}>5 min read</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <Link href="#service" className={styles.arrow} aria-label={"Read: " + title}>
        <Image src={arrow} alt="" width={88} height={56} />
      </Link>
    </article>
  );
}
