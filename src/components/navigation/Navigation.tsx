import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (href: string) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ''}`;
  };

  return (
    <div className={styles.navigation}>
      {pathname !== '/' && (
        <Link href="/" className={styles.siteTitle}>
          DavidOelfke.dev
        </Link>
      )}
      {pathname === '/' && <div></div>}
      <button
        className={`${styles.hamburger} ${styles.hamburgerCollapse} ${isOpen ? styles.isOpen : undefined}`}
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
      <div className={`${styles.navigationItems} ${isOpen ? styles.navigationItemsOpen : ''}`} onClick={() => setIsOpen(false)}>
        <Link href="/" className={navLinkClass('/')}>
          Home
        </Link>
        <Link href="/about-me" className={navLinkClass('/about-me')}>
          About Me
        </Link>
        <Link href="/my-work" className={navLinkClass('/my-work')}>
          My Work
        </Link>
        <Link href="/my-education" className={navLinkClass('/my-education')}>
          My Education
        </Link>
        <Link href="/blog/page/1" className={navLinkClass('/blog')}>
          Blog
        </Link>
        <Link href="/chat" className={navLinkClass('/chat')}>
          Oelfke AI
        </Link>
      </div>
    </div>
  );
}
