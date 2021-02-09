import React from "react";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <div className="blogCard__inner">
        <div className="blogCard__category">technology</div>
        <div className="blogCard__details">
          <div className="blogCard__meta">
            <div className="blogCard__author">Stecy James</div>
            <div className="blogCard__time">5 min read</div>
          </div>
          <div className="blogCard__title">
            How I got my job in Google with the help of Admizz
          </div>
          <div className="blogCard__desc">
            Get the right career advice for you and earn your best career
            certificates.
            Get the right career advice for you and earn your best career
            certificates.
          </div>
        </div>
      </div>
    </div>
  );
};
export { BlogCard };
