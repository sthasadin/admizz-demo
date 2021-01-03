import React from "react";
import Head from "next/head";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { BlogListBanner } from "../../components/BlogListBanner";

const blogList = () => {
  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <Navbar />
      </Head>
      <main className="blog-list">
        <div className="blog-list__container">
          <BlogListBanner /> 
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default blogList;
