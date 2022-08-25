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
  const blogs = useSelector((state: any) => state.blog.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs("All"));
  }, []);

  const latestBlog = blogs.sort(
    (a, b) => (moment(b.createdAt) as any) - (moment(a.createdAt) as any)
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
