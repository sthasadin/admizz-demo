import React from "react";
import { CommentReply } from "./comment-reply";
import { Comments } from "./comments";

const StudentQuestionAnswer = (props: any) => {
  return (
    <div id="qna" className="rating-review">
      <div className="rating-review__title-wrap">
        <div className="rating-review__title">QUESTIONS AND ANSWERS</div>
      </div>

      <div className="rating-review__rating__header border-bottom">
        <div className="rating-review__rating__left">
          <div className="rating-review__rating__title">
            Student Questions and Answers
          </div>
        </div>
        <div className="rating-review__rating__right">
          <div className="rating-review__cta">
            <span>Sort By</span>Most Helpful
          </div>
        </div>
      </div>

      <Comments />
      <Comments />
      <CommentReply />
      <Comments />
    </div>
  );
};

export { StudentQuestionAnswer };
