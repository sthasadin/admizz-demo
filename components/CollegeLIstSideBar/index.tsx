import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";
import { SideBarNewsLetter } from "../SideBarNewsLetter";
import { CollegeListSelectedStream } from "../CollegeListSelectedStream";

const CollegeListSideBar = ({resetFilter}) => {
  return (
    <div className="college-list-side-bar">
      <div className="college-list-side-bar__titleContainer">
        <p className="college-list-side-bar__titleText">Filter</p>
        <p className="college-list-side-bar__resetTitle" onClick={resetFilter}>Reset Filter</p>
      </div>
      <CollegeListSelectedFilter />
      <CollegeListSelectedStream />
      <div className="college-list-side-bar__newsletterContainer">
        <SideBarNewsLetter />
      </div>
    </div>
  );
}; 

export { CollegeListSideBar };
