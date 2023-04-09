import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { interestedProgramLevel } from "../../Shared/data";
import { Typography } from "@material-ui/core";
import "react-phone-number-input/style.css";
import { Grid } from "@mui/material";
import { FormContext } from "context/FormContextProvider";

export const ApplyingFor = () => {
  const { level, handleLevelChange } = React.useContext(FormContext);

  return (
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
        Applying For
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="Select Level"
              onChange={handleLevelChange}
            >
              {interestedProgramLevel.map((level) => {
                return (
                  <MenuItem value={level} key={level}>
                    {level}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};
