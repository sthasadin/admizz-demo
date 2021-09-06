import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { date } from "yup";

const Datepicker = ({ handleChange, formValue }) => {
  const onChange = (value) => {
    handleChange({
      target: {
        name: "date",
        value: value,
      },
    });
  };

  // const disablePastDt = () => {
  //   const yesterday = moment().subtract(1, "day");
  //   const currentDay = moment().day();
  //   console.log("asdasd", currentDay, yesterday);
  // };

  const disablePastDt = (current) => {
    const yesterday = moment().subtract(1, "day");
    return moment(current).isAfter(yesterday);
  };

  return (
    <Calendar
      className="calender"
      onChange={onChange}
      value={formValue.date ? formValue.date : new Date()}
      // tileDisabled={() => disablePastDt(moment())}
      minDate={moment().toDate()}

      // showNeighboringMonth="false"
    />
  );
};

export { Datepicker };
