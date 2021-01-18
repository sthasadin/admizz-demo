import React from "react";

const Questions = (props: any) => {
  return (
    <div className={`faq__accordian__item ${props.open ? "open" : ""}`}>
      <div className="faq__accordian__title-wrap">
        <div className="faq__accordian__title">
          How much fee I need to pay at first year?
        </div>
        <div className="faq__accordian__icon"></div>
      </div>
      <div className="faq__accordian__desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Amet minim mollit
        non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit.
      </div>
    </div>
  );
};

export { Questions };
