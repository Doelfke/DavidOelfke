import { useState } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <button
        className={`${styles.hamburger} ${styles.hamburgerCollapse} ${
          isOpen ? styles.isOpen : undefined
        }`}
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
      <div
        className={`${styles.navigationItems} ${
          isOpen ? styles.navigationItemsOpen : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        <Link href="/" className={styles.navigationItem}>
          Home
        </Link>
        <Link href="/about-me" className={styles.navigationItem}>
          About Me
        </Link>
        <Link href="/my-work" className={styles.navigationItem}>
          My Work
        </Link>
        <Link href="/blog/page/1" className={styles.navigationItem}>
          Blog
        </Link>
      </div>
    </div>
  );
}
