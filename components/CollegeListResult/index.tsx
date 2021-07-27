import React, { FC } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import SortImage from "../../public/SortImage.png";
import { CollegesCard } from "../collegesBlock/collegesCard";
import { CollegeCardLoader } from "../SkeletonLoading/CollegeCardLoader";

interface CollegeProps {
  collegeList: Array<any>;
  loader: boolean;
  query?: any;
}

const CollegeListResult: FC<CollegeProps> = ({
  collegeList,
  loader,
  query,
}) => {
  return (
    <div className="college-list-result">
      {loader ? (
        <div
          className="college-list-result__titleContainer"
          style={{ paddingLeft: "10px" }}
        >
          <Skeleton animation="wave" width={"100%"} />
        </div>
      ) : (
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
              Popularity{" "}
              <img src={SortImage} alt=".." className="image-sort-icon" />
            </p>
            <p className="college-list-result__sortItem">
              Ratings{" "}
              <img src={SortImage} alt=".." className="image-sort-icon" />
            </p>
            <p className="college-list-result__sortItem">
              Fees <img src={SortImage} alt=".." className="image-sort-icon" />
            </p>
          </div>
        </div>
      )}
      <div className="college-list-result__resultContainer">
        {loader && <CollegeCardLoader count={10} />}
        {collegeList &&
          collegeList.map((college, index) => {
            return (
              <div key={index} className="college-list-result__cardContainer">
                <CollegesCard {...college} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { CollegeListResult };
