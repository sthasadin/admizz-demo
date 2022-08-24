import React from "react";

const SimilarCoursesList = ({ studycourse }) => {
  return (
    <div className="Similar-courses-list">
      <div className="courses-title-container">
        <div className="Similar-list-title">{studycourse?.name}</div>
        <div className="similar-list-course">{studycourse?.courselevel?.name}</div>
      </div>
      <div className="course-detail-container">
        {/* <div className="course-fee">Fee: Rs {studycourse.fee}</div> */}
        <div className="course-year">{studycourse?.duration}</div>
        <div className="course-review">{studycourse?.exam_type}</div>
      </div>
    </div>
  );
};

export { SimilarCoursesList };
