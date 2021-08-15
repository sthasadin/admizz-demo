import React, { FC } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import SortImage from "../../public/SortImage.png";
import { CollegesCard } from "../collegesBlock/collegesCard";
import { CollegeCardLoader } from "../SkeletonLoading/CollegeCardLoader";
import InfiniteScroll from "react-infinite-scroll-component";

interface CollegeProps {
  collegeList: Array<any>;
  loader: boolean;
  query?: any;
  getMoreCollege?: any;
  totalCollegeCount?: any;
  loadMoreCollege: boolean;
}

const CollegeListResult: FC<CollegeProps> = ({
  collegeList,
  loader,
  getMoreCollege,
  query,
  totalCollegeCount,
  loadMoreCollege,
}) => {
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
            Popularity{" "}
            <img src={SortImage} alt=".." className="image-sort-icon" />
          </p>
          <p className="college-list-result__sortItem">
            Ratings <img src={SortImage} alt=".." className="image-sort-icon" />
          </p>
          <p className="college-list-result__sortItem">
            Fees <img src={SortImage} alt=".." className="image-sort-icon" />
          </p>
        </div>
      </div>

      {loader && <CollegeCardLoader count={9} />}

      <InfiniteScroll
        dataLength={collegeList.length}
        loader={<CollegeCardLoader count={3} />}
        next={getMoreCollege}
        hasMore={loadMoreCollege == true ? true : false}
      >
        <div className="college-list-result__resultContainer">
          {collegeList &&
            collegeList.map((college, i) => {
              return <CollegesCard {...college} key={i} />;
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export { CollegeListResult };
