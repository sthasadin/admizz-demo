import React from "react";
import { CallToAction } from "../Button/callToAction";
import { Button } from "../Button";
import QuickHelp from "./quick-help";
import { useRouter } from "next/router";

const FAQ = () => {
  const router = useRouter();
  return (
    <div className="faq">
      <div className="faq__header section-wrapper">
        <div className="faq__header__title">
          <div className="faq__header__search">How can we help you?</div>
        </div>
      </div>
      <div className="faq-content">
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
          {/* <div className="faq__title">Quick Help Topics</div>
          <div className="faq__quick-help">
            <QuickHelp />
            <QuickHelp />
            <QuickHelp />
            <QuickHelp />
            <QuickHelp />
            <QuickHelp />
          </div> */}
          <div className="faq__counseling">
            <div className="faq__counseling__title">
              Didn’t find your answer to your question?
            </div>
            <div className="faq__counseling__desc">
              Get in touch with us for details on admissions and application
              process for scholarship processing.
            </div>
            <div className="faq__cta">
              <Button onClick={() => router.push("/free-counseling")}>
                Book a Counseling Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FAQ };
