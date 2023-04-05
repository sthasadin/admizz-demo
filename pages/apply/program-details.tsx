import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
import { CardSelector } from './card-selector'
import '@progress/kendo-theme-default/dist/all.css';
import {
  FormInput, FormMaskedTextBox, FormDateInput, FormAutoComplete, FormDropDownList
} from './form-components';

import {
  requiredValidator, cardValidator, cvcValidator
} from './validators'
import { interestedCountries, interestedProgramLevel } from './data';

export const ProgramDetails = (
  <div>
    <Field
      key={'interestedcountry'}
      id={'interestedcountry'}
      name={'interestedcountry'}
      label={'Interested Country for Study'}
      // hint={'Hint: Only European countries'}
      component={FormAutoComplete}
      data={interestedCountries}
      validator={requiredValidator}
    />
    <Field
      key={'levelofstudy'}
      id={'levelofstudy'}
      name={'levelofstudy'}
      label={'Interested Program Level of Study'}
      // hint={'Hint: Only European countries'}
      component={FormDropDownList}
      data={interestedProgramLevel}
      validator={requiredValidator}
    />
    <Field
      key={'studyprogram'}
      id={'studyprogram'}
      name={'studyprogram'}
      label={'Program You want to Study'}
      // hint={'Hint: Enter your personal email address.'}
      // type={'email'}
      component={FormInput}
      validator={requiredValidator}
    />
    <Field
      key={'university'}
      id={'university'}
      name={'university'}
      label={'University/College Preference, If any'}
      // hint={'Hint: Enter your personal email address.'}
      // type={'email'}
      component={FormInput}
      validator={requiredValidator}
    />
    <Field
      key={'question'}
      id={'question'}
      name={'question'}
      label={'Do you have any questions for your counselor?'}
      hint={'This will help our counselor prepare for the session.'}
      // type={'email'}
      component={FormInput}
      // validator={requiredValidator}
    />
  </div>
);
