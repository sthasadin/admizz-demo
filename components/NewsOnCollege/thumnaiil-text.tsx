import React from "react";
import { useRouter } from "next/router";
const ThumbnailText = (props: any) => {
  const router = useRouter();
  return (
    <div className="thumbnail-text">
      <div className="thumbnail-text__thumbnail">
        <img src={props.image} alt="" />
      </div>
      <div className="thumbnail-text__text">
        <h3>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/blogs/${props.slug}`)}
          >
            {props.title}
          </a>
        </h3>
        <p className="thumbnail-text__date">{props.date}</p>
      </div>
    </div>
  );
};

export default ThumbnailText;
