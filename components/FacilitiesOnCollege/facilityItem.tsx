import React from "react";

const FacilityItem = (props: any) => {
  return (
    <div className="facility-item">
      <div className="facility-item__icon">{props.icon}</div>
      <div className="facility-item__label">{props.label}</div>
    </div>
  );
};

export default FacilityItem;
