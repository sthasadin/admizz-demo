import React from "react";

const SingleListPostWithImage = (props: any) => {
  return (
    <div className="single-list-post-with-image">
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
