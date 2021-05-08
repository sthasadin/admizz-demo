import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";

import Alert from "@material-ui/lab/Alert";
import ClipLoader from "react-spinners/ClipLoader";
import Choice from "./Choice";

const DashboardChoiceFilling = (props) => {
  const [choicesArray, setChoicesArray] = useState([]);
  const [choiceNumber, setChoiceNumber] = useState(2);

  const [loader, setLoader] = useState(false);

  const [appliedCollege, setAppliedCollege] = React.useState([]);

  // handel submit button
  const sendData = () => {
    props.getData([...appliedCollege]);
    props.handleNext();
  };

  const onClickAddChoice = () => {
    setChoiceNumber(choiceNumber + 1);
    setChoicesArray((choicesArray) => [...choicesArray, choiceNumber]);
  };

  console.log(choicesArray);

  // trunclate string
  function truncateString(str, num = 20) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  // console.log(appliedCollege);

  const RemoveChoiceArray = (index) => {
    const filterArray = choicesArray.filter(c => c !== index);
    console.log(filterArray)
    setChoicesArray(filterArray);
    setAppliedCollege(appliedCollege.filter(clg => clg.id !== index))
    setChoiceNumber(choiceNumber - 1);
  };

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
          choiceNumber={1}
          // index={Math.random().toString(36).slice(2)}
          selectedData={props.selectedData}
          setAppliedCollege={setAppliedCollege}
          appliedCollege={appliedCollege}
          setLoader={setLoader}
        />

        {choicesArray.map((choiceNumber, i) => (
          <Choice
            key={Math.random().toString(36).slice(2)}
            onClickAddChoice={() => onClickAddChoice()}
            choiceNumber={choiceNumber}
            selectedData={props.selectedData}
            setAppliedCollege={setAppliedCollege}
            setLoader={setLoader}
            appliedCollege={appliedCollege}
            index={Math.random().toString(36).slice(2)}
            RemoveChoiceArray={RemoveChoiceArray}
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

            {appliedCollege.map((college, i) => {
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
            onClick={()=>{
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
};

export { DashboardChoiceFilling };
