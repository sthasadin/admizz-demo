import { auth } from "../../firebase";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getQnas,
  getReviews,
  updateReview,
} from "../../store/Action/review.action";
import Snackbar from "@material-ui/core/Snackbar";
import Rating from "@material-ui/lab/Rating";
import { AddCollegeRatingAndReview } from "../AddCollegeRatingAndReviews";
import { Review } from "../Review";
import { RatingItem } from "./ratingItem";
import { useRouter } from "next/router";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const RatingAndReview = (props: any) => {
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [originalReviews, setOriginalReviews] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state:any) => state.user.authUser);
  const college_id = useSelector((state:any) => state.college.college._id);
  const _getReviews = async (college_id) => {
    let res = await dispatch<any>(getReviews(college_id));
    setOriginalReviews(res);
    
    //make proper datastructure
    let collegeReviews: any = {
      length: res.length,
      ratings: {
        academics: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["academics"]) || 0), 0) /
            res.length
        ),
        accomodation: Math.ceil(
          res.reduce(
            (a, b) => Number(a) + (Number(b["accomodation"]) || 0),
            0
          ) / res.length
        ),
        faculty: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["faculty"]) || 0), 0) /
            res.length
        ),
        infrastructures: Math.ceil(
          res.reduce(
            (a, b) => Number(a) + (Number(b["infrastructures"]) || 0),
            0
          ) / res.length
        ),
        placements: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["placements"]) || 0), 0) /
            res.length
        ),
        social: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["social"]) || 0), 0) /
            res.length
        ),
      },
      all_reviews: res.map((r) => {
        return {
          id: r?.id,
          by: r?.by,
          comment: r?.comment,
          likesArray: r?.noOfLikes || [],
          disLikesArray: r?.noOfDisLikes || [],
          noOfLikes: r?.noOfLikes?.length || 0,
          noOfDisLikes: r?.noOfDisLikes?.length || 0,
          averageRating: Math.ceil(
            (Number(r.academics) +
              Number(r.accomodation) +
              Number(r.faculty) +
              Number(r.infrastructures) +
              Number(r.placements) +
              Number(r.social)) /
              6
          ),
          // noOfReports:r?.noOfReports?.length || 0
        };
      }),
    };
    let averageRating =
      (collegeReviews?.ratings?.academics +
        collegeReviews?.ratings?.accomodation +
        collegeReviews?.ratings?.faculty +
        collegeReviews?.ratings?.infrastructures +
        collegeReviews?.ratings?.placements +
        collegeReviews?.ratings?.social) /
      6;
    collegeReviews.averageRating = Math.ceil(averageRating);
    setReviews(collegeReviews);
    // setReviews(res)
  };
  useEffect(() => {
    _getReviews(college_id);
    // dispatch(getReviews(college_id))
  }, [college_id]);

  const openReviewScetion = () => {
    if (auth.currentUser) {
      setIsAddReviewOpen(true);
    } else {
      router.push("/login");
    }
  };

  const addLike = async (review) => {
    const user = auth.currentUser?.uid;
    let _review = originalReviews.find((r) => r.id === review.id);
    if (!review.likesArray.includes(user)) {
      _review.noOfLikes = [...review.likesArray, user];
      let id = _review.id;
      const newReview = { ..._review };

      if (newReview?.noOfDisLikes?.length > 0) {
        newReview.noOfDisLikes = newReview?.noOfDisLikes?.filter(
          (dislike) => dislike !== user
        );
      }
      delete newReview.id;
      await dispatch<any>(updateReview(newReview, id));
      _getReviews(college_id);
    }
  };
  const addDisLike = async (review) => {
    const user = auth.currentUser?.uid;
    let _review = originalReviews.find((r) => r.id === review.id);
    if (!review.disLikesArray.includes(user)) {
      _review.noOfDisLikes = [...review.disLikesArray, user];
      let id = _review.id;
      const newReview = { ..._review };
      newReview.noOfLikes = newReview?.noOfLikes?.filter(
        (likes) => likes !== user
      );
      delete newReview.id;
      await dispatch<any>(updateReview(newReview, id));
      _getReviews(college_id);
    }
  };

  return (
    <div id="rating" className="rating-review">
      <div className="rating-review__title-wrap">
        <div className="rating-review__title">RATING AND REVIEWS</div>
        <div
          className="rating-review__cta"
          style={{ cursor: "pointer" }}
          onClick={() => {
            openReviewScetion();
          }}
        >
          <a href="#add-rating-college">Add Your Review</a>
        </div>
      </div>

      <div className="rating-review__rating__header">
        <div className="rating-review__rating__left">
          <div className="rating-review__rating__title">College Rating</div>

          <div className="rating-review__rating__subheading">
            Based on <span>{reviews?.length} Students</span> rating
          </div>
        </div>
        <div className="rating-review__rating__right">
          <div className="rating-review__rating__heading">Average Rating</div>

          <Rating
            precision={0.5}
            value={reviews?.averageRating / 2 || 0}
            readOnly
          />
        </div>
      </div>

      <div className="rating-review__rating-wrap">
        <RatingItem
          title="Academics"
          rating={reviews?.ratings?.academics || 0}
        />
        <RatingItem
          title="Accomodation"
          rating={reviews?.ratings?.accomodation || 0}
        />
        <RatingItem title="Faculty" rating={reviews?.ratings?.faculty || 0} />
        <RatingItem
          title="Infrastructures"
          rating={reviews?.ratings?.infrastructures || 0}
        />
        <RatingItem
          title="Placements"
          rating={reviews?.ratings?.placements || 0}
        />
        <RatingItem title="Social" rating={reviews?.ratings?.social || 0} />
      </div>

      <div className="rating-review__rating__header border-bottom">
        <div className="rating-review__rating__left">
          <div className="rating-review__rating__title">Student Reviews</div>
          <div className="rating-review__rating__subheading">
            Showing results for Most relevent reviews
          </div>
        </div>
        {/* <div className="rating-review__rating__right">
          <div className="rating-review__cta">
            <span>Sort By</span>Most Helpful
          </div>
        </div> */}
      </div>

      {reviews?.all_reviews?.map((review) => (
        <Review
          key={review.id}
          addDisLike={addDisLike}
          addLike={addLike}
          review={review}
        />
      ))}

      {/* <Review />
      <Review />
      <Review /> */}
      {isAddReviewOpen && (
        <AddCollegeRatingAndReview
          setIsAddReviewOpen={setIsAddReviewOpen}
          _getReviews={_getReviews}
        />
      )}
    </div>
  );
};

export { RatingAndReview };
