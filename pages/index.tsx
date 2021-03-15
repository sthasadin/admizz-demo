import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../store/Action/allCollage.action";
import { About } from "../components/About";
import { BlogList } from "../components/BlogList";
import { CollegeFinder } from "../components/collegeFinder";
import { CollegesBlock } from "../components/collegesBlock";
import { FiveSteps } from "../components/FiveSteps";
import { Introduction } from "../components/Introduction";
// import { Login } from "../components/Login";
import { Merits } from "../components/mertis";
// import { Register } from "../components/register";
import { Statistics } from "../components/statistics";
import { Teams } from "../components/Teams";
// import { Testimonial } from "../components/Testimonial";
import { Us } from "../components/why-us";
import { Footer } from "../layouts/footer";
import { Navbar } from "../layouts/navbar";
import { Topbar } from "../layouts/topbar";
import Carousel from "../components/Carousel";

export default function Home() {
  const [windowSize, setWindowSize] = React.useState({ width: undefined });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  console.log(windowSize.width);

  const { collegeList } = useSelector((state) => state.allCollege);

  return (
    <div className="container">
      {windowSize.width > 680 && <Topbar />}
      <Head>
        {/* console.log("asd")} */}
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="main">
        <Navbar windowsSize={windowSize.width} />
        <Carousel>
          <Introduction title="hello" />
          <Introduction title="world" />
          <Introduction title="helloworld" />
        </Carousel>
        <About />
        <Merits />
        <Us />

        <Statistics />
        <FiveSteps />
        <CollegesBlock collegeList={collegeList} />
        <CollegeFinder />
        {/* <Testimonial /> */}
        <BlogList />
        <Teams />
        {/* <Register />
        <Login /> */}
      </main>
      <Footer />
    </div>
  );
}
