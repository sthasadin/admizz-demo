import React from "react";
import { useRouter } from 'next/router'

const SingleListPostWithImage = (props: any) => {
  const router = useRouter();
  return (
    <div className="single-list-post-with-image" onClick={() => router.push('/blogdetail')}>
      <div className="single-list-post-with-image__container">
        <div className="single-list-post-with-image__imageContainer">
        </div>
        <div className="single-list-post-with-image__DetailContainer">
          <div className="single-list-post-with-image__AutherTimeContainer">
            {props.author} - {props.time}
          </div>
          <div className="single-list-post-with-image__Title">
          {props.title}
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
