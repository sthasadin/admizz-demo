import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Datepicker = ({ handleChange, formValue }) => {
  const onChange = (value) => {
    handleChange({
      target: {
        name: "date",
        value: value,
      },
    });
  };

  console.log(formValue.date);

  return (
    <Calendar
      className="calender"
      onChange={onChange}
      value={formValue.date ? formValue.date : new Date()}
      // defaultValue={new Date()}

      // showNeighboringMonth="false"
    />
  );
};

export { Datepicker };
