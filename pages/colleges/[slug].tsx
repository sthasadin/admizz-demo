import Head from "next/head";
import React, { useEffect } from "react";
import { CollegeHeader } from "../../components/CollegeHeader";
import { Submenu } from "../../components/Submenu";
import { SidebarContainer } from "../../components/SidebarContainer";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { useDispatch, useSelector } from 'react-redux';
import { getCollageDetail } from "../../store/Action/collageDetail.action";
import { useRouter } from "next/router";

const Home = ()  => {
  const dispatch = useDispatch()
  const { name, address, college_logo, estd_year, total_students, total_course, description, top_courses } = useSelector(state => state.collageDetails.collageDetails)
  const router = useRouter()
  const { slug } = router.query
  
  useEffect(() => {
    dispatch(getCollageDetail(slug))
  },[])
 

  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
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
          name = {name}
          collageLogo = {college_logo}
          address = {address}
          estblished = {estd_year}
        />
        <Submenu />
        <SidebarContainer 
          description = { description }
          totalStudents = {total_students}
          totalCourse = {total_course}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home