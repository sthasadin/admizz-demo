import React from "react";
import { Button } from "../Button";

const DashboardWelcomeCard = () => {
  return (
    <div className="dashboard-welcome-card">
      <div className="dashboard-welcome-card__percentContainer">
        Percent
        </div>
      <div className="dashboard-welcome-card__textInfoContainer">
        <div className="dashboard-welcome-card__titleText">
          Welcome to Admizz Student Dashboard!! Complete your application process
        </div>
        <div className="dashboard-welcome-card__descText">
          It seems that you are new here, and havent filled all your detail for applying via admizz. Please complete all the information for you to get started, Click on the “Complete Application” Button to fill your remaining details. Thank you.
        </div>
      </div>
      <div className="dashboard-welcome-card__ButtonContainer">
        <Button className="contact-form__send-message">Complete Application</Button>
      </div>
    </div>
  );
};

export { DashboardWelcomeCard };
