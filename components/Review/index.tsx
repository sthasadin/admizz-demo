import React from "react";

const Review = (props: any) => {
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
        <div>
          <div className="review__item__header">
            <div className="review__item__header__left">
              <div className="review__item__name">James Franko</div>
              <div className="review__item__meta">
                <div className="review__item__branch">
                  Mechanical Engineering Student (2019 Batch) - 1 year ago
                </div>
              </div>
            </div>
            <div className="rating-review__rating">
              <span>9/</span>
              10
            </div>
          </div>
          <div className="review__item__comment">
            Overall its a good college. Pros: the faculty is decent (*at least
            when the mechanical department is being considered ) Most of the
            departments have accreditation by NABH (not sure), which is renewed
            every 3 years everything is available inside or near the campus
            teachers are profess ional and ready.. Show More
          </div>
          <div className="review__item__reaction">
            <div className="review__item__left">
              <div className="review__item__reaction__item">
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
                <div className="review__item__reaction__text">25</div>
              </div>
            </div>
            <a href="#" className="review__item__right">
              Read Full Review
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Review };
