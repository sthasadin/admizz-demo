import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';

interface Props {
  icon?: any;
  fullWidth?: boolean;
  margin?: string;
  disabled?: boolean;
  name?: string;
  value?: any;
  placeholder?: string;
  className?: any;
  type?: string;
  multiline?: boolean;
  label?: string;
}


const Input = (props: Props) => {
  const useStyles = makeStyles((theme) => ({
    input: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
        outline: 'none',
        margin: (props: Props) => {
          return props.margin && props.margin;
        },
        fontFamily: "'M PLUS 1p'",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20.79px",
        '& .MuiOutlinedInput-input': {
          paddingLeft: (props: Props) => {
            return props.multiline ? " 30px" : !props.icon && '40px'
          },
        }
      },
    },
  }));
  const classes = useStyles(props);

  let Icon;
  if (props.icon) {
    Icon = props.icon
  }

  return (
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
      InputProps={Icon && {
        startAdornment: (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export { Input };
