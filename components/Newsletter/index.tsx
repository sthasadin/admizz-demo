import React from "react";

const Newsletter = (props: any) => {
  return (
    <div id="newsletter" className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__title">Subscribe to our Newsletter</div>
        <div className="newsletter__form">
          <div className="newsletter__input">
            <input type="text" placeholder="Enter email Address" />
          </div>
          <button className="newsletter__btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export { Newsletter };
