import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getColleges } from "../../../store/Action/college.action";
import moment from "moment";

import renderHTML from "react-render-html";

const ProgramOverview = ({ data, collegeBarSticky }) => {
  const dispatch = useDispatch();
  const collegeList = useSelector((state: any) => state.college.colleges);

  React.useEffect(() => {
    dispatch(getColleges());
  }, []);

  return (
    <div className={`program-overview section-container `} id="overview">
      <div className="title-content">
        <div className="title-text">Overview</div>
        <div className="title-date">Updated On: {moment(data?.createdAt).format("YYYY MMM DD")}</div>
      </div>
      <div className="overview-text-description">
        {renderHTML(data?.overview)}
      </div>
      <div className="course-highlights">
        <div className="course-title">{data?.name} Highlights</div>
        <div className="course-highlights-container">
          <div className="content-left">
            <div className="content-left-text">Level</div>
            <div className="content-left-text">Duration</div>
            <div className="content-left-text">Exam Type</div>

            <div className="content-left-text">Average Initial Salary</div>
            {/* <div className="content-left-text">Eligibility</div> */}
          </div>
          <div className="content-right">
            <div className="content-right-text">
              {data?.courselevel?.name == "postgraduate"
                ? "Post Graduate"
                : data?.courselevel?.name == "undergraduate"
                ? "Under Graduate"
                : data?.courselevel?.name}
            </div>
            <div className="content-right-text">{data?.duration}</div>
            <div className="content-right-text">{data?.exam_type}</div>

            <div className="content-right-text">{data?.average_salary}</div>
            {/* <div className="content-right-text">{data?.eligibility}</div> */}
          </div>
        </div>
      </div>

      <div className="admission-container" id="similar-colleges">
        <div className="course-title">Similar Colleges</div>
        <div className="collegeBlock_list">
          {/* <Carousel data={collegeList.slice(0, 6)} /> */}
        </div>
      </div>
    </div>
  );
};

export { ProgramOverview };
