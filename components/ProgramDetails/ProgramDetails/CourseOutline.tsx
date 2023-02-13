import React from "react";
import renderHTML from "react-render-html";
import moment from "moment";

const CourseOutline = ({ data }) => {
  return (
    <div id="outline" className="course-outline">
      <div className="title-content">
        <div className="title-text">Course outline</div>
        <div className="title-date">
          Updated on:{moment(data?.updatedAt).format("YYYY MMM DD")}
        </div>
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
