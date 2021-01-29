import React, { FC, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { BlogDetailHeader } from "../../components/BlogDetailHeader";
import { BlogDetailContent } from "../../components/BlogDetailContent";
import { BlogDetailMember } from "../../components/BlogDetailMember";
import { Button } from "../../components";
import {getBlogDetail} from "../../store/Action/blogDetails.action";

const blogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  console.log(slug);

  useEffect(() => {
    dispatch(getBlogDetail(slug));
  }, []);

  const { blog } = useSelector((state) => state.blogDetails);
  useEffect(() => {
    console.log(blog)
  }, [blog]);

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
            <BlogDetailHeader {...blog} />
          </div>
          <div className="blog-detail__imageContainer">
            <img className="blog-detail__image" src={blog?.blog_imageURL} />
            <div className="blog-detail__postDetail">
              <div className="blog-detail__postValueContainer">
                {blog?.author && (
                  <div className="blog-detail__postValue">
                    <b>Posted by: Ashim</b>
                  </div>
                )}
                {blog.views && (
                  <div className="blog-detail__postValue">
                    <b>50</b> Views
                  </div>
                )}
                {blog.comments && (
                  <div className="blog-detail__postValue">
                    <b>60</b> Comments
                  </div>
                )}
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
            <BlogDetailContent {...blog} />
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
