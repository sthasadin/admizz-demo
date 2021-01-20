import React from "react";
import Head from "next/head";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { BlogDetailHeader } from "../../components/BlogDetailHeader";
import { BlogDetailContent } from "../../components/BlogDetailContent";
import { BlogDetailMember } from "../../components/BlogDetailMember";
import BlogImage from "../../public/blog.png";
import { Button } from "../../components";
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
          <div className="blog-detail__imageContainer">
            <img className="blog-detail__image" src={BlogImage} />
            <div className="blog-detail__postDetail">
              <div className="blog-detail__postValueContainer">
                <div className="blog-detail__postValue">
                  <b>Posted by: Stacy James</b>
                </div>
                <div className="blog-detail__postValue">
                  <b>50</b> Views
                </div>
                <div className="blog-detail__postValue">
                  <b>60</b> Comments
                </div>
              </div>
              <div className="blog-detail__shareInfoContainer">
                <div className="blog-detail__buttonContainer">
                  <Button className="blog-detail__button">TECHNOLOGY</Button>
                </div>
                <div className="blog-detail__sharetitle">
                  <p className="blog-detail__sharetext">Share This Article</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-detail__main">
            <BlogDetailContent />
          </div>
          <div className="blog-detail__imageContainer">
            <BlogDetailMember />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default blogDetail;
