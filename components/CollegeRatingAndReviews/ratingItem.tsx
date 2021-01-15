import React from "react";

const RatingItem = (props: any) => {
  return (
    <div className="rating-review__rating__item">
      <div className="rating-review__rating__item__icon">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 37.5H10C9.33716 37.4993 8.70166 37.2357 8.23296 36.767C7.76427 36.2983 7.50066 35.6628 7.5 35V5C7.50066 4.33716 7.76427 3.70166 8.23296 3.23296C8.70166 2.76427 9.33716 2.50066 10 2.5H30C30.6628 2.50066 31.2983 2.76427 31.767 3.23296C32.2357 3.70166 32.4993 4.33716 32.5 5V25.7725L26.25 22.6475L20 25.7725V5H10V35H30V30H32.5V35C32.499 35.6627 32.2353 36.298 31.7667 36.7667C31.298 37.2353 30.6627 37.499 30 37.5ZM26.25 19.8525L30 21.7275V5H22.5V21.7275L26.25 19.8525Z"
            fill="#2D9CDB"
          />
        </svg>
      </div>
      <div className="rating-review__rating__item__info">
        <div className="rating-review__rating__item__rating">
          <span>9/</span>
          10
        </div>
        <div className="rating-review__rating__item__title">{props.title}</div>
      </div>
    </div>
  );
};
export { RatingItem };
