import React, { useState } from "react";
import { Select } from "../Select";
import { Grid } from '@material-ui/core';
import { Button } from '../Button';

const Choice = (props) => {
  return (
    <div className="dashboard-basic-info__formContainer">
      <form>
        <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
          <Grid item sm={12} md={12} xs={12}>
            <div className="dashboard-basic-info__formTitle">
              Choice # {props.choiceNumber}
            </div>
          </Grid>
        </Grid>
        <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
          <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
            <Select title="eg: 50.50" />
          </Grid>
          <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
            <Select title="eg: 50.50" />
          </Grid>
        </Grid>
        <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
          <Grid className={'dashboard-basic-info__grid'} item sm={12} md={12} xs={12}>
            <Select title="eg: 50.50" />
          </Grid>
        </Grid>
        <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
          <div className="dashboard-basic-info__buttonContainer">
            <div className="dashboard-basic-info__viewText">
              Save Choice
            </div>
            <div className="dashboard-basic-info__editText" onClick={() => props.onClickAddChoice()}>
              Add More Choice
            </div>
          </div>
        </Grid>
      </form>
    </div>
  )
}

const DashboardChoiceFilling = (props) => {
  const [choicesArray, setChoicesArray] = useState([]);
  const [choiceNumber, setChoiceNumber] = useState(2);

  const onClickAddChoice = () => {
    setChoiceNumber(choiceNumber + 1)
    setChoicesArray(choicesArray => [...choicesArray, choiceNumber])
  }

  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle" >
          Choice Filling
        </div>
        <Choice onClickAddChoice={() => onClickAddChoice()} choiceNumber={1} />
        {choicesArray.map(choiceNumber => (
          <Choice onClickAddChoice={() => onClickAddChoice()} choiceNumber={choiceNumber} />
        ))}
      </div>

      {/* Applied College */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Applied College
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12}>
                <div className="dashboard-basic-info__formTitle">
                  You have selected these colleges for your Under Graduation Study
                </div>
              </Grid>
            </Grid>
            {/* <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__gridNoPadding'} item sm={12} md={3}>
                <div className="dashboard-basic-info__tableTitle">
                  COLLEGE/UNIVERSITY
                </div>
              </Grid>
              <Grid className={'dashboard-basic-info__gridNoPadding'} item sm={12} md={2}>
                <div className="dashboard-basic-info__tableTitle">
                  STREAM
                </div>
              </Grid>
              <Grid className={'dashboard-basic-info__gridNoPadding'} item sm={12} md={7}>
                <div className="dashboard-basic-info__tableTitle">
                  SPECIALIZATION
                </div>
              </Grid>
            </Grid> */}
            <div className="dashboard-basic-info__rowTable">
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={1} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__imageCell">
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Thaper institute
                    </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Address here
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Engineering
                    </div>
                    <div className="dashboard-basic-info__tableSubText">
                      UG
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Computer Science
                    </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Web, UI/UX Design
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <Button>
                      View Detail
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="dashboard-basic-info__rowTable">
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={1} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__imageCell">
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Thaper institute
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Address here
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Engineering
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      UG
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Computer Science
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Web, UI/UX Design
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <Button>
                      View Detail
                  </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="dashboard-basic-info__rowTable">
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={1} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__imageCell">
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Thaper institute
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Address here
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Engineering
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      UG
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Computer Science
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Web, UI/UX Design
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <Button>
                      View Detail
                  </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="dashboard-basic-info__rowTable">
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={1} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__imageCell">
                    </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Thaper institute
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Address here
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Engineering
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      UG
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={4} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <div className="dashboard-basic-info__tableText">
                      Computer Science
                  </div>
                    <div className="dashboard-basic-info__tableSubText">
                      Web, UI/UX Design
                  </div>
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <div className="dashboard-basic-info__tableCell">
                    <Button>
                      View Detail
                  </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </form>
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

export { DashboardChoiceFilling };
