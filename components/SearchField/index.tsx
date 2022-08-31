import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

const Index = ({
  icon,
  isSearch,
  setSearchField,
  onChange,
  value,
  setKeyword,
}) => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      width: "100%",
    },
    searchField: {
      "& .MuiOutlinedInput-root": {
        outline: "none",
        fontFamily: "'M PLUS 1p'",
        borderColor: "none",
        border: "none",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20.79px",
        width: "5px",
        "& .MuiOutlinedInput-input": {
          // paddingLeft: (props: Props) => {
          //   return props.multiline ? " 30px" : !props.icon && "10px";
          // },
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <TextField
          fullWidth
          // variant="outlined"
          className={classes.searchField}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder="Search Colleges or Blogs"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={icon}
                  alt="..."
                  onClick={() => setSearchField(true)
                  }
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {isSearch ? (
                  <CloseIcon
                    onClick={() => {
                      setSearchField(false);
                      setKeyword("");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  ""
                )}
              </InputAdornment>
            ),
            disableUnderline: !isSearch ? true : false,
          }}
        />
      </FormControl>
    </div>
  );
};

export default Index;
