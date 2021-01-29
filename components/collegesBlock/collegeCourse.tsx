import React from "react";

const CollegeCourse = ({ courses }) => {
  return (
    <div className="college-course">
      <div className="college-course__title">Top Courses</div>
      <div className="college-course__item-wrap">
        {courses &&
          courses.map((course: string, index: number) => {
            return (
              index < 3 && (
                <div className="college-course__item" key={index}>
                  {course}
                </div>
              )
            );
          })}

        <div className="college-course__pagination">
          {courses && courses.length - 3} +
        </div>
      </div>
    </div>
  );
};

export { CollegeCourse };
