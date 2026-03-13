import Head from 'next/head';
import Navigation from '../navigation/Navigation';
import { Figtree } from 'next/font/google';
import styles from './index.module.scss';

const figree = Figtree({ subsets: ['latin'] });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={figree.className}>
      <Head>
        <meta name="theme-color" content="#f0f5ff" />
      </Head>
      <div className={styles.bgAnimation} aria-hidden="true">
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
        <span className={styles.blob4} />
      </div>
      <Navigation />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
