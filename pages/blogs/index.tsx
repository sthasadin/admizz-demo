import React, { useEffect } from "react";
import Head from "next/head";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { BlogListBanner } from "../../components/BlogListBanner";
import { SectionTitle } from "../../components/SectionTitle";
import { BlogListMember } from "../../components/BlogListMember";
import { BlogListLatestPost } from "../../components/BlogListLatestPost";
import { BlogListRandomBlog } from "../../components/BlogListRandomBlog";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBLog } from "../../store/Action/getAllBlog.action";

const blogList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getAllBLog())
  }, [])

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
          {/* <SectionTitle title="Featured For Members" /> */}
          {/* <BlogListMember /> */}
          <SectionTitle title="Latest Posts" />
          <BlogListLatestPost />
          <SectionTitle title="Random Blogs" />
          <BlogListRandomBlog />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default blogList;
