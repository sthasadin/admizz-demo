import React from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '../Button';
import { UploadButton } from '../Button/uploadButton';

const DashboardBackgroundInfo = (props) => {
  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Background Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5}>
                <div className="dashboard-basic-info__formTitle">
                  Do you have a passport?
              </div>
              </Grid>
              <Grid item sm={12} md={7}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Name On Passport" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Passport Number" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Issuing Authority" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Expiry Date of Passport" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <Select title="Issuing Country" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5}>
                <div className="dashboard-basic-info__formTitle">
                  Have you applied for Passport?
                </div>
              </Grid>
              <Grid item sm={12} md={7}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Enter your Citizenship / National ID
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Citizenship ID / National ID" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
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
          </form>
        </div>
      </div>

      {/* Reference Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Reference Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle">
              At least 2 references
            </div>
            <hr className="dashboard-basic-info__horizontalLine" />
            <form>
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Full Name" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <div className={'student-info__phone-input'}>
                    <div className={'student-info__phone-separator'}>
                      +977
                  </div>
                    <Input
                      className={'student-info__input student-info__phone'}
                      fullWidth
                      placeholder="Phone Number" />
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Email Address" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Address" />
                </Grid>
              </Grid>
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Full Name" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <div className={'student-info__phone-input'}>
                    <div className={'student-info__phone-separator'}>
                      +977
                  </div>
                    <Input
                      className={'student-info__input student-info__phone'}
                      fullWidth
                      placeholder="Phone Number" />
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Email Address" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Address" />
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div className="dashboard-basic-info__backContainer" onClick={props.handleBack}>
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

export { DashboardBackgroundInfo };
