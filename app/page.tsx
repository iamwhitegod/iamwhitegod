"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import GlobalStyle from "../styles/globalStyles";

export default function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <main className={styles.main}>
        <Image
          src="/whitegod.svg"
          alt="Whitegod Logo"
          className={styles.vercelLogo}
          width={50}
          height={50}
          priority
        />

        <p className={styles.description}>Whitegod's Official Website</p>
      </main>
    </Fragment>
  );
}
