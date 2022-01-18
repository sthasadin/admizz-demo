import React from "react";
import Layout from "../../layouts";
import { CounselingStepper } from "../../components";

const FreeCounseling = () => {
  return (
    <Layout title="Booking" stickyBar={true}>
      <div className="free-counseling">
        <div className="free-counseling__container">
          <div className="free-counseling__header">
            Book a Free Counselling Session
          </div>
          <hr className="free-counseling__divider" />
          <CounselingStepper />
        </div>
      </div>
    </Layout>
  );
};

export default FreeCounseling;
