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

interface Props {
    handleNext: () => void;
    handleBack: () => void;
}


const StudentInfo: React.FC<Props> = ({ handleNext, handleBack }) => {
    const [selectedMedium, setSelectedMedium] = useState('messenger')
    return (
        <div className="student-info">
            <div className="student-info__header">
                Enter Personal Information
            </div>
            <form>
                <Grid container justify="space-around" direction='row' >
                    <Grid className={'student-info__grid'} item sm={12} md={6}>
                        <Input
                            className={'student-info__input'}
                            fullWidth
                            icon={PersonIcon}
                            placeholder="Full Name" />
                    </Grid>
                    <Grid className={'student-info__grid'} item sm={12} md={6}>
                        <Input
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
                                className={'student-info__input student-info__phone'}
                                fullWidth
                                icon={CallIcon}
                                placeholder="Full Name" />
                        </div>
                    </Grid>
                    <Grid className={'student-info__grid'} item sm={12} md={6}>
                        <Input
                            className={'student-info__input'}
                            fullWidth
                            icon={LocationOnIcon}
                            label={"Home Country"}
                            placeholder="Email" />
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
                            className={'student-info__input'}
                            fullWidth
                            icon={LocationOnIcon}
                            label={"Home Country"}
                            placeholder="Email" />
                    </Grid>
                </Grid>
                <Input
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
                        onClick={handleNext}>
                        Continue
                    </Button>
                </div>
            </form>

        </div>
    );
};

export { StudentInfo };


