import React from "react";
import Layout from "../../layouts";
import { Footer } from "../../layouts/footer";
import CollegeCompare from "../../components/CollegeCompare";

const index = () => {
  return (
    <Layout title="College Compare" stickyBar={true}>
      <div className="container">
        <CollegeCompare />
        {/* <Footer /> */}
      </div>
    </Layout>
  );
};

export default index;
