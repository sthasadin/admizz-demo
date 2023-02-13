import React from "react";
import calculateReadingTime from "../../utils/calculateReadingTime";
import { SingleBlog } from "../SingleBlog";

const BlogDetailMember = ({ blogArray }) => {
  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  const text_truncate = (str) => {
    return str.substring(0, 70 - 3) + "...";
  };
  return (
    <div className="blog-detail-member">
      <div className="blog-detail-member__memberTitle">
        <div className="blog-detail-member__memberTitleText">SIMILAR BLOGS</div>
      </div>
      {blogArray &&
        blogArray.slice(0, 4).map((blog, i) => {
          return (
            <div className="blog-list-member__secondaryPost" key={i}>
              <SingleBlog
                id={blog?._id}
                slug={blog?.blog_slug}
                type={blog?.category}
                auther={blog?.author}
                time={`${calculateReadingTime(
                  blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                )} min read`}
                title={blog?.blog_title}
                desc={text_truncate(removeHtmlChar(blog?.blog_desc))}
                backgroundImg={blog?.blog_imageURL}
              />
            </div>
          );
        })}
    </div>
  );
};

export { BlogDetailMember };
