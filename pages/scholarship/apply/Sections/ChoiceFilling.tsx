import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import "react-phone-number-input/style.css";
import "@progress/kendo-theme-default/dist/all.css";
import "react-phone-number-input/style.css";
import { ChooseCollege } from "./ChooseColleges";
import { FormContext } from "context/FormContextProvider";

export const ChoiceFilling = () => {
  const { choices, choiceNumber, chooseCollegeHandler, handleCollegeChange } =
    React.useContext(FormContext);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            // width: "100%",
            position: "relative",
            minHeight: "10px",
          },
        }}
        noValidate
        autoComplete="off"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              position: "relative",
              minHeight: "10px",
            },
          }}
          noValidate
          autoComplete="off"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Choice Filling
          </Typography>
          {[...Array(choiceNumber)].map((_, i) => (
            <ChooseCollege
              choiceNumber={i + 1}
              key={i}
              id={`choice-${i + 1}`}
              onSelect={(object) => handleCollegeChange(i, object)}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          style={{ backgroundColor: "#ffb026" }}
          onClick={chooseCollegeHandler}
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "20%",
          }}
        >
          Add more Choice
        </Button>
      </Box>
    </>
  );
};
