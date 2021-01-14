import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Select as SelectComponent } from "@material-ui/core";

const Select = (props: any) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      width: '100%',
      minWidth: 120,
      color: 'red'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    label: {
      color: '#a9a9a9',
      paddingLeft: 22,
    }
  }));
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} variant="outlined" >
      <InputLabel id="demo-simple-select-label" className={classes.label}>{props.title}</InputLabel>
      <SelectComponent
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </SelectComponent>
    </FormControl>
  );
};
export { Select };
