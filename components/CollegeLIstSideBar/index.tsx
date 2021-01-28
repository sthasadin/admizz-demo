import React from "react";
import { CollegeListSelectedFilter } from "../CollegeListSelectedFilter";
import { SideBarNewsLetter } from "../SideBarNewsLetter";
import { CollegeListSelectedStream } from "../CollegeListSelectedStream";


const CollegeListSideBar = () => {
  return (
    <div className="college-list-side-bar">
      <div className="college-list-side-bar__titleContainer">
        <p className="college-list-side-bar__titleText">Filter</p>
        <p className="college-list-side-bar__resetTitle">Reset Filter</p>
      </div>
      <CollegeListSelectedFilter />
      <CollegeListSelectedStream />
      <CollegeListSelectedStream />
      <SideBarNewsLetter />
    </div>
  );
}; 

export { CollegeListSideBar };
