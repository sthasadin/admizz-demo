import React from "react";
import { CallToAction } from "../Button/callToAction";
import { BlogCard } from "./blogListCard";

const BlogList = () => {
  return (
    <div className="blog-list">
      <div className="blog-list__inner">
        <div className="blog-list__titlebar">
          <div className="blog-list__left">
            <div className="blog-list__heading block-heading">
              Blog/article/news
            </div>
            <div className="blog-list__title block-title">
              Our Latest News/Article/Blog
            </div>
          </div>
          <div className="blog-list__right">
            <CallToAction>view all blogs</CallToAction>
          </div>
        </div>
        <div className="blog-list__list">
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export { BlogList };
