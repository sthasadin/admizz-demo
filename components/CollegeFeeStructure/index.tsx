import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

const FeeStructure = (props: any) => {
  const [selectLevel,setSelectLevel] = useState("diploma")
  const [selectedSubCourse,setSelectedSubCourse] = useState([])
  const dispatch = useDispatch()
  const courses = useSelector(state => state.college.college.courses)
  const onLevelClick = (level) =>{
    courses.forEach(course => {
      if (course.course_level === selectLevel) {
            setSelectedSubCourse(course.sub_courses)    
      }
    })
    setSelectLevel(level)
  }
  return (
    <div id="course_fee" className="fee-structure">
      <div className="fee-structure__inner">
        <div className="fee-structure__title-wrap">
          <div className="fee-structure__title">COURSES & FEE STRUCTURE</div>
          {/* <div className="fee-structure__cta">View All Courses</div> */}
        </div>
        <div className="fee-structure__level">
          <div className="level-list">
            <div onClick={()=>onLevelClick("diploma")} className={selectLevel==="diploma"?"level-list__item active":"level-list__item"}>DIPLOMA</div>

            <div onClick={()=>onLevelClick("undergraduate")} className={selectLevel==="undergraduate"?"level-list__item active":"level-list__item"}>UNDER GRADUATE</div>
            <div onClick={()=>onLevelClick("postgraduate")} className={selectLevel==="postgraduate"?"level-list__item active":"level-list__item"}>POST GRADUATE</div>
            <div onClick={()=>onLevelClick("phd")} className={selectLevel==="phd"?"level-list__item active":"level-list__item"}>PH.D</div>
          </div>
        </div>
        <div className="fee-structure__courses">
          <div className="courses-list">
            <div className="courses-list__title">All Courses</div>
            <div className="courses-list__itemContainer">
              {
                courses && courses.map(course => {
                  if (course.course_level === selectLevel) {
                    
                    return <div onClick={()=>setSelectedSubCourse(course.sub_courses)} className="courses-list__item">{course.course_name}</div>
                  }

                })
              }
            </div>
          </div>
        </div>
        <div className="fee-structure__course-fee">
          <div className="course-fee">
            {
            selectedSubCourse.map(sub_course => {
              return (
                <div className="course-fee__item">
              <div className="course-fee__course">{sub_course.sub_course_name}</div>
              <div className="course-fee__fee">
                <span className="title">{sub_course.fee_per_sem} (Fees Per Sem)</span>
                <span>Estimated Fee</span>
              </div>
              <div className="course-fee__eligibility">
                <span className="title">{sub_course.eligibility}</span>
                <span>Eligibility</span>
              </div>
              {/* <a href="#" className="course-fee__cta">
                view details
              </a> */}
            </div>
              )
            })
            }
            
{/* 
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
           */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeeStructure };
