import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";
import { SideBarNewsLetter } from "../SideBarNewsLetter";
import { CollegeListSelectedStream } from "../CollegeListSelectedStream";
import { CollegeListFilteredByCity } from "../CollegeListFilteredByCity";

const CollegeListSideBar = ({
  resetFilter,
  allCoursesWithCounts,
  onSelecteCourse,
  selectedCourses,
  deSelectCourse,
}) => {
  return (
    <div className="college-list-side-bar">
      <div className="college-list-side-bar__titleContainer">
        <p className="college-list-side-bar__titleText">Filter</p>
        <p className="college-list-side-bar__resetTitle" onClick={resetFilter}>
          Reset Filter
        </p>
      </div>
      <CollegeListSelectedFilter
        selectedCourses={selectedCourses}
        deSelectCourse={deSelectCourse}
      />
      <CollegeListSelectedStream
        allCoursesWithCounts={allCoursesWithCounts}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelecteCourse}
      />
      <CollegeListFilteredByCity
        allCoursesWithCounts={allCoursesWithCounts}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelecteCourse}
      />
      <div className="college-list-side-bar__newsletterContainer">
        <SideBarNewsLetter />
      </div>
    </div>
  );
};

export { CollegeListSideBar };
