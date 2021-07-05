import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../layouts";

import { BlogListBanner } from "../../components/BlogListBanner";
import { SectionTitle } from "../../components/SectionTitle";
import { BlogListMember } from "../../components/BlogListMember";
import { BlogListLatestPost } from "../../components/BlogListLatestPost";
import { BlogListRandomBlog } from "../../components/BlogListRandomBlog";

// import { getAllBLog } from "../../store/Action/getAllBlog.action";
import { getBlogs } from "../../store/Action/blog.action";

const blogList = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  console.log(blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllBLog());
    dispatch(getBlogs());
  }, []);

  const randomNumber = Math.floor(Math.random() * blogs?.length);
  console.log(randomNumber);

  return (
    <Layout title="Blogs">
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
      <div className="container">
        <main className="blog-list">
          <div className="section-wrapper">
            <BlogListBanner blog={blogs[randomNumber]} />
            <SectionTitle title="Featured For Members" />
            <BlogListMember blogArray={blogs} />
            <SectionTitle title="Latest Posts" />
            <BlogListLatestPost blogArray={blogs} />
            <SectionTitle title="Random Blogs" />
            <BlogListRandomBlog blogArray={blogs} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default blogList;
