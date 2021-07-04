import React, { FC } from "react";

import { CollegesCard } from "../collegesBlock/collegesCard";
import { CollegeCardLoader } from "../SkeletonLoading/CollegeCardLoader";

interface CollegeProps {
  collegeList: Array<any>;
  loader: boolean;
}

const DashboardRecommend: FC<CollegeProps> = ({ collegeList, loader }) => {
  return (
    <div className="dashboard-recommend">
      <div className="dashboard-recommend__title">Recommend Colleges</div>

      <div className="dashboard-recommend__collegeList">
        {loader && <CollegeCardLoader count={4} />}
        {collegeList &&
          collegeList.slice(0, 4).map((college: any, index) => {
            return <CollegesCard {...college} />;
          })}
      </div>
    </div>
  );
};

export { DashboardRecommend };
