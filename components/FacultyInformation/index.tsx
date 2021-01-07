import React from "react";

const FacultyInformation = (props: any) => {
  return (
    <div className="faculty-information">
      <div className="faculty-information__inner">
        <div className="sidebar__title">Faculty Information</div>
        <div className="faculty-information__shapes">
          <div className="faculty-information__semi-circle">
            <div className="faculty-information__semi-circle-text">
              200
              <span>Faculty</span>
            </div>
          </div>

          <div className="faculty-information__circle-wrap">
            <div className="faculty-information__circle">
              <div className="faculty-information__circle-text border-top half">
                <span>46%</span>
              </div>
              <div className="faculty-information__circle__label">Label</div>
              <div className="faculty-information__circle__desc">
                Description
              </div>
            </div>

            <div className="faculty-information__circle">
              <div className="faculty-information__circle-text half-quarter">
                <span>74%</span>
              </div>
              <div className="faculty-information__circle__label">Label</div>
              <div className="faculty-information__circle__desc">
                Description
              </div>
            </div>

            <div className="faculty-information__circle">
              <div className="faculty-information__circle-text quarter">
                <span>24%</span>
              </div>
              <div className="faculty-information__circle__label">Label</div>
              <div className="faculty-information__circle__desc">
                Description
              </div>
            </div>
          </div>
        </div>

        <div className="faculty-information__cta">View All Members</div>
      </div>
    </div>
  );
};

export default FacultyInformation;
