import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  getCollegeCourses,
  getLevels,
} from "../../store/Action/courses.action";
import Link from "next/link";

const FeeStructure = (props: any) => {
  const [selectLevel, setSelectLevel] = useState("all-courses");

  const [levels, setLevels] = useState([]);
  const [streams, setStreams] = useState([]);
  const [selectStream, setSelectStream] = useState("");
  const [programs, setPrograms] = useState([]);
  const [collegeLevels, setCollegeLevels] = useState([]);
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const college = useSelector((state: any) => state.college.college);

  const onLevelClick = (level: string) => {
    let thisLevel = levels.find((l) => l.name === level);

    let thisStreams = [];
    setSelectLevel(level);
    if (level === "all-courses") {
      getAllPrograms("all-courses");
    } else {
      // setSelectLevel(level);
      setPrograms([]);
    }

    courses.forEach((course) => {
      if (course?.coursestream?.courselevel === thisLevel?._id) {
        thisStreams.push(course.coursestream);
      }
    });
    setStreams(_.uniqBy(thisStreams, "_id"));
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
    onLevelClick(selectLevel);
  }, [courses, levels]);

  const getCourses = async (id: string) => {
    let res = await dispatch(getCollegeCourses(id));
    setCourses(res);
  };

  const getAllLevels = async () => {
    let res = await dispatch(getLevels());
    setLevels(res);
  };

  const getAllPrograms = (programStream: any) => {
    let thisPrograms = [];

    if (programStream === "all-courses") {
      courses.forEach((course) => {
        let programDetail = {
          _id: course?._id,
          name: course?.courseprogram?.name,
          fee_per_sem: course?.fee_per_sem,
          eligibility: course?.eligibility,
          slug: course?.courseprogram?.slug,
        };
        thisPrograms.push(programDetail);
      });
    } else {
      courses.forEach((course) => {
        if (
          course?.coursestream?.courselevel === programStream?.courselevel &&
          course?.coursestream?._id === programStream?._id
        ) {
          let programDetail = {
            _id: course?._id,
            name: course?.courseprogram?.name,
            fee_per_sem: course?.fee_per_sem,
            eligibility: course?.eligibility,
            slug: course?.courseprogram?.slug,
          };
          thisPrograms.push(programDetail);
        }
      });
    }

    setPrograms(thisPrograms);
  };

  useEffect(() => {
    getAllLevels();
    college?._id && getCourses(college?._id);
  }, [college]);

  // useEffect(() => {
  //   selectStream && getAllPrograms(selectStream);
  // }, [selectStream]);

  return (
    <div id="course_fee" className="fee-structure">
      <div className="fee-structure__inner">
        <div className="fee-structure__title-wrap">
          <div className="fee-structure__title">COURSES OFFERED</div>
          {/* <div className="fee-structure__cta">View All Courses</div> */}
        </div>
        <div className="fee-structure__level">
          <div className="level-list">
            <div
              onClick={() => {
                onLevelClick("all-courses");
                setSelectStream("");
              }}
              className={`level-list__item ${
                selectLevel === "all-courses" ? "active" : ""
              } `}
            >
              All COURSES
            </div>
            {collegeLevels &&
              collegeLevels.map((course) => {
                return (
                  <div
                    onClick={() => {
                      onLevelClick(course.name);
                      setSelectStream("");
                    }}
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
          </div>
        </div>
        <div className="fee-structure__courses">
          <div className="courses-list">
            {/* <div className="courses-list__title">All Courses</div> */}
            <div className="courses-list__itemContainer">
              {streams &&
                streams.map((stream, i) => {
                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => {
                        getAllPrograms(stream);
                        setSelectStream(stream.name);
                      }}
                      className={`courses-list__item  ${
                        selectStream === stream.name ? "active" : ""
                      }`}
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
                  <Link href={`/colleges/program/${p.slug}`}>
                    <div className="course-fee__course">{p.name}</div>
                  </Link>
                  <div className="course-fee__fee">
                    <span className="title">{p.fee_per_sem}</span>
                    <span>Estimated Fee</span>
                  </div>
                  <div className="course-fee__eligibility">
                    <span className="title">{p.eligibility}</span>
                    <span>Eligibility</span>
                  </div>
                  <Link href={`/colleges/program/${p.slug}`}>
                    <div className="course-fee__details">VIEW DETAIL</div>
                  </Link>
                </div>
              );
            })}
            {!programs.length && !streams.length && (
              <div style={{ textAlign: "center" }}>
                Sorry course is not aviable at the moment.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeeStructure };
