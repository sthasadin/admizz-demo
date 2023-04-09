import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import "@progress/kendo-theme-default/dist/all.css";
import {
  FormInput,
  FormNumberInput,
  FormDropDownList,
} from "../Shared/form-components";
import { nameValidator, requiredValidator } from "../Shared/validators";
import { countries } from "../Shared/data";
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import Phone from "@material-ui/icons/Phone";
import { AskConfirmation } from "./ask-confirmation";
import { FormContext } from "context/FormContextProvider";
import { Button } from "@progress/kendo-react-buttons";

export const PersonalDetails = (props) => {
  const { confirmation } = React.useContext(FormContext);
  const [showCounselling, setShowCountelling] = React.useState(false);

  const showCounsellingHandler = () => {
    setShowCountelling((prev) => !prev);
  };

  // const onRegisterClickHandler = (e) => {
  //   e.preventDefault();
  //   console.log("first");
  //   props.onRegister(true);
  // };

  return (
    <div style={{ position: "relative", height: "80%" }}>
      {/* {confirmation == 1 ? ( */}
      {!showCounselling && (
        <>
          <div>
            <Field
              icon={<PersonIcon />}
              key={"fullName"}
              id={"fullName"}
              name={"fullName"}
              label={"Full Name"}
              placeholder={"Enter your Full Name*"}
              required={true}
              component={FormInput}
              validator={nameValidator}
            />
            <Field
              icon={<PublicIcon />}
              key={"countryselected"}
              id={"countryselected"}
              name={"countryselected"}
              label={"Nationality"}
              placeholder={"Select your Nationality*"}
              required={true}
              component={FormDropDownList}
              data={countries}
              validator={requiredValidator}
            />

            <Field
              icon={<Phone />}
              key={"phone"}
              id={"phone"}
              name={"phone"}
              label={"Phone Number"}
              placeholder={"Enter your Phone Number*"}
              layout={"horizontal"}
              component={FormNumberInput}
              validator={requiredValidator}
              required={true}
            />
          </div>
          <div style={{ margin: "20px", position: "absolute", right: "0" }}>
            <Button
              style={{
                marginRight: "16px",
              }}
              onClick={props.onPrevClick}
            >
              Previous
            </Button>
            <Button
              style={{
                marginRight: "16px",
                backgroundColor: "#ffa200",
                color: "white",
              }}
              disabled={props.disable}
              onClick={showCounsellingHandler}
            >
              Next
            </Button>
          </div>
        </>
      )}
      {showCounselling && (
        <AskConfirmation
          showCounsellingHandler={showCounsellingHandler}
          onRegisterClickHandler={props.onRegisterClickHandler}
        />
      )}
      {/* ) : (
        <AskConfirmation />
      )} */}
    </div>
  );
};
