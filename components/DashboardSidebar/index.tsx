import React from "react";
import StickyBox from "react-sticky-box";
import { DashboardSidebarTab } from "../DashboardSidebarTab";

const DashboardSidebar = () => {
  return (
    <StickyBox>
      <div className="dashboard-sidebar">
        <DashboardSidebarTab title="DashBoard" />
        <DashboardSidebarTab title="Student" />
        <DashboardSidebarTab title="Result" />
        <DashboardSidebarTab title="Latest Update" />
        <DashboardSidebarTab title="Application Status" />
        <div className="dashboard-sidebar__logout">
          LogOut
      </div>
      </div>
    </StickyBox>
  );
};

export { DashboardSidebar };
