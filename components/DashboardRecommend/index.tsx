import React from "react";
import { CollegesCard } from "../collegesBlock/collegesCard";

const DashboardRecommend = () => {
  return (
    <div className="dashboard-recommend">
      <div className="dashboard-recommend__title">
        Recommend Colleges
      </div>
      <div className="dashboard-recommend__collegeList">
        <CollegesCard />
        <CollegesCard />
        <CollegesCard />
        <CollegesCard />
      </div>
    </div>
  );
};

export { DashboardRecommend };
