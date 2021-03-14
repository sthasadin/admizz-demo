import React from "react";
import award_logo from "../../public/award_logo.png";

const AwardsList = (props) => {
  const { name } = props;
  return (
    <>
      <div className="award__content">
        <div className="award__logo">
          <img src={award_logo} />
        </div>
        <div className="award__title">{name}</div>
      </div>
    </>
  );
};

export default AwardsList;
