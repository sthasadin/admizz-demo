import React, { useEffect } from "react";

import Layout from "../../layouts";
import { useSelector, useDispatch } from "react-redux";

import { BlockSearch } from "../../components/BlockSearch";
import { CallToAction } from "../../components/Button/callToAction";
import QuickHelp from "../../components/FAQ/quick-help";

import { FAQAccordian } from "../../components/FAQ/accordian";
import { BookCounseling } from "../../components/BookCounselling";
import { getFaq, getSearchFaq } from "../../store/Action/faqs.action";

export const FAQ = () => {
  const data = useSelector((state: any) => state.faqs.faqs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaq());
  }, []);

  const searchHandler = async (query) => {
    if (!query) dispatch(getFaq());
    dispatch(getSearchFaq(query));
  };


  return (
    <Layout title="FAQs" stickyBar={true}>
      <div className="faq">
        <div className="faq-container">
          <div className="faq__header section-wrapper">
            <div className="faq__header__title">How can we help you?</div>
            <div className="faq__header__search">
              <BlockSearch searchHandler={searchHandler} />
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq__inner section-wrapper">
            <div className="faq__title">Frequently Asked Questions</div>
            <div className="faq__accordian">
              <div className="faq__accordian__item-wrap">
                {data &&
                  data.map((data, i) => {
                    if (i % 2 == 0) {
                      return <FAQAccordian data={data} key={i} />;
                    }
                  })}
              </div>
              <div className="faq__accordian__item-wrap">
                {data &&
                  data.map((data, i) => {
                    if (i % 2 == 1) {
                      return <FAQAccordian data={data} key={i} />;
                    }
                  })}
              </div>
            </div>
            {/* <div className="faq__title">Quick Help Topics</div> */}
            {/* <div className="faq__quick-help">

              <QuickHelp />
              <QuickHelp />
              <QuickHelp />
              <QuickHelp />
              <QuickHelp />
              <QuickHelp />
            </div> */}
            <div className="faq__counseling">
             
              
              <div className="faq__cta">
             <BookCounseling/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;