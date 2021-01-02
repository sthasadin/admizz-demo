import React from "react";

const FeeStructure = (props: any) => {
  return (
    <div className="fee-structure">
      <div className="fee-structure__inner">
        <div className="fee-structure__title-wrap">
          <div className="fee-structure__title">COURSES & FEE STRUCTURE</div>
          <div className="fee-structure__cta">View All Courses</div>
        </div>
        <div className="fee-structure__level">
          <div className="level-list">
            <div className="level-list__item">DIPLOMA</div>
            <div className="level-list__item active">UNDER GRADUATE</div>
            <div className="level-list__item">POST GRADUATE</div>
            <div className="level-list__item">PH.D</div>
          </div>
        </div>
        <div className="fee-structure__courses">
          <div className="courses-list">
            <div className="courses-list__title">All Courses</div>
            <div className="courses-list__item">Engineering</div>
            <div className="courses-list__item">Management</div>
            <div className="courses-list__item">Pharmacy</div>
            <div className="courses-list__item">Medical</div>
            <div className="courses-list__item">Tourism</div>
          </div>
        </div>
        <div className="fee-structure__course-fee">
          <div className="course-fee">
            <div className="course-fee__item">
              <div className="course-fee__course">MBA</div>
              <div className="course-fee__fee">
                <span className="title">Rs. 2.04 Lakh (1st Year Fees)</span>
                <span>Estimated Fee</span>
              </div>
              <div className="course-fee__eligibility">
                <span className="title">Graduation with 60% + NIPERJEE</span>
                <span>Eligibility</span>
              </div>
              <a href="#" className="course-fee__cta">
                view details
              </a>
            </div>

            <div className="course-fee__item">
              <div className="course-fee__course">M.Pharm</div>
              <div className="course-fee__fee">
                <span className="title">Rs. 2.04 Lakh (1st Year Fees)</span>
                <span>Estimated Fee</span>
              </div>
              <div className="course-fee__eligibility">
                <span className="title">Graduation with 60% + NIPERJEE</span>
                <span>Eligibility</span>
              </div>
              <a href="#" className="course-fee__cta">
                view details
              </a>
            </div>

            <div className="course-fee__item">
              <div className="course-fee__course">M.S</div>
              <div className="course-fee__fee">
                <span className="title">Rs. 2.04 Lakh (1st Year Fees)</span>
                <span>Estimated Fee</span>
              </div>
              <div className="course-fee__eligibility">
                <span className="title">Graduation with 60% + NIPERJEE</span>
                <span>Eligibility</span>
              </div>
              <a href="#" className="course-fee__cta">
                view details
              </a>
            </div>

            <div className="course-fee__item">
              <div className="course-fee__course">M.Tech</div>
              <div className="course-fee__fee">
                <span className="title">Rs. 2.04 Lakh (1st Year Fees)</span>
                <span>Estimated Fee</span>
              </div>
              <div className="course-fee__eligibility">
                <span className="title">Graduation with 60% + NIPERJEE</span>
                <span>Eligibility</span>
              </div>
              <a href="#" className="course-fee__cta">
                view details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeeStructure };
