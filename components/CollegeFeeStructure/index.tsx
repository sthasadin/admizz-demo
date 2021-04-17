import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCollegeCourses, getLevels} from '../../store/Action/courses.action'

const FeeStructure = (props: any) => {
  const [selectLevel,setSelectLevel] = useState("diploma")
  const [selectedStream,setSelectedStream] = useState([])
  const [levels, setLevels] = useState([])
  const [streams, setStreams] = useState([])
  const [programs, setPrograms] = useState([])
  const [courses, setCourses] = useState([])
  const dispatch = useDispatch()
  const college = useSelector((state:any) => state.college.college)
  const onLevelClick = (level:string) =>{
    let thisLevel = levels.find(l=>l.name === level)
    
    let thisStreams = []
    courses.forEach(course => {
      if (course?.coursestream?.courselevel === thisLevel?._id) {
        thisStreams.push(course.coursestream  ) 
      }
    })
    setStreams(thisStreams)
    setSelectLevel(level) 
  }
   const getCourses = async (id:string) => {
   let res = await dispatch(getCollegeCourses(id))
   setCourses(res)
  }

  const getAllLevels = async () => {
    let res = await dispatch(getLevels())
    setLevels(res)
  }
console.log(selectedStream  )
  useEffect(()=>{
    courses.length && onLevelClick("diploma")
  },[courses.length])
  useEffect(()=>{
    getAllLevels()
    college?._id && getCourses(college?._id)
  },[college])

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
                streams && streams.map((stream, i) => {
                    return <div style={{cursor:'pointer'}} key={i} onClick={()=>setSelectedStream(stream)} className="courses-list__item">{stream.name}</div>
                })
              }
            </div>
          </div>
        </div>
        <div className="fee-structure__course-fee">
          <div className="course-fee">
            {
            selectedStream.map(sub_course => {
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
