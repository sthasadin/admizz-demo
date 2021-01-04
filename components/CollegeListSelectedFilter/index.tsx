import React from "react";
import { FilterKeyword } from "../FilterKeyword";

const CollegeListSelectedFilter = () => {
  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">Selected</p>
        <p className="college-list-selected-filter__filterAdd">+</p>
      </div>
      <div className="college-list-selected-filter__filterKeyContainer">
        <FilterKeyword />
        <FilterKeyword />
      </div>
    </div>
  );
}; 

export { CollegeListSelectedFilter };
