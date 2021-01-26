import React from "react";
import Head from "next/head";
import { Topbar } from "../../layouts/topbar";
import { Navbar } from "../../layouts/navbar";
import { BlockSearch } from "../../components/BlockSearch";
import { CallToAction } from "../../components/Button/callToAction";
import { Questions } from "../../components/FAQ/questions";
import QuickHelp from "../../components/FAQ/quick-help";
import { Footer } from "../../layouts/footer";
import { FAQAccordian } from "../../components/FAQ/accordian";

const FAQ = () => {
  return (
    <>
      <div className="faq">
        <Head>
          <Topbar />
          <title>Admizz - Home</title>
          <link rel="icon" href="favicon.svg" />
          <Navbar />
        </Head>
        <div className="faq__header">
          <div className="faq__header__title">What can we help you? FAQs</div>
          <div className="faq__header__search">
            <BlockSearch />
          </div>
          <div className="faq__header__desc">
            Eg: Jain University, Manipur, BMS
          </div>
        </div>
        <div className="faq__inner">
          <div className="faq__title">Frequently Asked Questions</div>
          <div className="faq__accordian">
            <div className="faq__accordian__item-wrap">
              <FAQAccordian />
              <FAQAccordian />
            </div>
            <div className="faq__accordian__item-wrap">
              <FAQAccordian />
              <FAQAccordian />
              <FAQAccordian />
              <FAQAccordian />
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
      <Footer />
    </>
  );
};

export default FAQ;
