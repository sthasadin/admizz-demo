import React from "react";
import { Datepicker } from "../../components";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const ConfirmDateTime = () => {
    return (
        <div className="confirm-date-container">
            <div className="confirm-date-container__date-time">
                <div className="confirm-date-container__date">
                    <div className="confirm-date-container__label">
                        <CalendarTodayIcon className="confirm-date-container__calendar-icon" />
                        <span>
                            Confirm Date
                        </span>
                    </div>
                    <Datepicker />
                </div>
                <div className="confirm-date-container__time">
                    <div className="confirm-date-container__label">
                        <CalendarTodayIcon className="confirm-date-container__calendar-icon" />
                        <span>
                            Confirm Time
                        </span>
                    </div>
                </div>
            </div>
            <div className="confirm-date-container__select-counseler">

            </div>

        </div>
    );
};

export { ConfirmDateTime };
