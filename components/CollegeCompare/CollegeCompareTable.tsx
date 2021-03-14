import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      // backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props: any) {
  const { selectedCollege } = props;

  const dataAttri = [
    "QS_Ranking",
    "Address",
    "Average Fee",
    "College Ranking",
    "ESTD_YEAR",
  ];

  console.log(selectedCollege);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Compare Attributes</StyledTableCell>
            {selectedCollege.map((college: any) => {
              return (
                <StyledTableCell align="right">{college.name}</StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataAttri.map((data: any) => {
            return (
              <StyledTableRow key={data._id}>
                <StyledTableCell component="th" scope="row">
                  {data}
                </StyledTableCell>

                {selectedCollege.map((colegeAttributes: any) => (
                  <>
                    <StyledTableCell component="th" scope="row">
                      {colegeAttributes.QS_ranking}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {colegeAttributes.average_fee}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {colegeAttributes.category}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {colegeAttributes.estd_year}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {colegeAttributes.graduation_percentage}
                    </StyledTableCell>
                  </>
                ))}
              </StyledTableRow>
            );
          })}

          {/* {selectedCollege.map((colegeAttributes: any) => (
            <StyledTableRow key={colegeAttributes._id}>
              <StyledTableCell component="th" scope="row">
                {colegeAttributes.QS_ranking}
              </StyledTableCell>
              <StyledTableCell align="right">
                {colegeAttributes.average_fee}
              </StyledTableCell>
              <StyledTableCell align="right">
                {colegeAttributes.category}
              </StyledTableCell>
              <StyledTableCell align="right">
                {colegeAttributes.estd_year}
              </StyledTableCell>
              <StyledTableCell align="right">
                {colegeAttributes.graduation_percentage}
              </StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
