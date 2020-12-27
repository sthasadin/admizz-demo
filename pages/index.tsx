import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import { About } from "../components/About";
import { CollegesBlock } from "../components/collegesBlock";
import { Merits } from "../components/mertis";
import { Statistics } from "../components/statistics";
import { Us } from "../components/why-us";
import { Navbar } from "../layouts/navbar";
import { Topbar } from "../layouts/topbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <Navbar />
      </Head>
      <main className="main">
        <About />
        <Merits />
        <Us />
        <Statistics />
        <CollegesBlock />
        <Button variant="contained" color="primary">
          Name
        </Button>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
