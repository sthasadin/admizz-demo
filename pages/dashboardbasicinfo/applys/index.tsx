import React, { useEffect, useState, useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";

import StickyBox from "react-sticky-box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { DashboardBasicInfo } from "../../../components/DashboardBasicInfo";
import { DashboardBackgroundInfo } from "../../../components/DashboardBackgroundInfo/DashboardBackgroundInfo";
import { DashboardAcademicInfo } from "../../../components/DashboardAcademicInfo/DashboardAcademicInfo";
import { DashboardChoiceFilling } from "../../../components/DashboardChoiceFilling";
import { DashboardReviewConfirm } from "../../../components/DashboardReviewConfirm";
import { DashboardLayout } from "../../../layouts/dashboardLayout";
import { withPrivateRoute } from "../../withPrivateRoute";
import { AuthContext } from "../../AuthContext";
import { getAuthUser } from "../../../store/Action/user.action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      justifyContent: "flex-start",
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {},
    stepper: {
      "& .MuiStepLabel-root": {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: "-10px",
      },
      "& .MuiStepLabel-label": {
        fontFamily: `"M PLUS 1p"`,
        fontWeight: 500,
        textAlign: "left",
      },
      "& .MuiStepIcon-active": {
        color: "#FFA200",
      },
    },
  })
);

const initBeforeUnLoad = (showExitPrompt, setShowExitPrompt) => {
  window.onbeforeunload = (event) => {
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = "";
        setShowExitPrompt(false);
      }
      return "";
    }
  };
};

const DashboardBasicInfoPage = () => {
  const { authenticated, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [authUser, setAuthUser] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState<{ [k: number]: boolean }>({});
  const steps = [
    "Basic Information",
    "Background Information",
    "Academic Information",
    "Choice Filing",
    "Review & Confirm",
  ];
  const [basicInfo, setBasicInfo] = useState({});
  const [backgroundInfo, setBackgroundInfo] = useState({});
  const [academicInfo, setAcademicInfo] = useState({});
  const [selectedChoice, setSelectedChoice] = useState([]);
  const [info, setInfo] = useState([]);
  const [showExitPrompt, setShowExitPrompt] = useState(false as boolean);

  const getUser = async (id: string) => {
    const user = await dispatch(getAuthUser(id));
    setAuthUser(user);
  };

  window.onload = function () {
    initBeforeUnLoad(showExitPrompt, setShowExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt, setShowExitPrompt);

    // return () => {
    //   setShowExitPrompt(false);
    // };
  }, [showExitPrompt]);

  useEffect(() => {
    if (authenticated) {
      getUser(user?.uid);
    }
    // setShowExitPrompt(true);
  }, [authenticated, user]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = async () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <DashboardBasicInfo
            handleNext={handleNext}
            getData={setBasicInfo}
            data={basicInfo}
            authUser={authUser}
            setShowExitPrompt={setShowExitPrompt}
          />
        );
      case 1:
        return (
          <DashboardBackgroundInfo
            handleNext={handleNext}
            handleBack={handleBack}
            getData={setBackgroundInfo}
            data={backgroundInfo}
            setShowExitPrompt={setShowExitPrompt}
          />
        );
      case 2:
        return (
          <DashboardAcademicInfo
            handleNext={handleNext}
            handleBack={handleBack}
            getData={setAcademicInfo}
            data={academicInfo}
            selectedLevel={basicInfo}
            setShowExitPrompt={setShowExitPrompt}
          />
        );
      case 3:
        return (
          <DashboardChoiceFilling
            handleNext={handleNext}
            handleBack={handleBack}
            getData={setSelectedChoice}
            selectedChoice={selectedChoice}
            info={info}
            setInfo={setInfo}
            setShowExitPrompt={setShowExitPrompt}
          />
        );
      case 4:
        return (
          <DashboardReviewConfirm
            handleBack={handleBack}
            basicInfo={basicInfo}
            backgroundInfo={backgroundInfo}
            academicInfo={academicInfo}
            selectedChoice={selectedChoice}
            setBackgroundInfo={setBackgroundInfo}
            setAcademicInfo={setAcademicInfo}
            setBasicInfo={setBasicInfo}
            authUser={authUser}
            setShowExitPrompt={setShowExitPrompt}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <DashboardLayout title="Apply">
      <div className="dashboard-basic-info-page__mainpage">
        {getStepContent(activeStep)}
      </div>

      <div className="dashboard-basic-info-page__stepperContainer">
        <StickyBox>
          <div className="dashboard-basic-info-page__stepperTitle">
            Application Steps
          </div>
          <Stepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
            style={{ borderRadius: "5px" }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  className={classes.stepper}
                  completed={completed[index]}
                  onClick={handleStep(index)}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </StickyBox>
      </div>
    </DashboardLayout>
  );
};

export default withPrivateRoute(DashboardBasicInfoPage);
