import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { FormContext } from "context/FormContextProvider";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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

  return (
    <>
      <div className="signin">
        <div className="signin__inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
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

              <Typography variant="h6" gutterBottom>
                Basic Information
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">Full Name: {fullname}</Typography>
              <Typography variant="body1">Email Address: {email}</Typography>
              <Typography variant="body1">Phone Number: {phone}</Typography>
              <Typography variant="body1">
                Date of Birth: {selectedDate.toISOString().slice(0, 10)}
              </Typography>
              <Typography variant="body1">Gender: {gender}</Typography>
              <Typography variant="body1">
                Nationality: {nationalityselected}
              </Typography>
              <Typography variant="body1">Address: {address}</Typography>
              <Typography variant="body1">City: {city}</Typography>
              <Typography variant="body1">State: {state}</Typography>
              <Typography variant="body1">
                Country: {countryselected}
              </Typography>
              <br />

              <Typography variant="h6" gutterBottom>
                Background Information
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                Do you have a Passport?: {passport}
              </Typography>
              {passport === "No" && (
                <Typography variant="body1">
                  Applied for Passport?: {appliedPassport}
                </Typography>
              )}
              <Typography variant="body1">
                Identification No.: {identification}
              </Typography>
              <br />

              <Typography variant="h6" gutterBottom>
                Parents Information
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                Parent's Name: {parentName}
              </Typography>
              <Typography variant="body1">
                Parent's Email: {parentEmail}
              </Typography>
              <Typography variant="body1">
                Parent's Phone Number: {parentPhone}
              </Typography>
              <Typography variant="body1">
                Parent's Address: {parentAddress}
              </Typography>
              <br />

              <Typography variant="h6" gutterBottom>
                Academic Information
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                School Marks: {schoolmarks}
              </Typography>
              <Typography variant="body1">
                High School Marks: {HighSchoolMarks}
              </Typography>
              <Typography variant="body1">GRE: {radioGroup["GRE"]}</Typography>
              <Typography variant="body1">SAT: {radioGroup["SAT"]}</Typography>
              <Typography variant="body1">
                GMAT: {radioGroup["GMAT"]}
              </Typography>
              <Typography variant="body1">
                SAT II: {radioGroup["SAT II"]}
              </Typography>
              <Typography variant="body1">
                TOEFL: {radioGroup["TOEFL"]}
              </Typography>
              <Typography variant="body1">
                JEE Advance: {radioGroup["JEE Advance"]}
              </Typography>
              <Typography variant="body1">
                IELTS: {radioGroup["IELTS"]}
              </Typography>

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
                      <TableCell>College</TableCell>
                      <TableCell>Program</TableCell>
                      <TableCell>Stream</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {choices.map((choice, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{choice.college}</TableCell>
                        <TableCell>{choice.program}</TableCell>
                        <TableCell>{choice.stream}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
