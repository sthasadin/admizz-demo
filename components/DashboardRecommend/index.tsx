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
      <div className="dashboard-recommend__title">Recommended Colleges</div>

      <div className="dashboard-recommend__collegeList">
        {loader && <CollegeCardLoader count={4} />}
        {!loader &&
          collegeList &&
          collegeList.slice(0, 4).map((college: any, i) => {
            return <CollegesCard {...college} key={i} />;
          })}
      </div>
    </div>
  );
};

export { DashboardRecommend };
