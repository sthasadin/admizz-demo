import React, { useEffect, useMemo } from "react";
import {
  getAllPrograms,
  getCollegesByCourses,
} from "../../store/Action/courses.action";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { DropDownSelect } from "../DropDownSelect";

const preObj = { label: '', value: '' }

const selectCollege = ({ allStreams, choiceNumber, choices, setChoices, removeChoice }: any) => {
  let i = choiceNumber - 1
  let { selectedStream, selectedProgram, selectedCollege } = choices[i]

  const dispatch = useDispatch();

  const selectedLevel = useSelector(state => state.courses.selectedLevel)
  const _appliedColleges = useSelector(state => state.courses.appliedColleges)
  const allPrograms = useSelector(state => state.courses.allPrograms.map(({ name: label, _id: value }) => ({ label, value })))



  React.useEffect(() => {
    let appliedCollege = _appliedColleges.find(a => a.id === choiceNumber)
    if (appliedCollege) {
      // console.log(allStreams.find(s => s.label === appliedCollege?.collegeStream))
      dispatch(getAllPrograms(selectedLevel._id, allStreams.find(s => s.label === appliedCollege?.collegeStream)?.value));
      setSelectedStream({
        label: appliedCollege?.collegeStream,
        value: allStreams.find(s => s.label === appliedCollege?.collegeStream)?.value
      })
    }
  }, [_appliedColleges]);

  React.useEffect(() => {
    let appliedCollege = _appliedColleges.find(a => a.id === choiceNumber)
    if (appliedCollege && selectedStream?.label) {
      setSelectedProgram({
        label: appliedCollege?.collegeProgram,
        value: allPrograms.find(s => s.label === appliedCollege?.collegeProgram)?.value
      })
    }
  }, [_appliedColleges, selectedStream]);

  const colleges = useSelector(state => state.courses.allColleges)
  const allColleges = useMemo(() => {
    return colleges.map(p => ({
      label: p.college?.name,
      value: p.college?.college_slug,
    }))
  }, [colleges])

  React.useEffect(() => {
    if (selectedStream.label) {
      dispatch(getAllPrograms(selectedLevel._id, selectedStream.value));
    }
  }, [selectedStream, selectedLevel]);

  //fetch college
  React.useEffect(() => {
    if (selectedStream.label && selectedProgram.label) {
      dispatch(getCollegesByCourses(selectedLevel._id, selectedStream.value, selectedProgram.value));
    }
  }, [selectedProgram]);

  const setSelectedStream = (e) => {
    let data = [...choices]
    data[i].selectedStream = e
    data[i].selectedProgram = preObj
    data[i].selectedCollege = preObj
    setChoices(data)
  }

  const setSelectedProgram = (e) => {
    console.log(e)
    let data = [...choices]
    data[i].selectedProgram = e
    data[i].selectedCollege = preObj
    setChoices(data)
  }

  const setSelectedCollege = (e) => {
    console.log(e)
    let data = [...choices]
    data[i].selectedCollege = e
    setChoices(data)
  }

  return (
    <>
      <Grid
        container
        className="dashboard-basic-info__row"
        justify="space-between"
        direction="row"
      >
        <Grid>
          <div className="dashboard-basic-info__formTitle">
            Choice # {choiceNumber}
          </div>
        </Grid>

        <Grid>
          <img
            src="/cross-sign.png"
            alt="cross_sign"
            onClick={() => removeChoice(i)}
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
    </>
  );
};

export default selectCollege;
