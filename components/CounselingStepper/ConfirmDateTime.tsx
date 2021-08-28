import React, { useState, useEffect } from "react";
import { Datepicker } from "../../components";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { SelectCounseler } from "./SelectCounseler";
import { Button } from "../Button";

interface FormError {
  [key: string]: string;
}
interface Props {
  handleNext: () => void;
  handleBack: () => void;
  handleChange: (e: any) => void;
  formValue: any;
  formError: FormError;
}

const ConfirmDateTime: React.FC<Props> = ({
  handleNext,
  handleChange,
  formValue,
  handleBack,
  formError,
}) => {
  const [selectedTime, setSelectedTime] = useState("03:00" as string);
  const [meridium, setMeridium] = useState("PM" as string);
  const pmTimeList = [
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
  ];
  const amTimeList = ["10:00", "10:30", "11:00", "11:30"];

  useEffect(() => {
    handleChange({
      target: {
        name: "time",
        value: `${selectedTime} ${meridium}`,
      },
    });
  }, [selectedTime]);

  return (
    <div className="confirm-date-container">
      <div className="confirm-date-container__date-time">
        <div className="confirm-date-container__date">
          <div className="confirm-date-container__label">
            <CalendarTodayIcon className="confirm-date-container__calendar-icon" />
            <span>Confirm Date</span>
          </div>
          <Datepicker handleChange={handleChange} formValue={formValue} />
          <div className="error-msg">{formError.date} </div>
        </div>

        <div className="confirm-date-container__time">
          <div className="confirm-date-container__label">
            <CalendarTodayIcon className="confirm-date-container__calendar-icon" />
            <span>Confirm Time</span>
          </div>
          <div className={"confirm-date-container__time-picker"}>
            <div className={"confirm-date-container__time-controls"}>
              <span
                className={
                  meridium === "AM" &&
                  "confirm-date-container__selected-meridian"
                }
                onClick={() => setMeridium("AM")}
              >
                {" "}
                {"<"}{" "}
              </span>
              <span>{meridium === "PM" ? "PM" : "AM"}</span>
              <span
                className={
                  meridium === "PM" &&
                  "confirm-date-container__selected-meridian"
                }
                onClick={() => setMeridium("PM")}
              >
                {">"}
              </span>
            </div>
            <div className={"confirm-date-container__time-container"}>
              {(meridium === "PM" ? pmTimeList : amTimeList).map((item) => {
                return (
                  <div
                    className={`confirm-date-container__time-instance 
                                     ${
                                       selectedTime === item &&
                                       `confirm-date-container__selected-time`
                                     }`}
                    onClick={() => setSelectedTime(item)}
                  >
                    {item}&nbsp;{" "}
                    <span className={"confirm-date-container__meridium"}>
                      {meridium === "PM" ? "PM" : "AM"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="select-counsellor-container">
        <SelectCounseler
          handleChange={handleChange}
          formError={formError}
          selectedCountry={formValue?.home_country}
        />
      </div>

      <div className={"student-info__action-buttons "}>
        <div onClick={handleBack}>Back</div>
        <Button onClick={handleNext}>Continue</Button>
      </div>
    </div>
  );
};

export { ConfirmDateTime };
