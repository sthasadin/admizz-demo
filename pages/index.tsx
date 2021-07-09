import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../store/Action/allCollage.action";
import { getBlogs } from "../store/Action/blog.action";
import { About } from "../components/About";
import { BlogList } from "../components/BlogList";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);
  useEffect(() => {
    dispatch(getBlogs("All"));
  }, []);

  const { collegeList } = useSelector((state) => state.allCollege);
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <Layout title="Home" stickyBar={true}>
      <Introduction />

      <About />
      <Merits />
      <Us college={collegeList[1]} blog={blogs[blogs?.length - 1]} />

      <Statistics />
      <FiveSteps />
      <CollegesBlock collegeList={collegeList} />
      <CollegeFinder />
      <Testimonial />
      <BlogList />
      <Teams />
    </Layout>
  );
}
