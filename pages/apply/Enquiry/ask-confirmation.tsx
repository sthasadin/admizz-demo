import React, { useContext } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { FormContext } from "context/FormContextProvider";

export const AskConfirmation = (props) => {
  const { showRegister, onRegisterClick } = useContext(FormContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h4>Do you want to register on our Portal or Book a Counselling?</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "200px", marginTop: "20px" }}>
          <Button
            themeColor={"primary"}
            style={{
              marginRight: "16px",
              height: "40px",
              width: "200px",
              fontSize: "16px",
              backgroundColor: "#ffa200",
              color: "white",
            }}
            onClick={props.onRegisterClickHandler}
          >
            Register on Portal
          </Button>
          <Button
            themeColor={"primary"}
            style={{
              marginRight: "16px",
              height: "40px",
              width: "200px",
              fontSize: "16px",
              backgroundColor: "#ffa200",
              color: "white",
            }}
            onClick={props.submit}
          >
            Book a Counselling
          </Button>
        </div>
      </div>
      <div>
        <Button
          style={{ margin: "20px" }}
          onClick={props.showCounsellingHandler}
        >
          Previous
        </Button>
      </div>
    </div>
  );
};
