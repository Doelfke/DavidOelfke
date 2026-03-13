'use client';

import { TypeAnimation } from 'react-type-animation';
import { Card } from '@/components/card/Card';

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
              500,
              "I'm David Oelfke and I'm a software engineering",
              500,
              "I'm David Oelfke and I'm a software engineering author",
              500,
              "I'm David Oelfke and I'm a software engineering leader",
              500,
              "I'm David Oelfke and I'm a software engineer"
            ]}
            speed={50}
          />
        </div>
        <div className={styles.tagLine}>
          I&apos;ve built products at two-person startups, tech giants, and everything in between, specializing in modern web and AI experiences.
        </div>
        <div className={styles.techStack}>This site was made with:</div>
        <Card as="ul" className={styles.techStackList}>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>SCSS Modules</li>
          <li>Python</li>
          <li>LangChain</li>
          <li>OpenAI</li>
          <li>Vercel</li>
        </Card>
        <div className={styles.moreTech}>
          <Link href="/about-me#technologies">But I&apos;ve worked with many more technologies</Link>
        </div>
      </div>

      <div className={styles.seeMyWork}>
        <Link href="/my-work">See my work</Link>
      </div>
    </>
  );
}
