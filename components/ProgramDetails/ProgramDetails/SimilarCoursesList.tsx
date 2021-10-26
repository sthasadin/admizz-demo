import React from "react";

const SimilarCoursesList = ({ data }) => {
  return (
    <div className="Similar-courses-list">
      <div className="courses-title-container">
        <div className="Similar-list-title">{data.coursename}</div>
        <div className="similar-list-course">{data.eligibility}</div>
      </div>
      <div className="course-detail-container">
        <div className="course-fee">Fee: Rs {data.fee}</div>
        <div className="course-year">{data.year}</div>
        <div className="course-review">{data.review}</div>
      </div>
    </div>
  );
};

export { SimilarCoursesList };
