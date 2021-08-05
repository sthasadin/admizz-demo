import React from "react";
import renderHTML from "react-render-html";

const ProgramOverview = ({ data }) => {
  console.log(data);
  return (
    <div className="program-overview section-container" id="overview">
      <div className="title-content">
        <div className="title-text">Overview</div>
        <div className="title-date">Updated On: 20 Nov, 2021</div>
      </div>
      <div className="overview-text-description">
        {renderHTML(data?.overview)}
        {/* {data?.overview} */}
      </div>
      <div className="course-highlights">
        <div className="course-title">MBA Highlights</div>
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

      <div className="admission-container">
        <div className="course-title">Easy Admission Process</div>
        <div className="course-start-date-container">
          <div className="course-start-content">
            Application Open for jan Session:
          </div>
          <div className="course-start-date">
            Start Date: 18dec, 2020 / End Date: 28 Dec, 2020
          </div>
        </div>
        <div className="course-description">
          By Karam Chand Thapar in 1956. Karam Chand Thapar, one the great
          captains of Indian Industry established this institute to provide
          close interaction with industry, and a strong emphasis on basic and
          applied research. The mission of the institution as embodied in the
          Trust Deed dated April 9, 1956. It was granted full autonomy and the
          status of deemed-to-be-university by the University Grants Commission
          in 1985.
        </div>
      </div>
    </div>
  );
};

export { ProgramOverview };
