import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Input } from "../Input";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CommentIcon from "@material-ui/icons/Comment";
import messenger from "../../public/messenger.png";
import whatsapp from "../../public/whatsapp.png";
import { Button } from "../Button";
import { Select } from "../Select";
import { countryList } from "../../utils/CountryLists";
import { CountryCode } from "../../utils/CountryCode";
import { CountryCodeDropDown } from "../Select/CountryCodeDropDown";
interface FormError {
  [key: string]: string;
}

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  handleChange: (e: any) => void;
  formValue?: any;
  formError: FormError;
}

const StudentInfo: React.FC<Props> = ({
  handleNext,
  handleBack,
  handleChange,
  formValue,
  formError,
}) => {
  const [selectedMedium, setSelectedMedium] = useState("messenger");
  useEffect(() => {
    handleChange({
      target: {
        name: "contact_medium",
        value: selectedMedium,
      },
    });
  }, [selectedMedium]);

  return (
    <div className="student-info">
      <div className="student-info__header">Enter Personal Information</div>
      <form>
        <Grid container justify="space-around" direction="row">
          <Grid className={"student-info__grid"} item md={6}>
            <Input
              name={"name"}
              onChange={handleChange}
              errorMessage={formError.name}
              error={!!formError.name}
              className={"student-info__input"}
              fullWidth
              icon={PersonIcon}
              label="Full Name"
              placeholder="Full Name"
            />
          </Grid>
          <Grid className={"student-info__grid"} item md={6}>
            <Input
              name={"email"}
              onChange={handleChange}
              errorMessage={formError.email}
              error={!!formError.email}
              className={"student-info__input"}
              fullWidth
              icon={MailIcon}
              label="Email"
              placeholder="Email"
            />
          </Grid>
        </Grid>
        <Grid
          container
          className={"student-info__row"}
          justify="space-around"
          direction="row"
        >
          <Grid className={"student-info__grid"} item md={6}>
            <div className={"student-info__phone-input"}>
              <CountryCodeDropDown
                options={CountryCode}
                useValue
                minWidth={"83px"}
                width={"90px"}
                name={"countryCode"}
                value={formValue.countryCode}
                onChange={handleChange}
                error={!!formError.countryCode}
                errorMessage={formError.countryCode}
                className={"student-info__phone-separator"}
              />
              <Input
                name={"phone"}
                onChange={handleChange}
                errorMessage={formError.phone}
                error={!!formError.phone}
                className={"student-info__input student-info__phone"}
                fullWidth
                icon={CallIcon}
                label="Phone Number"
                placeholder="Phone Number"
              />
            </div>
          </Grid>
          <Grid className={"student-info__grid"} item md={6}>
            <Select
              name={"home_country"}
              options={countryList}
              onChange={handleChange}
              errorMessage={formError.home_country}
              error={!!formError.home_country}
              className={"student-info__input"}
              icon={LocationOnIcon}
              title={"Home Country"}
              // placeholder="Home Country"
            />
          </Grid>
        </Grid>
        <Grid
          container
          className={"student-info__row"}
          justify="space-around"
          direction="row"
        >
          <Grid className={"student-info__grid"} item md={3}>
            <div className={"student-info__contact-medium-label"}>
              <HeadsetMicIcon className={"student-info__headset"} />
              <div>Select Contact Medium</div>
            </div>
            <div className={"student-info__mediums-container"}>
              <div
                onClick={() => setSelectedMedium("messenger")}
                className={`student-info__medium ${
                  selectedMedium === "messenger" &&
                  "student-info__selected-medium"
                }`}
              >
                <img src={messenger} />
                <span>Messenger</span>
              </div>
              <div
                onClick={() => setSelectedMedium("whatsapp")}
                className={`student-info__medium ${
                  selectedMedium === "whatsapp" &&
                  "student-info__selected-medium"
                }`}
              >
                <img src={whatsapp} />
                <span>Whatsapp</span>
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            {selectedMedium === "messenger" && (
              <Input
                name={"contact_id"}
                onChange={handleChange}
                fullWidth
                label={"Facebook ID"}
                errorMessage={formError.contact_id}
                error={!!formError.contact_id}
                placeholder="Facebook ID"
              />
            )}
            {selectedMedium === "whatsapp" && (
              <Input
                name={"contact_id"}
                onChange={handleChange}
                fullWidth
                label={"Whatsapp ID"}
                errorMessage={formError.contact_id}
                error={!!formError.contact_id}
                placeholder="Whatsapp ID"
              />
            )}
          </Grid>
          <Grid className={"student-info__grid"} item md={6}>
            <Input
              name={"course"}
              onChange={handleChange}
              errorMessage={formError.course}
              error={!!formError.course}
              className={"student-info__input"}
              fullWidth
              icon={MenuBookIcon}
              label={"Select Course"}
              placeholder="Select Course"
            />
          </Grid>
        </Grid>
        <Input
          name={"description"}
          onChange={handleChange}
          errorMessage={formError.description}
          error={!!formError.description}
          multiline
          // icon={CommentIcon}
          placeholder={"Add additional query you have"}
          fullWidth
          margin={"29px 0px 0px 0px"}
        />
        <div className={"student-info__action-buttons"}>
          <div onClick={handleBack}>Back</div>
          <Button onClick={handleNext}>Continue</Button>
        </div>
      </form>
    </div>
  );
};

export { StudentInfo };
