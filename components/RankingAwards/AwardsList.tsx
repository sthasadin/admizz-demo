import React from "react";
import award_logo from "../../public/award_logo.png";

const AwardsList = (props) => {
  const { name, logo } = props;
  return (
    <>
      <div className="award__content">
        <div className="award__logo">
          <img src={logo} style={{ maxWidth: "100px", maxHeight: "60px" }} />
        </div>
        {/* <div className="award__title">{name}</div> */}
      </div>
    </>
  );
};

export default AwardsList;
