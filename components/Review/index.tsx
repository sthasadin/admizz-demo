import React from "react";
const Review = ({ review, addDisLike, addLike }: any) => {
  return (
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
              <div className="review__item__name">{review?.by?.fullName}</div>
           
            </div>
            <div className="rating-review__rating">
              <span>{review?.averageRating}/</span>
              10
            </div>
          </div>
          <div className="review__item__comment">{review?.comment}</div>
          <div className="review__item__reaction">
            <div className="review__item__left">
              <div
                onClick={() => addLike(review)}
                style={{ cursor: "pointer" }}
                className="review__item__reaction__item"
              >
                <div className="review__item__reaction__icon">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.41098 13.9999H4.08412V5.33325H3.41098C3.05392 5.33325 2.71149 5.47373 2.45901 5.72378C2.20654 5.97382 2.0647 6.31296 2.0647 6.66659V12.6666C2.0647 13.0202 2.20654 13.3593 2.45901 13.6094C2.71149 13.8594 3.05392 13.9999 3.41098 13.9999ZM14.1812 5.33325H9.46923L10.2245 3.08792C10.2919 2.88753 10.3102 2.67415 10.2781 2.46536C10.2459 2.25656 10.1641 2.05833 10.0394 1.88698C9.91467 1.71564 9.75065 1.57608 9.56083 1.47981C9.37101 1.38354 9.16081 1.33331 8.94755 1.33325H8.79609L5.43039 4.95859V13.9999H12.8349L15.4682 8.26925L15.5275 7.99992V6.66659C15.5275 6.31296 15.3856 5.97382 15.1332 5.72378C14.8807 5.47373 14.5383 5.33325 14.1812 5.33325Z"
                      fill="#2D9CDB"
                    />
                  </svg>
                </div>
                <div className="review__item__reaction__text">
                  {review?.noOfLikes}
                </div>
              </div>

              <div
                onClick={() => addDisLike(review)}
                style={{ cursor: "pointer" }}
                className="review__item__reaction__item"
              >
                <div className="review__item__reaction__icon">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.05184 2.00008H3.72498V10.6667H3.05184C2.69479 10.6667 2.35236 10.5263 2.09988 10.2762C1.84741 10.0262 1.70557 9.68704 1.70557 9.33341V3.33341C1.70557 2.97979 1.84741 2.64065 2.09988 2.39061C2.35236 2.14056 2.69479 2.00008 3.05184 2.00008ZM13.8221 10.6667H9.1101L9.86536 12.9121C9.93275 13.1125 9.95111 13.3259 9.91892 13.5346C9.88673 13.7434 9.80492 13.9417 9.68023 14.113C9.55553 14.2844 9.39152 14.4239 9.2017 14.5202C9.01188 14.6165 8.80168 14.6667 8.58841 14.6667H8.43696L5.07126 11.0414V2.00008H12.4758L15.1091 7.73075L15.1683 8.00008V9.33341C15.1683 9.68704 15.0265 10.0262 14.774 10.2762C14.5216 10.5263 14.1791 10.6667 13.8221 10.6667Z"
                      fill="#EB5757"
                    />
                  </svg>
                </div>
                <div className="review__item__reaction__text">
                  {review?.noOfDisLikes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Review };