import { Today } from "@material-ui/icons";
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

  const disablePastDt = (current) => {
    const yesterday = moment().subtract(1, "day");
    return moment(current).isAfter(yesterday);
  };

  let addFutureDay: any = new Date();
  addFutureDay = moment(addFutureDay).add(1, "day").format("MM/DD/YYYY");
  const FutureMonthAdd = moment(addFutureDay, "MM/DD/YYYY").toDate();

  return (
    <Calendar
      className="calender"
      onChange={onChange}
      value={formValue.date ? formValue.date : new Date()}
      // tileDisabled={() => disablePastDt(moment())}
      // minDate={moment().toDate()}
      minDate={FutureMonthAdd}
    />
  );
};

export { Datepicker };
