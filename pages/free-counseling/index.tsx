import React from "react";
import Layout from "../../layouts";
import { CounselingStepper } from "../../components";

const FreeCounseling = () => {
  return (
    <Layout title="Booking">
      <div className="free-counseling">
        <div className="free-counseling__container">
          <div className="free-counseling__header">
            Book a Free Counseling Session
          </div>
          <hr className="free-counseling__divider" />
          <CounselingStepper />
        </div>
      </div>
    </Layout>
  );
};

export default FreeCounseling;
