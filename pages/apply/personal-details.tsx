import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default/dist/all.css';
import {
  FormInput, FormAutoComplete, FormRadioGroup,
  FormTextArea,
  FormNumericTextBox
} from './form-components';

import {
  nameValidator, requiredValidator
} from './validators'

import {
  countries, genders
} from './data'

export const PersonalDetails = (
  <div>
    <Field
      key={'fullName'}
      id={'fullName'}
      name={'fullName'}
      label={'Full Name'}
      component={FormInput}
      validator={nameValidator}
    />
    <Field
      key={'countryselected'}
      id={'countryselected'}
      name={'countryselected'}
      label={'Country'}
      // hint={'Hint: Only European countries'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
    />
    <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
    />
    <Field
      key={'phont'}
      id={'phonr'}
      name={'phone'}
      label={'Phone Number'}
      layout={'horizontal'}
      component={FormInput}
      validator={requiredValidator}
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
