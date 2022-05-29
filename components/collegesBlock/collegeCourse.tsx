
import React from "react";

const CollegeCourse = ({ Courses }) => {

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="college-course">
      <div className="college-course__title">Courses</div>
      <div className="college-course__item-wrap">
        {Courses &&
          Courses.map((course: any, index: number) => {
            return (
              index < 3 && (
                <div className="college-course__item" key={index}>
                  
                  {truncate(course?.courseprogram?.name,16)}{" "}
                </div>
              )
            );
          })}

        <div className="college-course__pagination">
          {Courses && Courses?.length > 3
            ? Courses?.length - 3
            : Courses?.length}{" "}
          +
        </div>
      </div>
    </div>
  );
};

export { CollegeCourse };
