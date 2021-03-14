import React from "react";
import chatIcon from "../../public/chatIcon.png";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature__heading">Our Features:</div>

      <div className="feature__listcontainer">
        <div className="feature__details">
          <img src={chatIcon} />
          <div className="feature__title">One on One Counselling session</div>
        </div>
        <div className="feature__descrition">
          Get the right career advice for you and earn your best carer
          certificates.
        </div>
      </div>

      <div className="feature__btn">
        <button className="btn btn--block btn--light">Learn More</button>
      </div>
    </div>
  );
};

export { Feature };
