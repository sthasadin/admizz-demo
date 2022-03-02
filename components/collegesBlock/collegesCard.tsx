import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AddCollegeRatingAndReview } from "../AddCollegeRatingAndReviews";
import { getReviews } from "../../store/Action/review.action";
import { CollegeCourse } from "./collegeCourse";

import { useRouter } from "next/router";

const CollegesCard = (college) => {
  const [reviews, setReviews] = React.useState(null);
  const [originalReviews, setOriginalReviews] = React.useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  function truncateString(str, num) {
    if (str?.toString().length > num) {
      return str?.toString().slice(0, num) + "K+";
    } else {
      return str;
    }
  }

  const truncateCourse = (str, num) => {
    if (str?.toString().length > num) {
      return str?.toString().slice(0, num) + "+";
    } else {
      return str;
    }
  };

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
    collegeReviews.averageRating = averageRating?.toFixed(1);
    setReviews(collegeReviews);
  };
  React.useEffect(() => {
    _getReviews(college?._id);
  }, []);

  return (
    <div className="colleges-card">
      <Link href={`colleges/${college?.college_slug}`}>
        <div className="colleges-card__inner">
          <div className="colleges-card__thumbnail">
            <div className="review-rating-container">
              <div className="review-title">
                {" "}
                {reviews?.averageRating !== "NaN"
                  ? "Reviews rating"
                  : "No review yet"}
              </div>
              {reviews?.averageRating && reviews?.averageRating !== "NaN" && (
                <div className="rating-container">
                  <img src="/heart.png" alt="..." className="like-icon" />
                  <span className="review-detail">
                    {reviews?.averageRating}{" "}
                  </span>
                  <span className="review-number">/ 10</span>
                </div>
              )}
            </div>
           <div className="college-image"
           style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)),
            url(${college.banner ? college?.banner: "/colleges.png"})`,
            objectFit:'contain',
            height:'100%'
                       
           }}>

           </div>
            {/* <img
              style={{ 
                background:'linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39))'

              }}
              className="college-image"
              
              src={college?.banner ? college?.banner : "/colleges.png"}
              alt="college"
            /> */}
            <div className="colleges-card__title-wrap">
              <div className="colleges-card__title">
                <Link href={`colleges/${college?.college_slug}`}>
                  {college?.name}
                </Link>
              </div>
              <div className="colleges-card__location">
                <img src="/location3.png" alt="location" />
                {college?.state}, {college?.city}
              </div>
            </div>
          </div>
          <div className="colleges-card__details">
            <div className="colleges-card__top">
              <div className="colleges-card__key-value-wrap">
                <div className="colleges-card__key-value">
                  <div className="colleges-card__key">ESTD:</div>
                  <div className="colleges-card__value">
                    {college?.estd_year}
                  </div>
                </div>
                <div className="colleges-card__key-value">
                  <div className="colleges-card__key">Type:</div>
                  <div className="colleges-card__value">Private</div>
                </div>
              </div>
              <div className="colleges-card__logo">
                <img src={college?.college_logo} alt="" />
              </div>
            </div>
            <div className="colleges-card__bottom">
              <div className="colleges-card__key-value-wrap lg">
                <div className="colleges-card__key-value lg">
                  <div className="colleges-card__key lg">Total Course:</div>
                  <div className="colleges-card__value lg">
                    {truncateCourse(college?.total_course, 2)}
                  </div>
                </div>
                {college?.total_students && (
                  <div className="colleges-card__key-value lg">
                    <div className="colleges-card__key lg">Total students:</div>
                    <div className="colleges-card__value lg">
                      {truncateString(college?.total_students, 2)}
                    </div>
                  </div>
                )}
              </div>
              {college?.top_courses && (
                <div className="colleges-card__course">
                  <CollegeCourse courses={college?.top_courses} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { CollegesCard };
