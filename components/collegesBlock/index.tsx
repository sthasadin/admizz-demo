import React, { FC } from "react";
import { CollegesCard } from "./collegesCard";

interface CollegeProps {
  collegeList: Array<any>;
}

const CollegesBlock: FC<CollegeProps> = ({ collegeList }) => {
  return (
    <div className="collegesBlock">
      <div className="collegesBlock__inner">
        <div className="collegesBlock__heading block-heading">
          featured college
        </div>
        <div className="collegesBlock__title block-title">
          Find The Best College in <span>INDIA</span> for Study
        </div>
        <div className="collegesBlock__list">
        {collegeList &&
          collegeList.slice(0,4).map((college: College, index) => {
            return (
                <CollegesCard {...college} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CollegesBlock };
