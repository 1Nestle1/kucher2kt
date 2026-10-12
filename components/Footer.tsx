import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const socials = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

const navigation = [
  { label: "Service", href: "#service" },
  { label: "Agency", href: "#agency" },
  { label: "Case Study", href: "#case-study" },
  { label: "Resource", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const licence = ["Privacy Policy", "Copyright", "Email Address"];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.about}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/logo-mark-footer.svg" alt="" width={51} height={51} />
          MAC
        </Link>
        <p className={styles.text}>
          We offer a comprehensive suite of digital marketing services that cover all aspects of
          your online presence. From SEO and social media marketing to content creation and PPC
          advertising, we have the expertise and resources to handle your diverse marketing needs.
        </p>
        <div className={styles.socials}>
          {socials.map((name, index) => (
            <a
              key={name}
              href="#"
              className={styles.social}
              style={{ backgroundPosition: index * -46 + "px 0" }}
              aria-label={name}
            />
          ))}
        </div>
      </div>

      <div className={styles.column}>
        <h3 className={styles.heading}>Navigation</h3>
        {navigation.map((item) => (
          <Link key={item.label} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles.column}>
        <h3 className={styles.heading}>Licence</h3>
        {licence.map((item) => (
          <a key={item} href="#" className={styles.link}>
            {item}
          </a>
        ))}
      </div>

      <div className={styles.column}>
        <h3 className={styles.heading}>Contact</h3>
        <a href="tel:+14065550120" className={styles.contact}>
          <Image src="/assets/icon-phone.svg" alt="" width={24} height={24} />
          (406) 555-0120
        </a>
        <a href="mailto:hey@boostim.com" className={styles.contact}>
          <Image src="/assets/icon-email.svg" alt="" width={24} height={24} />
          hey@boostim.com
        </a>
        <p className={styles.contact}>
          <Image src="/assets/icon-location.svg" alt="" width={24} height={24} />
          2972 Westheimer Rd. Santa Ana, Illinois 85486
        </p>
      </div>

      <p className={styles.copyright}>© 2026 MAC Agency. All rights reserved.</p>
    </footer>
  );
}
