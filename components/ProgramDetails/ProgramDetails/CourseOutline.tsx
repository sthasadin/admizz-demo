import React from "react";
import { Syllabus } from "./syllabus";
import renderHTML from "react-render-html";

const CourseOutline = ({ data }) => {
  // const data = [
  //   {
  //     semester: "1",
  //     courses: [
  //       " Business Communication",
  //       "Financial Accounting",
  //       "Human Resource Management",
  //       "Information Technology Management",
  //       "Managerial Economics",
  //       "Marketing Management",
  //       "Organizational Behaviour",
  //       "Quantitative Methods",
  //     ],
  //   },
  //   {
  //     semester: "2",
  //     courses: [
  //       "Economic Environment of Business",
  //       "Financial Management",
  //       "Management Accounting",
  //       "Management of Information System",
  //       "Management Science",
  //       "Marketing Research",
  //       "Organization Effectiveness & Change",
  //       "Production & Operations Management",
  //     ],
  //   },
  //   {
  //     semester: "3",
  //     courses: [
  //       "Business Ethics & Corporate Social Responsibility",
  //       "Legal Environment of Business",
  //       "Strategic Analysis",
  //     ],
  //   },
  //   {
  //     semester: "4",
  //     courses: [
  //       "International Business Environment",
  //       "Project Study",
  //       "Strategic Management",
  //     ],
  //   },
  // ];

  return (
    <div id="outline" className="course-outline">
      <div className="title-content">
        <div className="title-text">Course outline</div>
        <div className="title-date">Updated On: 20 Nov, 2021</div>
      </div>

      <div className="course-syallbus-container">
        <div className="course-title">{data?.name} Course Syallbus</div>
        {/* <div className="course-syallbus-detail">
          Syllabus of MBA for first two semesters will be same for all the
          specializations. The third semester will contain subjects related to
          the specialization chosen by the candidate.
        </div> */}
        <div className="syallbus-container">{renderHTML(data?.overview)}</div>
      </div>
    </div>
  );
};

export { CourseOutline };
