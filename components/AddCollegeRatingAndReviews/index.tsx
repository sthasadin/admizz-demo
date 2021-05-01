import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, getReviews } from "../../store/Action/review.action";
import { ReviewInput } from "./ReviewInput";
import { RatingItem } from "./ratingItem";
import { auth } from "../../firebase";
import { getAuthUser } from "@/store/Action/user.action";
import RatingModal from "./RatingModal";
const AddCollegeRatingAndReview = ({
  setIsAddReviewOpen,
  _getReviews,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [isRatingModal, setIsRatingModal] = React.useState(false);

  const [review, setReview] = useState({
    academics: null,
    accomodation: null,
    faculty: null,
    infrastructures: null,
    placements: null,
    social: null,
    comment: "",
  });
  const dispatch = useDispatch();
  const college_id = useSelector((state) => state.college.college._id);
  const user = useSelector((state) => state.user.authUser);

  useEffect(() => {
    auth.currentUser && dispatch(getAuthUser(auth.currentUser.uid));
  }, [college_id, auth]);

  const handleChange = (e) => {
    if (e.target.name !== "comment") {
      setReview({
        ...review,
        [e.target.name]: Number(e.target.value) * 2,
      });
    } else {
      setReview({
        ...review,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAlertModal = (res) => {
    setIsRatingModal(res);
  };
  const onSubmit = () => {
    handleAlertModal(true);
    // setLoading(true);
    // if (user) {
    //   let reviewToBeSubmited = {
    //     ...review,
    //     by: {
    //       ...user,
    //     },
    //     college: college_id,
    //   };
    //   let res = await dispatch(addReview(reviewToBeSubmited));
    //   if (res) {
    //     _getReviews(college_id);
    //   }
    // }
    // setLoading(false);
  };

  const onSend = async () => {
    // return console.log(review);
    setLoading(true);
    if (user) {
      let reviewToBeSubmited = {
        ...review,
        by: {
          ...user,
        },
        college: college_id,
      };
      let res = await dispatch(addReview(reviewToBeSubmited));
      if (res) {
        _getReviews(college_id);
      }
    }
    setLoading(false);
    setIsRatingModal(false);
  };

  return (
    <div id="add-rating-college">
      <RatingModal
        handleAlertModal={handleAlertModal}
        isRatingModal={isRatingModal}
        handleChange={handleChange}
        onSend={onSend}
        review={review}
      />
      <div className="rating-review__title-wrap">
        <div className="rating-review__title">RATING AND REVIEWS</div>
        <div
          className="rating-review__cta"
          style={{ cursor: "pointer" }}
          onClick={() => setIsAddReviewOpen(false)}
        >
          Cancel
        </div>
      </div>

      {/* <div className="rating-review__rating__header">
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
      </div> */}

      {/* <div className="rating-review__rating-wrap">
        <RatingItem handleChange={handleChange} title="Academics" />
        <RatingItem handleChange={handleChange} title="Accomodation" />
        <RatingItem handleChange={handleChange} title="Faculty" />
        <RatingItem handleChange={handleChange} title="Infrastructures" />
        <RatingItem handleChange={handleChange} title="Placements" />
        <RatingItem handleChange={handleChange} title="Social" />
      </div> */}

      {/* <div className="rating-review__rating__header border-bottom">
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
      </div> */}

      <ReviewInput
        handleChange={handleChange}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export { AddCollegeRatingAndReview };
