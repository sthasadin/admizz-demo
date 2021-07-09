import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  getCollegeCourses,
  getLevels,
} from "../../store/Action/courses.action";

const FeeStructure = (props: any) => {
  const [selectLevel, setSelectLevel] = useState("diploma");
  const [selectStream, setSelectStream] = useState(null);
  const [levels, setLevels] = useState([]);
  const [streams, setStreams] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [collegeLevels, setCollegeLevels] = useState([]);
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const college = useSelector((state: any) => state.college.college);
  const onLevelClick = (level: string) => {
    let thisLevel = levels.find((l) => l.name === level);

    let thisStreams = [];
    courses.forEach((course) => {
      if (course?.coursestream?.courselevel === thisLevel?._id) {
        thisStreams.push(course.coursestream);
      }
    });
    setStreams(_.uniqBy(thisStreams, "_id"));

    setSelectLevel(level);
    if (level !== selectLevel) {
      setPrograms([]);
    }
  };

  React.useEffect(() => {
    let _levels = [];

    courses?.forEach((course) => {
      let level = levels.find((l) => l._id === course?.courselevel?._id);

      if (level) {
        _levels.push(level);
      }
    });
    setCollegeLevels(_.uniqBy(_levels, "_id"));
  }, [courses, levels]);

  console.log(collegeLevels);

  const getCourses = async (id: string) => {
    let res = await dispatch(getCollegeCourses(id));
    setCourses(res);
  };

  const getAllLevels = async () => {
    let res = await dispatch(getLevels());
    setLevels(res);
  };

  const getAllPrograms = async (stream: any) => {
    let thisPrograms = [];
    courses.forEach((course) => {
      if (
        course?.coursestream?.courselevel === stream?.courselevel &&
        course?.coursestream?._id === stream?._id
      ) {
        let programDetail = {
          _id: course?._id,
          name: course?.courseprogram?.name,
          fee_per_sem: course?.fee_per_sem,
          eligibility: course?.eligibility,
        };
        thisPrograms.push(programDetail);
      }
    });

    setPrograms(thisPrograms);
  };

  useEffect(() => {
    selectStream && getAllPrograms(selectStream);
  }, [selectStream]);

  useEffect(() => {
    courses.length && onLevelClick("diploma");
  }, [courses.length]);

  useEffect(() => {
    getAllLevels();
    college?._id && getCourses(college?._id);
  }, [college]);

  // console.log(streams);
  // console.log(levels);

  return (
    <div id="course_fee" className="fee-structure">
      <div className="fee-structure__inner">
        <div className="fee-structure__title-wrap">
          <div className="fee-structure__title">COURSES & FEE STRUCTURE</div>
          {/* <div className="fee-structure__cta">View All Courses</div> */}
        </div>
        <div className="fee-structure__level">
          <div className="level-list">
            {collegeLevels &&
              collegeLevels.map((course) => {
                return (
                  <div
                    onClick={() => onLevelClick(course.name)}
                    style={{ textTransform: "uppercase" }}
                    className={`
                      ${selectLevel === course.name}
                        ? level-list__item  ${
                          selectLevel === course.name ? "active" : ""
                        }
                        : level-list__item`}
                  >
                    {course.name === "undergraduate"
                      ? "under graduate"
                      : course.name === "postgraduate"
                      ? "post graduate"
                      : course.name}
                  </div>
                );
              })}

            {/* 
            <div
              onClick={() => onLevelClick("diploma")}
              className={
                selectLevel === "diploma"
                  ? "level-list__item active"
                  : "level-list__item"
              }
            >
              DIPLOMA
            </div> */}

            {/* <div
              onClick={() => onLevelClick("undergraduate")}
              className={
                selectLevel === "undergraduate"
                  ? "level-list__item active"
                  : "level-list__item"
              }
            >
              UNDER GRADUATE
            </div> */}

            {/* <div
              onClick={() => onLevelClick("postgraduate")}
              className={
                selectLevel === "postgraduate"
                  ? "level-list__item active"
                  : "level-list__item"
              }
            >
              POST GRADUATE
            </div> */}
            {/* <div
              onClick={() => onLevelClick("phd")}
              className={
                selectLevel === "phd"
                  ? "level-list__item active"
                  : "level-list__item"
              }
            >
              PH.D
            </div> */}
          </div>
        </div>
        <div className="fee-structure__courses">
          <div className="courses-list">
            <div className="courses-list__title">All Courses</div>
            <div className="courses-list__itemContainer">
              {streams &&
                streams.map((stream, i) => {
                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => setSelectStream(stream)}
                      className="courses-list__item"
                    >
                      {stream.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="fee-structure__course-fee">
          <div className="course-fee">
            {programs.map((p, i) => {
              return (
                <div key={i} className="course-fee__item">
                  <div className="course-fee__course">{p.name}</div>
                  <div className="course-fee__fee">
                    <span className="title">
                      {p.fee_per_sem} (Fees Per Sem)
                    </span>
                    <span>Estimated Fee</span>
                  </div>
                  <div className="course-fee__eligibility">
                    <span className="title">{p.eligibility}</span>
                    <span>Eligibility</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeeStructure };
