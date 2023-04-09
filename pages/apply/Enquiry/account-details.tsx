import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Field } from "@progress/kendo-react-form";
import { FormInput } from "../Shared/form-components";
import MailIcon from "@material-ui/icons/Mail";
import { emailValidator } from "../Shared/validators";
import { FormContext } from "context/FormContextProvider";
import { Button } from "@progress/kendo-react-buttons";

export const AccountDetails = (props) => {
  const { email } = React.useContext(FormContext);

  const customOnChange = (event) => {
    console.log(event);
  };

  return (
    <div style={{ position: "relative", height: "80%" }}>
      <Field
        icon={<MailIcon />}
        key={"email"}
        id={"email"}
        name={"email"}
        label={"Email Address"}
        placeholder={"Enter your Email Address*"}
        hint={"Hint: Enter your personal email address."}
        type={"email"}
        component={FormInput}
        required={true}
        validator={emailValidator}
        parentChange={customOnChange}
      />
      <Button
        style={{
          backgroundColor: "#ffa200",
          color: "white",
          position: "absolute",
          // bottom: 0,
          right: 0,
          margin: "20px",
        }}
        disabled={props.disable}
        onClick={props.submit}
      >
        Next
      </Button>
    </div>
  );
};
