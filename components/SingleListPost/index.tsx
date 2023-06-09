import React from "react";
import { useRouter } from "next/router";
import moment from "moment";
// import Link from 'next/link'

const SingleListPost = (props: any) => {
  const router = useRouter();

  return (
    <div
      className="single-list-post"
      onClick={() => router.push(`/blogs/${props.slug}`)}
    >
      <div className="single-list-post__container">
        <div className="single-list-post__DetailContainer">
          <div
            className="single-list-post__AutherTimeContainer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              {props.author} <span className="blog-readtime">{props.time}</span>
            </div>
            <div>{moment(props.createdAt).fromNow()}</div>
          </div>
          <div className="single-list-post__Title">
            {/* <Link href={`/blogs/${props.id}`}> */}
            {props.title}
            {/* </Link> */}
          </div>
          <div className="single-list-post__Description">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

export { SingleListPost };
