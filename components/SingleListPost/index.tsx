import React from "react";
import { useRouter } from 'next/router'

const SingleListPost = (props: any) => {
  const router = useRouter();

  return (
    <div className="single-list-post" onClick={() => router.push('/')}>
      <div className="single-list-post__container">
        <div className="single-list-post__DetailContainer">
          <div className="single-list-post__AutherTimeContainer">
            {props.author} - {props.time}
          </div>
          <div className="single-list-post__Title">
          {props.title}
          </div>
          <div className="single-list-post__Description">
          {props.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleListPost }; 
