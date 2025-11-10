'use client';

import { TypeAnimation } from 'react-type-animation';

import styles from './index.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DavidOelfke.dev - Home</title>
      </Head>
      <div className={styles.page}>
        <div className={styles.title}>
          <TypeAnimation
            preRenderFirstString
            sequence={[
              250,
              "I'm David Oelfke and I'm a",
              250,
              "I'm David Oelfke and I'm a web developer",
              250,
              "I'm David Oelfke and I'm an engineering author",
              250,
              "I'm David Oelfke and I'm an engineering leader",
              250,
              "I'm David Oelfke and I'm a software engineer"
            ]}
            speed={50}
          />
        </div>
        <div className={styles.subTitle}>from San Diego, California.</div>
        <div className={styles.tagLine}>I've worked for 2 person startups, tech giants, and everything in between, specializing in all things web.</div>
        <div className={styles.techStack}>This site was made with:</div>
        <ul className={styles.techStackList}>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>SCSS Modules</li>
          <li>Python</li>
          <li>LangChain</li>
          <li>OpenAI</li>
          <li>Vercel</li>
        </ul>
        <Link href="/about-me#technologies">But I've worked with many more technologies.</Link>
      </div>

      <div className={styles.seeMyWork}>
        <Link href="/my-work">See my work</Link>
      </div>
    </>
  );
}
