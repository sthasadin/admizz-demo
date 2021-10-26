import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";

const ReviewInput = ({ handleChange, onSubmit, loading, formError }: any) => {
  return (
    <div className="review">
      {/* <div className="review__item" style={{ width: "100%" }}> */}
      <div
        className="review__item__comment"
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <Input
          name={"comment"}
          onChange={handleChange}
          multiline
          placeholder={"Write your review"}
          errorMessage={formError.comment}
          error={!!formError.comment}
          margin={"0px 0px 16px 0px"}
          fullWidth
        />
        {/* <textarea
          name="comment"
          onChange={handleChange}
          placeholder="Write your review"
          rows={5}
          style={{ padding: "10px", outline: "none", width: "100%" }}
        /> */}
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
