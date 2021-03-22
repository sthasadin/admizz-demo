import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";
import { DropDownSelect } from "../DropDownSelect";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { getCollageDetail } from "../../store/Action/collageDetail.action";
import ClipLoader from "react-spinners/ClipLoader";
import { getCourses } from "../../store/Action/college_action";

const Choice = (props) => {
  const {
    courseOption,
    setSelectedCourse,
    subCourseOptions,
    setSelectedSubCourse,
    CollegesOptions,
    setSelectedCollege,
    streamOption,
    setSelectedStream,
    programOption,
  } = props.data;
  return (
    <div className="dashboard-basic-info__formContainer">
      <form>
        <Grid
          container
          className="dashboard-basic-info__row"
          justify="space-around"
          direction="row"
        >
          <Grid item sm={12} md={12} xs={12}>
            <div className="dashboard-basic-info__formTitle">
              Choice # {props.choiceNumber}
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          className="dashboard-basic-info__row"
          justify="space-around"
          direction="row"
        >
          <Grid
            className={"dashboard-basic-info__grid"}
            item
            sm={12}
            md={6}
            xs={12}
          >
            <DropDownSelect
              title="Choose Steam"
              options={streamOption}
              handleChange={setSelectedStream}
            />
          </Grid>
          <Grid
            className={"dashboard-basic-info__grid"}
            item
            sm={12}
            md={6}
            xs={12}
          >
            <DropDownSelect
              title="Select Specific program"
              options={programOption}
              handleChange={setSelectedSubCourse}
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="dashboard-basic-info__row"
          justify="space-around"
          direction="row"
        >
          <Grid
            className={"dashboard-basic-info__grid"}
            item
            sm={12}
            md={12}
            xs={12}
          >
            <DropDownSelect
              title="Select College"
              options={CollegesOptions}
              handleChange={setSelectedCollege}
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="dashboard-basic-info__row"
          justify="space-around"
          direction="row"
        >
          <div className="dashboard-basic-info__buttonContainer">
            <div
              className="dashboard-basic-info__viewText"
              onClick={() => props.handelSave()}
            >
              Save Choice
            </div>
            <div
              className="dashboard-basic-info__editText"
              onClick={() => props.onClickAddChoice()}
            >
              Add More Choice
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

const DashboardChoiceFilling = (props) => {
  const [choicesArray, setChoicesArray] = useState([]);
  const [choiceNumber, setChoiceNumber] = useState(2);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedSubCourse, setSelectedSubCourse] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const allCollege = useSelector((state) => state.allCollege.collegeList);
  const [CollegesOptions, setCollegesOptions] = useState([]);
  const [courseOption, setCourseOption] = useState([]);
  const [subCourseOptions, setSubCourseOptions] = useState([]);
  const dispatch = useDispatch();
  const [appliedCollege, setAppliedCollege] = useState([]);
  const [appliedCollegeDetail, setAppliedCollegeDetail] = useState([]);
  const collegeDetails = useSelector(
    (state) => state.collageDetails.collageDetails
  );
  const [loader, setLoader] = useState(false);
  const [fetchedCourses, setFetchedCourses] = useState([]);
  const [streamOption, setStreamOption] = useState([]);
  const [selectedStream, setSelectedStream] = useState("");
  const [programOption, setProgramOption] = useState([]);

  // getting course from colleges
  useEffect(() => {
    var list = [];
    if (allCollege && allCollege.length > 0) {
      allCollege.map(({ courses }) => {
        courses.map((course) => {
          if (!list.includes(course.course_name)) {
            list.push(course.course_name);
          }
        });
      });
    }
    setCourseOption(
      list.map((course) => {
        return {
          label: course,
          value: course,
        };
      })
    );
  }, [allCollege]);

  const fetchStream = async () => {
    let data = await dispatch(getCourses());
    let stream = [];

    setFetchedCourses(data);

    data.map((data: any) => {
      if (data.level.includes(props.selectedData.selectedLevel)) {
        stream.push(data.stream);
      }
    });
    setStreamOption(
      stream.map((stream) => {
        return {
          label: stream,
          value: stream,
        };
      })
    );
  };

  // console.log(selectedStream);

  useEffect(() => {
    fetchStream();
  }, []);

  //getting program from from selected stream
  useEffect(() => {
    let program = [];
    if (selectedStream !== null) {
      fetchedCourses.map((course) => {
        if (course.program.includes(selectedStream)) {
          program.push(course.program);
        }
      });
    }
    setProgramOption(
      program.map((program) => {
        return {
          label: program,
          value: program,
        };
      })
    );
  }, [selectedStream]);

  //console.log(programOption);

  //getting college from selected program

  // handel submit button
  const sendData = () => {
    props.getData({
      ...appliedCollegeDetail,
    });
    props.handleNext();
  };

  // geeting sub course from selected course
  useEffect(() => {
    var list = [];
    if (selectedCourse !== null) {
      allCollege.map(({ courses }) => {
        courses.map((course) => {
          if (course.course_name === selectedCourse) {
            course.sub_courses.map(({ sub_course_name }) => {
              if (!list.includes(sub_course_name)) {
                list.push(sub_course_name);
              }
            });
          }
        });
      });
    }
    setSubCourseOptions(
      list.map((course) => {
        return {
          label: course,
          value: course,
        };
      })
    );
  }, [selectedCourse]);

  // getting college from selected course and selected sub course
  useEffect(() => {
    const list = [];
    if (selectedSubCourse !== null) {
      allCollege.map(({ courses, name, _id }) => {
        courses.map((course) => {
          if (course.course_name === selectedCourse) {
            course.sub_courses.map(({ sub_course_name }) => {
              if (sub_course_name === selectedSubCourse) {
                if (!list.includes(sub_course_name)) {
                  list.push({ name, id: _id });
                }
              }
            });
          }
        });
      });
    }

    setCollegesOptions(
      list.map((course) => {
        return {
          label: course.name,
          value: course.id,
        };
      })
    );
  }, [selectedSubCourse]);

  // saving selected college to apply
  const saveChoice = () => {
    setLoader(true);
    if (
      selectedCollege !== "" &&
      selectedCourse !== "" &&
      selectedSubCourse !== ""
    ) {
      var newChoice = {
        collegeName: selectedCollege,
        course: selectedCourse,
        sub_course: selectedSubCourse,
      };
    } else {
      return alert("Please Select all Field!! ");
    }
    dispatch(getCollageDetail(selectedCollege));
    setAppliedCollege((props) => [...props, newChoice]);
  };

  // getting details of applied college
  useEffect(() => {
    if (Object.keys(collegeDetails).length > 0) {
      setAppliedCollegeDetail((prev) => [
        ...prev,
        {
          name: collegeDetails.name,
          image: collegeDetails.college_profile_image,
          address: collegeDetails.address,
          course: selectedCourse,
          sub_course: selectedSubCourse,
        },
      ]);
      setSelectedCollege("");
      setSelectedSubCourse("");
      setSelectedCourse("");
      setSelectedStream(""); //dont know why
      setLoader(false);
    }
  }, [collegeDetails]);

  useEffect(() => {
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", appliedCollegeDetail);
  }, [appliedCollegeDetail]);

  const onClickAddChoice = () => {
    setChoiceNumber(choiceNumber + 1);
    setChoicesArray((choicesArray) => [...choicesArray, choiceNumber]);
  };

  // trunclate string
  function truncateString(str, num = 20) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  // back tracking
  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setAppliedCollege(props.data);
    }
  }, [props.data]);

  return (
    <div className="dashboard-basic-info">
      {loader ? (
        <div
          style={{
            position: "fixed",
            zIndex: 10000000000,
            top: "0%",
            left: "0%",
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color={"green"} loading={loader} size={150} />
        </div>
      ) : (
        ""
      )}

      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">Choice Filling</div>
        <Choice
          onClickAddChoice={() => onClickAddChoice()}
          handelSave={saveChoice}
          choiceNumber={1}
          data={{
            courseOption,
            setSelectedCourse,
            subCourseOptions,
            setSelectedSubCourse,
            CollegesOptions,
            setSelectedCollege,
            streamOption,
            setSelectedStream,
            programOption,
          }}
        />
        {choicesArray.map((choiceNumber) => (
          <Choice
            onClickAddChoice={() => onClickAddChoice()}
            handelSave={saveChoice}
            choiceNumber={choiceNumber}
            data={{
              courseOption,
              setSelectedCourse,
              subCourseOptions,
              setSelectedSubCourse,
              CollegesOptions,
              setSelectedCollege,
            }}
          />
        ))}
      </div>

      {/* Applied College */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Applied College
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  You have selected these colleges for your Under Graduation
                  Study
                </div>
              </Grid>
            </Grid>
            <div className="dashboard-basic-info__rowTableTitle">
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="space-around"
                direction="row"
              >
                <Grid
                  className={"dashboard-basic-info__gridNoPadding"}
                  item
                  sm={12}
                  md={3}
                >
                  <div className="dashboard-basic-info__tableTitle">
                    COLLEGE/UNIVERSITY
                  </div>
                </Grid>
                <Grid
                  className={"dashboard-basic-info__gridNoPadding"}
                  item
                  sm={12}
                  md={2}
                >
                  <div className="dashboard-basic-info__tableTitle">STREAM</div>
                </Grid>
                <Grid
                  className={"dashboard-basic-info__gridNoPadding"}
                  item
                  sm={12}
                  md={7}
                >
                  <div className="dashboard-basic-info__tableTitle">
                    SPECIALIZATION
                  </div>
                </Grid>
              </Grid>
            </div>
            {appliedCollegeDetail.map((college, i) => {
              console.log(college, appliedCollege.length, i);
              if (true) {
                return (
                  <div className="dashboard-basic-info__rowTable" key={i}>
                    <Grid
                      container
                      className="dashboard-basic-info__row"
                      justify="space-around"
                      direction="row"
                    >
                      <Grid
                        className={"dashboard-basic-info__grid"}
                        item
                        sm={12}
                        md={1}
                        xs={12}
                      >
                        <div className="dashboard-basic-info__tableCell">
                          <div className="dashboard-basic-info__imageCell">
                            <img
                              src={college?.image}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        className={"dashboard-basic-info__grid"}
                        item
                        sm={12}
                        md={2}
                        xs={12}
                      >
                        <div className="dashboard-basic-info__tableCell">
                          <div className="dashboard-basic-info__tableText">
                            {college.name}
                          </div>
                          <div className="dashboard-basic-info__tableSubText">
                            {truncateString(college.address)}
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        className={"dashboard-basic-info__grid"}
                        item
                        sm={12}
                        md={2}
                        xs={12}
                      >
                        <div className="dashboard-basic-info__tableCell">
                          <div className="dashboard-basic-info__tableText">
                            {college.course}
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        className={"dashboard-basic-info__grid"}
                        item
                        sm={12}
                        md={4}
                        xs={12}
                      >
                        <div className="dashboard-basic-info__tableCell">
                          <div className="dashboard-basic-info__tableText">
                            {college.sub_course}
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        className={"dashboard-basic-info__grid"}
                        item
                        sm={12}
                        md={3}
                        xs={12}
                      >
                        <div className="dashboard-basic-info__tableCell">
                          <Button>View Detail</Button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                );
              }
            })}
          </form>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div
            className="dashboard-basic-info__backContainer"
            onClick={props.handleBack}
          >
            Back
          </div>
          <Button onClick={sendData}>Save And Continue</Button>
        </div>
      </div>
    </div>
  );
};

export { DashboardChoiceFilling };
