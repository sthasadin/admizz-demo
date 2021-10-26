import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import calculateReadingTime from "../../utils/calculateReadingTime";
import { url } from "inspector";
const BlogListBanner = ({ blog }) => {
  const router = useRouter();
  // const blogs = useSelector(state => state.allBlog.allBlog)
  const blogs = useSelector((state) => state.blog.blogs);
  const text_truncate = (str) => {
    return str.substring(0, 70 - 3) + "...";
  };

  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  return (
    <div
      className="blog-list-banner"
      style={{ position: "relative" }}
      onClick={() => router.push(`/blogs/${blog?.blog_slug}`)}
    >
      <div className="blogCard" style={{ zIndex: 100 }}>
        <div
          className="blogCard__inner"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)),url(${blog?.blog_imageURL})`,
          }}
        >
          <div className="blogCard__category" style={{ zIndex: 100 }}>
            {blog?.category}
          </div>
          <div className="blogCard__details">
            <div
              className="blogCard__meta"
              style={{ zIndex: 100, color: "black" }}
            >
              <div className="blogCard__author"> {blog?.author} </div>
              <div className="blogCard__time">{`${calculateReadingTime(
                blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
              )} min read`}</div>
            </div>

            <div className="blogCard__title" style={{ cursor: "pointer" }}>
              {/* {
                blogs.length > 0? (
                  <Link href = {`/blogs/${blogs[0]._id}`}> */}
              {blog?.blog_title ? blog?.blog_title : ""}
              {/* </Link>
                ) : ''
              } */}
            </div>

            <div className="blogCard__desc">
              {blog?.blog_desc
                ? removeHtmlChar(text_truncate(blog?.blog_desc))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogListBanner };
