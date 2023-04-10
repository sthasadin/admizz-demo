import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from "@mui/material/Box";
import { TextField, Typography } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import { Divider, Grid } from "@mui/material";
import "react-phone-number-input/style.css";
import FileUpload from "./FileUpload";
import { MuiTelInput } from "mui-tel-input";
import { FormContext } from "context/FormContextProvider";

export const RadioComponent = (props) => {
  const { radioGroup, handleRadioChange } = React.useContext(FormContext);

  const controlProps = (item: string) => ({
    checked: radioGroup[props.label] === item,
    onChange: handleRadioChange,
    value: item,
    name: props.label,
    inputProps: { "aria-label": item },
  });

  return (
    <FormControl>
      <FormLabel style={{ marginBottom: "10px" }} component="legend">
        {props.label}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        id={`row-radio-buttons-group-${props.label}}`}
      >
        <FormControlLabel
          value="Yes"
          control={
            <Radio
              id={`row-radio-buttons-yes-${props.label}}`}
              {...controlProps("Yes")}
              sx={{
                color: "#ffa202",
                "&.Mui-checked": {
                  color: "#ffa202",
                },
              }}
            />
          }
          label="Yes"
        />
        <FormControlLabel
          value="No"
          control={
            <Radio
              id={`row-radio-buttons-no-${props.label}}`}
              {...controlProps("No")}
              sx={{
                color: "#ffa202",
                "&.Mui-checked": {
                  color: "#ffa202",
                },
              }}
            />
          }
          label="No"
        />
      </RadioGroup>
    </FormControl>
  );
};
