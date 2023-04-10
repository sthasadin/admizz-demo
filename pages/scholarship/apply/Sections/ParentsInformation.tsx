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

export const ParentsInformation = () => {
  const {
    parentName,
    parentEmail,
    parentAddress,
    parentPhone,
    handleParentNameChange,
    handleParentEmailChange,
    handleParentPhoneChange,
    handleParentAddressChange,
  } = React.useContext(FormContext);

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
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
          Parents Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-basic-fullname"
              label="Full Name"
              variant="outlined"
              fullWidth
              value={parentName}
              onChange={handleParentNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MuiTelInput
              value={parentPhone}
              placeholder="Phone Number"
              onChange={handleParentPhoneChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth
              value={parentEmail}
              onChange={handleParentEmailChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              id="outlined-basic-address"
              label="Permanent Address"
              variant="outlined"
              value={parentAddress}
              onChange={handleParentAddressChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
