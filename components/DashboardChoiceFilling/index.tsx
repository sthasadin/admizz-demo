import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import ClipLoader from "react-spinners/ClipLoader";
import Choice from "./Choice";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { TrainRounded } from "@material-ui/icons";
const preObj = { label: "", value: "" };
const preArr = [];

const _choice = {
  selectedStream: preObj,
  selectedCollege: preObj,
  selectedProgram: preObj,
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DashboardChoiceFilling = ({
  handleNext,
  handleBack,
  getData,
  selectedChoice,
  info,
  setInfo,
}) => {
  const dispatch = useDispatch();
  const [choices, setChoices] = useState([_choice]);
  const [loader, setLoader] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [_appliedColleges, setAppliedColleges] = useState([]);
  const allStreams = useSelector((state) =>
    state.courses.allStreams.map(({ name: label, _id: value }) => ({
      label,
      value,
    }))
  );

  useEffect(() => {
    selectedChoice.length && setAppliedColleges([...selectedChoice]);
  }, [selectedChoice]);

  useEffect(() => {
    info.length && setChoices(info);
  }, [info]);

  function onClickAddChoice() {
    setChoices([
      ...choices,
      {
        selectedStream: preObj,
        selectedCollege: preObj,
        selectedProgram: preObj,
      },
    ]);
  }

  const removeChoice = (i) => {
    let arr = [...choices];
    arr.splice(i, 1);
    setChoices(arr);
    let colleges = [..._appliedColleges];
    colleges.splice(i, 1);
    setAppliedColleges(colleges);
  };

  const handleCheck = () => {
    if (_appliedColleges.length) {
      handleNext();
    } else {
      setSnackOpen(true);
    }
  };

  const handleSave = async () => {
    setLoader(true);
    setAppliedColleges(
      choices.map((c: any) => {
        return {
          collegeName: c.selectedCollege?.collegeName || "",
          image: c.selectedCollege?.image || "",
          address: c.selectedCollege?.address || "",
          college_slug: c.selectedCollege?.college_slug,
          collegeStream: c.selectedStream?.label,
          collegeProgram: c.selectedProgram?.label,
          collegeEmail: c.selectedCollege?.email || "",
        };
      })
    );
    setLoader(false);
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
            {choices.map((choice, i) => (
              <Choice
                allStreams={allStreams}
                choiceNumber={i + 1}
                choices={choices}
                setChoices={setChoices}
                removeChoice={removeChoice}
              />
            ))}
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <div className="dashboard-basic-info__buttonContainer">
                <div
                  className="dashboard-basic-info__viewText"
                  onClick={() => handleSave()}
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
            <div
              className="dashboard-basic-info__rowTableTitle"
              style={{ paddingLeft: "5px" }}
            >
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
                  <div
                    className="dashboard-basic-info__tableTitle"
                    style={{ paddingLeft: "5px" }}
                  >
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
                              href={`${process.env.BASE_URL}/colleges/${college?.college_slug}`}
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
              setInfo([...choices]);
              getData([..._appliedColleges]);
              handleBack();
            }}
          >
            Back
          </div>
          <Button
            onClick={() => {
              setInfo([...choices]);
              getData([..._appliedColleges]);
              handleCheck();
              //handleNext();
            }}
          >
            Save And Continue
          </Button>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="error">
          Please select atleast one college for your further studies
        </Alert>
      </Snackbar>
    </div>
  );
};

export { DashboardChoiceFilling };
