import React from "react";

const SingleBlogCard = (props: any) => {
  return (
    <div className="single-blog-card">
      <div className="single-blog-card__memberPost">
        <div className="single-blog-card__inner">
          <div className="single-blog-card__catagoryContainer">
            <div className="single-blog-card__category">{props.type}</div>
          </div>
          <div className="single-blog-card__details">
            <div className="blogCard__meta">
              <div className="blogCard__author">{props.auther}</div>
              <div className="blogCard__time">{props.time}</div>
            </div>
            <div className="blogCard__title">
              {props.title}
            </div>
            <div className="blogCard__desc">
              {props.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleBlogCard };