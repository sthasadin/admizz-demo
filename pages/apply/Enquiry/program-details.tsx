import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import "@progress/kendo-theme-default/dist/all.css";
import {
  FormInput,
  FormDropDownList,
  FormTextArea,
} from "../Shared/form-components";
import { requiredValidator } from "../Shared/validators";
import { interestedCountries, interestedProgramLevel } from "../Shared/data";
import PublicIcon from "@material-ui/icons/Public";
import School from "@material-ui/icons/School";
import Library from "@material-ui/icons/LocalLibrary";
import Question from "@material-ui/icons/QuestionAnswer";
import College from "@material-ui/icons/AccountBalance";
import { AskConfirmation } from "./ask-confirmation";
import { Button } from "@progress/kendo-react-buttons";

export const ProgramDetails = (props) => {
  // console.log("first", props);
  return (
    <div
      style={{
        position: "relative",
        // backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* {step == true ? ( */}
      <div>
        <Field
          icon={<PublicIcon />}
          key={"interestedcountry"}
          id={"interestedcountry"}
          name={"interestedcountry"}
          label={"Interested Country for Study"}
          placeholder={"Enter your Interested Country for Study*"}
          component={FormDropDownList}
          data={interestedCountries}
          validator={requiredValidator}
          required={true}
        />
        <Field
          icon={<School />}
          key={"levelofstudy"}
          id={"levelofstudy"}
          name={"levelofstudy"}
          label={"Interested Program Level of Study"}
          placeholder={"Enter your Interested Program Level of Study*"}
          required={true}
          component={FormDropDownList}
          data={interestedProgramLevel}
          validator={requiredValidator}
        />
        <Field
          icon={<Library />}
          key={"studyprogram"}
          id={"studyprogram"}
          name={"studyprogram"}
          label={"Program You want to Study"}
          placeholder={"Enter the Program You want to Study*"}
          required={true}
          component={FormInput}
          validator={requiredValidator}
        />
        <Field
          icon={<College />}
          key={"university"}
          id={"university"}
          name={"university"}
          label={"University/College Preference, If any"}
          placeholder={"Enter your University/College Preference, If any*"}
          required={true}
          component={FormInput}
          validator={requiredValidator}
        />
        <Field
          icon={<Question />}
          key={"question"}
          id={"question"}
          name={"question"}
          label={"Do you have any questions for your counselor?"}
          placeholder={"Enter your queries"}
          hint={"This will help our counselor prepare for the session."}
          component={FormTextArea}
        />
      </div>
      <div
        style={{
          margin: "10px",
          position: "absolute",
          right: "0",
          bottom: "-46px",
          // backgroundColor: "red",
          alignItems: "right",
        }}
      >
        <Button style={{ marginRight: "20px" }} onClick={props.onPrevClick}>
          Previous
        </Button>
        <Button
          style={{
            marginRight: "20px",
            backgroundColor: "#ffa200",
            color: "white",
          }}
          disabled={props.disable}
          onClick={props.submit}
        >
          Submit
        </Button>
      </div>
      {/* ) : (
        <AskConfirmation />
      )} */}
    </div>
  );
};
