import Head from "next/head";
import React from "react";
import { Footer } from "../layouts/footer";
import { Navbar } from "../layouts/navbar";
import { Topbar } from "../layouts/topbar";
import { Introduction } from "../components/Introduction";
import { About } from "../components/About";
import { Merits } from "../components/mertis";
import { Statistics } from "../components/statistics";
import { FiveSteps } from "../components/FiveSteps";
import { CollegeFinder } from "../components/collegeFinder";
import { Testimonial } from "../components/Testimonial";
import { BlogList } from "../components/BlogList";
import { Teams } from "../components/Teams";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@800&display=swap"
          rel="stylesheet"
        />
        <Navbar />
      </Head>
      <Introduction />
      <About />
      <Merits />
      <Statistics />
      <FiveSteps />
      <CollegeFinder />
      <Testimonial />
      <BlogList />
      <Teams />
      <main className="main"></main>
      <Footer />
    </div>
  );
}
