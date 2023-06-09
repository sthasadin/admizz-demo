import React, { useEffect } from "react";
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPostWithImage } from "../SingleListPostWithImage";
import calculateReadingTime from "../../utils/calculateReadingTime";

const BlogListMember = ({ blogArray }) => {
  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };
  const suffleArray = blogArray.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="blog-list-member">
      <div className="blog-list-member__highlightPost">
        <div className="blog-list-member__topPost">
          {suffleArray &&
            suffleArray.slice(0, 1).map((blog, i) => {
              return (
                <div className="blog-list-member__secondaryPost" key="i">
                  <SingleBlogCard
                    slug={blog?.blog_slug}
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
        <div className="blog-list-member__secondaryPostContainer">
          {suffleArray &&
            suffleArray.slice(2, 4).map((blog, i) => {
              return (
                <div className="blog-list-member__secondaryPost" key="i">
                  <SingleBlogCard
                    type={blog?.category}
                    auther={blog?.author}
                    time={`${calculateReadingTime(
                      blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                    )} min read`}
                    title={blog?.blog_title}
                    desc={removeHtmlChar(blog?.blog_desc)}
                    backgroundImg={blog?.blog_imageURL}
                    category={blog?.category}
                    slug={blog?.blog_slug}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="blog-list-member__postList">
        {suffleArray &&
          suffleArray.slice(0, 5).map((blog, i) => {
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
                  createdAt={blog?.createdAt}
                  category={blog?.category}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { BlogListMember };
