import React from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '../Button';
import { UploadButton } from '../Button/uploadButton';

const DashboardAcademicInfo = (props) => {
  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Academic Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Academics Scores
              </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__formText">
                  Passport/Citizenship/National ID
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__formText">
                  High School Marks / Class 12 / Level 0 Marks
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__formText">
                  Diploma Scroes
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__formText">
                  Class 11/Level1 Marks
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__formText">
                  Post graduate Marks
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__formText">
                  UnderGraduate Marks
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formText">
                  Personal Identification
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid item sm={12} md={7}>

                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <UploadButton>
                    Upload button
                  </UploadButton>
                </label>

              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid item sm={12} md={7}>

                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <UploadButton>
                    Upload button
                  </UploadButton>
                </label>

              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid item sm={12} md={7}>

                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <UploadButton>
                    Upload button
                  </UploadButton>
                </label>

              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid item sm={12} md={7}>

                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <UploadButton>
                    Upload button
                  </UploadButton>
                </label>

              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={4}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Enter Title" />
              </Grid>
              <Grid item sm={12} md={4}>
                <div className="dashboard-basic-info__uploadButtonContainer">
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: 'none' }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                    />

                    <UploadButton>
                      Upload button
                    </UploadButton>
                  </label>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {/* Reference Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__formTitle">
            Exam Scores
          </div>
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  GRE
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  GMAT
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <Input
                  className={'dashboard-basic-info__input'}
                  placeholder="eg: 50" />
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT II
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  GRE
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  GMAT
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <Input
                  className={'dashboard-basic-info__input'}
                  placeholder="eg: 50" />
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT II
              </div>
              </Grid>
              <Grid item sm={12} md={4}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
            </Grid>

            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={1}>
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
              <Grid item sm={12} md={2}>
                <div className="dashboard-basic-info__formTitle">
                  SAT
                </div>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="eg: 50.50" />
              </Grid>
            </Grid>
          </form>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div className="dashboard-basic-info__backContainer">
            Back
          </div>
          <Button
            onClick={props.handleNext}>
            Save And Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export { DashboardAcademicInfo };
