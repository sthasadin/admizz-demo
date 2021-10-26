import React from "react";

const ScholarshipOption = ({ data }) => {
  return (
    <div className="scholarship-item">
      <img src={data.logo} alt="" style={{ width: "100%" }} />
      <div className="scholarship-item__title">{data.title}</div>
    </div>
  );
};

export { ScholarshipOption };
