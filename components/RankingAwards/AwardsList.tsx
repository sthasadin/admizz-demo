import React from "react";
import award_logo from "../../public/award_logo.png";

const AwardsList = (props) => {
  const { name, logo } = props;
  return (
    <>
      <div className="award__content">
        <img src={logo} style={{ width: "100%" }} />
        <div className="award__details">Award {props.count}</div>
      </div>
    </>
  );
};

export default AwardsList;
