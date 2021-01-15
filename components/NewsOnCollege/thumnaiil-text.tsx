import React from "react";

const ThumbnailText = (props: any) => {
  return (
    <div className="thumbnail-text">
      <div className="thumbnail-text__thumbnail">
        <img src={props.image} alt="" />
      </div>
      <div className="thumbnail-text__text">
        <h3>
          <a href="#">{props.title}</a>
        </h3>
        <time className="thumbnail-text__date">{props.date}</time>
      </div>
    </div>
  );
};

export default ThumbnailText;
