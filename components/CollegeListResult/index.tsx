import React, { FC } from "react";

import SortImage from "../../public/SortImage.png";
import { CollegesCard } from "../collegesBlock/collegesCard";

interface CollegeProps {
  collegeList: Array<any>;
}

const CollegeListResult: FC<CollegeProps> = ({ collegeList }) => {
  return (
    <div className="college-list-result">
      <div className="college-list-result__titleContainer">
        <div className="college-list-result__titleText">
          Found{" "}
          <p className="college-list-result__titleTextNumber">
            {collegeList && collegeList.length}
          </p>{" "}
          Colleges
        </div>
        <div className="college-list-result__sortContainer">
          <p className="college-list-result__sortItemTitle">Sort By</p>
          <p className="college-list-result__sortItem">
            Popularity <img src={SortImage} />
          </p>
          <p className="college-list-result__sortItem">
            Ratings <img src={SortImage} />
          </p>
          <p className="college-list-result__sortItem">
            Fees <img src={SortImage} />
          </p>
        </div>
      </div>
      <div className="college-list-result__resultContainer">
        {collegeList &&
          collegeList.map((college: College, index) => {
            return (
              <div key={index} className="college-list-result__cardContainer">
                <CollegesCard {...college} />
              </div>
            );
          })}

        {/* <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div> */}
        {/* <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div>
        <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div>
        <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div>
        <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div> */}
      </div>
    </div>
  );
};

export { CollegeListResult };
