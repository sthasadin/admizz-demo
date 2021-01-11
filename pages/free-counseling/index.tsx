import React from "react";
import { Navbar } from "../../layouts/navbar";
import { CounselingStepper } from "../../components";

const FreeCounseling = () => {
  return (
    <div>
      <Navbar />
      <div className="free-counseling">
        <div className="free-counseling__container">
          <div className="free-counseling__header">
            Book a Free Counseling Session
          </div>
          <hr className="free-counseling__divider" />
          <CounselingStepper />
        </div>
      </div>
    </div>
  );
};

export default FreeCounseling;
