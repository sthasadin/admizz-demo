import { getComments } from "@/store/Action/Comment.action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Comment = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state: any) => state.blog);
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  return (
      <div>
          {comments.map((data,i)=>{
              return(
                <div className="review">
                <div className="review__item">
                  <div className="review__item__avatar">
                    <svg
                      width="55"
                      height="54"
                      viewBox="0 0 55 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse cx="27.2621" cy="27" rx="27.2621" ry="27" fill="#4F4F4F" />
                    </svg>
                  </div>
          
                  <div style={{ width: "100%" }}>
                    <div className="review__item__header">
                      <div className="review__item__header__left">
                        <div className="review__item__name">Comments</div>
                      </div>
                    </div>
                    <div className="review__item__comment">{data.comment} </div>
                    <div className="review__item__reaction">
                      <div className="review__item__left"></div>
                    </div>
                  </div>
                </div>
              </div>
              )
          }) }
   

    </div>
  );
};
export default Comment;
