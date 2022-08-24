import React from "react";

import { CallToAction } from "../../Button/callToAction";
import { SimilarCourses } from "./SimilarCourses";
import NewsOnCollege from "../../NewsOnCollege";
import { TrendingCourses } from "../../TrendingCourses";
import Link from "next/link";

const CourseSideBar = ({ data, collegeBarSticky }) => {
  return (
    <aside className={`sidebar `}>
      <Link href={`/dashboardbasicinfo/apply`}>
        <CallToAction className="filled full-width">
          Apply for this course
        </CallToAction>
      </Link>

      <SimilarCourses data={data} />
      <NewsOnCollege />
    </aside>
  );
};

export { CourseSideBar };
