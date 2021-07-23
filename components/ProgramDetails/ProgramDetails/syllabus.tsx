import React from "react";

const Syllabus = ({ data }) => {
  return (
    <div className="syllabus-container">
      <div className="syllabus-title">Semester {data.semester}</div>
      <div className="course-container">
        {data.courses.map((course, i) => {
          return (
            <div className="course-list" key={i}>
              {course}
            </div>
          );
        })}

        {/* <div className="course-list">Business Communication Financial</div>
        <div className="course-list">Business Communication Financial</div>
        <div className="course-list">Business Communication Financial</div>
        <div className="course-list">Business Communication Financial</div> */}
      </div>
    </div>
  );
};

export { Syllabus };
