import React from "react";
import { Footer } from "../../layouts/footer";
import CollegeCompare from "../../components/CollegeCompare";

const index = () => {
  return (
    <>
      <div className="container">
        <CollegeCompare />
        <Footer />
      </div>
    </>
  );
};

export default index;
