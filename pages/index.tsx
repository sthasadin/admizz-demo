import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../store/Action/allCollage.action";
import { About } from "../components/About";
import { BlogList } from "../components/BlogList";
import { CollegeFinder } from "../components/collegeFinder";
import { CollegesBlock } from "../components/collegesBlock";
import { FiveSteps } from "../components/FiveSteps";
import Introduction from "../components/Introduction";
import { Merits } from "../components/mertis";
import { Statistics } from "../components/statistics";
import { Teams } from "../components/Teams";
import { Testimonial } from "../components/Testimonial";

import { Us } from "../components/why-us";
import Layout from "../layouts/index";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  const { collegeList } = useSelector((state) => state.allCollege);

  return (
    <div className="container">
      <Layout>
        <Introduction />

        <About />
        <Merits />
        <Us />

        <Statistics />
        <FiveSteps />
        <CollegesBlock collegeList={collegeList} />
        <CollegeFinder />
        <Testimonial />
        <BlogList />
        <Teams />
      </Layout>
    </div>
  );
}
