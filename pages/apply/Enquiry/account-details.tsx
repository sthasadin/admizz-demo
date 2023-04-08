import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Field, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import {
  FormInput, FormUpload
} from '../Shared/form-components';
import MailIcon from "@material-ui/icons/Mail";
import {
  userNameValidator, emailValidator, passwordValidator
} from '../Shared/validators'


export const AccountDetails = (
  <div>
    {/* <Field
      key={'userName'}
      id={'userName'}
      name={'userName'}
      label={'Username'}
      component={FormInput}
      validator={userNameValidator}
        /> */}

    <Field
      icon={<MailIcon />}
      key={'email'}
      id={'email'}
      name={'email'}
      label={'Email Address'}
      placeholder={'Email Address*'}
      hint={'Hint: Enter your personal email address.'}
      type={'email'}
      component={FormInput}
      required={true}
      validator={emailValidator}
    />

    {/* <Field
      key={'password'}
      id={'password'}
      name={'password'}
      label={'Password'}
      type={'password'}
      component={FormInput}
      validator={passwordValidator}
        />
    <Field
      key={'avatar'}
      id={'avatar'}
      name={'avatar'}
      label={'Avatar'}
      optional={true}
      hint={'Hint: Upload your avatar picture'}
      component={FormUpload}
        /> */}
  </div>
);
