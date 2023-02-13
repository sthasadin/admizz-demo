import React, { FC } from "react";

import { CollegesCard } from "../collegesBlock/collegesCard";
import { CollegeCardLoader } from "../SkeletonLoading/CollegeCardLoader";

import { getFavourites } from "../../store/Action/collegefavourite.action";

interface CollegeProps {
  collegeList: Array<any>;
}

const Favourites: FC<CollegeProps> = ({ collegeList }) => {
  return (
    <div className="dashboard-recommend">
      <div className="dashboard-recommend__title">Favourite Colleges</div>

      <div className="dashboard-recommend__collegeList">
        {collegeList &&
          collegeList.slice(0, 4).map((college: any, i) => {
            return <CollegesCard {...college.college} key={i} />;
          })}
      </div>
    </div>
  );
};

export { Favourites };
