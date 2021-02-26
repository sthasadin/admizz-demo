import React from "react";
import schlorship from "../../public/scholarship.png";
import { ScholarshipOption } from "./schlorshipOption";

const AdmissionProcess = () => {
  {
    return (
      <div id="admission" className="admission-process">
        <div className="admission-process__inner">
          <div className="admission-process__title">Admission Process</div>
          <div className="admission-process__heading">
            Easy Admission Process
          </div>
          <div className="admission-process__start">
            Application Open for Jan Session:
            <span>Start Date: 18 Dec, 2020 / End Date: 28 Dec, 2020</span>
          </div>
          <div className="admission-process__desc">
            by Karam Chand Thapar in 1956. Karam Chand Thapar, one the great
            captains of Indian Industry established this institute to provide
            close interaction with industry, and a strong emphasis on basic and
            applied research. The mission of the institution as embodied in the
            Trust Deed dated April 9, 1956. It was granted full autonomy and the
            status of deemed-to-be-university by the University Grants
            Commission in 1985.
          </div>
          <div className="admission-process__heading">Scholarship Options</div>
          <div className="admission-process__list">
            <ScholarshipOption image={schlorship} title="Study In India" />
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
            />
          </div>
        </div>
      </div>
    );
  }
};

export { AdmissionProcess };
