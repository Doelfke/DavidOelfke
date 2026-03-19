import Head from 'next/head';
import Navigation from '../navigation/Navigation';
import { Figtree } from 'next/font/google';
import styles from './index.module.scss';

const figree = Figtree({ subsets: ['latin'] });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={figree.className}>
      <Head>
        <meta name="theme-color" content="#0a0e1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
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
