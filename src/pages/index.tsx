"use client";

import { TypeAnimation } from "react-type-animation";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.title}>
      <TypeAnimation
        preRenderFirstString
        sequence={[
          250,
          "I'm David Oelfke and I'm",
          250,
          "I'm David Oelfke and I'm a web developer.",
          250,
          "I'm David Oelfke and I'm an engineering leader.",
          250,
          "I'm David Oelfke and I'm a software engineer.",
        ]}
        speed={50}
      />
    </div>
  );
}
