import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../store/Action/allCollage.action";
import { About } from "../components/About";
import { CollegeFinder } from "../components/collegeFinder";
import { CollegesBlock } from "../components/collegesBlock";
import { FiveSteps } from "../components/FiveSteps/index";
import Introduction from "../components/Introduction";
import { Merits } from "../components/mertis";
import { Statistics } from "../components/statistics";
import { Teams } from "../components/Teams";

import { Testimonial } from "../components/Testimonial";

import { Us } from "../components/why-us";
import { Us2 } from "@/components/why-us2";
import { HowAdmizz } from "../components/HowAdmizzHelp";
import { HowAdmizzV2 } from "../components/HowAdmizzHelpV2";
import { WhyStudyAbroad } from "../components/whyAbroad";

import Layout from "../layouts/index";

export default function Home() {
  const { collegeList } = useSelector((state: any) => state.allCollege);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  return (
    <Layout title="Admission With Ease" stickyBar={true}>
      <Introduction />

      <Us2 college={collegeList.slice(0, 6)} />
      {/* <HowAdmizzV2 college={collegeList.slice(0, 6)}/> */}

      {/* <HowAdmizzV2 college={collegeList.slice(0, 6)} /> */}

      <About />
      {/* now location */}
      <WhyStudyAbroad />
      {/* now location */}

      {/* <Merits /> */}
      <Us college={collegeList.slice(0, 6)} />

      <Statistics />
      <FiveSteps />
      <CollegesBlock collegeList={collegeList.slice(0, 6)} />
      <CollegeFinder />
      <Testimonial />
      {/* <BlogList /> */}
      {/* <Teams data="" /> */}
    </Layout>
  );
}
