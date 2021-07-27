import React from "react";
import { useRouter } from "next/router";
import moment from "moment";
// import Link from 'next/link'

const SingleListPostWithImage = (props: any) => {
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
      className="single-list-post-with-image"
      onClick={() => router.push(`/blogs/${props.slug}`)}
    >
      <div className="single-list-post-with-image__container">
        <div
          className="single-list-post-with-image__imageContainer"
          style={{
            backgroundImage: `url(${props.backgroundImg})`,
          }}
        ></div>
        <div className="single-list-post-with-image__DetailContainer">
          <div
            className="single-list-post-with-image__AutherTimeContainer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              {" "}
              {props.auther} <span className="blog-readtime">{props.time}</span>
            </div>
            <div>{moment(props.createdAt).fromNow()}</div>
          </div>
          <div className="single-list-post-with-image__Title">
            {/* <Link href={`/blogs/${props.id}`}> */}
            {props.title}
            {/* </Link> */}
          </div>
          <div className="single-list-post-with-image__Description">
            {truncateString(props?.desc, 90)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleListPostWithImage };
