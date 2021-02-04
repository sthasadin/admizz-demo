import React, { useState } from 'react';
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
import { Select } from '../Select';
import { countryList } from '../../utils/CountryLists';

interface FormError {
  [key: string]: string;
}

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  handleChange: (e: any) => void;
  formValue: {};
  formError: FormError
}

const StudentInfo: React.FC<Props> = ({ handleNext, handleBack, handleChange, formValue, formError }) => {
  const [selectedMedium, setSelectedMedium] = useState('messenger')

  return (
    <div className="student-info">
      <div className="student-info__header">
        Enter Personal Information
            </div>
      <form>
        <Grid container justify="space-around" direction='row' >
          <Grid className={'student-info__grid'} item  md={6}>
            <Input
              name={"name"}
              onChange={handleChange}
              errorMessage={formError.name}
              className={'student-info__input'}
              fullWidth
              icon={PersonIcon}
              placeholder="Full Name" />
          </Grid>
          <Grid className={'student-info__grid'} item  md={6}>
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
          <Grid className={'student-info__grid'} item  md={6}>
            <div className={'student-info__phone-input'}>
              {/* <div className={'student-info__phone-separator'}>
                +977
              </div> */}
              <Select
                options={countryList}
                useValue
                minWidth={"83px"}
                width={"90px"}
                defaultValue={"+977"}
                name={"countryCode"}
                onChange={handleChange}
                error={!!formError.countryCode}
                errorMessage={formError.countryCode}
                className={"student-info__phone-separator"}
              />
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
          <Grid className={'student-info__grid'} item  md={6}>
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
          <Grid className={'student-info__grid'} item  md={3}>
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
          <Grid item md={3} sm={12} xs={12}>
            {selectedMedium === 'messenger' &&
              <Input
                fullWidth
                label={"Enter Facebook ID"}
              />
            }
          </Grid>
          <Grid className={'student-info__grid'} item  md={6}>
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
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      </form>

    </div>
  );
};

export { StudentInfo };


