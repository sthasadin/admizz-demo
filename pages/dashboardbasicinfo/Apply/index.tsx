import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Head from "next/head";
import StickyBox from "react-sticky-box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { DashboardSidebar } from "../../../components/DashboardSidebar";
import { DashboardBasicInfo } from "../../../components/DashboardBasicInfo";
import { DashboardBackgroundInfo } from "../../../components/DashboardBackgroundInfo/DashboardBackgroundInfo";
import { DashboardAcademicInfo } from "../../../components/DashboardAcademicInfo/DashboardAcademicInfo";
import { DashboardChoiceFilling } from "../../../components/DashboardChoiceFilling";
import { DashboardReviewConfirm } from "../../../components/DashboardReviewConfirm";
import { DashboardNavbar } from "../../../layouts/dashboardnavbar";

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

const DashboardBasicInfoPage = () => {
  const classes = useStyles();
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
  useEffect(() => {
    console.log("basicInfo", basicInfo);
    console.log("backgroundInfo", backgroundInfo);
    console.log("academicInfo", academicInfo);
    console.log("selectedChoice", selectedChoice);
  }, [basicInfo, backgroundInfo, academicInfo, selectedChoice]);

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

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <DashboardBasicInfo
            handleNext={handleNext}
            getData={setBasicInfo}
            data={basicInfo}
          />
        );
      case 1:
        return (
          <DashboardBackgroundInfo
            handleNext={handleNext}
            handleBack={handleBack}
            getData={setBackgroundInfo}
            data={backgroundInfo}
          />
        );
      case 2:
        return (
          <DashboardAcademicInfo
            handleNext={handleNext}
            handleBack={handleBack}
            getData={setAcademicInfo}
            data={academicInfo}
            basicInfo={basicInfo}
          />
        );
      case 3:
        return (
          <DashboardChoiceFilling
            handleNext={handleNext}
            handleBack={handleBack}
            getData={setSelectedChoice}
            data={selectedChoice}
            selectedData={basicInfo}
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
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <DashboardNavbar />
      </Head>
      <main className="dashboard-basic-info-page">
        <div className="dashboard-basic-info-page__sidebar">
          <DashboardSidebar />
        </div>
        <div className="dashboard-basic-info-page__mainpage">
          {getStepContent(activeStep)}
        </div>

        <div className="dashboard-basic-info-page__stepperContainer">
          <StickyBox>
            <div className="dashboard-basic-info-page__stepperTitle">
              Application Steps
            </div>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton
                    className={classes.stepper}
                    completed={completed[index]}
                  >
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </StickyBox>
        </div>
      </main>
    </div>
  );
};

export default DashboardBasicInfoPage;
