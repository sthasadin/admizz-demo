import React from "react";

import Rating from "@material-ui/lab/Rating";

const RatingStar = (props: any) => {
  return (
    <div className="ratingstar__container">
      <div className="ratingstar__title">{props.title}</div>
      <div className="ratingstar__star">
        {" "}
        <Rating
          name={props.title.toLowerCase()}
          precision={0.5}
          onChange={(e) => props.handleChange(e)}
          //value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
      </div>
      <div className="ratingstar__ratingnumber">
        <span style={{ color: "#ffa200", fontWeight: 600, maxWidth: "45px" }}>
          {props.review[props.title.toLowerCase()]}/
        </span>
        <span style={{ color: "#000000", fontSize: "14px" }}>10</span>
      </div>
    </div>
  );
};
export default RatingStar;
