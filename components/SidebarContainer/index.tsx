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

const SidebarContainer = ({ totalCourse, totalStudents, description, top_courses,average_fee,graduation_percentage,placement_percentage}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__inner inner">
        <div className="content-with-sidebar">
          <CollegeDetailsBlock 
            totalStudents = {totalStudents}
            totalCourse = {totalCourse}
            average_fee={average_fee}
            graduation_percentage={graduation_percentage}
            placement_percentage = {placement_percentage}
          />
          <CollegeOverview 
            // description = {description}
          />
          
          <FeeStructure />
          <Newsletter />
          {/* <RatingAndReview /> */}
          <CollegeGallery />
          <AdmissionProcess />
          {/* <StudentQuestionAnswer /> */}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export { SidebarContainer };
