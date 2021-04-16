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
import People from '../../public/people.png'
import breifcase from '../../public/breifcase.png'

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

  const getIcon=(label) => {

  
    switch(label) {
      case "QS_ranking":
        return <People />;
      default:
        return null;  
  }
}

  const classes = useStyles();
  console.log(selectedFilters)
  const mergedArr = []

  

  return (
    <>
    <div className="compare-college-table">
    {selectedFilters.map((data: any, i) => {
            return (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  <strong>{data.label}</strong>
                </StyledTableCell>
            <div style={{display: 'flex', marginLeft: "75px"}}>
                {selectedCollege.map((colegeAttributes: any) => {
                  console.log(data.value) 
                  return(
                  <>
                    <div className="comparetable__data_attributes" style={{width: '311px', height: '97px', display: 'flex', border: '1px solid #E0E0E0' , marginLeft: '24px', backgroundColor: 'white'}}>
                     {getIcon(data.value)} {colegeAttributes[data.value]}
                      {/* {    console.log(Object.keys(colegeAttributes[data.value][0]) } */}
                    </div>
                  </>
                   
                )
              }
                )}
                </div>
              </StyledTableRow>
            );
          })}
      
    </div>

    </>
  );
}
