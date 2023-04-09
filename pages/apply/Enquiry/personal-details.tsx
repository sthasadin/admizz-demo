import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default/dist/all.css';
import {
  FormInput, FormAutoComplete, FormRadioGroup,
  FormTextArea,
  FormNumericTextBox,
  FormNumberInput,
  FormDropDownList
} from '../Shared/form-components';

import {
  nameValidator, requiredValidator
} from '../Shared/validators'

import {
  countries, genders
} from '../Shared/data'
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import Phone from "@material-ui/icons/Phone";


// import PersonIcon from '@mui/icons-material/Person';

export const PersonalDetails = (
  <div>
    <Field
      icon={<PersonIcon />}
      key={'fullName'}
      id={'fullName'}
      name={'fullName'}
      label={'Full Name'}
      placeholder={'Enter your Full Name*'}

      required={true}
      component={FormInput}
      validator={nameValidator}
    />
    <Field
      icon={<PublicIcon />}
      key={'countryselected'}
      id={'countryselected'}
      name={'countryselected'}
      label={'Nationality'}
      placeholder={'Select your Nationality*'}
      // hint={'Hint: Only European countries'}
      required={true}
      component={FormDropDownList}
      data={countries}
      validator={requiredValidator}
    />
    {/* <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
    /> */}
    <Field
      icon={<Phone />}
      key={'phone'}
      id={'phone'}
      name={'phone'}
      label={'Phone Number'}
      placeholder={'Enter your Phone Number*'}
      layout={'horizontal'}
      component={FormNumberInput}
      validator={requiredValidator}
      required={true}
    />
    {/* <Field
      key={'about'}
      id={'about'}
      name={'about'}
      label={'About'}
      optional={true}
      component={FormTextArea}
    /> */}
  </div>
);
