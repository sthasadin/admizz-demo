import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import Choice from "./Choice";
const preObj = { label: '', value: '' }


const _choice = {
  selectedStream: preObj,
  selectedCollege: preObj,
  selectedProgram: preObj
}

const DashboardChoiceFilling = (props) => {
  const dispatch = useDispatch()
  const [choices, setChoices] = useState([_choice])
  const [loader, setLoader] = useState(false);
  const [appliedCollege, setAppliedCollege] = useState([]);
  const allStreams = useSelector(state => state.courses.allStreams.map(({ name: label, _id: value }) => ({ label, value })))
  const _appliedColleges = useSelector(state => state.courses.appliedColleges)
  const colleges = useSelector(state => state.courses.allColleges)
  function sendData() {
    props.getData([..._appliedColleges]);
    props.handleNext();
  };

  function onClickAddChoice() {
    let arr = choices.concat(_choice)
    console.log(arr)
    setChoices([...choices, _choice])
  }

  const removeChoice = (i) => {
    let arr = [...choices];
    arr.splice(i, 1)
    setChoices(arr)
    let colleges = [..._appliedColleges]
    colleges.splice(i,1)
    dispatch({ type: 'SAVE_APPLIED_COLLEGES', payload: colleges })
  }

  const handleSave = async () => {

    choices.forEach((choice, i) => {
      let {selectedCollege, selectedStream,selectedProgram} = choice

      let thisCollege = colleges.find(clg => clg.college.college_slug === choice.selectedCollege.value)

      if (thisCollege.college?._id !== undefined && selectedStream.value !== undefined) {

        const isAlreadyExist = _appliedColleges.some(clg => (clg.college_slug === selectedCollege.value && clg.collegeStream === selectedStream?.label && clg.collegeProgram === selectedProgram?.label))
  
        if (!isAlreadyExist) {
  
          const isSameIndex = _appliedColleges.findIndex(clg => (clg.id === i))
          if (isSameIndex >= 0) {
            _appliedColleges[isSameIndex] = {
              id: _appliedColleges[isSameIndex].id,
              collegeName: thisCollege.college?.name,
              image: thisCollege.college?.college_logo,
              address: thisCollege.college?.address,
              college_slug: thisCollege.college?.college_slug,
              collegeStream: selectedStream?.label,
              collegeProgram: selectedProgram?.label,
              collegeEmail: thisCollege.college?.email
            }
            dispatch({ type: 'SAVE_APPLIED_COLLEGES', payload: [..._appliedColleges] })
          } else {
            dispatch({
              type: 'SAVE_APPLIED_COLLEGES', payload: [..._appliedColleges, {
                id: i,
                collegeName: thisCollege.college?.name,
                image: thisCollege.college?.college_logo,
                address: thisCollege.college?.address,
                college_slug: thisCollege.college?.college_slug,
                collegeStream: selectedStream?.label,
                collegeProgram: selectedProgram?.label,
                collegeEmail: thisCollege.college?.email
              }]
            })
          }
        }

    }}


    )
  };

  return (
    <div className="dashboard-basic-info">
      {loader && (
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
      )}

      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">Choice Filling</div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            {
              choices.map((choice, i) => (
                <Choice
                  allStreams={allStreams}
                  choiceNumber={i + 1}
                  choices={choices}
                  setChoices={setChoices}
                  removeChoice={removeChoice}
                />
              ))
            }
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <div className="dashboard-basic-info__buttonContainer">
                <div
                  className="dashboard-basic-info__viewText"
                  onClick={() =>handleSave()}
                >
                  Save Choice
              </div>
                <div
                  className="dashboard-basic-info__editText"
                  onClick={() => onClickAddChoice()}
                >
                  Add More Choice
              </div>
              </div>
            </Grid>

          </form>
        </div>
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

            {_appliedColleges.map((college, i) => {
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
                            {college.collegeName}
                          </div>
                          <div className="dashboard-basic-info__tableSubText">
                            {college.address}
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
                            {college.collegeStream}
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
                            {college.collegeProgram}
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
                            <a
                              href={`http://localhost:3000/colleges/${college?.college_slug}`}
                              target="_blank"
                            >
                              View Detail
                            </a>
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
            onClick={() => {
              props.getData([...appliedCollege]);
              props.handleBack()
            }}
          >
            Back
          </div>
          <Button onClick={sendData}>Save And Continue</Button>
        </div>
      </div>
    </div>
  );

}

export { DashboardChoiceFilling };
