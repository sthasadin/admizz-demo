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
import { Divider } from "@mui/material";
import 'react-phone-number-input/style.css';
import FileUpload from "./FileUpload";


export const BackgroundInformation = () => {
  const [passport, setPassport] = React.useState('yes');
  const [appliedPassport, setAppliedPassport] = React.useState('yes');

  const handlePassportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassport(event.target.value);
  };
  const handleNoPassportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppliedPassport(event.target.value);
  };


  const controlProps = (item: string) => ({
    checked: passport === item,
    onChange: handlePassportChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const controlNoProps = (item: string) => ({
    checked: appliedPassport === item,
    onChange: handleNoPassportChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  // console.log(passport)

  return (
    <>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
        noValidate
        autoComplete="off"
        style={{ backgroundColor: "white", borderRadius:"5px", padding:"20px" }}
      >
        <Typography variant="h5" gutterBottom>
          Background Information
        </Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Do you have a Passport?</FormLabel>
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
        <br />
        {passport == "no" && <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Have you applied for a Passport?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={
              <Radio
                {...controlNoProps('yes')}
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
                {...controlNoProps('no')}
                sx={{
                  color: "#ffa202",
                  '&.Mui-checked': {
                    color: "#ffa202",
                  },
                }}
              />
            } label="No" />
          </RadioGroup>
        </FormControl>}

        <br />
        <InputLabel id="demo-simple-select-label">Citizenship ID/ National ID</InputLabel>
        <TextField id="outlined-basic-citizensship" label="Citizenship ID/ National ID" variant="outlined" />
        <Typography variant="h6" gutterBottom>
          Personal Identification
        </Typography>
        <Divider sx={{ my: 1 }} />
        <FileUpload id="passport" label="Passport/ Citizenship/ National ID"/>
      </Box>
    </>
  )
}