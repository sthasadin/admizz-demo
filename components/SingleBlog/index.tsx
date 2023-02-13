import React from "react";
import { useRouter } from "next/router";

const SingleBlog = (props: any) => {
  const router = useRouter();

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  }

  return (
    <div
      className="single-blog-card"
      onClick={() => router.push(`/blogs/${props.slug}`)}
    >
      <div className="blog-detail-member__memberPost">
        <div className="blog-detail-member__inner">
          <div className="blog-detail-member__catagoryContainer">
            <div className="blog-detail-member__category">{props.type}</div>
          </div>
          <div className="blog-detail-member__details">
            <div className="blogCard__meta">
              <div className="blogCard__author">{props.auther}</div>
              <div className="blogCard__time">{props.time}</div>
            </div>
            <div className="blogCard__title" style={{ cursor: "pointer" }}>
              {/* How I got my job in Google with the help of Admizz */}
              {props.title}
            </div>
            <div className="blogCard__desc">
              {/* Get the right career advice for you and earn your best career
              certificates. */}
              {truncateString(props?.desc, 20)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleBlog };
