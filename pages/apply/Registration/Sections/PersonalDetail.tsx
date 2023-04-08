import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { countries, genders } from "../../Shared/data";
import { Typography, TextField } from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import 'react-phone-number-input/style.css';
import { MuiTelInput } from 'mui-tel-input'
import dayjs, { Dayjs } from 'dayjs';
import { Grid } from "@mui/material";

export const PersonalDetail = () => {
  const [countryselected, setCountrySelected] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [gender, setGender] = React.useState('');
  const [phone, setPhone] = React.useState('')



  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountrySelected(event.target.value as string);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone)
  }

  return (
  <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
    noValidate
    autoComplete="off"
    style={{ backgroundColor: "white", borderRadius:"5px", padding:"20px" }}
  >
    <Typography variant="h5" gutterBottom>
      Personal Details
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField id="outlined-basic-fullname" label="Full Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
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
    <Grid container spacing={2}>

      <Grid item xs={12} sm={4}>
        <MuiTelInput value={phone} placeholder="Phone Number" onChange={handlePhoneChange} fullWidth />
      </Grid>

      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField label="DOB" value={selectedDate} onChange={handleDateChange} fullWidth />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender-select"
            value={gender}
            label="Gender"
            onChange={handleGenderChange}
            sx={{ "& .MuiMenuItem-root": { whiteSpace: "pre-wrap" } }}
          >
            {genders.map((gend) => {
              return (<MenuItem key={gend.value} value={gend.label}>{gend.label}<br /></MenuItem>)
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>

  </Box>

  )
}