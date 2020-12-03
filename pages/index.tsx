import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admizz - Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>xxx</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
