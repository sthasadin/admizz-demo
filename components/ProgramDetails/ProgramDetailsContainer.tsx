import React from "react";
import { ProgramOverview } from "./ProgramDetails/ProgramOverview";
import { CourseOutline } from "./ProgramDetails/CourseOutline";
import { Newsletter } from "../Newsletter";
import { AdmissionProcess } from "../AdmissionProcess";
import { CourseSideBar } from "./ProgramDetails/CourseSideBar";

const ProgramDetailsContainer = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__inner section-wrapper">
        <div className="content-with-sidebar">
          <ProgramOverview />
          <CourseOutline />
          <Newsletter />
          <AdmissionProcess />

          {/* <StudentQuestionAnswer /> */}
        </div>
        <CourseSideBar />
      </div>
    </div>
  );
};

export { ProgramDetailsContainer };
