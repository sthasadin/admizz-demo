import React from "react";
import Head from "next/head";
import { Topbar } from "./topbar";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const BlogLayout = ({ children, title }) => {
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
      <div className="blog-subnavbar ">
        <ul className="blog-subnavbarcontainer section-wrapper">
          <li>All</li>
          <li>Business</li>
          <li>Engineering</li>
          <li>Something</li>
          <li>Software Dev</li>
          <li>Science</li>
          <li>Medical</li>
          <li>Others</li>
        </ul>
      </div>
      {children}
      <Footer />
    </>
  );
};

export { BlogLayout };
