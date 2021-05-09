import React, { useEffect, useMemo } from "react";
import {
  getAllPrograms,
  getCollegesByCourses,
} from "../../store/Action/courses.action";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { DropDownSelect } from "../DropDownSelect";

const selectCollege = (props) => {
  const [selectedStream, setSelectedStream] = React.useState({
    label: "",
    value: "",
  });
  const [selectedProgram, setSelectedProgram] = React.useState({
    label: "",
    value: "",
  });
  const [selectedCollege, setSelectedCollege] = React.useState({
    label: "",
    value: "",
  });

  const dispatch = useDispatch();
  const { setAppliedCollege, appliedCollege, index, RemoveChoiceArray, allStreams, choiceNumber } = props;


// console.log({appliedCollege})
  const selectedLevel = useSelector(state => state.courses.selectedLevel)
  const _appliedColleges = useSelector(state => state.courses.appliedColleges)
  const allPrograms = useSelector(state => state.courses.allPrograms.map(p =>({
    label:p.name,
    value:p._id
  })))

   React.useEffect(() => {  
     let appliedCollege =  _appliedColleges.find(a => a.id === choiceNumber)
    if (appliedCollege) {
      // console.log(allStreams.find(s => s.label === appliedCollege?.collegeStream))
      dispatch(getAllPrograms(selectedLevel._id, allStreams.find(s => s.label === appliedCollege?.collegeStream)?.value));
      setSelectedStream({
        label:appliedCollege?.collegeStream,
        value: allStreams.find(s => s.name === appliedCollege?.collegeStream)?._id
      })      
    }
  }, [_appliedColleges]);

   React.useEffect(() => {  
     let appliedCollege =  _appliedColleges.find(a => a.id === choiceNumber)
    if (appliedCollege && selectedStream?.label) {
        console.log({
          label:appliedCollege?.collegeProgram,
          value: allPrograms.find(s => s.label === appliedCollege?.collegeProgram)?.value
        })
        setSelectedProgram({
          label:appliedCollege?.collegeProgram,
          value: allPrograms.find(s => s.label === appliedCollege?.collegeProgram)?.value
        })    
    }
  }, [_appliedColleges,selectedStream]);
  // console.log({_appliedColleges})

  const colleges = useSelector(state => state.courses.allColleges)
  const allColleges = useMemo(()=> {
    return colleges.map(p =>({
    label: p.college?.name,
    value: p.college?.college_slug,
  }))
  },[colleges])

  React.useEffect(() => {
    if (selectedStream.label) {
      setSelectedProgram({
        label: "",
        value: "",
      });
      setSelectedCollege({
        label: "",
        value: "",
      });
      dispatch(getAllPrograms(selectedLevel._id, selectedStream.value));
      
    }
  }, [selectedStream,selectedLevel]);

  //fetch college
  React.useEffect(() => {
    if (selectedStream.label && selectedProgram.label) {
      setSelectedCollege({
        label: "",
        value: "",
      });
      dispatch(getCollegesByCourses(selectedLevel._id, selectedStream.value,selectedProgram.value));
      
    }
  }, [selectedProgram]);

  const handleSave = async () => {
    let thisCollege = colleges.find(clg => clg.college.college_slug === selectedCollege.value)
    
     if (
      thisCollege.college?._id !== undefined &&
      selectedStream.value.length !== 0
    ) {
      const isAlreadyExist = _appliedColleges.some(clg => (clg.college_slug === selectedCollege.value && clg.collegeStream === selectedStream?.label && clg.collegeProgram  === selectedProgram?.label ))
      
      if (!isAlreadyExist) {

        const isSameIndex=_appliedColleges.findIndex(clg => (clg.id === props.choiceNumber ))
        if (isSameIndex >= 0) {
          _appliedColleges[isSameIndex] ={
              id:_appliedColleges[isSameIndex].id,
              collegeName: thisCollege.college?.name,
              image: thisCollege.college?.college_logo,
              address: thisCollege.college?.address,
              college_slug: thisCollege.college?.college_slug,
              collegeStream: selectedStream?.label,
              collegeProgram: selectedProgram?.label,
              collegeEmail:thisCollege.college?.email
            }
            dispatch({type:'SAVE_APPLIED_COLLEGES',payload:[..._appliedColleges]})
        } else {    
          dispatch({type:'SAVE_APPLIED_COLLEGES',payload:[..._appliedColleges,{
              id:props.choiceNumber,
              collegeName: thisCollege.college?.name,
              image: thisCollege.college?.college_logo,
              address: thisCollege.college?.address,
              college_slug: thisCollege.college?.college_slug,
              collegeStream: selectedStream?.label,
              collegeProgram: selectedProgram?.label,
              collegeEmail:thisCollege.college?.email
            }]})
        }
      }
    }
  };

  return (
    <>
      <div className="dashboard-basic-info__formContainer">
        <form>
          <Grid
            container
            className="dashboard-basic-info__row"
            justify="space-between"
            direction="row"
          >
            <Grid>
              <div className="dashboard-basic-info__formTitle">
                Choice # {props.choiceNumber}
              </div>
            </Grid>
            {index == undefined ? null : (
              <Grid>
                <img
                  src="/cross-sign.png"
                  alt="cross_sign"
                  onClick={() => RemoveChoiceArray(props.choiceNumber)}
                />
              </Grid>
            )}
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
                options={allStreams}
                defaultvalue={selectedStream}
                handleChange={(e) => setSelectedStream(e)}
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
                options={allPrograms}
                defaultvalue={selectedProgram}
                handleChange={(e) => setSelectedProgram(e)}
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
                options={allColleges}
                defaultvalue={selectedCollege}
                handleChange={(e) => setSelectedCollege(e)}
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
                // onClick={() => props.handelSave()}
                onClick={handleSave}
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
    </>
  );
};

export default selectCollege;
