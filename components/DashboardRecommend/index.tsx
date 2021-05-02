import React, { FC } from "react";
import { CollegesCard } from "../collegesBlock/collegesCard";

interface CollegeProps {
  collegeList: Array<any>;
}

const DashboardRecommend: FC<CollegeProps> = ({ collegeList }) => {
  return (
    <div className="dashboard-recommend">
      <div className="dashboard-recommend__title">Recommend Colleges</div>
      <div className="dashboard-recommend__collegeList">
        {collegeList &&
          collegeList.slice(0, 4).map((college: College, index) => {
            return <CollegesCard {...college} />;
          })}
      </div>
    </div>
  );
};

export { DashboardRecommend };
