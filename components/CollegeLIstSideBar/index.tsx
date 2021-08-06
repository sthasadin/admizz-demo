import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";
import { SideBarNewsLetter } from "../SideBarNewsLetter";
import { CollegeListSelectedStream } from "../CollegeListSelectedStream";
import { CollegeListFilteredByCity } from "../CollegeListFilteredByCity";
import { FilteredByCity } from "../CollegeFilterList/FilteredByCity";
import { FilteredByState } from "../CollegeFilterList/FilteredByState";
import { FilteredByCountry } from "../CollegeFilterList/FilteredByCountry";
import { FilteredByCourseLevel } from "../CollegeFilterList/FilteredByCourseLevel";
import { FilteredByStream } from "../CollegeFilterList/FilteredByStream";

const CollegeListSideBar = ({
  resetFilter,
  allCoursesWithCounts,
  onSelectedCourse,
  selectedCourses,
  deSelectCourse,
  countryList,
  stateList,
  cityList,
  courseLevel,
  programName,
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
      {/* <CollegeListSelectedStream
        allCoursesWithCounts={allCoursesWithCounts}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelectedCourse}
      /> */}
      {/* <CollegeListFilteredByCity
        cityList={cityList}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelecteCourse}
      /> */}

      <FilteredByStream
        programName={programName}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelectedCourse}
      />

      <FilteredByCourseLevel
        courseLevel={courseLevel}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelectedCourse}
      />

      <FilteredByCountry
        countryList={countryList}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelectedCourse}
      />
      <FilteredByState
        stateList={stateList}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelectedCourse}
      />
      <FilteredByCity
        cityList={cityList}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelectedCourse}
      />

      <div className="college-list-side-bar__newsletterContainer">
        <SideBarNewsLetter />
      </div>
    </div>
  );
};

export { CollegeListSideBar };
