import React from "react";
import { useRouter } from 'next/router'
// import Link from 'next/link'

const SingleListPostWithImage = (props: any) => {
  const router = useRouter();
  return (
    <div className="single-list-post-with-image" onClick={() => router.push(`/blogs/${props.slug}`)}>
      <div className="single-list-post-with-image__container">
        <div className="single-list-post-with-image__imageContainer">
        </div>
        <div className="single-list-post-with-image__DetailContainer">
          <div className="single-list-post-with-image__AutherTimeContainer">
            {props.author} - {props.time}
          </div>
          <div className="single-list-post-with-image__Title">
            {/* <Link href={`/blogs/${props.id}`}> */}
              {props.title}
            {/* </Link> */}
          </div>
          <div className="single-list-post-with-image__Description">
          {props.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleListPostWithImage }; 
