import React from "react";
import { SingleBlogCard } from "../../../components/SingleBlogCard";
import { useSelector } from "react-redux";
import { BlogLayout } from "../../../layouts/BlogLayout";
import { BlogCardLoader } from "../../../components/SkeletonLoading/BlogCardLoader";
import calculateReadingTime from "../../../utils/calculateReadingTime";

const BlogCategory = () => {
  const blogArray = useSelector((state) => state.blog.blogs);
  const multiLoading = useSelector((state) => state.blog.multiLoading);

  console.log(multiLoading);

  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  return (
    // <div>asd</div>
    <BlogLayout title="Blogs">
      <div className="section-wrapper">
        {multiLoading && <BlogCardLoader count={10} />}
        <div className="blog-list-random-blog" style={{ margin: "30px 0" }}>
          <div className="blog-list-random-blog__highlightPost">
            <div className="blog-list-random-blog__secondaryPostContainer">
              {blogArray &&
                blogArray?.map((blog, i) => {
                  return (
                    <div className="blog-list-member__secondaryPost" key={i}>
                      <SingleBlogCard
                        type={blog?.category}
                        auther={blog?.author}
                        time={`${calculateReadingTime(
                          blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                        )} min read`}
                        title={blog?.blog_title}
                        desc={removeHtmlChar(blog?.blog_desc)}
                        backgroundImg={blog?.blog_imageURL}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogCategory;
