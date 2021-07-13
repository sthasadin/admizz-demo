import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Datepicker = ({ handleChange }) => {
  const [date, setDate] = React.useState(new Date());
  const onChange = (value) => {
    setDate(value);
    handleChange({
      target: {
        name: "date",
        value: date,
      },
    });
  };

  return (
    <Calendar
      className="calender"
      onChange={onChange}
      value={date}

      // showNeighboringMonth="false"
    />
  );
};

export { Datepicker };
