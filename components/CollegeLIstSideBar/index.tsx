import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";
import { SideBarNewsLetter } from "../SideBarNewsLetter";
import { CollegeListSelectedStream } from "../CollegeListSelectedStream";
import { CollegeListFilteredByCity } from "../CollegeListFilteredByCity";
import { FilteredByCity } from "../CollegeFilterList/FilteredByCity";
import { FilteredByState } from "../CollegeFilterList/FilteredByState";
import { FilteredByCountry } from "../CollegeFilterList/FilteredByCountry";

const CollegeListSideBar = ({
  resetFilter,
  allCoursesWithCounts,
  onSelecteCourse,
  selectedCourses,
  deSelectCourse,
  countryList,
  stateList,
  cityList,
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
      {/* <CollegeListFilteredByCity
        cityList={cityList}
        selectedCourses={selectedCourses}
        onSelecteCourse={onSelecteCourse}
      /> */}

      <FilteredByCountry
        countryList={countryList}
        selectedCourses={selectedCourses}
      />
      <FilteredByState
        stateList={stateList}
        selectedCourses={selectedCourses}
      />
      <FilteredByCity cityList={cityList} selectedCourses={selectedCourses} />

      <div className="college-list-side-bar__newsletterContainer">
        <SideBarNewsLetter />
      </div>
    </div>
  );
};

export { CollegeListSideBar };
