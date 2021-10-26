import React from "react";

import Layout from "../../layouts";

import { BlockSearch } from "../../components/BlockSearch";
import { CallToAction } from "../../components/Button/callToAction";
import QuickHelp from "../../components/FAQ/quick-help";

import { FAQAccordian } from "../../components/FAQ/accordian";

const FAQ = () => {
  const data = [
    {
      title:
        "Is there any Scholarship or Sponsorship for International Students?",
      description:
        "Yes, There are different government schemes for students. Schemes are like ICCR Scholarships, SII Scheme, COMPEX scholarship for Nepal. Also there are some good institutions who provide partial scholarships. ",
    },
    {
      title: "How many intakes do India has?",
      description:
        "Only one intakes, for June/July till now, though recently some universities have allowed students to get admissions in month of January from Second semester and can complete another semester in summer vacation.",
    },
    {
      title: "When can I apply?",
      description:
        "One should start applying from month of Jan/Feb. There are scholarships whose applications are open from month Jan/Feb, have limited time of deadline so, one has to apply soon.",
    },
    {
      title: "Can I work while studying in India?",
      description: "No, India doesn’t allow students to work while studying.",
    },
    {
      title: "Can one stay outside campus during my study India program?",
      description:
        "Yes, one can stay outside the campus if particular university allows. But would suggest do stay inside at least for a year so you come to know about that place and it’s easy from next year.",
    },
    {
      title:
        "What is the annual average living cost for an international student?",
      description:
        "The average cost for an international student is an estimated USD 5500. While the average tuition fees in India can vary across institutes - both public and private, living costs would be around USD2500, according to the student’s living standards and city of stay.",
    },
    {
      title: "How much is the average tuition fees in India?",
      description:
        "Tuition fees vary across private and public institutes. However, the average cost of tuition fees in India would be an approximate USD 3000, taking into account various factors.",
    },
    {
      title: "How many courses and institutes are available in India?",
      description:
        "India has the world’s second largest higher education network, with around 40,000 colleges and an approximate 1000 universities, which include both public and private institutes.",
    },
    {
      title: "What is the medium of instruction at Indian universities?",
      description:
        "English is the medium of instruction in all Indian institutes / universities.",
    },
    {
      title:
        "Am I still eligible to study in India if English is not my first language?",
      description:
        "If you score fairly well in either the institute’s English aptitude test or have a valid score in English proficiency tests such as IELTS or TOEFL, you can easily apply.",
    },
    {
      title:
        "What if the institute ‘Rejects’ my application will I be given another chance to apply?",
      description:
        "A second round of counselling will be conducted for the students who have not been allotted any institute or got rejected by the institute in the first round.",
    },
    {
      title: "Where can I apply for the Indian Student Visa?",
      description:
        "You’ll need to download a visa form from the given link - https://indianvisaonline.gov.in/visa/, following which you’d need to submit a completed application with supporting documents to your nearest embassy.",
    },
    {
      title: "Do I get medical insurance with my student visa?",
      description:
        "The Indian student visa doesn’t provide for medical insurance. However, some institutes do provide medical insurance to their international students.",
    },
    {
      title: "How easy are the study courses?",
      description:
        "The difficulty level of your course depends on the type of course that you choose. Whatever might be the course that you choose, you must learn to balance education and fun. Ensure that you get enough time to travel around, make new friends, know about their culture and make good memories to take back after your course ends.",
    },
    {
      title: "Am I eligible for admission?",
      description:
        "Every school and program has different admission requirements for accepting students. These requirements can often be found on the program profiles.",
    },
  ];

  return (
    <Layout title="FAQs" stickyBar={true}>
      <div className="faq">
        <div className="faq-container">
          <div className="faq__header section-wrapper">
            <div className="faq__header__title">What can we help you? FAQs</div>
            <div className="faq__header__search">
              <BlockSearch />
            </div>
            <div className="faq__header__desc">
              Eg: Jain University, Manipur, BMS
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq__inner section-wrapper">
            <div className="faq__title">Frequently Asked Questions</div>
            <div className="faq__accordian">
              <div className="faq__accordian__item-wrap">
                {data.slice(0, 7).map((data, i) => {
                  return <FAQAccordian data={data} key={i} />;
                })}
              </div>
              <div className="faq__accordian__item-wrap">
                {data.slice(7, 15).map((data, i) => {
                  return <FAQAccordian data={data} key={i} />;
                })}
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
      </div>
    </Layout>
  );
};

export default FAQ;
