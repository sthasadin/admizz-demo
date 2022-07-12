import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";

const ReviewInput = ({ handleChange, onSubmit, loading, formError }: any) => {
  return (
    <div className="review">
      <div
        className="review__item__comment"
        // style={{ width: "100%", marginBottom: "10px" }}
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
       
      </div>
      <div>
        <Button
          disabled={loading}
          onClick={onSubmit}
          className="review__item__right"
          background="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export { ReviewInput };
