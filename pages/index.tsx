import Head from "next/head";
import React from "react";
import { About } from "../components/About";
import { BlogList } from "../components/BlogList";
import { CollegeFinder } from "../components/collegeFinder";
import { CollegesBlock } from "../components/collegesBlock";
import { FiveSteps } from "../components/FiveSteps";
import { Login } from "../components/Login";
import { Merits } from "../components/mertis";
import { Register } from "../components/register";
import { Statistics } from "../components/statistics";
import { Teams } from "../components/Teams";
import { Us } from "../components/why-us";
import { Footer } from "../layouts/footer";
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
        <FiveSteps />
        <CollegesBlock />
        <CollegeFinder />
        <BlogList />
        <Teams />

        <Register />
        <Login />
      </main>
      <Footer />
    </div>
  );
}
