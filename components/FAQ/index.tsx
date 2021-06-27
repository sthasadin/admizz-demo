import React from "react";
import { CallToAction } from "../Button/callToAction";
import QuickHelp from "./quick-help";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__header section-wrapper">
        <div className="faq__header__title">
          <div className="faq__header__search">What can we help you? FAQs</div>
          <div className="faq__header__desc">
            Eg: Jain University, Manipur, BMS
          </div>
        </div>
      </div>
      <div className="faq__inner section-wrapper">
        <div className="faq__title">Frequently Asked Questions</div>
        <div className="faq__accordian">
          <div className="faq__accordian__item">
            <div className="faq__accordian__title-wrap">
              <div className="faq__accordian__title">
                How much fee I need to pay at first year?
              </div>
              <div className="faq__accordian__icon"></div>
            </div>
          </div>
          <div className="faq__accordian__item open">
            <div className="faq__accordian__title-wrap">
              <div className="faq__accordian__title">
                How much fee I need to pay at first year?
              </div>
              <div className="faq__accordian__icon"></div>
            </div>
            <div className="faq__accordian__desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </div>
          </div>
        </div>
        <div className="faq__title">Quick Help Topics</div>
        <div className="faq__quick-help">
          <QuickHelp />
          <QuickHelp />
          <QuickHelp />
          <QuickHelp />
          <QuickHelp />
          <QuickHelp />
        </div>
        <div className="faq__counseling">
          <div className="faq__counseling__title">
            Didn’t find your answer to your question?
          </div>
          <div className="faq__counseling__desc">
            Get in touch with us for details on admissions and application
            process for scholarship processing.
          </div>
          <div className="faq__cta">
            <CallToAction className="filled">
              Book a Counseling Session
            </CallToAction>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FAQ };
