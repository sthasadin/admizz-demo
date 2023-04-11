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
import { FormContext } from "context/FormContextProvider";

export const BackgroundInformation = () => {
  const {
    passport,
    appliedPassport,
    identification,
    handleIdentificationChange,
    handlePassportChange,
    handleNoPassportChange,

    passportLink,
    handlePassportLink,
  } = React.useContext(FormContext);

  const controlProps = (item: string) => ({
    checked: passport === item,
    onChange: handlePassportChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const controlNoProps = (item: string) => ({
    checked: appliedPassport === item,
    onChange: handleNoPassportChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  // console.log(passport)

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
          Background Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ marginBottom: "10px" }}
                component="legend"
              >
                Do you have a Passport?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
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
          </Grid>
          {/* </Grid> */}
          <br />

          <Grid item xs={12} sm={12}>
            {passport == "No" && (
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Have you applied for a Passport?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={
                      <Radio
                        {...controlNoProps("Yes")}
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
                        {...controlNoProps("No")}
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
            )}
          </Grid>
        </Grid>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ marginBottom: "14px" }}
            >
              Citizenship ID/ National ID
            </InputLabel>
            <TextField
              style={{ width: "30%" }}
              id="outlined-basic-citizensship"
              label="Citizenship ID/ National ID"
              value={identification}
              onChange={handleIdentificationChange}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
              Personal Identification
            </Typography>
            <Divider sx={{ my: 1 }} />

            <TextField
              id="passport"
              label="Drive Link for Passport/ Citizenship/ National ID"
              variant="outlined"
              fullWidth
              value={passportLink}
              onChange={handlePassportLink}
            />

            {/* <FileUpload
              id="passport"
              label="Passport/ Citizenship/ National ID"
            /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
