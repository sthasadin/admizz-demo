import React from "react";
import confirmBookBg from "../../public/confirmBookBg.png";
import messenger from "../../public/messenger.png";
import whatsapp from "../../public/whatsapp.png";
import zoom from "../../public/zoom.png";
import { Button } from "../Button";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

interface Props {
  handleBack: () => void;
  handleBook: () => void;
  isTermChecked:any;
  setIstermChecked:React.Dispatch<any>
  checkValidation:any
  setCheckValidation:React.Dispatch<any>
  formValue: any;
  loading: boolean;
}
const CustomizeCheckBox: any = withStyles({
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#828282",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "&$checked": {
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0,
      },
      "& .PrivateSwitchBase-root-716": {
        paddingLeft: 0,
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4.5,
        top: 5,
        height: 14,
        width: 15,
        position: "absolute",
        // zIndex: -1,
        backgroundColor: "#FFAB1A",
      },
    },
  },
  checked: {},
})(Checkbox);
const ConfirmBook: React.FC<Props> = ({
  handleBack,
  handleBook,
   isTermChecked,
  setIstermChecked,
  checkValidation,
  setCheckValidation,

  formValue,
  loading,
}) => {
  return (
    <div className={"confirm-section"}>
      <div className={"confirm-section__header"}>
        Review and Confirm Your Booking Detail
      </div>
      <div className={"confirm-section__confirm-details"}>
        <div className={"confirm-section__row"}>
          <div className={"confirm-section__details-head"}>{"Date & Time"}</div>
          <div className={"confirm-section_detail-info"}>
            {`${moment(formValue.date).format("MMM DD YYYY")} - ${
              formValue.time
            }`}
          </div>
        </div>
        <div className={"confirm-section__row"}>
          <div className={"confirm-section__details-head"}>Email Address</div>
          <div className={"confirm-section_detail-info"}>{formValue.email}</div>
        </div>
        <div className={"confirm-section__row"}>
          <div className={"confirm-section__details-head"}>Applying Course</div>
          <div className={"confirm-section_detail-info"}>
            {formValue.course}
          </div>
        </div>
        <div className={"confirm-section__row"}>
          <div className={"confirm-section__details-head"}>Contact Method</div>
          <div className={`confirm-section__medium`}>
            <img
              src={
                formValue.contact_medium === "messenger"
                  ? messenger
                  : formValue.contact_medium === "whatsapp"
                  ? whatsapp
                  : zoom
              }
            />
            <span>
              {formValue.contact_medium?.charAt(0).toUpperCase() +
                formValue.contact_medium.slice(1)}
            </span>
          </div>
        </div>
      </div>
      <img src={confirmBookBg} className={"confirm-section__background"} />
      <div className={"confirm-section__agreement"}>
       <CustomizeCheckBox
                  checked={isTermChecked}
                  onChange={() => {
                    setIstermChecked((isTermChecked) => !isTermChecked);
                    setCheckValidation(false)
                  }}
                  style={{ paddingLeft: "0" }}
                />
                By submitting this form, you accept and agree to our
                <span>Terms & Conditions.</span>
                 {checkValidation && (
                <p
                  style={{
                    color: "red",
                    fontSize: 13,
                    marginLeft: 12,
                    marginTop: -10,
                  }}
                >
                  Please accept terms and policy
                </p>
              )}
      </div>
      <div className={"confirm-section__action-buttons"}>
        <div onClick={handleBack}>Back</div>
        <Button
          className={"confirm-section__confirm-button"}
          onClick={handleBook}
          disabled={loading}
          loading={loading}
        >
          Confirm and Book
        </Button>
      </div>
    </div>
  );
};

export default ConfirmBook;
