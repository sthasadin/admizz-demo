import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlogLayout } from "../../layouts/BlogLayout";
import moment from "moment";
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

  const latestBlog = blogs.sort(
    (a, b) => moment(b.createdAt) - moment(a.createdAt)
  );

  return (
    <BlogLayout title="Blogs">
      <div className="container">
        <main className="blog-list">
          <div className="section-wrapper">
            <BlogListBanner blog={latestBlog[0]} />
            <SectionTitle title="Featured For Members" />
            <BlogListMember blogArray={blogs} />
            <SectionTitle title="Latest Posts" />
            <BlogListLatestPost blogArray={latestBlog} />
            <SectionTitle title="Random Blogs" />
            <BlogListRandomBlog blogArray={blogs} />
          </div>
        </main>
      </div>
    </BlogLayout>
  );
};

export default blogList;
