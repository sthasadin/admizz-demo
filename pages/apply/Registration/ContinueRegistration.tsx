import * as React from "react";
import { Divider } from "@mui/material";
import { ApplyingFor } from "./Sections/ApplyingFor";
import { PersonalDetail } from "./Sections/PersonalDetail";
import { AddressDetail } from "./Sections/AddressDetail";
import "react-phone-number-input/style.css";
import "@progress/kendo-theme-default/dist/all.css";
import { BackgroundInformation } from "./Sections/BackgroundInformation";
import { ParentsInformation } from "./Sections/ParentsInformation";
import { AcademicInformation } from "./Sections/AcademicInformation";
import { ChoiceFilling } from "./Sections/ChoiceFilling";
import { FormContext } from "context/FormContextProvider";
import { Button } from "@material-ui/core";
import Review from "./Review";
import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

export const ContinueRegistration = () => {
  const {
    showRegister,
    onRegisterClick,
    showReview,
    handleShowReview,
    handleLeftFormSubmit,
  } = React.useContext(FormContext);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const components = document.querySelectorAll(".form-holder");

      // Calculate the position of each component on the page
      const positions = Array.from(components).map(
        (comp) => (comp as HTMLElement).offsetTop
      );

      // Find the active step based on the current scroll position
      let newActiveStep = 0;
      for (let i = 0; i < positions.length; i++) {
        if (scrollPosition >= positions[i]) {
          newActiveStep = i;
        }
      }
      setActiveStep(newActiveStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="signin" style={{ display: "flex" }}>
      <div
        // style={{ flex: "0 0 20%", position: "sticky", top: 0 }}
        style={{
          flex: "0 0 20%",
          // display: "relative",
          // top: "100px",
          // left: "100px",
          // width: "16%",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "175px",
            left: "50px",
            width: "70%",
            // width: "16%",
          }}
        >
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            style={{ borderRadius: "10px", position: "sticky" }}
            // StepIconProps={{active: {color: '#'}}}
          >
            <Step completed={activeStep > 0}>
              <StepLabel>Applying For</StepLabel>
            </Step>
            <Step completed={activeStep > 1}>
              <StepLabel>Personal Detail</StepLabel>
            </Step>
            <Step completed={activeStep > 2}>
              <StepLabel>Address Detail</StepLabel>
            </Step>
            <Step completed={activeStep > 3}>
              <StepLabel>Background Information</StepLabel>
            </Step>
            <Step completed={activeStep > 4}>
              <StepLabel>Parents Information</StepLabel>
            </Step>
            <Step completed={activeStep > 5}>
              <StepLabel>Academic Information</StepLabel>
            </Step>
            <Step completed={activeStep > 6}>
              <StepLabel>Choice Filling</StepLabel>
            </Step>
          </Stepper>
        </div>
      </div>
      <div className="signin__inner" style={{ flex: "1 1 80%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "80%",
          }}
        >
          {!showReview && (
            <>
              <div className="form-holder">
                <ApplyingFor />
              </div>
              <div className="form-holder">
                <PersonalDetail />
              </div>
              <div className="form-holder">
                <AddressDetail />
              </div>
              <div className="form-holder">
                <BackgroundInformation />
              </div>
              <div className="form-holder">
                <ParentsInformation />
              </div>
              <div className="form-holder">
                <AcademicInformation />
              </div>
              <div className="form-holder">
                <ChoiceFilling />
              </div>
            </>
          )}
          {showReview && <Review />}
          {showReview && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLeftFormSubmit}
              style={{ backgroundColor: "#ffa200", marginTop: "5px" }}
            >
              {!showRegister ? "Review" : "Submit"}
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleShowReview}
            style={{ backgroundColor: "#ffa200", marginTop: "5px" }}
          >
            {!showReview ? "Review" : "Go Back"}
          </Button>
          {showRegister && !showReview && (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={onRegisterClick}
                style={{ backgroundColor: "#ffa200", marginTop: "5px" }}
              >
                {!showRegister ? "Review" : "Go Back"}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
