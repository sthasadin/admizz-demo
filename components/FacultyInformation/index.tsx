import React from "react";
import { useSelector} from 'react-redux'
const FacultyInformation = (props: any) => {
  const courses = useSelector(state => state.college.college.courses)
  if (courses && courses.lenght>3) {
    courses.length = 3
  }
  return (
    <div className="faculty-information">
      <div className="faculty-information__inner">
        <div className="sidebar__title">Faculty Information</div>
        <div className="faculty-information__shapes">
          <div className="faculty-information__semi-circle">
            <div className="faculty-information__semi-circle-text">
              {courses && courses.length}
              <span>Faculty</span>
            </div>
          </div>
          <div className="faculty-information__circle-wrap">
            {
              courses?.map(c => {
                return (
                  <div className="faculty-information__circle">
              <div className="faculty-information__circle-text border-top half">
                <span>46%</span>
              </div>
              <div className="faculty-information__circle__label">{c.course_name}</div>
              <div className="faculty-information__circle__desc">
                Description
              </div>
            </div>
              )
            })
          }
{/* 
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
             */}
          </div>
        </div>

        <a href="#" className="faculty-information__cta">
          View All Members
        </a>
      </div>
    </div>
  );
};

export default FacultyInformation;
