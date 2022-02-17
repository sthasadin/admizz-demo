import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";
import { SideBarNewsLetter } from "../SideBarNewsLetter";
import { FilteredByCity } from "../CollegeFilterList/FilteredByCity";
import { FilteredByState } from "../CollegeFilterList/FilteredByState";
import { FilteredByCountry } from "../CollegeFilterList/FilteredByCountry";
import { FilteredByCourseLevel } from "../CollegeFilterList/FilteredByCourseLevel";
import { FilteredByStream } from "../CollegeFilterList/FilteredByStream";

const CollegeListSideBar = ({
  resetFilter,

  setFilterObj,
  countryList,
  stateList,
  cityList,
  courseLevel,
  programName,
  handleStreamChange,
  filterObj,
  handleStateChange,
  handleCityChange,
  handleCountryChange,
  handleCourseChange,
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
        filterObj={filterObj}
        setFilterObj={setFilterObj}
      />

      <FilteredByStream
        programName={programName}
        handleStreamChange={handleStreamChange}
        filterObj={filterObj}
      />

      <FilteredByCourseLevel
        courseLevel={courseLevel}
        handleCourseChange={handleCourseChange}
        filterObj={filterObj}
      />

      <FilteredByCountry
        countryList={countryList}
        filterObj={filterObj}
        handleCountryChange={handleCountryChange}
      />
      <FilteredByState
        stateList={stateList}
        handleStateChange={handleStateChange}
        filterObj={filterObj}
      />
      <FilteredByCity
        cityList={cityList}
        handleCityChange={handleCityChange}
        filterObj={filterObj}
      />

      {/* <div className="college-list-side-bar__newsletterContainer">
        <SideBarNewsLetter />
      </div> */}
    </div>
  );
};

export { CollegeListSideBar };
