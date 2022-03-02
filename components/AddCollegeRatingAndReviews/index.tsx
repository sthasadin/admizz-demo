import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, getReviews } from "../../store/Action/review.action";
import * as yup from "yup";
import { ReviewInput } from "./ReviewInput";
import { auth } from "../../firebase";
import { getAuthUser } from "@/store/Action/user.action";
import RatingModal from "./RatingModal";

interface CommentForm {
  comment: string;
}

const AddCollegeRatingAndReview = ({
  setIsAddReviewOpen,
  _getReviews,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [isRatingModal, setIsRatingModal] = React.useState(false);
  const [formError, setFormError] = useState({} as any);

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
  const college_id = useSelector((state: any) => state.college.college._id);
  const user = useSelector((state: any) => state.user.authUser);

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

  const validationSchema = yup.object().shape<CommentForm>({
    comment: yup.string().required("Review field shouldnot be empty!"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          comment: review.comment,
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  const handleAlertModal = (res) => {
    setIsRatingModal(res);
  };

  const onSubmit = async () => {
    const isValid = await validate();
    if (isValid) {
      handleAlertModal(true);
    }
  };

  const onSend = async () => {
    setLoading(true);
    if (user) {
      let reviewToBeSubmited = {
        ...review,
        by: {
          ...user,
        },
        college: college_id,
      };
      let res = await dispatch<any>(addReview(reviewToBeSubmited));
      if (res) {
        _getReviews(college_id);
      }
    }
    setLoading(false);
    setIsRatingModal(false);
    setIsAddReviewOpen(false);
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
        <div className="rating-review__title">ADD RATING AND REVIEWS</div>
        <div
          className="rating-review__cta"
          style={{ cursor: "pointer" }}
          onClick={() => setIsAddReviewOpen(false)}
        >
          Cancel
        </div>
      </div>

      <ReviewInput
        handleChange={handleChange}
        onSubmit={onSubmit}
        loading={loading}
        formError={formError}
      />

      
    </div>
  );
};

export { AddCollegeRatingAndReview };
