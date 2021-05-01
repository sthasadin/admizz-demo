import React from "react";
import Rating from "@material-ui/lab/Rating";

const RatingItem = (props: any) => {
  return (
    <div className="ratingstar__container">
      <div>Academics</div>
      <div>
        {" "}
        <Rating
          name="simple-controlled"
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
      </div>
    </div>
  );
};
export { RatingItem };
