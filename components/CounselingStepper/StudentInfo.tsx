import React, { useState } from 'react';
import * as yup from "yup";
import moment from 'moment';
import { db } from "../../firebase";
import { Grid } from '@material-ui/core';
import { Input } from '../Input';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import messenger from '../../public/messenger.png';
import whatsapp from '../../public/whatsapp.png'
import { Button } from '../Button';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

interface studentInfoFormValue {
  name: string;
  email: string;
  country_code: number;
  phone: number;
  home_country: string;
  course: string;
  description: string;
}

const StudentInfo: React.FC<Props> = ({ handleNext, handleBack }) => {
  const [selectedMedium, setSelectedMedium] = useState('messenger')

  const [formValue, setFormValue] = useState({} as studentInfoFormValue);
  const [formError, setFormError] = useState({} as any);

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value, country_code: 977 })
  }

  const validationSchema = yup.object().shape<studentInfoFormValue>({
    name: yup.string().required("Required"),
    email: yup
      .string()
      .required("Required")
      .email("Please provide a valid email"),
    country_code: yup.number().required("Required"),
    phone: yup.number().required("Required").typeError('Value should be number'),
    home_country: yup.string().required("Required"),
    course: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate({
        name: formValue.name,
        email: formValue.email,
        country_code: formValue.country_code,
        phone: formValue.phone,
        home_country: formValue.home_country,
        course: formValue.course,
        description: formValue.description
      }, {
          abortEarly: false
        });
      setFormError({})
      return true;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0]
      })
      setFormError({ ...errors })
    }
  }

  const handleBook = async () => {
    const valid = await validate();
    if (valid) {
      db.collection("counsellor").add({
        name: formValue.name,
        email: formValue.email,
        country_code: formValue.country_code,
        phone: formValue.phone,
        home_country: formValue.home_country,
        course: formValue.course,
        description: formValue.description,
        createdAt: moment().format(),
      })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  }

  return (
    <div className="student-info">
      <div className="student-info__header">
        Enter Personal Information
            </div>
      <form>
        <Grid container justify="space-around" direction='row' >
          <Grid className={'student-info__grid'} item sm={12} md={6}>
            <Input
              name={"name"}
              onChange={handleChange}
              errorMessage={formError.name}
              className={'student-info__input'}
              fullWidth
              icon={PersonIcon}
              placeholder="Full Name" />
          </Grid>
          <Grid className={'student-info__grid'} item sm={12} md={6}>
            <Input
              name={"email"}
              onChange={handleChange}
              errorMessage={formError.email}
              className={'student-info__input'}
              fullWidth
              icon={MailIcon}
              placeholder="Email" />
          </Grid>
        </Grid>
        <Grid container className={'student-info__row'} justify="space-around" direction='row' >
          <Grid className={'student-info__grid'} item sm={12} md={6}>
            <div className={'student-info__phone-input'}>
              <div className={'student-info__phone-separator'}>
                +977
              </div>
              <Input
                name={"phone"}
                onChange={handleChange}
                errorMessage={formError.phone}
                className={'student-info__input student-info__phone'}
                fullWidth
                icon={CallIcon}
                placeholder="Phone Number" />
            </div>
          </Grid>
          <Grid className={'student-info__grid'} item sm={12} md={6}>
            <Input
              name={"home_country"}
              onChange={handleChange}
              errorMessage={formError.home_country}
              className={'student-info__input'}
              fullWidth
              icon={LocationOnIcon}
              label={"Home Country"}
              placeholder="Home Country" />
          </Grid>
        </Grid>
        <Grid container className={'student-info__row'} justify="space-around" direction='row' >
          <Grid className={'student-info__grid'} item sm={12} md={3}>
            <div className={'student-info__contact-medium-label'}>
              <HeadsetMicIcon className={'student-info__headset'} />
              <div>
                Select Contact Medium
              </div>
            </div>
            <div className={'student-info__mediums-container'}>
              <div
                onClick={() => setSelectedMedium('messenger')}
                className={`student-info__medium ${selectedMedium === 'messenger' && 'student-info__selected-medium'}`}>
                <img src={messenger} />
                <span>Messenger</span>
              </div>
              <div
                onClick={() => setSelectedMedium('whatsapp')}
                className={`student-info__medium ${selectedMedium === 'whatsapp' && 'student-info__selected-medium'}`}>
                <img src={whatsapp} />
                <span>Messenger</span>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            {selectedMedium === 'messenger' &&
              <Input
                fullWidth
                label={"Enter Facebook ID"}
              />
            }
          </Grid>
          <Grid className={'student-info__grid'} item sm={12} md={6}>
            <Input
              name={"course"}
              onChange={handleChange}
              errorMessage={formError.course}
              className={'student-info__input'}
              fullWidth
              icon={LocationOnIcon}
              label={"Selected Course"}
              placeholder="Selected Course" />
          </Grid>
        </Grid>
        <Input
          name={"description"}
          onChange={handleChange}
          errorMessage={formError.description}
          multiline
          placeholder={'Add additional query you have'}
          fullWidth
          margin={"29px 0px 0px 0px"}
        />
        <div className={'student-info__action-buttons'}>
          <div onClick={handleBack}>
            Back
                    </div>
          <Button
            onClick={handleBook}
          >
            Continue
          </Button>
        </div>
      </form>

    </div>
  );
};

export { StudentInfo };


