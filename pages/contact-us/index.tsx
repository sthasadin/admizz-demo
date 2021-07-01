import React from "react";

import { ContactForm, BookCounseling } from "../../components";
import Layout from "../../layouts";

import marker from "../../public/marker.png";

const ContactUs = () => {
  return (
    <Layout title="Contact Us">
      <div>
        <div className="contact-container">
          <div className="banner section-wrapper">
            <div className="banner-head">Get In Touch</div>
            <div className="banner-content">
              Welcome to our Website. We are glad to have you around. following
              countries – Bangladesh, Bhutan, Ethiopia, India, Indonesia, Kenya,
              Mauritius, Nepal, Rwanda, Sri Lanka, Tanzania, Uganda and Zambia.
              The Ind-SAT.
            </div>
            <div className="banner-opacity">
              <div className="banner-image">
                <img className="banner-imageValue" src={marker} />
              </div>
            </div>
          </div>
        </div>

        <div className="form-wrapper section-wrapper">
          <ContactForm />
          <BookCounseling />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
