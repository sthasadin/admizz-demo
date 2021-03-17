import React from "react";

import Button from "@material-ui/core/Button";

const CompareAttributesList = (props: any) => {
  //const { handleFilterClick, isFilterCardOpen } = props;
  const [state, setState] = React.useState([]);
  const filterArray = [
    "QS_Ranking",
    "Address",
    "Average Fee",
    "College Ranking",
    "Estd_year",
    "Highest Package",
    "International Collabration",
    "Graduation Package",
    "Min living cost",
    "Placement percentage",
    "Total course",
    "University Ranking",
    "Total student",
    "Trending Course",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray = state;
    if (event.target.checked && !newArray.includes(event.target.name)) {
      newArray.push(event.target.name);
    }
    if (!event.target.checked && newArray.includes(event.target.name)) {
      //newArray.push(event.target.name);
      newArray = newArray.filter((data) => data !== event.target.name);
    }

    setState(newArray);
  };
  return (
    <>
      {filterArray.map((data, index) => {
        return (
          <Button className="filter__button" key={index}>
            {data}
          </Button>
        );
      })}
    </>
  );
};

export default CompareAttributesList;
