import React from "react";
import Head from "next/head";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { BlogDetailHeader } from "../../components/BlogDetailHeader";
import BlogImage from "../../public/blog.png";

const blogDetail = () => {
  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <Navbar />
      </Head>
      <main className="blog-detail">
        <div className="blog-detail__container">
          <div className="blog-detail__main">
            <BlogDetailHeader />
          </div>
          <img className="blog-detail__image" src={BlogImage} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default blogDetail;
