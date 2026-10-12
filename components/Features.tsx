import Image from "next/image";
import styles from "./Features.module.css";

const avatars = [
  "/assets/stats-avatar-1.png",
  "/assets/stats-avatar-2.png",
  "/assets/stats-avatar-3.png",
  "/assets/stats-avatar-4.png",
];

export default function Features() {
  return (
    <section id="agency" className={styles.features}>
      <h2 className={styles.title}>Provide the best service with out of the box ideas</h2>
      <p className={styles.text}>
        We are a passionate team of digital marketing enthusiasts dedicated to helping businesses
        succeed in the digital world. With years of experience and a deep understanding of the
        ever-evolving online landscape, we stay at the forefront of industry trends and
        technologies.
      </p>

      <div className={styles.projects}>
        <p className={styles.number}>
          920<span className={styles.plus}>+</span>
        </p>
        <p className={styles.caption}>Projects finished with excellence</p>
        <div className={styles.avatars}>
          {avatars.map((src) => (
            <Image key={src} className={styles.avatar} src={src} alt="" width={74} height={74} />
          ))}
          <span className={styles.more}>+</span>
        </div>
      </div>

      <div className={styles.video}>
        <p className={styles.videoTitle}>How we work</p>
        <button type="button" className={styles.play} aria-label="Play video about how we work">
          <Image src="/assets/how-we-work-play-button.svg" alt="" width={163} height={163} />
        </button>
      </div>
    </section>
  );
}
