import React from "react";
import Head from "next/head";
import { Topbar } from "./topbar";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const index = ({ children, title }) => {
  return (
    <>
      <Topbar />
      <Head>
        <title>Admizz - {title}</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
