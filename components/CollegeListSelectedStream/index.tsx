import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Input } from "../../components/Input";
import SearchIcon from '@material-ui/icons/Search';

const CollegeListSelectedStream = () => {
  return (
    <div className="college-list-selected-filter">
      <div className="college-list-selected-filter__filterTitleContainer">
        <p className="college-list-selected-filter__filterTitle">Stream</p>
        <p className="college-list-selected-filter__filterAdd">+</p>
      </div>
      <div className="college-list-selected-filter__searchContainer">
        <Input placeholder={"Find Stream"} margin={"0px 0px 0px 0px"} fullWidth icon={SearchIcon} />
      </div>
      <div className="college-list-selected-filter__filterStreamContainer">
        <FormControlLabel className="college-list-selected-filter__checkboxLabel" control={<Checkbox name="checked" />} label="Management" />
        300
      </div>
      <div className="college-list-selected-filter__filterStreamContainer">
        <FormControlLabel className="college-list-selected-filter__checkboxLabel" control={<Checkbox name="checked" />} label="Management" />
        300
      </div>
      <div className="college-list-selected-filter__filterStreamContainer">
        <FormControlLabel className="college-list-selected-filter__checkboxLabel" control={<Checkbox name="checked" />} label="Management" />
        300
      </div>
      <div className="college-list-selected-filter__filterStreamContainer">
        <FormControlLabel className="college-list-selected-filter__checkboxLabel" control={<Checkbox name="checked" />} label="Management" />
        300
      </div>
    </div>
  );
}; 

export { CollegeListSelectedStream };