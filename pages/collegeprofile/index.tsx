import Head from "next/head";
import React from "react";
import { CollegeHeader } from "../../components/CollegeHeader";
import { Submenu } from "../../components/Submenu";
import { SidebarContainer } from "../../components/SidebarContainer";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";

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
      </Head>
      <div>
        <Navbar />
        <main className="main">
          <CollegeHeader />
          <Submenu />
          <SidebarContainer />
        </main>
      </div>
      <Footer />
    </div>
  );
}
