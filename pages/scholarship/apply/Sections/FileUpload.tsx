import { useState, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormLabel, Grid } from "@mui/material";
import { FormContext } from "context/FormContextProvider";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

const FileUpload = (props) => {
  const classes = useStyles();

  const { selectedFile, handleFileSelect, handleFileSubmit } =
    useContext(FormContext);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8}>
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}
            >
              <FormControl>
                <FormLabel htmlFor={`${props.id}-file-upload`}>
                  {props.label}
                </FormLabel>
                <Input
                  id={`${props.id}-file-upload`}
                  type="file"
                  inputProps={{ accept: ".jpg, .jpeg, .png, .pdf" }}
                  className={classes.input}
                  onChange={handleFileSelect}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              <label htmlFor={`${props.id}-file-upload`}>
                <Button variant="contained" component="span">
                  Choose File
                </Button>
              </label>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {!selectedFile[`${props.id}`] && (
        <FormHelperText error>
          Please select a file (JPG, JPEG, PNG, or PDF) to upload.
        </FormHelperText>
      )}
    </>
  );
};

export default FileUpload;
