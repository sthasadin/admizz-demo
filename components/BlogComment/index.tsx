import React from "react";
import { useSelector } from "react-redux";
import { Input } from "../Input";
import { Button } from "../../components";
import {RootState} from "../../store/store";

const index = (props) => {
  const [comment, setComment] = React.useState("");

  const user = useSelector((state:any) => state.user.authUser);

  const handleComment = () => {};

  return (
    <div className="blog-detail-content__commentContainer">
      <p className="blog-detail-content__commentTitle">Leave A Comment</p>
      <Input
        name={"query"}
        multiline
        placeholder={"Add additional query you have"}
        margin={"0px 0px 16px 0px"}
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button onClick={handleComment}>SUBMIT</Button>
    </div>
  );
};

export default index;
