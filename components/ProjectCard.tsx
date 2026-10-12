import Image from "next/image";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  client: string;
};

export default function ProjectCard({ title, client }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Image className={styles.image} src="/assets/portfolio-ai-wave.png" alt="" width={480} height={480} />
      <p className={styles.client}>{client}</p>
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}
