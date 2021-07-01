import React, { useEffect } from "react";

import Layout from "../../layouts";

import { BlogListBanner } from "../../components/BlogListBanner";
import { SectionTitle } from "../../components/SectionTitle";
import { BlogListMember } from "../../components/BlogListMember";
import { BlogListLatestPost } from "../../components/BlogListLatestPost";
import { BlogListRandomBlog } from "../../components/BlogListRandomBlog";
import { useDispatch } from "react-redux";
// import { getAllBLog } from "../../store/Action/getAllBlog.action";
import { getBlogs } from "../../store/Action/blog.action";

const blogList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllBLog());
    dispatch(getBlogs());
  }, []);

  return (
    <Layout title="Blogs">
      <div className="container">
        <main className="blog-list">
          <div className="section-wrapper">
            <BlogListBanner />
            <SectionTitle title="Featured For Members" />
            <BlogListMember />
            <SectionTitle title="Latest Posts" />
            <BlogListLatestPost />
            <SectionTitle title="Random Blogs" />
            <BlogListRandomBlog />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default blogList;
