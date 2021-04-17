import React, { useEffect, useState } from "react";
import Link from "next/link";
import {getLevels,getStreams, getAllPrograms, getCollegesByCourses } from "../../store/Action/courses.action";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";
import { DropDownSelect } from "../DropDownSelect";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { getCollageDetail } from "../../store/Action/collageDetail.action";
import {getCollege} from '../../store/Action/college.action';
import ClipLoader from "react-spinners/ClipLoader";




const Choice = (props) => {
  // const [selectedStream1, setSelectedStream1] = React.useState('');












  const {
    setSelectedCollege,
    streamOption,
    setSelectedStream,
    programOption,
    setSelectedProgram,
    collegeOption
  } = props.data;


  // const handleStream (e) => {
  //   setSelectedStream1
  //   setSelectedStream()
  // }

  const streamList = streamOption?.map((stream) => {
    return{
      label:stream.name,
      value:stream.name
    }
  })

  const programList = programOption?.map((program) => {
    return{
      label:program.name,
      value:program.name
    }
  })

  const collegeList = collegeOption?.map((college) => {
    return{
      label:college.college?.name,
      value:college.college?.college_slug
    }
  })

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
              options={streamList}
              // defaultvalue={selectedStream}
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
              options={programList}
              // defaultvalue={selectedProgram}
              handleChange={setSelectedProgram}
              
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
              options={collegeList}
              // defaultvalue={selectedCollege}
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
  const[selectedLevelId,setSelectedLevelId] = useState('');

  const allCollege = useSelector((state) => state.allCollege.collegeList);
  const [CollegesOptions, setCollegesOptions] = useState([]);
  const [courseOption, setCourseOption] = useState([]);
  const [subCourseOptions, setSubCourseOptions] = useState([]);
  const dispatch = useDispatch();
  const [appliedCollege, setAppliedCollege] = useState([]);
  const [appliedCollegeDetail, setAppliedCollegeDetail] = useState([]);
  const collegeDetails = useSelector(
    (state) => state.college.college
  );
  // const [collegeDetails, setCollegeDetails] = useState({})
  const [loader, setLoader] = useState(false);
  const [fetchedCourses, setFetchedCourses] = useState([]);
  const [streamOption, setStreamOption] = useState([]);
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedStreamId, setSelectedStreamId] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [programOption, setProgramOption] = useState([]);
  const [collegeOption, setCollegeOption] = useState([]);
    
  //fetch stream
  useEffect(() => {
    (async() => {
     const fetchLevel = await dispatch(getLevels());
     const selectLevelObj = fetchLevel.find((id) => id.name === props.selectedData.selectedLevel);
     setSelectedLevelId(selectLevelObj?._id);
     const fetchStream = await dispatch(getStreams(selectLevelObj?._id));
     setStreamOption(fetchStream);
    })();   
   }, [])
 
 
   //fetch program
   useEffect(() => {
     (async() => {
       const fetchSelectedStream = streamOption.find((course) =>course.name === selectedStream)
       const fetchProgram = await dispatch(getAllPrograms(selectedLevelId, fetchSelectedStream?._id))
       setProgramOption(fetchProgram)
       setSelectedStreamId(fetchSelectedStream?._id);
       setSelectedProgram('');
       setSelectedCollege('');

     })();
   }, [selectedStream])
   
 
   //fetch college
   useEffect(() => {
     (async()=> {
       //prevent from unnecessary api call by dependency update
       if(selectedProgram){
       const fetchSelectedProgam = programOption.find((program) => program.name === selectedProgram)
       const fetchCollege = await dispatch(getCollegesByCourses( selectedLevelId, selectedStreamId,fetchSelectedProgam?._id ));
       setCollegeOption(fetchCollege);
       }
 
     })()
   }, [selectedProgram])
  

  // handel submit button
  const sendData = () => {
    props.getData([
      ...appliedCollegeDetail,
    ]);
    props.handleNext();
  };

  

  // saving selected college to apply
  const saveChoice = async () => {
    console.log(selectedCollege)
    setLoader(true);
    if (
      selectedCollege !== "" &&
      selectedStream !== "" &&
      selectedProgram !== ""
    ) {
      var newChoice = {
        collegeName: selectedCollege,
        course: selectedStream,
        sub_course: selectedProgram,
      };
    } else {
      return alert("Please Select all Field!! ");
    }

   await dispatch(getCollege(selectedCollege));
   console.log(newChoice);
  setAppliedCollege([...appliedCollege,newChoice])
  setLoader(false)
  };

  //getting details of applied college
  useEffect(() => {
    if (Object.keys(collegeDetails).length > 0) {
      
      setAppliedCollegeDetail((prev) => [
        
        ...prev,
        {
          name: collegeDetails.name,
          image: collegeDetails.college_profile_image,
          address: collegeDetails.address,
          course: selectedStream,
          sub_course: selectedProgram,
          id:collegeDetails._id,
        },
      ]);
      // console.log(selectedCourse);
      // console.log("asdasd");
      // setSelectedCollege("");
      // setSelectedSubCourse("");
      // setSelectedCourse("");
      // setSelectedStream(""); 
      // setLoader(false);
    }
  }, [collegeDetails]);


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
  // useEffect(() => {
  //   if (Object.keys(props.data).length > 0) {
  //     setAppliedCollege(props.data);
  //   }
  // }, [props.data]);

  


  
  

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
            selectedCollege,
            streamOption,
            setSelectedStream,
            selectedStream,
            programOption,
            setSelectedProgram,
            selectedProgram,
            collegeOption
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
              selectedCollege,
            // streamOption,
            // setSelectedStream,
            // selectedStream,
            // programOption,
            // setSelectedProgram,
            // selectedProgram,
            // collegeOption
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
              // console.log(college, appliedCollege.length, i);
             
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
                          <Button>
                          <a href={`http://localhost:3000/colleges/${college?.id}`}  target='_blank' >View Detail</a>
                          </Button>
                          
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
