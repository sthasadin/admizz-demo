import React from "react";
import { FilterKeyword } from "../FilterKeyword";

const CollegeListSelectedFilter = ({selectedCourses,deSelectCourse}) => {
  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">Selected</p>
        <p className="college-list-selected-filter__filterAdd">+</p>
      </div>
      <div className="college-list-selected-filter__filterKeyContainer">
        {
          selectedCourses.map((course,i)=>{
            return (
              <FilterKeyword key={`${course}${i}`} title={course.toUpperCase()} deSelectCourse={deSelectCourse}/>
              )
            })
          }
        {/* <FilterKeyword title="ART" />
        <FilterKeyword title="DESIGN" />
        <FilterKeyword title="INFORMATION TECHNOLOGY" /> */}
      </div>
    </div>
  );
}; 

export { CollegeListSelectedFilter };
