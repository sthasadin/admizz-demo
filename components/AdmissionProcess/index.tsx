import React, { Fragment } from "react";
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
    return admission || scholarships?.length ? (
      <div id="admission" className="admission-process">
        <div className="admission-process__inner">
          {admission && (
            <Fragment>
              <div className="admission-process__title">Admission Process</div>
              <div className="admission-process__heading">
                {admission?.title}
              </div>
              <div className="admission-process__start">
                {/* Application Open for Jan Session: */}
                <span>
                  {" "}
                  Start Date:{" "}
                  {moment(admission?.start_date).format("DD MMM YYYY")} / End
                  Date: {moment(admission?.end_date).format("DD MMM YYYY")}
                </span>
              </div>
              <div className="admission-process__desc">
                {admission?.description}
              </div>
            </Fragment>
          )}
          <div className="admission-process__heading">Scholarship Options</div>
          <div className="admission-process__list">
            {scholarships ? (
              <>
                {scholarships?.slice(0, 6).map((scholarship, i) => {
                  return (
                    <ScholarshipOption image={scholarship} key={i} count={i} />
                  );
                })}{" "}
              </>
            ) : null}
          </div>
        </div>
      </div>
    ) : null;
  }
};

export { AdmissionProcess };
