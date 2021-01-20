import React from "react";

const SingleListPost = (props: any) => {
  return (
    <div className="single-list-post">
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
