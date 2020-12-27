import React from "react";
import { CollegesCard } from "./collegesCard";

const CollegesBlock = () => {
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
          <CollegesCard />
          <CollegesCard />
          <CollegesCard />
          <CollegesCard />
        </div>
      </div>
    </div>
  );
};

export { CollegesBlock };
