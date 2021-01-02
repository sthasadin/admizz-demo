import React from "react";
import { RatingItem } from "./ratingItem";

const RatingAndReview = (props: any) => {
  return (
    <div className="rating-review">
      <div className="rating-review__title-wrap">
        <div className="rating-review__title">RATING AND REVIEWS</div>
        <div className="rating-review__cta">Add Your Review</div>
      </div>

      <div className="rating-review__rating__header">
        <div className="rating-review__rating__left">
          <div className="rating-review__rating__title">College Rating</div>
          <div className="rating-review__rating__subheading">
            Based on <span>17 Students</span> rating
          </div>
        </div>
        <div className="rating-review__rating__right">
          <div className="rating-review__rating__heading">Average Rating</div>
          <div className="rating-review__rating">
            <span>9/</span>
            10
          </div>
        </div>
      </div>

      <div className="rating-review__rating-wrap">
        <RatingItem title="Academics" />
        <RatingItem title="Accomodation" />
        <RatingItem title="Faculty" />
        <RatingItem title="Infrastructures" />
        <RatingItem title="Placements" />
        <RatingItem title="Social" />
      </div>

      <div className="rating-review__rating__header border-bottom">
        <div className="rating-review__rating__left">
          <div className="rating-review__rating__title">Student Reviews</div>
          <div className="rating-review__rating__subheading">
            Showing results for Most relevent reviews
          </div>
        </div>
        <div className="rating-review__rating__right">
          <div className="rating-review__cta">
            <span>Sort By</span>Most Helpful
          </div>
        </div>
      </div>
    </div>
  );
};

export { RatingAndReview };
