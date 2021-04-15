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
import { bold } from "*.jpg";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
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
  const { selectedCollege, selectedFilters } = props;

  const dataAttri = [
    "QS_Ranking",
    "Address",
    "Average Fee",
    "College Ranking",
    "ESTD_YEAR",
  ];

  const classes = useStyles();

  return (
    <>
    
    <div>World Ranking</div>
    {/* <div className="collegedetails_container"> */}
    <div className="collegetable-attribute">Rank 5</div>
    {/* <div>Rank 15</div>
    <div>Rank 20</div> */}
    {/* </div> */}

    </>
  );
}
