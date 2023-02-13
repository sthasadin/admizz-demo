import React from "react";

import { ContactForm, BookCounseling } from "../../components";
import Layout from "../../layouts";

import marker from "../../public/marker.png";

const ContactUs = () => {
  return (
    <Layout title="Contact Us" stickyBar={true}>
      <div>
        <div className="contact-container">
          <div className="banner section-wrapper">
            {/* <div className="banner-head">Get In Touch</div> */}
            <div className="banner-content">Get In Touch</div>
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
