"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { label: "Service", href: "#service", dropdown: true },
  { label: "Agency", href: "#agency", dropdown: true },
  { label: "Case study", href: "#case-study", dropdown: true },
  { label: "Resources", href: "#resources", dropdown: true },
  { label: "Contact", href: "#contact", dropdown: false },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/assets/logo-mark.svg" alt="" width={33} height={33} />
        MAC
      </Link>

      <nav id="menu" className={menuOpen ? styles.navOpen : styles.nav}>
        {links.map((link) => (
          <Link key={link.label} href={link.href} className={styles.link} onClick={closeMenu}>
            {link.label}
            {link.dropdown && (
              <Image src="/assets/nav-chevron.svg" alt="" width={20} height={20} />
            )}
          </Link>
        ))}
      </nav>

      <Link href="#get-started" className={styles.button}>
        Get started
      </Link>

      <button type="button" className={styles.bell} aria-label="Notifications">
        <Image src="/assets/header-bell-button.svg" alt="" width={50} height={50} />
      </button>

      <button
        type="button"
        className={menuOpen ? styles.burgerOpen : styles.burger}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="menu"
        onClick={toggleMenu}
      >
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    </header>
  );
}
