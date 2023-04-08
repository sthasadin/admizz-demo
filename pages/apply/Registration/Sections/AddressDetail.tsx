import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from '@mui/material/Box';
import { Typography, TextField } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import 'react-phone-number-input/style.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { countries, genders } from "../../Shared/data";
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export const AddressDetail = () => {
  const [countryselected, setCountrySelected] = React.useState('');


  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountrySelected(event.target.value as string);
  };

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
          Address Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          Personal Address
        </Typography>
        <TextField id="outlined-basic-address" label="Permanent Address" variant="outlined" />
        <br />


        <Grid container spacing={2} >
          <Grid item xs={12} sm={4} >
            <TextField id="outlined-basic-city" label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4} >
            <TextField id="outlined-basic-state" label="State" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4} >
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label-country">Nationality</InputLabel>
              <Select
                labelId="demo-simple-select-label-country"
                id="country"
                value={countryselected}
                label="Nationality"
                onChange={handleCountryChange}
                sx={{ "& .MuiMenuItem-root": { whiteSpace: "pre-wrap" } }}

              >
                {countries.map((country, i) => {
                  return (<MenuItem key={country} value={country}>{country}<br /></MenuItem>)
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box >
    </>
  )
}