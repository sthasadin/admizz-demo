import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Datepicker = ({handleChange}) => {
    const onChange = (value) =>{
        handleChange({
            target:{
                name:'date',
                value
            }
        })
    }
    return (
        <Calendar
            className="calender"
            onChange={onChange}
        />
    );
};

export { Datepicker };


