import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import schlorship from "../../public/scholarship.png";
import { ScholarshipOption } from "./schlorshipOption";
import {RootState} from "../../store/store";

const AdmissionProcess = () => {
  const admission = useSelector((state:any) => state.college.college?.addmission_process
  );
  const scholarships = useSelector((state:any) => state.college.college?.scholarships
  );

  {
    return admission || scholarships?.length ? (
      <div id="admission" className="admission-process">
        <div className="admission-process__inner">
          {admission && (
            <Fragment>
              <div className="admission-process__title">ADMISSION PROCESS</div>
              <div className="admission-process__heading">
                {admission?.title}
              </div>
              <div className="admission-process__start">
                {/* Application Open for Jan Session: */}
                <span> Start Date : {admission?.start_date}</span>
              </div>
              <div className="admission-process__desc">
                {admission?.description}
              </div>
            </Fragment>
          )}

          {scholarships && scholarships?.length > 0 && (
          <div className="admission-process__heading">Scholarship Offered</div>
          )}
          <div className="admission-process__list">
            {scholarships ? (
              <>
                {scholarships?.slice(0, 6).map((scholarship, i) => {
                  return <ScholarshipOption data={scholarship} key={i} />;
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
