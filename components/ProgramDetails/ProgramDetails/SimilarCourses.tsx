import React from "react";
import { SimilarCoursesList } from "./SimilarCoursesList";

const SimilarCourses = () => {
  const data = [
    {
      coursename: "Chemical Engineering",
      eligibility: "UG",
      fee: "200K",
      year: "2 Years",
      review: "50 Reviews",
    },
    {
      coursename: "M.Tech",
      eligibility: "PG",
      fee: "200K",
      year: "1 Years",
      review: "500 Reviews",
    },
    {
      coursename: "MBA",
      eligibility: "UG",
      fee: "150K",
      year: "3 Years",
      review: "10 Reviews",
    },
    {
      coursename: "PHD Programs",
      eligibility: "UG",
      fee: "900K",
      year: "1 Years",
      review: "10 Reviews",
    },
  ];

  return (
    <div className="similar-courses">
      <div className="similar-courses-title">Similar to MBA</div>
      <div className="course-container">
        {data.map((data, i) => {
          return <SimilarCoursesList key={i} data={data} />;
        })}

        {/* <SimilarCoursesList />
        <SimilarCoursesList />
        <SimilarCoursesList /> */}
      </div>
      <div className="explore-all">Explore All Courses</div>
    </div>
  );
};

export { SimilarCourses };
