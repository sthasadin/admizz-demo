import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

const CompareAttributesList = (props: any) => {
  // const [filters,setFilters] = useState([])

  const { selectedCollege, selectedFilters, setSelectedFilters } = props;

  let filters = [
    { label: "Highest Package", value: "highest_package" },
    { label: "Min Cost of Living", value: "min_cost_living" },
    { label: "NIRF ranking", value: "nirf" },
    { label: "University Ranking", value: "university_ranking" },
    { label: "ESTD_YEAR", value: "estd_year" },
    { label: "Address", value: "address" },
  ];
  const filterArray = [
    "QS_Ranking",
    "Address",
    "Average Fee",
    "College Ranking",
    "Estd_year",
    "Highest Package",
    // "International Collabration",
    "Graduation Package",
    "Min living cost",
    "Placement percentage",
    "Total course",
    "University Ranking",
    "Total student",
    // "Trending Course",
    "NIRF ranking",
  ];
  const onClick = (data) => {
    if (selectedFilters.find((f) => f.value === data.value)) {
      setSelectedFilters(selectedFilters.filter((f) => f.value !== data.value));
    } else {
      setSelectedFilters([...selectedFilters, data]);
    }
  };
  return (
    <>
      {filters.map((data, i) => {
        return (
          <Button
            key={i}
            onClick={() => onClick(data)}
            name={data.value}
            className={
              selectedFilters.find((f) => f.value === data.value)
                ? "filter__button active"
                : "filter__button"
            }
            // className="filter__button active"
          >
            {data.label}
          </Button>
        );
      })}
    </>
  );
};

export default CompareAttributesList;
