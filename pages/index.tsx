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
      <About />
      <Merits />
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
