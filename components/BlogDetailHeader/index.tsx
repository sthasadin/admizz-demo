import React from "react";
import BlogImage from "../../public/blog.png";

const BlogDetailHeader = ({ blog_title, blog_subtitle, category }) => {
  return (
    <div className="blog-detail-header section-wrapper">
      <div className="blog-detail-header__title">
        <h1>{blog_title}</h1>
      </div>
      <div className="blog-detail-header__subtitle">{blog_subtitle}</div>
      <div className="blog-detail-header__keyword">
        <div className="blog-detail-header__keybutton">
          <p className="blog-detail-header__keybuttontext">{category}</p>
        </div>
        {/* <div className="blog-detail-header__keybutton">
          <p className="blog-detail-header__keybuttontext">{category}</p>
        </div> */}
        {/* <div className="blog-detail-header__keybutton">
          <p className="blog-detail-header__keybuttontext">Technology</p>
        </div> */}
        {/* <div className="blog-detail-header__keybutton">
          <p className="blog-detail-header__keybuttontext">Technology</p>
        </div> */}
      </div>
    </div>
  );
};

export { BlogDetailHeader };
