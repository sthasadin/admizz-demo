import React from "react";
import renderHTML from "react-render-html";

const CourseOutline = ({ data }) => {
  console.log(data);

  return (
    <div id="outline" className="course-outline">
      <div className="title-content">
        <div className="title-text">Course outline</div>
        <div className="title-date">Updated On: 20 Nov, 2021</div>
      </div>

      <div className="course-syallbus-container">
        <div className="course-title">{data?.name} Course Syallbus</div>

        <div className="syallbus-container">
          {renderHTML(data?.course_outline)}
        </div>
      </div>
    </div>
  );
};

export { CourseOutline };
