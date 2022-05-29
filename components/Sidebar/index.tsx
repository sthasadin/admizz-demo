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
import { useDispatch, useSelector } from "react-redux";
import { getCompareList } from "@/store/Action/college.action";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {college} = useSelector((state:any) => state.college);

  const handleClick=()=>{
  let clgSlug=college.college_slug
    localStorage.setItem('clgs',JSON.stringify([college]))
    router.push(`/comparecollege`)
  }
  let len = useMemo(() => {
    return Object.keys(college)?.length;
  }, [college]);

  return len > 10 ? (
    <aside className="sidebar">
      <Link href={`/dashboardbasicinfo/apply`}>
        <CallToAction className="filled full-width">Apply Now</CallToAction>
      </Link>
      <div className="sidebar__cta">
        <CallToAction
          className="full-width"
          onClick={() =>handleClick() }
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
