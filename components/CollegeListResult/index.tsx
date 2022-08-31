import React, { FC } from "react";

import { CollegesCard } from "../collegesBlock/collegesCard";
import { CollegeCardLoader } from "../SkeletonLoading/CollegeCardLoader";
import LazyLoad from "react-lazyload";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  loadMoreCollege,
}) => {
  const [showFinishMsg, setShowFinishMsg] = React.useState(false as boolean);
    const { collegesByLimit,totalCollegeCount } = useSelector((state: any) => state.college);

  const handleCloseSnackbar = () => {
    setShowFinishMsg(false);
  };
  return (
    <div className="college-list-result">
      <div className="college-list-result__titleContainer">
        <div className="college-list-result__titleText">
          Found{" "}
          <p className="college-list-result__titleTextNumber">
            {totalCollegeCount}
          </p>{" "}
          Colleges
        </div>
      
      </div>

      {loader ? (
        <div className="college-list-result-loader-container">
          <CollegeCardLoader
            count={9} 
           />
        </div>
      ):(
        <div className="college-list-result__resultContainer">
          {collegeList &&
            collegeList.map((college, i) => {
              return <CollegesCard {...college} key={i} />;
            })}
        </div>
      )}

      {/* <LazyLoad
        dataLength={collegeList?.length}
        loader={
          <div className="college-list-result-loader-container">
            <CollegeCardLoader count={3} />
          </div>
        }
        next={getMoreCollege}
        hasMore={loadMoreCollege == true ? true : false}
      > */}
      {/* </LazyLoad> */}

      <Snackbar
        open={showFinishMsg}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          End of Result
        </Alert>
      </Snackbar>
    </div>
  );
};

export { CollegeListResult };
