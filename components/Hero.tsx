import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Stay ahead of the curve with our forward-thinking</h1>
        <p className={styles.text}>
          An award-winning SEO agency with disciplines in digital marketing, design, and website
          development. Focused on understanding you.
        </p>

        <div className={styles.buttons}>
          <Link href="#contact" className={styles.button}>
            Schedule Call
            <Image src="/assets/icon-arrow-right-white.svg" alt="" width={24} height={24} />
          </Link>
          <Link href="#case-study" className={styles.link}>
            View Case Study
          </Link>
        </div>

        <div className={styles.brands}>
          <p>Trusted by the world&apos;s biggest brands</p>
          <Image
            src="/assets/hero-brand-logos.svg"
            alt="Afterpay, Basecamp and Maze"
            width={378}
            height={34}
          />
        </div>
      </div>

      <div className={styles.cards}>
        <Image
          className={styles.shape}
          src="/assets/hero-shape.png"
          alt=""
          width={303}
          height={275}
          preload
        />
        <Image className={styles.badge} src="/assets/hero-trend-badge.svg" alt="" width={196} height={196} />

        <div className={styles.stats}>
          <p className={styles.number}>230+</p>
          <p className={styles.statsText}>some big companies that we work with, and trust us very much</p>
          <Image src="/assets/hero-progress-bar.svg" alt="" width={211} height={7} />
        </div>

        <div className={styles.traffic}>
          <p className={styles.label}>Drive More Traffic and Sales</p>
          <h2 className={styles.trafficTitle}>Drive more traffic and product sales</h2>
          <Image className={styles.bars} src="/assets/hero-traffic-bars.svg" alt="" width={227} height={165} />
        </div>
      </div>
    </section>
  );
}
