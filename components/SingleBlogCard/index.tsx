import React from "react";
import { useRouter } from "next/router";

const SingleBlogCard = (props: any) => {
  const router = useRouter();

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div
      className="single-blog-card"
      onClick={() => router.push(`/blogs/${props.slug}`)}
    >
      <div className="single-blog-card__memberPost">
        <div
          className="single-blog-card__inner"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)),url(${props.backgroundImg})`,
          }}
        >
          <div className="single-blog-card__catagoryContainer">
            <div className="single-blog-card__category">
              {props.type}
              </div>
          </div>
          <div className="single-blog-card__details">
            <div className="blogCard__meta">
              <div className="blogCard__author">{props.auther}</div>
              <div className="blogCard__time">{props.time}</div>
            </div>
            <div className="blogCard__title" style={{ cursor: "pointer" }}>
              {/* <Link href = {`/blogs/${props.id}`}> */}
              {props.title}
              {/* </Link> */}
            </div>
            <div className="blogCard__desc">
              {truncateString(props?.desc, 20)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleBlogCard };
