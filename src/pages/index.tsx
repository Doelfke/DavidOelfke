"use client";

import { TypeAnimation } from "react-type-animation";

import styles from "./index.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <title>David Oelfke - Home</title>
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
              "I'm David Oelfke and I'm an engineering leader",
              250,
              "I'm David Oelfke and I'm a software engineer",
            ]}
            speed={50}
          />
        </div>
        <div className={styles.subTitle}>from San Diego, California.</div>
        <div className={styles.tagLine}>
          I've worked for 2 people startups, tech giants, and everything in
          between, specializing in all things web.
        </div>
        <div className={styles.techStack}>My favorite tech stack is:</div>
        <ul className={styles.techStackList}>
          <li>TypeScript</li>
          <li>React</li>
          <li>A Custom UI</li>
          <li>Node.js</li>
          <li>NestJS</li>
          <li>TypeORM</li>
          <li>Postgres</li>
          <li>Heroku</li>
        </ul>
        <Link href="/about-me#technologies">
          But I've worked with many more.
        </Link>
      </div>

      <div className={styles.seeMyWork}>
        <Link href="/my-work">See my work</Link>
      </div>
    </>
  );
}
