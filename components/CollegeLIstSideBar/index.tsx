import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";

const CollegeListSideBar = () => {
  return (
    <div className="college-list-side-bar">
      <div className="college-list-side-bar__titleContainer">
        <p className="college-list-side-bar__titleText">Filter</p>
        <p className="college-list-side-bar__resetTitle">Reset Filter</p>
      </div>
      <CollegeListSelectedFilter />
    </div>
  );
}; 

export { CollegeListSideBar };
