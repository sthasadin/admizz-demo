import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { inherits } from "util";

interface Props {
  icon?: any;
  fullWidth?: boolean;
  margin?: string;
  disabled?: boolean;
  name?: string;
  s?: any;
  placeholder?: string;
  className?: any;
  type?: string;
  multiline?: boolean;
  label?: string;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  error?: boolean;
  errorMessage?: string;
  borderRadius?: string;
  value?: any;
  bgColor?: any;
}

const Input = (props: Props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      position: "relative",
      margin: (props: Props) => {
        return props.margin && props.margin;
      },
      width: (props: Props) => {
        return props.fullWidth && "100%";
      },
    },
    input: {
      "& .MuiOutlinedInput-root": {
        borderRadius: (props: Props) => {
          return props.borderRadius ? props.borderRadius : "5px";
        },
        outline: "none",
        fontFamily: "'M PLUS 1p'",
        borderColor: "none",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20.79px",
        "& .MuiOutlinedInput-input": {
          // paddingLeft: (props: Props) => {
          //   return props.multiline ? " 30px" : !props.icon && "10px";
          // },
        },
        backgroundColor: (props: Props) => {
          return props.bgColor ? props.bgColor : inherits;
        },
      },
    },
    noBorder: {
      border: "none",
    },
    inputLabel: {
      color: "rgb(130, 130, 130);",
      paddingRight: "5px",
      backgroundColor: "#fff",
      "&.focused": {
        color: "rgb(130, 130, 130);",
        fontWeight: 400,
      },
    },
    errorMessage: {
      fontSize: 12,
      color: "#FF0000",
      position: "absolute",
      bottom: "-18px",
      left: "4px",
    },
  }));
  const classes = useStyles(props);

  let Icon;
  if (props.icon) {
    Icon = props.icon;
  }

  return (
    <div className={classes.container}>
      <TextField
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        variant="outlined"
        className={`${props.className} ${classes.input}`}
        fullWidth={props.fullWidth}
        multiline={props.multiline}
        rows={props.multiline && 3}
        rowsMax={props.multiline && 8}
        label={props.label}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        error={props.error}
        InputLabelProps={{
          classes: {
            root: classes.inputLabel,
            focused: "focused",
          },
          shrink: true,
        }}
        InputProps={
          Icon && {
            startAdornment: (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ),
          }
        }
      />
      {props.errorMessage && (
        <span className={classes.errorMessage}>{props.errorMessage}</span>
      )}
    </div>
  );
};

export { Input };
