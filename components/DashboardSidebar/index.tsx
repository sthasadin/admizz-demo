import React from "react";
import { DashboardSidebarTab } from "../DashboardSidebarTab";

const DashboardSidebar = () => {
  return (
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
  );
}; 

export { DashboardSidebar };
