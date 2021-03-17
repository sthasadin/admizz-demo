import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

const CompareAttributesList = (props: any) => {
  // const [filters,setFilters] = useState([])

  const { selectedCollege, selectedFilters, setSelectedFilters } = props;

  // useEffect(()=> {
  // let _filters = []
  // let newFilters = []
  // selectedCollege.length && selectedCollege.forEach((clg, i) => {
  //   if (i==0) {
  //   for (const key in clg) {
  //     _filters.push(key)
  //   }
  // }
  // if(i>0){
  //   for (const key in clg) {
  //     if (_filters.includes(key)) {
  //       newFilters.push(key)
  //     }
  //   }}

  // })
  // console.log(_filters, newFilters)
  // },[selectedCollege])
  let filters = [
    // {label:"QS Ranking",value:'QS_ranking'},//it should be college field
    // {label:"Address", value:'address'},
    // {label:"Average Fee",value:'average_fee'},
    // {label: "University Ranking", value:"university_ranking"},
    // {label: "ESTD_YEAR", value:'estd_year'},

    { label: "Highest Package", value: "highest_package" },
    { label: "Min Cost of Living", value: "min_cost_living" },
    { label: "Placement Percentage", value: "placement_percentage" },
    { label: "Total Courses", value: "total_course" },
    { label: "Total Students", value: "total_students" },
    { label: "NIRF ranking", value: "nirf" },
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
