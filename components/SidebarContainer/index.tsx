import React from "react";
import { AdmissionProcess } from "../AdmissionProcess";
import { CollegeDetailsBlock } from "../CollegeDetailsBlock";
import { FeeStructure } from "../CollegeFeeStructure";
import { CollegeGallery } from "../CollegeGallery";
import { CollegeOverview } from "../CollegeOverview";
import { RatingAndReview } from "../CollegeRatingAndReviews";
import { Newsletter } from "../Newsletter";
import { Sidebar } from "../Sidebar";
import { StudentQuestionAnswer } from "../StudentQuestionAnswer";

const SidebarContainer = (props: any) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__inner inner">
        <div className="content-with-sidebar">
          <CollegeDetailsBlock />
          <CollegeOverview />
          <FeeStructure />
          <Newsletter />
          <RatingAndReview />
          <CollegeGallery />
          <AdmissionProcess />
          <StudentQuestionAnswer />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export { SidebarContainer };
