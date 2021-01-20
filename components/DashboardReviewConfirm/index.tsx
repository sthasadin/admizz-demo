import React from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '../Button';
import { UploadButton } from '../Button/uploadButton';

const DashboardReviewConfirm = (props) => {
  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Review and Confirmation
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Basic Information
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__gridInformation">
                  {/* Change Style According to Data */}
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Background Information
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__gridInformation">
                  {/* Change Style According to Data */}
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Academic Information
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__gridInformation">
                  {/* Change Style According to Data */}
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Choice Filing
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__gridInformation">
                  {/* Change Style According to Data */}
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  Personal Identification and AcademicsDocuments
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6}>
                <div className="dashboard-basic-info__gridInformation">
                  {/* Change Style According to Data */}
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__buttonContainer">
          <div className="dashboard-basic-info__backContainer" onClick={props.handleBack}>
            Back
          </div>
          <Button
            onClick={props.handleNext}>
            Confirm Application
          </Button>
        </div>
      </div>

    </div>
  );
};

export { DashboardReviewConfirm };
