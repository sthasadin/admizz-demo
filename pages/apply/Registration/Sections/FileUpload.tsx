import { useState } from 'react';
import { Box, Button, FormControl, FormHelperText, InputLabel, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FormLabel, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

const FileUpload = (props) => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      console.log(selectedFile)
    }
  };

  const handleSubmit = () => {
    // Do something with the selected file
    console.log(selectedFile);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
              <FormControl>
                <FormLabel htmlFor={`${props.id}-file-upload`}>{props.label}</FormLabel>
                <Input
                  id={`${props.id}-file-upload`}
                  type="file"
                  inputProps={{ accept: '.jpg, .jpeg, .png, .pdf' }}
                  className={classes.input}
                  onChange={handleFileSelect}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
              <label htmlFor={`${props.id}-file-upload`}>
                <Button variant="contained" component="span">
                  Browse
                </Button>
              </label>
              <Box sx={{ ml: 1 }}>
                <Button variant="contained" color="primary" disabled={!selectedFile} onClick={handleSubmit}>
                  Upload
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {!selectedFile && (
        <FormHelperText error>
          Please select a file (JPG, JPEG, PNG, or PDF) to upload.
        </FormHelperText>
      )}

    </>

  );
};

export default FileUpload;
