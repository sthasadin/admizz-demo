import React from "react";
import FacilityItem from "./facilityItem";
import { useDispatcher, useSelector } from "react-redux";

const CollegeFacility = () => {
  const facilities = useSelector((state) => state.college.college.facilities);

  return facilities?.length ? (
    <div className="college-facility">
      <div className="college-facility__inner">
        <div className="sidebar__title">Facilities</div>
        <div className="college-facility__list">
          {facilities.map((data, i) => {
            return (
              <FacilityItem icon={data.value} label={data.label} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
};
export default CollegeFacility;
