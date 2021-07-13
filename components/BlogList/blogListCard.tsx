import React from "react";
import calculateReadingTime from "../../utils/calculateReadingTime";

const BlogCard = ({ data }) => {
  const text_truncate = (str) => {
    return str?.substring(0, 70 - 3) + "...";
  };
  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };
  return (
    <div className="blogCard">
      <div
        className="blogCard__inner"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)),url(${data?.blog_imageURL})`,
        }}
      >
        <div className="blogCard__category">{data?.category}</div>
        <div className="blogCard__details">
          <div className="blogCard__meta">
            <div className="blogCard__author">{data?.author}</div>
            <div className="blogCard__time">
              {calculateReadingTime(removeHtmlChar(data?.blog_desc))} min read
              time
            </div>
          </div>
          <div className="blogCard__title">{data?.blog_title}</div>
          <div className="blogCard__desc">
            {text_truncate(removeHtmlChar(data?.blog_desc))}
          </div>
        </div>
      </div>
    </div>
  );
};
export { BlogCard };
