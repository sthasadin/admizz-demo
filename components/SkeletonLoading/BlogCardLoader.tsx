import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const BlogCardLoader = (props) => {
  return (
    <>
      <div className="blog-loader">
        {Array(props.count)
          .fill(0)
          .map((item, i) => {
            return (
              <div className="blog-loader-container">
                <Skeleton
                  variant="rect"
                  width={"100%"}
                  height={"100%"}
                  animation={false}
                />
                <div className="blog-loader-category">
                  <Skeleton
                    variant="rect"
                    width={"100%"}
                    height={"100%"}
                    animation="wave"
                  />
                </div>
                <div className="blog-loader-time-detail">
                  <Skeleton
                    variant="rect"
                    width={"30%"}
                    height={"8px"}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rect"
                    width={"30%"}
                    height={"8px"}
                    animation="wave"
                  />
                </div>
                <div className="blog-loader-detail">
                  <Skeleton
                    variant="rect"
                    width={"100%"}
                    height={"8px"}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rect"
                    width={"100%"}
                    height={"8px"}
                    animation="wave"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export { BlogCardLoader };
