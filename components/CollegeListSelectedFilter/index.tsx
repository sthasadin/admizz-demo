import React from "react";
import { FilterKeyword } from "../FilterKeyword";

const CollegeListSelectedFilter = ({ setFilterObj, filterObj }) => {
  const [selectedData, setSelectedData] = React.useState([]);

  React.useEffect(() => {
    let selectedArray = [];
    filterObj.city.length &&
      filterObj.city.map((item) => {
        selectedArray.push(item);
      });
    filterObj.country.length &&
      filterObj.country.map((item) => {
        selectedArray.push(item);
      });
    filterObj.course_level.length &&
      filterObj.course_level.map((item) => {
        selectedArray.push(item);
      });
    filterObj.state.length &&
      filterObj.state.map((item) => {
        selectedArray.push(item);
      });
    filterObj.stream.length &&
      filterObj.stream.map((item) => {
        selectedArray.push(item);
      });
    setSelectedData(selectedArray);
  }, [filterObj]);

  const handleDeselect = (title) => {
    const removeSelectedCity = filterObj.city.filter((item) => item !== title);
    if (removeSelectedCity) {
      setFilterObj({ ...filterObj, city: removeSelectedCity || [] });
    }
    const removeSelectedCountry = filterObj.country.filter(
      (item) => item !== title
    );
    if (removeSelectedCountry) {
      setFilterObj({ ...filterObj, country: removeSelectedCountry });
    }
    const removeSelectedCourse = filterObj.course_level.filter(
      (item) => item !== title
    );
    if (removeSelectedCourse) {
      setFilterObj({ ...filterObj, course_level: removeSelectedCourse });
    }
    const removeSelectedState = filterObj.state.filter(
      (item) => item !== title
    );
    if (removeSelectedState) {
      setFilterObj({ ...filterObj, state: removeSelectedState });
    }
    const removeSelectedStream = filterObj.stream.filter(
      (item) => item !== title
    );
    if (removeSelectedStream) {
      setFilterObj({ ...filterObj, stream: removeSelectedStream });
    }
  };
  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">Selected</p>
        <p className="college-list-selected-filter__filterAdd">
          <img src="./plus-icon.png" alt="..." />
        </p>
      </div>
      <div className="college-list-selected-filter__filterKeyContainer">
        {selectedData.map((course, i) => {
          return (
            <FilterKeyword
              key={i}
              title={course}
              handleDeselect={handleDeselect}
            />
          );
        })}
        {/* <FilterKeyword title="ART" />
        <FilterKeyword title="DESIGN" />
        <FilterKeyword title="INFORMATION TECHNOLOGY" /> */}
      </div>
    </div>
  );
};

export { CollegeListSelectedFilter };
