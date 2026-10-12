import Image from "next/image";
import Link from "next/link";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section id="get-started" className={styles.cta}>
      <h2 className={styles.title}>Ready to work with us?</h2>
      <Link href="#contact" className={styles.button}>
        Get started
        <Image src="/assets/icon-arrow-right-black.svg" alt="" width={24} height={24} />
      </Link>
    </section>
  );
}
