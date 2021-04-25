import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getQnas, getReviews } from "../../store/Action/review.action";
import { Review } from "../Review";
import { RatingItem } from "./ratingItem";


const RatingAndReview = (props: any) => {
  const dispatch = useDispatch()
  const college_id = useSelector(state => state.college.college._id)
  useEffect(()=> {
    dispatch(getReviews(college_id))
    // dispatch(getQnas(college_id))
  },[college_id])
  // const seedReviews = () => {
  //   var batch = db.batch()
  //   let array = [{
  //   type:String,//enum[Academics, Accomodation, Faculty, Infrastructures, Placements, Social]
  //   // college:college,
  //   // student:student,
  //   // comment:String,
  //   // star:Number,//max 10
  //   // no_of_likes:[student],
  //   // no_of_dislikes:[student],
  //   isReported: Boolean//default false
  //   }]
  //   array.forEach((doc) => {
  //     var docRef = db.collection("review").doc(); //automatically generate unique id
  //     batch.set(docRef, doc);
  //   });
  //   batch.commit().then((data)=>{
  //     console.log(data)
  //   }).catch(err => {
  //     console.log(err)
  //   })

  // }
  // useEffect(()=> {
  // },[db])

  
  return (
    <div id="rating" className="rating-review">
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

      <Review />
      <Review />
      <Review />
    </div>
  );
};

export { RatingAndReview };
