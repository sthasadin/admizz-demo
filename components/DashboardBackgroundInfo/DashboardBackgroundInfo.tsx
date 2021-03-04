import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid, setRef } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '../Button';
import { UploadButton } from '../Button/uploadButton';
import { DropDownSelect } from "../DropDownSelect";
import { PersonalVideo } from "@material-ui/icons";

const DashboardBackgroundInfo = (props) => {
  const [ nameOnPassword, setNameOnPassword ] = useState('')
  const [ numberOnPassword, setNumberOnPassword ] = useState('')
  const [ passwordCountry, setPasswordCountry ] = useState('')
  const [ passwordIssuingAuthority, setPasswordIssuingAuthority ] = useState('')
  const [ passwordExpireDate, setPasswordExpireDate ] = useState('')
  const [ havePassword, setHavePassword ] = useState(true)
  const [ haveAppliedForPassword, setHaveAppliedPassword ] = useState(true)
  const [ passwordId, setPasswordId ] = useState('')
  const [ documentImage, setDocumentImage ] = useState(null)
  const [ refOneCountryCode, setRefOneCountryCode ] = useState('')
  const [ refTwoCountryCode, setRefTwoCountryCode ] = useState('')
  const [ studentRefOne, setstudentRefOne] = useState({
    name : '',
    country_code : refOneCountryCode,
    number : "",
    email : '',
    address : '',
  })
  const [ studentRefTwo, setstudentRefTwo] = useState({
    name : '',
    number : "",
    email : '',
    address : '',
    country_code : refTwoCountryCode
  })


  const sendData = ( ) => {
    props.getData({
      nameOnPassword,
      numberOnPassword,
      passwordCountry,
      passwordIssuingAuthority,
      passwordExpireDate,
      havePassword,
      haveAppliedForPassword,
      passwordId,
      documentImage,
      studentRefOne,
      studentRefTwo
    })
    props.handleNext()
  }
  const CountryOption = [
    {
        label : 'Nepal',
        value : 'Nepal'
    },
    {
      label : 'India',
      value : 'India'
    },
  ]

  const CountryCodeOptions = [
    {
      label : '+91',
      value : '+91'
    },
    {
      label : '+977',
      value : '+977'
    },
  ]

  useEffect(() => {
    if(Object.keys(props.data).length > 0){
      setNameOnPassword(props.data.nameOnPassword)
      setNameOnPassword(props.data.numberOnPassword)
      setPasswordExpireDate(props.data.passwordExpireDate)
      setPasswordCountry(props.data.passwordCountry)
      setPasswordIssuingAuthority(props.data.passwordIssuingAuthority)
      setHavePassword(props.data.havePassword)
      setHaveAppliedPassword(props.data.haveAppliedForPassword)
      setPasswordId(props.data.passwordId)
      setDocumentImage(props.data.documentImage)
      setstudentRefOne(props.data.studentRefOne)
      setstudentRefTwo(props.data.studentRefTwo)
    }
  }, [props.data])
  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Background Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Do you have a passport? 
              </div>
              </Grid>
              <Grid item sm={12} md={7} xs={12}>
                <RadioGroup aria-label="passport" name="passport1" row onChange={(e) => console.log(e)}>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" onChange={() => setHavePassword(true)}/>
                  <FormControlLabel value="no" control={<Radio />} label="No" onChange={() => setHavePassword(false)}/>
                </RadioGroup>
              </Grid>
            </Grid>
            {/*  */}
            {
              !havePassword?'':(
                <div>
                  <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                      <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                        <Input
                          className={'dashboard-basic-info__input'}
                          fullWidth
                          placeholder="Name On Passport" 
                          value={nameOnPassword}
                          onChange={(e) => setNameOnPassword(e.target.value) }
                        />
                      </Grid>
                      <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                        <Input
                          className={'dashboard-basic-info__input'}
                          fullWidth
                          placeholder="Passport Number" 
                          value={numberOnPassword}
                          onChange={(e) => setNumberOnPassword(e.target.value) }
                        />
                      </Grid>
                    </Grid>
                    <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                      <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                        <Input
                          className={'dashboard-basic-info__input'}
                          fullWidth
                          placeholder="Issuing Authority" 
                          value={passwordIssuingAuthority}
                          onChange={(e) => setPasswordIssuingAuthority(e.target.value) }
                        />
                      </Grid>
                      <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                        <Input
                          className={'dashboard-basic-info__input'}
                          fullWidth
                          placeholder="Expiry Date of Passport" 
                          value={passwordExpireDate}
                          onChange={(e) => setPasswordExpireDate(e.target.value) }
                        />
                      </Grid>
                    </Grid>
                    <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                      <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                        <DropDownSelect title="Issuing Country" options={CountryOption} handelChange={setPasswordCountry} />
                      </Grid>
                      <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                      </Grid>
                    </Grid>
                </div>
              )
            }
            {
              havePassword?"":(
                <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Have you applied for Passport?
                </div>
              </Grid>
              <Grid item sm={12} md={7} xs={12}>
                <RadioGroup aria-label="passport" name="passport1" row>
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" onChange={() => setHaveAppliedPassword(true)} />
                  <FormControlLabel value="no" control={<Radio />} label="No" onChange={() => setHaveAppliedPassword(false)} />
                </RadioGroup>
              </Grid>
            </Grid>
              )
            }
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Enter your Citizenship / National ID
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
                <Input
                  className={'dashboard-basic-info__input'}
                  fullWidth
                  placeholder="Citizenship ID / National ID" 
                  value={passwordId}
                  onChange={(e) => setPasswordId(e.target.value) }
                />
              </Grid>
              <Grid className={'dashboard-basic-info__grid'} item sm={12} md={6} xs={12}>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Personal Identification
                </div>
              </Grid>
            </Grid>
            <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
              <Grid item sm={12} md={5} xs={12}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid item sm={12} md={7} xs={12}>

                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={(e) => setDocumentImage(e.target.files[0])}
                  />

                  <UploadButton>
                    Upload button
                  </UploadButton>
                  <p style={{margin :10}}>
                    {
                      documentImage ? documentImage.name : ''
                    }
                  </p>
                </label>

              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {/* Reference Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Reference Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle">
              At least 2 references
            </div>
            <hr className="dashboard-basic-info__horizontalLine" />
            <form>
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Full Name" 
                    value = {studentRefOne.name}
                    onChange={(e) => setstudentRefOne({...studentRefOne, 'name' : e.target.value})}
                  />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={6} md={3} xs={4}>
                  <DropDownSelect options={CountryCodeOptions} title='Country Code' handelChange={setRefTwoCountryCode} />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <div className={'student-info__phone-input'}>
                    <Input
                      className={'student-info__input student-info__phone'}
                      fullWidth
                      placeholder="Phone Number" 
                      value = {studentRefOne.number}
                      onChange={(e) => setstudentRefOne({...studentRefOne, 'number' : e.target.value})}
                    />
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Email Address" 
                    value = {studentRefOne.email}
                    onChange={(e) => setstudentRefOne({...studentRefOne, 'email' : e.target.value})}
                  />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Address" 
                    value = {studentRefOne.address}
                    onChange={(e) => setstudentRefOne({...studentRefOne, 'address' : e.target.value})}
                  />
                </Grid>
              </Grid>
              <Grid container className="dashboard-basic-info__row" justify="space-around" direction='row' >
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Full Name" 
                    value = {studentRefTwo.name}
                    onChange={(e) => setstudentRefTwo({...studentRefTwo, 'name' : e.target.value})}
                  />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <DropDownSelect options={CountryCodeOptions} title='Country Code' handelChange={setRefTwoCountryCode} />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <div className={'student-info__phone-input'}>
                    <Input
                      className={'student-info__input student-info__phone'}
                      fullWidth
                      placeholder="Phone Number" 
                      value = {studentRefTwo.number}
                      onChange={(e) => setstudentRefTwo({...studentRefTwo, 'number' : e.target.value})}
                    />
                  </div>
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Email Address" 
                    value = {studentRefTwo.email}
                    onChange={(e) => setstudentRefTwo({...studentRefTwo, 'email' : e.target.value})}
                  />
                </Grid>
                <Grid className={'dashboard-basic-info__grid'} item sm={12} md={3} xs={12}>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="Address" 
                    value = {studentRefTwo.address}
                    onChange={(e) => setstudentRefTwo({...studentRefTwo, 'address' : e.target.value})}
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div className="dashboard-basic-info__backContainer" onClick={props.handleBack}>
            Back
          </div>
          <Button
            onClick={sendData}>
            Save And Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export { DashboardBackgroundInfo };
