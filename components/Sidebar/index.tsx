import React from "react";
import { CallToAction } from "../Button/callToAction";
import FacultyInformation from "../FacultyInformation";

const Sidebar = (props: any) => {
  return (
    <aside className="sidebar">
      <CallToAction className="filled full-width">Apply Now</CallToAction>
      <div className="sidebar__cta">
        <CallToAction className="transparent full-width">
          Add to Compare
        </CallToAction>
      </div>
      <FacultyInformation />
    </aside>
  );
};

export { Sidebar };
