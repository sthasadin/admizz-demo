import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getColleges } from "../../../store/Action/college.action";

import renderHTML from "react-render-html";
import Carousel from "../../ProgramCollegeCarousel";

const ProgramOverview = ({ data }) => {
  const dispatch = useDispatch();
  const collegeList = useSelector((state: any) => state.college.colleges);

  React.useEffect(() => {
    dispatch(getColleges());
  }, []);

  return (
    <div className="program-overview section-container">
      <div className="title-content">
        <div className="title-text">Overview</div>
        <div className="title-date">Updated On: 20 Nov, 2021</div>
      </div>
      <div className="overview-text-description">
        {renderHTML(data?.overview)}
        {/* {data?.overview} */}
      </div>
      <div className="course-highlights" id="overview">
        <div className="course-title">{data?.name} Highlights</div>
        <div className="course-highlights-container">
          <div className="content-left">
            <div className="content-left-text">Level</div>
            <div className="content-left-text">Duration</div>
            <div className="content-left-text">Exam Type</div>
            <div className="content-left-text">
              Minimum Qualification Requirement
            </div>
            <div className="content-left-text">Average Initial Salary</div>
            <div className="content-left-text">Selection Process</div>
            <div className="content-left-text">
              Minimum Aggregate Score Requirement
            </div>
          </div>
          <div className="content-right">
            <div className="content-right-text">
              {data?.courselevel?.name == "postgraduate"
                ? "Master Degree"
                : data?.courselevel?.name == "undergraduate"
                ? "Bachelor Degree"
                : data?.courselevel?.name}
            </div>
            <div className="content-right-text">{data?.duration}</div>
            <div className="content-right-text">{data?.exam_type}</div>
            <div className="content-right-text">
              {data?.courselevel?.name == "postgraduate"
                ? "Master Degree"
                : data?.courselevel?.name == "undergraduate"
                ? "Bachelor Degree"
                : data?.courselevel?.name}
            </div>
            <div className="content-right-text">{data?.average_salary}</div>
            <div className="content-right-text">{data?.exam_type}</div>
            <div className="content-right-text">{data?.minimum_score}</div>
          </div>
        </div>
      </div>

      <div className="admission-container" id="similar-colleges">
        <div className="course-title">Similar Colleges</div>
        <div className="collegeBlock_list">
          <Carousel data={collegeList.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
};

export { ProgramOverview };
