import React, { useMemo } from "react";
import { AdmissionProcess } from "../AdmissionProcess";
import { CallToAction } from "../Button/callToAction";
import CollegeFacility from "../FacilitiesOnCollege";
import FacultyInformation from "../FacultyInformation";
import InternationalCollaboration from "../InternationalCollaboration";
import NewsOnCollege from "../NewsOnCollege";
import { TrendingCourses } from "../TrendingCourses";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const router = useRouter();
  const college = useSelector((state) => state.college.college);
  let len = useMemo(() => {
    return Object.keys(college).length;
  }, [college]);
  return len > 10 ? (
    <aside className="sidebar">
      <Link href={`/dashboardbasicinfo/apply`}>
        <CallToAction className="filled full-width">Apply Now</CallToAction>
      </Link>
      <div className="sidebar__cta">
        <CallToAction
          className="full-width"
          onClick={() => router.push(`/comparecollege`)}
        >
          Add to Compare
        </CallToAction>
      </div>
      <FacultyInformation />
      <TrendingCourses />
      <NewsOnCollege title="College Covered on News" />
      <CollegeFacility />
      <InternationalCollaboration />
    </aside>
  ) : null;
};

export { Sidebar };
