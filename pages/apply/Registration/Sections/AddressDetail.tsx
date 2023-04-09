import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from "@mui/material/Box";
import { Typography, TextField } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import "react-phone-number-input/style.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { countries, genders } from "../../Shared/data";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { FormContext } from "context/FormContextProvider";
import { Divider } from "@mui/material";

export const AddressDetail = () => {
  const {
    address,
    city,
    state,
    countryselected,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    handleAddressChange,
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
          Address Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          Personal Address
        </Typography>
        <Divider sx={{ my: 1 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} style={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic-address"
                  label="Permanent Address"
                  value={address}
                  variant="outlined"
                  onChange={handleAddressChange}
                />
              </Grid>
            </Grid>
            <br />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic-city"
                  label="City"
                  variant="outlined"
                  value={city}
                  onChange={handleCityChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic-state"
                  label="State"
                  variant="outlined"
                  value={state}
                  onChange={handleStateChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label-country">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label-country"
                    id="country"
                    value={countryselected}
                    label="Nationality"
                    onChange={handleCountryChange}
                    sx={{ "& .MuiMenuItem-root": { whiteSpace: "pre-wrap" } }}
                  >
                    {countries.map((country, i) => {
                      return (
                        <MenuItem key={country} value={country}>
                          {country}
                          <br />
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
