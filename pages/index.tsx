import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Admizz - Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="main">
        xxx\
        <Button variant="contained" color="primary">
          Name
        </Button>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
