import React from "react";
import renderHTML from "react-render-html";

const CareerOption = ({ data }) => {
  return (
    <div id="career-option" className="admission-process">
      <div className="admission-process__inner">
        <div className="admission-process__title">Career Options</div>
        <div className="course-syallbus-detail" style={{ fontSize: "14px" }}>
          {renderHTML(data?.carrer_options)}
        </div>
      </div>
    </div>
  );
};

export { CareerOption };
