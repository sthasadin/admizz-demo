import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const CollegeCardLoader = (props: any) => {
  return (
    <>
      {Array(props.count)
        .fill(0)
        .map((item, i) => {
          return (
            <div className="college-card-skeleton-loader" key={i}>
              <div className="college-thumbnail">
                <Skeleton
                  variant="rect"
                  width={"100%"}
                  height={173}
                  animation="wave"
                />
                <div className="college-logo">
                  <Skeleton
                    variant="circle"
                    width={64}
                    height={64}
                    animation="wave"
                  />
                </div>
                <div className="card-line">
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={202}
                    height={2}
                  />

                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={30}
                    height={2}
                  />
                </div>
              </div>
              <div className="college-details">
                <Skeleton
                  variant="rect"
                  width={"100%"}
                  height={173}
                  animation="wave"
                />
                <div className="college-review-container">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={50}
                    height={10}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={50}
                    height={10}
                  />
                </div>
                <div className="college-line">
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={"100%"}
                    height={2}
                  />
                </div>
                <div className="college-course-details-container">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width="40%"
                    height={10}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width="50%"
                    height={10}
                  />
                </div>
                <div className="college-topcourse-details-container">
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width="100%"
                    height={10}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={"100%"}
                    height={10}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export { CollegeCardLoader };
