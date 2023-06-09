import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "../../components/Input";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-root": {
      marginTop: "10px",
    },
  },
}));

const CustomizeCheckBox: any = withStyles({
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#828282",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "&$checked": {
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0,
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4.5,
        top: 5,
        height: 14,
        width: 15,
        position: "absolute",
        // zIndex: -1,
        backgroundColor: "#FFAB1A",
      },
    },
  },
  checked: {},
})(Checkbox);

const FilteredByCountry = (props) => {
  const [toggleStream, setToggleStream] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState("");

  const { countryList, handleCountryChange, filterObj } = props;

  const classes = useStyles();

  const filterItem = countryList.filter((item) => {
    return item._id?.toLowerCase()?.includes(searchKey?.toLowerCase());
  });

  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">Country</p>
        <p
          className="college-list-selected-filter__filterAdd"
          onClick={() => setToggleStream((toggleStream) => !toggleStream)}
        >
          {toggleStream ? (
            <img src="./minus.png" alt="..." />
          ) : (
            <img src="./plus-icon.png" alt="..." />
          )}
        </p>
      </div>
      <div
        className={`stream-container ${
          toggleStream ? "active-stream-container" : ""
        }`}
      >
        <div className="college-list-selected-filter__searchContainer">
          <Input
            placeholder={"Find Country"}
            margin={"0px 0px 0px 0px"}
            name="stream_search"
            onChange={(e) => setSearchKey(e.taarget?.value)}
            value={searchKey}
            fullWidth
            icon={SearchIcon}
          />
        </div>
        <div style={{ padding: "10px 0 10px 0" }}>
          {filterItem &&
            filterItem?.map((country, i) => {
              return (
                <div
                  key={i}
                  className="college-list-selected-filter__filterStreamContainer"
                >
                  <FormControlLabel
                    name={country._id}
                    onChange={handleCountryChange}
                    control={
                      <CustomizeCheckBox
                        name={country._id}
                        style={{ paddingBottom: "0" }}
                      />
                    }
                    checked={filterObj.country.includes(country._id)}
                    label={country._id}
                    className={`${classes.root} college-list-selected-filter__checkboxLabel`}
                  />
                  {/* <div className="college-list-count">
                    {searchedCourses[course].count}
                  </div> */}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { FilteredByCountry };
