import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";

const AppliedCollege = ({ selectedCollege }) => {
  function truncateString(str, num = 20) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <Grid
          container
          className="dashboard-basic-info__row"
          justify="space-around"
          direction="row"
        >
          <Grid item sm={12} md={12}>
            <div className="dashboard-basic-info__formTitle">
              You have selected these colleges Study
            </div>
          </Grid>
        </Grid>
        <div className="dashboard-basic-info__rowTableTitle">
          <Grid
            container
            className="dashboard-basic-info__row"
            justify="space-around"
            direction="row"
          >
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={3}
            >
              <div className="dashboard-basic-info__tableTitle">
                COLLEGE/UNIVERSITY
              </div>
            </Grid>
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={2}
            >
              <div className="dashboard-basic-info__tableTitle">STREAM</div>
            </Grid>
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={7}
            >
              <div className="dashboard-basic-info__tableTitle">
                SPECIALIZATION
              </div>
            </Grid>
          </Grid>
        </div>

        {selectedCollege &&
          selectedCollege.map((college, i) => {
            return (
              <div className="dashboard-basic-info__rowTable" key={i}>
                <Grid
                  container
                  className="dashboard-basic-info__row"
                  justify="space-around"
                  direction="row"
                >
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={1}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__tableCell">
                      <div className="dashboard-basic-info__imageCell">
                        <img
                          src={college?.image}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={2}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__tableCell">
                      <div className="dashboard-basic-info__tableText">
                        {college.collegeName}
                      </div>
                      <div className="dashboard-basic-info__tableSubText">
                        {truncateString(college.address)}
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={2}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__tableCell">
                      <div className="dashboard-basic-info__tableText">
                        {college.collegeProgram}
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={4}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__tableCell">
                      <div className="dashboard-basic-info__tableText">
                        {college.collegeStream}
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={3}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__tableCell">
                      <Button>
                        <a
                          href={`${process.env.BASE_URL}/colleges/${college?.id}`}
                          target="_blank"
                        >
                          View Detail
                        </a>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AppliedCollege;
