import React, { FC } from "react";
import { CollegesCard } from "./collegesCard";
import { CallToAction } from "../Button/callToAction";
import Carousel from "../FeaturedCollegeCarousel";
import Link from "next/link";

interface CollegeProps {
  collegeList: Array<any>;
}

const CollegesBlock: FC<CollegeProps> = ({ collegeList }) => {
  return (
    <div className="collegesBlock">
      <div className="collegesBlock__inner section-wrapper">
        <div className="collegesBlock__heading block-heading">
          featured institutions
        </div>
        <div className="collegesBlock__title block-title">
          Find The Best Institution in <span>The World</span>
        </div>
        <div className="collegeBlock_list">
          <Carousel data={collegeList} />
        </div>
        <div className="loadmore-container">
          <Link href="/colleges">
            <CallToAction>Explore more Colleges</CallToAction>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CollegesBlock };
