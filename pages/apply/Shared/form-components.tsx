import * as React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import Head from "next/head";

import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import {
  Input, MaskedTextBox, NumericTextBox,
  Checkbox, ColorPicker, Switch, RadioGroup,
  Slider, SliderLabel, RangeSlider, TextArea, Rating, InputProps
} from '@progress/kendo-react-inputs';
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  DatePicker, TimePicker, DateTimePicker,
  DateRangePicker, DateInput
} from '@progress/kendo-react-dateinputs';
import { Label, Error, Hint, FloatingLabel } from '@progress/kendo-react-labels';
import { Upload } from '@progress/kendo-react-upload';
import { DropDownList, AutoComplete, MultiSelect, ComboBox, MultiColumnComboBox, DropDownTree } from '@progress/kendo-react-dropdowns';
import { processTreeData, expandedState } from './tree-data-operations';
import { inherits } from "util";
import { makeStyles } from "@material-ui/core/styles";
import { CountryCodeDropDown } from '@/components/Select/CountryCodeDropDown';
import { CountryCode } from 'utils/CountryCode';


interface columnsInterface {
  field: string,
  header: any,
  width: string
}

interface signUpFormValue {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  password: string;
  confirmPassword: string;
  [key: string]: any;
  countryCode: string;
}








export const FormInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, required, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}{required && <span style={{ color: "red" }}> *</span>}</Label>
      <div className={'k-form-field-wrap'} style={{
        position: 'relative',
      }}>
        <Input
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          ariaDescribedBy={`${hintId} ${errorId}`}
          {...others}
          style={{
            borderColor: "black",
            paddingLeft: 35,
            // width:"60%",
            height: "40px"


          }}
        />

        <div style={{
          position: "absolute",
          left: 5,
          top: 8,
          width: "2em"
        }}>

          {
            fieldRenderProps.icon
          }
        </div>

        {
          showHint &&
          <Hint id={hintId}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};



export const FormNumberInput = (fieldRenderProps: FieldRenderProps) => {
  const [formValue, setFormValue] = React.useState({
    countryCode: "Country Code",
  } as signUpFormValue);
  const [formError, setFormError] = React.useState({} as any);
  const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, required, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setFormError(() => ({ ...formError, [e.target.name]: null }));
    // formValue[e.target.name] = e.target.value
    // setFormValue({ ...formValue });
    // setFormError(() => ({ ...formError, [e.target.name]: null }));

    // if (e.target.name === "country") {
    //   if (e.target.value === "Nepal") {
    //     setFormValue({ ...formValue, countryCode: "+977" } as signUpFormValue);
    //   } else setFormValue({ ...formValue, countryCode: "+91" } as signUpFormValue);
    // }
  };

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}{required && <span style={{ color: "red" }}> *</span>}</Label>
      <div className={'k-form-field-wrap'} style={{
        position: 'relative',
      }}>
        <div className={"student-info__phone-input"} style={{ maxHeight: "40px" }}>
          <CountryCodeDropDown
            where="apply"
            options={CountryCode}
            useValue
            // maxHeight={"10px"}
            width={"10%"}
            // height={"10px"}
            value={formValue.countryCode}
            name={"countryCode"}
            onChange={handleChange}
            error={!!formError.countryCode}
            errorMessage={formError.countryCode}
            className={"student-info__phone-separator"}


          />
          <Input
            valid={valid}
            type={type}
            id={id}
            disabled={disabled}
            ariaDescribedBy={`${hintId} ${errorId}`}
            {...others}
            style={{
              paddingLeft: 20,
              // width:"60%",
              height: "40px",

              borderColor: "black",
              // paddingLeft: 35,
              // width:"60%",
              // height: "40px"


            }}
          />

          <div style={{
            position: "absolute",
            left: 5,
            top: 8,
            width: "2em"
          }}>

            {
              fieldRenderProps.icon
            }
          </div>
        </div>

        {
          showHint &&
          <Hint id={hintId}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};













export const FormRadioGroup = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, id, label, valid, disabled, hint, visited, modified, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper>
      <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
      <RadioGroup
        ariaDescribedBy={`${hintId} ${errorId}`}
        ariaLabelledBy={labelId}
        valid={valid}
        disabled={disabled}
        ref={editorRef}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormNumericTextBox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
      <NumericTextBox
        ariaDescribedBy={`${hintId} ${errorId}`}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormCheckbox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, id, valid, disabled, hint, optional, label, visited, modified, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Checkbox
        ariaDescribedBy={`${hintId} ${errorId}`}
        label={label}
        labelOptional={optional}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormSwitch = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, optional, id, valid, disabled, hint, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <Switch
        ref={editorRef}
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormMaskedTextBox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, hint, optional, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
      <div className={'k-form-field-wrap'}>
        <MaskedTextBox
          ariaDescribedBy={`${hintId} ${errorId}`}
          valid={valid}
          id={id}
          {...others}
        />
        {
          showHint &&
          <Hint id={hintId}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};

export const FormTextArea = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, hint, disabled, optional, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
      <div className={'k-form-field-wrap'} style={{
        position: 'relative',
      }}>
        <TextArea
          valid={valid}
          id={id}
          disabled={disabled}
          ariaDescribedBy={`${hintId} ${errorId}`}
          {...others}
          style={{
            borderColor: "black",
            paddingLeft: 35,
          }}
        />
        <div style={{
          position: "absolute",
          left: 5,
          top: 8,
          width: "2em"
        }}>
          {
            fieldRenderProps.icon
          }
        </div>
        {
          showHint &&
          <Hint id={hintId}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};

export const FormColorPicker = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}
      </Label>
      <ColorPicker
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormSlider = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, data, min, max, ...others } = fieldRenderProps;

  const editorRef = React.useRef<any>(null);
  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}
      </Label>
      <Slider
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        min={min}
        max={max}
        {...others}
      >
        {
          data.map(value => (
            <SliderLabel
              title={value}
              key={value}
              position={value}
            >
              {value.toString()}
            </SliderLabel>
          ))
        }
      </Slider>
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormRangeSlider = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, hint, disabled, data, min, max, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid}>{label}</Label>
      <RangeSlider
        valid={valid}
        id={id}
        disabled={disabled}
        ariaDescribedBy={`${hintId} ${errorId}`}
        min={min}
        max={max}
        {...others}
      >{
          data.map(value => {
            return (
              <SliderLabel
                key={value}
                position={value}
              >
                {value.toString()}
              </SliderLabel>
            )
          })
        }
      </RangeSlider>
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormRating = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, hint, disabled, optional, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
      <Rating
        valid={valid}
        id={id}
        disabled={disabled}
        ariaDescribedBy={`${hintId} ${errorId}`}
        {...others}
      />
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormUpload = (fieldRenderProps: FieldRenderProps) => {
  const { value, id, optional, label, hint, validationMessage, touched, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  const onChangeHandler = (event: any) => {
    fieldRenderProps.onChange({ value: event.newState });
  };
  const onRemoveHandler = (event: any) => {
    fieldRenderProps.onChange({ value: event.newState });
  };

  return (
    <FieldWrapper>
      <Label id={labelId} editorId={id} optional={optional}>
        {label}
      </Label>
      <Upload
        id={id}
        autoUpload={false}
        showActionButtons={false}
        multiple={false}
        files={value}
        onAdd={onChangeHandler}
        onRemove={onRemoveHandler}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ariaLabelledBy={labelId}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormDropDownList = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, placeholder, required, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}{required && <span style={{ color: "red" }}> *</span>}
      </Label>
      <div className={'k-form-field-wrap'} style={{
        position: 'relative',
      }}>
        <DropDownList
          ariaLabelledBy={labelId}
          ariaDescribedBy={`${hintId} ${errorId}`}
          ref={editorRef}
          valid={valid}
          id={id}
          defaultValue={placeholder}
          disabled={disabled}
          {...others}
          style={{
            borderColor: "black",
            paddingLeft: 35,
            backgroundColor: "transparent",
            // color:"transparent"
            // width:"60%",
            height: "40px"


          }}
        />
        <div style={{
          position: "absolute",
          left: 5,
          top: 8,
          width: "2em"
        }}>

          {
            fieldRenderProps.icon
          }
        </div>
        {
          showHint &&
          <Hint id={hintId}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};

export const FormAutoComplete = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}
      </Label>

      <div className={'k-form-field-wrap'} style={{
        position: 'relative',
      }}>
        <AutoComplete
          ariaLabelledBy={labelId}
          ariaDescribedBy={`${hintId} ${errorId}`}
          ref={editorRef}
          valid={valid}
          id={id}
          disabled={disabled}
          {...others}
          style={{
            paddingLeft: 28,
            // width:"60%",
            height: "40px"
          }}
        />
        <div style={{
          position: "absolute",
          left: 5,
          top: 8,
          // width: "2em"
        }}>

          {
            fieldRenderProps.icon
          }
        </div>
        {
          showHint &&
          <Hint id={hintId}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};

export const FormComboBox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <ComboBox
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormMultiColumnComboBox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  const columns: Array<columnsInterface> = [
    { field: 'id', header: <span>header</span>, width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
  ];

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <MultiColumnComboBox
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        columns={columns}
        textField={'name'}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormMultiSelect = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  const labelId = label ? `${id}_label` : "";

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}
      </Label>
      <MultiSelect
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {showHint && <Hint id={hintId}>{hint}</Hint>}
      {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
    </FieldWrapper>
  );
};

export const FormDropDownTree = (fieldRenderProps: FieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    data,
    ...others
  } = fieldRenderProps;
  const { value, selectField, expandField, dataItemKey, filter } = others;
  const [expanded, setExpanded] = React.useState<Array<number>>([data[0][dataItemKey]]);
  const treeData = React.useMemo(
    () => processTreeData(
      data,
      { expanded, value, filter },
      { selectField, expandField, dataItemKey, subItemsField: 'items' }
    ),
    [data, expanded, value, filter, selectField, expandField, dataItemKey]
  );
  const onExpandChange = React.useCallback(
    event => setExpanded(expandedState(event.item, dataItemKey, expanded)),
    [expanded, dataItemKey]
  );
  const editorRef = React.useRef<any>(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : "";
  const errorId = showValidationMessage ? `${id}_error` : "";
  const labelId = label ? `${id}_label` : "";

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
      >
        {label}
      </Label>
      <DropDownTree
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        data={treeData}
        onExpandChange={onExpandChange}
        dataItemKey={others.dataItemKey}
        textField={others.textField}
        {...others}
      />
      {showHint && <Hint id={hintId}>{hint}</Hint>}
      {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
    </FieldWrapper>
  );
};

export const FormDatePicker = (fieldRenderProps: FieldRenderProps) => {
  const {
    validationMessage, touched, label, id, valid,
    disabled, hint, wrapperStyle, hintDirection, ...others
  } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <div className={'k-form-field-wrap'}>
        <DatePicker
          ariaLabelledBy={labelId}
          ariaDescribedBy={`${hintId} ${errorId}`}
          valid={valid}
          id={id}
          disabled={disabled}
          {...others}
        />
        {
          showHint &&
          <Hint id={hintId} direction={hintDirection}>{hint}</Hint>
        }
        {
          showValidationMessage &&
          <Error id={errorId}>{validationMessage}</Error>
        }
      </div>
    </FieldWrapper>
  );
};

export const FormDateTimePicker = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <DateTimePicker
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormTimePicker = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <TimePicker
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormDateInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <DateInput
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormDateRangePicker = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
  const editorRef = React.useRef<any>(null);

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';
  const labelId: string = label ? `${id}_label` : '';

  return (
    <FieldWrapper style={wrapperStyle}>
      <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
        {label}
      </Label>
      <DateRangePicker
        ariaLabelledBy={labelId}
        ariaDescribedBy={`${hintId} ${errorId}`}
        ref={editorRef}
        valid={valid}
        id={id}
        disabled={disabled}
        {...others}
      />
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};

export const FormFloatingNumericTextBox = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, touched, label, id, valid, disabled, hint, optional, value, ...others } = fieldRenderProps;

  const showValidationMessage: string | false | null = touched && validationMessage;
  const showHint: boolean = !showValidationMessage && hint
  const hintId: string = showHint ? `${id}_hint` : '';
  const errorId: string = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <FloatingLabel
        optional={optional}
        editorValue={value}
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        label={label}
      >
        <NumericTextBox
          ariaDescribedBy={`${hintId} ${errorId}`}
          value={value}
          valid={valid}
          id={id}
          disabled={disabled}
          {...others}
        />
      </FloatingLabel>
      {
        showHint &&
        <Hint id={hintId}>{hint}</Hint>
      }
      {
        showValidationMessage &&
        <Error id={errorId}>{validationMessage}</Error>
      }
    </FieldWrapper>
  );
};
