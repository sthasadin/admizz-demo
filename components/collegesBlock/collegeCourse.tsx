
import React from "react";

const CollegeCourse = ({ Courses }) => {

  return (
    <div className="college-course">
      <div className="college-course__title">Courses</div>
      <div className="college-course__item-wrap">
        {Courses &&
          Courses.map((course: any, index: number) => {
            return (
              index < 3 && (
                <div className="college-course__item" key={index}>
                  {console.log('courseName',course)}
                  
                  {course?.courseprogram?.name}{" "}
                </div>
              )
            );
          })}

        <div className="college-course__pagination">
          {Courses && Courses.length > 3
            ? Courses?.length - 3
            : Courses?.length}{" "}
          +
        </div>
      </div>
    </div>
  );
};

export { CollegeCourse };
