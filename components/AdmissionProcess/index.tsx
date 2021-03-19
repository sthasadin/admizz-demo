import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import schlorship from "../../public/scholarship.png";
import { ScholarshipOption } from "./schlorshipOption";

const AdmissionProcess = () => {
  const admission = useSelector(
    (state) => state.college.college?.addmission_process
  );
  const scholarships = useSelector(
    (state) => state.college.college?.scholarships
  );

  {
    return (
      <div id="admission" className="admission-process">
        <div className="admission-process__inner">
          <div className="admission-process__title">Admission Process</div>
          <div className="admission-process__heading">{admission?.title}</div>
          <div className="admission-process__start">
            {/* Application Open for Jan Session: */}
            <span>
              {" "}
              Start Date: {moment(admission?.start).format("DD MMM YYYY")} / End
              Date: {moment(admission?.end).format("DD MMM YYYY")}
            </span>
          </div>
          <div className="admission-process__desc">
            {admission?.description}
          </div>
          <div className="admission-process__heading">Scholarship Options</div>
          <div className="admission-process__list">
            {scholarships.map((scholarship) => {
              return <ScholarshipOption image={scholarship} />;
            })}

            {/* <ScholarshipOption image={schlorship} title="Study In India" />
            <ScholarshipOption
              image={schlorship}
              title="Scholarship Scheme 2"
            />
            <ScholarshipOption
              image={schlorship}
              title="Scholarship Scheme 2"
            />
            <ScholarshipOption
              image={schlorship}
              title="Scholarship Scheme 2"
            /> */}
          </div>
        </div>
      </div>
    );
  }
};

export { AdmissionProcess };
