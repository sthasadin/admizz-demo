import React from "react";
import { AdmissionProcess } from "../AdmissionProcess";
import { CallToAction } from "../Button/callToAction";
import CollegeFacility from "../FacilitiesOnCollege";
import FacultyInformation from "../FacultyInformation";
import InternationalCollaboration from "../InternationalCollaboration";
import NewsOnCollege from "../NewsOnCollege";
import { TrendingCourses } from "../TrendingCourses";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <CallToAction className="filled full-width">Apply Now</CallToAction>
      <div className="sidebar__cta">
        <CallToAction className="transparent full-width">
          Add to Compare
        </CallToAction>
      </div>
      <FacultyInformation />
      <TrendingCourses />
      <NewsOnCollege />
      <CollegeFacility />
      <InternationalCollaboration />
    </aside>
  );
};

export { Sidebar };
