import React from "react";
import confirmBookBg from "../../public/confirmBookBg.png"
import messenger from "../../public/messenger.png"
import { Button } from "../Button";


interface Props {
  handleBack: () => void;
  handleBook: () => void;
}


const ConfirmBook: React.FC<Props> = ({ handleBack, handleBook }) => {
  return (
    <div className={'confirm-section'}>
      <div className={'confirm-section__header'}>
        Review and Conform Your Booking Detail
            </div>
      <div className={'confirm-section__confirm-details'}>
        <div className={'confirm-section__row'}>
          <div className={'confirm-section__details-head'}>
            {'Date & Time'}
          </div>
          <div className={'confirm-section_detail-info'}>Dec 05, 2020   -   03:30 PM</div>
        </div>
        <div className={'confirm-section__row'}>
          <div className={'confirm-section__details-head'}>
            Email Address
                    </div>
          <div className={'confirm-section_detail-info'}>youremail@domain.com</div>
        </div>
        <div className={'confirm-section__row'}>
          <div className={'confirm-section__details-head'}>
            Applying Course
                    </div>
          <div className={'confirm-section_detail-info'}>M.Tech in Engineering</div>
        </div>
        <div className={'confirm-section__row'}>
          <div className={'confirm-section__details-head'}>
            Contact Method
                    </div>
          <div
            className={`confirm-section__medium`}>
            <img src={messenger} />
            <span>Messenger</span>
          </div>
        </div>
      </div>
      <img src={confirmBookBg} className={'confirm-section__background'} />
      <div className={'confirm-section__agreement'}>
        By submitting this form, you accept and agree to our <span>Terms & Condition.</span>
      </div>
      <div className={'confirm-section__action-buttons'}>
        <div onClick={handleBack}>
          Back
                    </div>
        <Button onClick={handleBook} >
          Confirm and Book
                </Button>
      </div>
    </div>
  );
};

export default ConfirmBook;
