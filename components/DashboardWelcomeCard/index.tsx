import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box className="circle-container">
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ width: "65px", height: "65px", color: "#FFA200", zIndex: "1" }}
      />
      <Box className="circle">{props.value}%</Box>
    </Box>
  );
}

const DashboardWelcomeCard = () => {
  const [progressValue, setProgressValue] = React.useState(0 as number);

  React.useEffect(() => {
    const basicInformation = JSON.parse(
      localStorage.getItem("basicInformation")
    );
    const backgroundInformation = JSON.parse(
      localStorage.getItem("backgroundInformation")
    );
    const acadmicInformation = JSON.parse(
      localStorage.getItem("academicInformation")
    );

    let percentage = 0;
    if (basicInformation) {
      percentage = percentage + 34;
    }
    if (backgroundInformation) {
      percentage = percentage + 34;
    }
    if (acadmicInformation) {
      percentage = 90;
    }

    setProgressValue(percentage);
  }, [
    localStorage.getItem("basicInformation"),
    localStorage.getItem("backgroundInformation"),
    localStorage.getItem("acadmicInformation"),
  ]);

  return (
    <div className="dashboard-welcome-card">
      <div className="dashboard-welcome-card__percentContainer">
        <CircularProgressWithLabel value={progressValue} />
      </div>
      <div className="dashboard-welcome-card__textInfoContainer">
        <div className="dashboard-welcome-card__titleText">
          Welcome to Admizz Student Dashboard!! Complete your application
          process
        </div>
        <div className="dashboard-welcome-card__descText">
          It seems that you are new here, and havent filled all your detail for
          applying via admizz. Please complete all the information for you to
          get started, Click on the “Complete Application” Button to fill your
          remaining details. Thank you.
        </div>
      </div>
      <div className="dashboard-welcome-card__ButtonContainer">
        <Link href="/dashboardbasicinfo/apply">
          <Button className="contact-form__send-message">
            Complete Application
          </Button>
        </Link>
      </div>
    </div>
  );
};

export { DashboardWelcomeCard };
