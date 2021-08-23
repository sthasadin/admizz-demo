import React from "react";
import { ProgramOverview } from "./ProgramDetails/ProgramOverview";
import { CourseOutline } from "./ProgramDetails/CourseOutline";
import { Newsletter } from "../Newsletter";
import { CareerOption } from "./ProgramDetails/CareerOptions";
import { CourseSideBar } from "./ProgramDetails/CourseSideBar";

const ProgramDetailsContainer = ({ data }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__inner section-wrapper">
        <div className="content-with-sidebar">
          <ProgramOverview data={data} />
          <CourseOutline data={data} />
          <Newsletter />
          <CareerOption data={data} />

          {/* <StudentQuestionAnswer /> */}
        </div>
        <CourseSideBar />
      </div>
    </div>
  );
};

export { ProgramDetailsContainer };
