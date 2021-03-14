import React from "react";
import Head from "next/head";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { Footer } from "../../layouts/footer";
import CollegeCompare from "../../components/CollegeCompare";

const index = () => {
  return (
    <>
      <div className="container">
        <Head>
          <Topbar />
          <title>Admizz - College Compare</title>
          <link rel="icon" href="favicon.svg" />
        </Head>
        <Navbar />

        <CollegeCompare />
        <Footer />
      </div>
    </>
  );
};

export default index;
