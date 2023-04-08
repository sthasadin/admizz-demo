import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from '@mui/material/Box';
import { TextField, Typography } from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import { Divider, Grid } from "@mui/material";
import 'react-phone-number-input/style.css';
import FileUpload from "./FileUpload";
import { MuiTelInput } from 'mui-tel-input'

export const RadioComponent = (props) => {
  const [value, setValue] = React.useState('yes');

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: value === item,
    onChange: handleValueChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


  return (
    <FormControl >
      <FormLabel style={{marginBottom:"10px"}} component="legend">{props.label}</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="yes" control={
            <Radio
              {...controlProps('yes')}
              sx={{
                color: "#ffa202",
                '&.Mui-checked': {
                  color: "#ffa202",
                },
              }}
            />
          } label="Yes" />
          <FormControlLabel value="no" control={
            <Radio
              {...controlProps('no')}
              sx={{
                color: "#ffa202",
                '&.Mui-checked': {
                  color: "#ffa202",
                },
              }}
            />
          } label="No" />
        </RadioGroup>
  </FormControl>
  

  )
}