import React from "react";
import Head from "next/head";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";

const collegeList = () => {
  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <Navbar />
      </Head>
      <main className="college-list">
        <div className="college-list__container">
          <div className="college-list__searchContainer">
            Search Bar
          </div>
          <div className="college-list__listContainer">
            <div className="college-list__sideBarContainer">
              <CollegeListSideBar />
          </div>
            <div className="college-list__collegeResultContainer">
              College Result
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default collegeList;
