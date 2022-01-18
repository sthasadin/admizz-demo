import React from "react";
import award_logo from "../../public/award_logo.png";

const AwardsList = ({ data }) => {
  return (
    <>
      <div className="award__content">
        <img src={data.logo} style={{ width: "100%",objectFit:'contain' }} />
        <div className="award__details">{data.title}</div>
      </div>
    </>
  );
};

export default AwardsList;
