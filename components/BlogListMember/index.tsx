import React from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPostWithImage } from "../SingleListPostWithImage";
import calculateReadingTime from "../../utils/calculateReadingTime";

const BlogListMember = ({ blogArray }) => {
  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };
  return (
    <div className="blog-list-member">
      <div className="blog-list-member__highlightPost">
        <div className="blog-list-member__topPost" style={{ display: "flex" }}>
          {blogArray &&
            blogArray.slice(0, 2).map((blog, i) => {
              return (
                <div className="blog-list-member__secondaryPost" key="i">
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
        <div className="blog-list-member__secondaryPostContainer">
          {blogArray &&
            blogArray.slice(2, 4).map((blog, i) => {
              return (
                <div className="blog-list-member__secondaryPost" key="i">
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
      <div className="blog-list-member__postList">
        {blogArray &&
          blogArray.slice(0, 5).map((blog, i) => {
            return (
              <div className="blog-list-member__secondaryPost" key="i">
                <SingleListPostWithImage
                  auther={blog?.author}
                  time={`${calculateReadingTime(
                    blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                  )} min read`}
                  title={blog?.blog_title}
                  desc={removeHtmlChar(blog?.blog_desc)}
                  backgroundImg={blog?.blog_imageURL}
                  slug={blog?.blog_slug}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { BlogListMember };
