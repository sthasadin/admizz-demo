import React, { FC } from "react";
import Carousel from "../../components/FeaturedCollegeCarousel";

interface CollegeProps {
  collegeList: Array<any>;
}

const TopUniversities: FC<CollegeProps> = ({ collegeList }) => {
  return (
    <div
      className="top-university-india"
      style={{ backgroundColor: "#F6F6F6", padding: "40px 0px" }}
    >
      <div className="collegesBlock">
        <div className="collegesBlock__inner section-wrapper">
          <div className="collegesBlock__heading block-heading">
            Universities
          </div>
          <div className="collegesBlock__title block-title">
            Some of the Top Universities in <span>INDIA</span>
          </div>
          <div className="collegeBlock_list">
            <Carousel data={collegeList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUniversities;
