import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPost } from "../SingleListPost";
import { SingleListPostWithImage } from "../SingleListPostWithImage";
import { useSelector } from "react-redux";
import calculateReadingTime from "../../utils/calculateReadingTime";

const BlogListRandomBlog = ({ blogArray }) => {
  // const blogs = useSelector(state => state.allBlog.allBlog)

  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  const text_truncate = (str) => {
    return str.substring(0, 70 - 3) + "...";
  };
  return (
    <div className="blog-list-random-blog">
      <div className="blog-list-random-blog__highlightPost">
        <div className="blog-list-random-blog__secondaryPostContainer">
          {blogArray &&
            blogArray.slice(0, 4).map((blog, i) => {
              return (
                <div className="blog-list-member__secondaryPost" key={i}>
                  <SingleBlogCard
                    type="Business"
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
      <div className="blog-list-random-blog__postList"></div>
    </div>
  );
};

export { BlogListRandomBlog };
