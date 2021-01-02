import React from "react";
import { CollegeDetailsBlock } from "../CollegeDetailsBlock";
import { CollegeOverview } from "../CollegeOverview";
import { Sidebar } from "../Sidebar";

const SidebarContainer = (props: any) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__inner inner">
        <div className="content-with-sidebar">
          <CollegeDetailsBlock />
          <CollegeOverview />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export { SidebarContainer };
