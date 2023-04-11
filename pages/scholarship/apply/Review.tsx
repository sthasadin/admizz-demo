import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { FormContext } from "context/FormContextProvider";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Review = () => {
  const {
    level,
    countryselected,
    selectedDate,
    gender,
    phone,
    passport,
    appliedPassport,
    nationalityselected,
    parentPhone,
    choiceNumber,
    choices,
    fullname,
    email,
    address,
    city,
    state,
    identification,
    parentName,
    parentEmail,
    parentAddress,
    radioGroup,
    schoolmarks,
    HighSchoolMarks,
    handleShowReview,
  } = React.useContext(FormContext);
  const classes = useStyles();

  return (
    <>
      {/* <div className="signin">
        <div className="signin__inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          > */}
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
          Review and Confirmation
        </Typography>
        <Divider sx={{ my: 2 }} />

        <br />

        <Typography variant="h6" gutterBottom>
          Basic Information
        </Typography>
        <Divider sx={{ my: 1 }} />

        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Full Name
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {fullname} */}

                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={fullname}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Email Address
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={email}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {email} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Phone Number
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={phone}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {phone} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Date of Birth
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={selectedDate.toISOString().slice(0, 10)}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {selectedDate.toISOString().slice(0, 10)} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Gender
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={gender}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {gender} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Nationality
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={nationalityselected}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {nationalityselected} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Address
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={address}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {address} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  City
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={city}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {city} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  State
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={state}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {state} */}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Country
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {" "} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={countryselected}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  {/* {countryselected} */}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <Typography variant="h6" gutterBottom>
          Background Information
        </Typography>
        <Divider sx={{ my: 1 }} />

        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Do you have a Passport?:
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {passport} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={passport}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              {passport === "No" && (
                <TableRow>
                  <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                    Applied for Passport?:
                  </TableCell>
                  <TableCell style={{ width: "70%" }}>
                    {/* {appliedPassport} */}
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-read-only-input"
                      defaultValue={appliedPassport}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Identification No.:
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {identification} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={identification}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <Typography variant="h6" gutterBottom>
          Parents Information
        </Typography>
        <Divider sx={{ my: 1 }} />

        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Parent's Name
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {parentName} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={parentName}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Parent's Email
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {parentEmail} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={parentEmail}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Parent's Phone Number
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {parentPhone} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={parentPhone}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  Parent's Address
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {parentAddress} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={parentAddress}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <Typography variant="h6" gutterBottom>
          Academic Information
        </Typography>
        <Divider sx={{ my: 1 }} />

        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  School Marks
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {schoolmarks} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={schoolmarks}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              {level != "Diploma (After your 10th or 'O' Level)" && (
                <TableRow>
                  <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                    High School Marks
                  </TableCell>
                  <TableCell style={{ width: "70%" }}>
                    {/* {HighSchoolMarks} */}
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-read-only-input"
                      defaultValue={HighSchoolMarks}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  GRE
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["GRE"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["GRE"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  SAT
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["SAT"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["SAT"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  GMAT
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["GMAT"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["GMAT"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  SAT II
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["SAT II"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["SAT II"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  TOEFL
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["TOEFL"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["TOEFL"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  JEE Advance
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["JEE Advance"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["JEE Advance"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: "30%", fontWeight: "bold" }}>
                  IELTS
                </TableCell>
                <TableCell style={{ width: "70%" }}>
                  {/* {radioGroup["IELTS"]} */}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-read-only-input"
                    defaultValue={radioGroup["IELTS"]}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <br />

        <Typography variant="h6" gutterBottom>
          Choice of School
        </Typography>
        <Divider sx={{ my: 1 }} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Choice Number</TableCell>
                {/* <TableCell>College</TableCell> */}
                <TableCell>Program</TableCell>
                <TableCell>Stream</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {choices.map((choice, index) => (
                <TableRow key={index}>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {index + 1}
                  </TableCell>
                  {/* <TableCell>{choice.college}</TableCell> */}
                  <TableCell>
                    {/* {choice.program} */}
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-read-only-input"
                      defaultValue={choice.program}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {/* {choice.stream} */}
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-read-only-input"
                      defaultValue={choice.stream}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Box>
      {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default Review;
