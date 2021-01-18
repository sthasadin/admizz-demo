import Head from "next/head";
import React from "react";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { CollegeHeader } from "../../components/CollegeHeader";
import { Submenu } from "../../components/Submenu";
import { SidebarContainer } from "../../components/SidebarContainer";

const CollegeProfile = () => {
  return (
    <>
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <Navbar />
        <CollegeHeader />
        <Submenu />
        <SidebarContainer />
      </Head>
      <Footer />
    </>
  );
};

export default CollegeProfile;
