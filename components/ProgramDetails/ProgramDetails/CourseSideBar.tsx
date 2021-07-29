import React from "react";

import { CallToAction } from "../../Button/callToAction";
import { SimilarCourses } from "./SimilarCourses";
import NewsOnCollege from "../../NewsOnCollege";
import { TrendingCourses } from "../../TrendingCourses";
import Link from "next/link";

const CourseSideBar = () => {
  return (
    <aside className="sidebar">
      <Link href={`/dashboardbasicinfo/Apply`}>
        <CallToAction className="filled full-width">
          Apply for this course
        </CallToAction>
      </Link>

      <SimilarCourses />
      <NewsOnCollege title="Subjects covered" />
    </aside>
  );
};

export { CourseSideBar };
