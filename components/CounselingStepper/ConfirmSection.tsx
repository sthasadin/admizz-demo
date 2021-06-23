import React from "react";
import confirmBookBg from "../../public/confirmBookBg.png";
import messenger from "../../public/messenger.png";
import whatsapp from "../../public/whatsapp.png";
import { Button } from "../Button";
import moment from "moment";

interface Props {
  handleBack: () => void;
  handleBook: () => void;
  formValue: any;
  disable: boolean;
  loading: boolean;
}

const ConfirmBook: React.FC<Props> = ({
  handleBack,
  handleBook,
  disable,
  formValue,
  loading,
}) => {
  return (
    <div className={"confirm-section"}>
      <div className={"confirm-section__header"}>
        Review and Conform Your Booking Detail
      </div>
      <div className={"confirm-section__confirm-details"}>
        <div className={"confirm-section__row"}>
          <div className={"confirm-section__details-head"}>{"Date & Time"}</div>
          <div className={"confirm-section_detail-info"}>{`${moment(
            formValue.date
          ).format("MMM DD YYYY")} - ${formValue.time}`}</div>
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
                formValue.contact_medium === "messenger" ? messenger : whatsapp
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
        By submitting this form, you accept and agree to our{" "}
        <span>Terms & Condition.</span>
      </div>
      <div className={"confirm-section__action-buttons"}>
        <div onClick={handleBack}>Back</div>
        <Button
          className={"confirm-section__confirm-button"}
          onClick={handleBook}
          disabled={disable}
          loading={loading}
        >
          Confirm and Book
        </Button>
      </div>
    </div>
  );
};

export default ConfirmBook;
