import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "../Button";

const AppliedCollege = ({ selectedCollege }) => {
  function truncateString(str, num = 20) {
    if (str?.length <= num) {
      return str;
    }
    return str?.slice(0, num) + "...";
    
  }

  return (
    <>
      <div>
        {/* <Grid
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
        </Grid> */}
        <div
          className="dashboard-basic-info__rowTableTitle"
          style={{ marginTop: "10px", paddingLeft: "0" }}
        >
          <Grid
            container
            // className="dashboard-basic-info__row"

            direction="row"
            style={{ gap: "0" }}
          >
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={6}
            >
              <div className="dashboard-basic-info__tableTitle">
                COLLEGE/UNIVERSITY
              </div>
            </Grid>
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={3}
            >
              <div className="dashboard-basic-info__tableTitle">STREAM</div>
            </Grid>
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={3}
            >
              <div className="dashboard-basic-info__tableTitle">
                SPECIALIZATION
              </div>
            </Grid>
            <Grid
              className={"dashboard-basic-info__gridNoPadding"}
              item
              sm={12}
              md={3}
            ></Grid>
          </Grid>
        </div>

        {selectedCollege &&
          selectedCollege.map((college, i) => {
            return (
              <div className="dashboard-basic-info__rowTable" key={i}>
                <Grid
                  container
                  style={{ marginTop: "10px" }}
                  justify="space-around"
                  direction="row"
                >
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={6}
                    xs={2}
                  >
                    <div
                      className="dashboard-basic-info__tableCell"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <div
                        className="dashboard-basic-info__imageCell"
                        style={{ maxWidth: "90px" }}
                      >
                        <img
                          src={college?.image}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="dashboard-basic-info__tableCell">
                        <div className="dashboard-basic-info__tableText">
                          {college.collegeName}
                        </div>
                        <div className="dashboard-basic-info__tableSubText">
                          {truncateString(college.address)}
                        </div>
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
                      <div className="dashboard-basic-info__tableText">
                        {college.collegeProgram}
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
                          href={`/colleges/${college?.college_slug}`}
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
