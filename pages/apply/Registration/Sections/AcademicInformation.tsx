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
import { RadioComponent } from "./RadioComponent";


export const AcademicInformation = () => {



  return (
    <>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
        noValidate
        autoComplete="off"
        style={{ backgroundColor: "white", borderRadius: "5px", padding: "20px" }}
      >
        <Typography variant="h5" gutterBottom>
          Academic Information
        </Typography>
        <Typography variant="h6" gutterBottom>
          Academic Scores
        </Typography>
        <Divider sx={{ my: 1 }} />

        <Grid container spacing={2} >
          <Grid item xs={12} sm={6} >
            {/* <InputLabel id="demo-simple-select-label">School Marks/ Class 10(X)/ Level 0</InputLabel> */}
            <TextField id="outlined-basic-schoolmarks" label="School Marks/ Class 10(X)/ Level 0" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6} >
            {/* <InputLabel id="demo-simple-select-label">High School Marks/ Class 12/ Level A Marks/ Diploma</InputLabel> */}
            <TextField id="outlined-basic-highscholmarks" label="High School Marks/ Class 12/ Level A Marks/ Diploma" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Academic Documents
        </Typography>
        <Divider sx={{ my: 1 }} />

        <FileUpload id="school"  label="School Certificate" />
        <FileUpload id="highschool"  label="High School Certificate" />
        <FileUpload id="other"  label="Other Certificate" />

        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="GRE" />
          </Grid>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="SAT" />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="GMAT" />
          </Grid>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="SAT II" />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="TOEFL" />
          </Grid>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="JEE Advance" />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12} sm={6} >
            <RadioComponent label="IELTS" />
          </Grid>
        </Grid>




      </Box>
    </>
  )
}