import Head from "next/head";
import React, { useEffect } from "react";
import { CollegeHeader } from "../../components/CollegeHeader";
import { Submenu } from "../../components/Submenu";
import { SidebarContainer } from "../../components/SidebarContainer";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { useDispatch, useSelector } from "react-redux";
// import { getCollageDetail } from "../../store/Action/collageDetail.action";
import { useRouter } from "next/router";
import { getCollege } from "../../store/Action/college.action";

const Home = () => {
  const dispatch = useDispatch();
  const {
    name,
    address,
    college_logo,
    estd_year,
    total_students,
    total_course,
    description,
    top_courses,
    average_fee,
    graduation_percentage,
    placement_percentage,
  } = useSelector((state) => state.college.college);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // dispatch(getCollageDetail(slug))
    dispatch(getCollege(slug));
  }, []);

  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - College</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@800&display=swap"
          rel="stylesheet"
        />
        <Navbar />
      </Head>
      <main className="main">
        <CollegeHeader
          name={name}
          collageLogo={college_logo}
          address={address}
          estblished={estd_year}
        />
        <Submenu />
        <SidebarContainer
          description={description}
          totalStudents={total_students}
          totalCourse={total_course}
          top_courses={top_courses}
          average_fee={average_fee}
          graduation_percentage={graduation_percentage}
          placement_percentage={placement_percentage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
