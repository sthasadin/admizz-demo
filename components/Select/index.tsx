import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Select as SelectComponent } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {
  title?: string;
  options: any[];
  value?: any;
  icon?: any;
  label?: string;
  useValue?: boolean;
  className?: any;
  minWidth?: string;
  width?: string;
  defaultValue?: string;
  name?: string;
  error?: boolean;
  onChange?: (e: any) => void;
  errorMessage?: string;
  useLabel?: boolean;
  placeholder?: string;
  names?: string;
}

const Select = (props: Props) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      display: "relative",
      width: (props: Props) => {
        return props.width ? props.width : "100%";
      },
      minWidth: (props: Props) => {
        return props.minWidth ? props.minWidth : 120;
      },
      color: "red",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    label: {
      color: "#a9a9a9",
      // paddingLeft: 22,
      padding: "0 4px",
      left: "-4px",
    },
    select: {
      "& .PrivateNotchedOutline-legendLabelled-8": {
        visibility: "unset",
        color: (props: Props) => {
          return props.error ? "#FF0000" : "#828282";
        },
      },
    },
    "MuiPopover-paper": {
      top: "172px",
    },
    errorMessage: {
      fontSize: 12,
      color: "#FF0000",
      position: "absolute",
      bottom: "-16px",
      left: "4px",
    },
  }));
  const classes = useStyles(props);

  const Icon = props.icon;
  return (
    <FormControl className={classes.formControl} variant="outlined">
      <InputLabel
        id="demo-simple-select-label"
        className={classes.label}
        style={{ backgroundColor: "#fff" }}
      >
        {props.title}
        {props.names}
      </InputLabel>

      <SelectComponent
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={props.name}
        value={props.value}
        className={`${classes.select} ${props.className}`}
        label={props.label}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue ? props.defaultValue : "a"}
        startAdornment={
          props.icon ? (
            <InputAdornment position="start">
              <Icon />
              {/* <p style={{color:'#D6D6D6',fontSize:14,marginRight:7}}>Home Country</p> */}
            </InputAdornment>
          ) : (
            <></>
          )
        }
        onChange={props.onChange}
        error={props.error}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
      >
        {props.options &&
          props.options.map((item, key) => {
            return (
              <MenuItem
                key={key + 1}
                value={props.useLabel ? item.label : item.value}
              >
                {item.label}
              </MenuItem>
            );
          })}
      </SelectComponent>
      {props.errorMessage && (
        <span className={classes.errorMessage}>{props.errorMessage}</span>
      )}
    </FormControl>
  );
};
export { Select };
