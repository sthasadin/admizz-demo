import React from "react";
import SortImage from "../../public/SortImage.png";
import { CollegesCard } from "../collegesBlock/collegesCard";

const CollegeListResult = () => {
  return (
    <div className="college-list-result">
      <div className="college-list-result__titleContainer">
        <p className="college-list-result__titleText">
          Found <p className="college-list-result__titleTextNumber">1680</p> Colleges
        </p>
        <div className="college-list-result__sortContainer">
          <p className="college-list-result__sortItemTitle">
            Sort By
          </p>
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
        <div className="college-list-result__cardContainer">
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
        </div>
        <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div>
        <div className="college-list-result__cardContainer">
          <CollegesCard />
        </div>
      </div>
    </div>
  );
};

export { CollegeListResult };
