import React from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '../Button';

const DashboardBasicInfo = (props) => {
  return (
    <div className="dashboard-basic-info">
      {/* Apply For */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__pageTitle">
          {"Dashboard > "}<p className="dashboard-basic-info__pageTitleHighlight">Apply</p>
        </div>
        <div className="dashboard-basic-info__sectionTitle">
          Applying For
        </div>
        <div className="dashboard-basic-info__formContainer">
          <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
            <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
              <Select title="Select Stream" />
            </Grid>
            <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
              <Select title="Choose Catagory" />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Personal Detail */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Personal Detail
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Full Name" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Middle Name" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Last Name" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
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
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Email Address" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Select title="Nationality" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'student-info__input student-info__phone'}
                  fullWidth
                  placeholder="Date Of Birth" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Select title="Gender" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {/* Address Detail */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Address Detail
        </div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle">
              Residential Address
            </div>
            <hr className="dashboard-basic-info__horizontalLine" />
            <form>
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Address Line 1" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <Select title="Country" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <Select title="State" />
                </Grid>
              </Grid>
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <Select title="City" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Zip Code" />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                </Grid>
                <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                  <Grid className={'dashboard-basic-info__grid'} item sm={12} xs={12}>
                    <FormControlLabel className="dashboard-basic-info__checkboxLabel" control={<Checkbox name="checked" />} label="Permanent address is same as residential address" />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
          <div className="dashboard-basic-info__formTitle">
            Permanent Address
          </div>
          <hr className="dashboard-basic-info__horizontalLine" />
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Address Line 1" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Select title="Country" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Select title="State" />
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Select title="City" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Zip Code" />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
              </Grid>
            </Grid>
          </form>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div className="dashboard-basic-info__backContainer">
            Cancel
          </div>
          <Button
            onClick={props.handleNext}>
            {'Save & Continue'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { DashboardBasicInfo };
