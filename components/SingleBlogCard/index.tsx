import React from "react";

const SingleBlogCard = () => {
  return (
    <div className="single-blog-card">
      <div className="single-blog-card__memberPost">
        <div className="single-blog-card__inner">
          <div className="single-blog-card__catagoryContainer">
            <div className="single-blog-card__category">technology</div>
          </div>
          <div className="single-blog-card__details">
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
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleBlogCard };
