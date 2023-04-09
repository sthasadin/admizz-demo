import * as React from 'react';

import { Field } from '@progress/kendo-react-form';
import '@progress/kendo-theme-default/dist/all.css';
import {
  FormInput, FormMaskedTextBox, FormDateInput, FormAutoComplete, FormDropDownList, FormTextArea
} from '../Shared/form-components';

import {
  requiredValidator, cardValidator, cvcValidator
} from '../Shared/validators'
import { interestedCountries, interestedProgramLevel } from '../Shared/data';
import PublicIcon from "@material-ui/icons/Public";
import School from "@material-ui/icons/School";
import Library from "@material-ui/icons/LocalLibrary";
import Question from "@material-ui/icons/QuestionAnswer";
import College from "@material-ui/icons/AccountBalance";

export const ProgramDetails = (
  <div>
    <Field
      icon={<PublicIcon />}
      key={'interestedcountry'}
      id={'interestedcountry'}
      name={'interestedcountry'}
      label={'Interested Country for Study'}
      placeholder={'Enter your Interested Country for Study*'}
      // hint={'Hint: Only European countries'}
      component={FormDropDownList}
      data={interestedCountries}
      validator={requiredValidator}
      required={true}
    />
    <Field
      icon={<School />}
      key={'levelofstudy'}
      id={'levelofstudy'}
      name={'levelofstudy'}
      label={'Interested Program Level of Study'}
      placeholder={'Enter your Interested Program Level of Study*'}
      // hint={'Hint: Only European countries'}
      required={true}
      component={FormDropDownList}
      data={interestedProgramLevel}
      validator={requiredValidator}
    />
    <Field
      icon={<Library />}
      key={'studyprogram'}
      id={'studyprogram'}
      name={'studyprogram'}
      label={'Program You want to Study'}
      placeholder={'Enter the Program You want to Study*'}
      // hint={'Hint: Enter your personal email address.'}
      // type={'email'}
      required={true}
      component={FormInput}
      validator={requiredValidator}
    />
    <Field
      icon={<College />}
      key={'university'}
      id={'university'}
      name={'university'}
      label={'University/College Preference, If any'}
      placeholder={'Enter your University/College Preference, If any*'}
      // hint={'Hint: Enter your personal email address.'}
      // type={'email'}
      required={true}
      component={FormInput}
      validator={requiredValidator}
    />
    <Field
      icon={<Question />}
      key={'question'}
      id={'question'}
      name={'question'}
      label={'Do you have any questions for your counselor?'}
      placeholder={'Enter your queries'}
      hint={'This will help our counselor prepare for the session.'}
      // type={'email'}
      component={FormTextArea}
    // validator={requiredValidator}
    />
  </div>
);
