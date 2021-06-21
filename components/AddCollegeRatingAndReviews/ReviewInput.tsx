import React from "react";
import { Button } from "../Button";

const ReviewInput = ({ handleChange, onSubmit, loading }: any) => {
  return (
    <div className="review">
      {/* <div className="review__item" style={{ width: "100%" }}> */}
      <div
        className="review__item__comment"
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <textarea
          name="comment"
          onChange={handleChange}
          placeholder="Write your review"
          rows={5}
          style={{ padding: "10px", outline: "none", width: "100%" }}
        />
      </div>
      <div>
        <Button
          disabled={loading}
          onClick={onSubmit}
          className="review__item__right"
          background="primary"
          // style={{ color: "white" }}
        >
          Submit
        </Button>
      </div>
    </div>
    // </div>
  );
};

export { ReviewInput };
