import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "../../components/Input";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { API_BASE_URL } from "../../store/const";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-root": {
      marginTop: "10px",
    },
  },
}));

const CustomizeCheckBox = withStyles({
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

const CollegeListFilteredByCity = (props) => {
  const [toggleStream, setToggleStream] = React.useState(false);
  const [cityList, setCityList] = React.useState([]);

  const { allCoursesWithCounts, onSelecteCourse, selectedCourses } = props;

  const getCityList = async () => {
    let locations: any = [];
    let res = await axios.get(`${API_BASE_URL}/college/meta`);

    res &&
      res.data.length > 0 &&
      res.data.map((item: any) => {
        return locations.push(item?.city);
      });
    let uniqueData = Array.from(new Set(locations));
    const LocationArray = uniqueData.filter(
      (location) => location !== undefined
    );

    setCityList(LocationArray);
  };

  React.useEffect(() => {
    getCityList();
  }, []);

  const onChange = () => {
    console.log("asdasdasd");
  };

  const classes = useStyles();

  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">City</p>
        <p className="college-list-selected-filter__filterAdd">
          {" "}
          <img
            src="./plus-icon.png"
            alt="..."
            onClick={() => setToggleStream((toggleStream) => !toggleStream)}
          />
        </p>
      </div>
      <div
        className={`stream-container ${
          toggleStream ? "active-stream-container" : ""
        }`}
      >
        <div className="college-list-selected-filter__searchContainer">
          <Input
            placeholder={"Find Stream"}
            margin={"0px 0px 0px 0px"}
            name="stream_search"
            onChange={onChange}
            fullWidth
            icon={SearchIcon}
          />
        </div>
        <div style={{ padding: "10px 0 10px 0" }}>
          {cityList.map((city, i) => {
            return (
              <div
                key={i}
                className="college-list-selected-filter__filterStreamContainer"
              >
                <FormControlLabel
                  name={city}
                  onChange={onSelecteCourse}
                  control={
                    <CustomizeCheckBox
                      name={city}
                      style={{ paddingBottom: "0" }}
                    />
                  }
                  checked={selectedCourses.includes(city.toUpperCase())}
                  label={city}
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

export { CollegeListFilteredByCity };
