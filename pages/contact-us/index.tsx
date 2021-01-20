import React from "react";
import { ContactForm, BookCounseling } from "../../components";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import marker from "../../public/marker.png";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="banner-head">Get In Touch</div>
        <div className="banner-content">
          Welcome to our Website. We are glad to have you around. following
          countries – Bangladesh, Bhutan, Ethiopia, India, Indonesia, Kenya,
          Mauritius, Nepal, Rwanda, Sri Lanka, Tanzania, Uganda and Zambia. The
          Ind-SAT.
        </div>
        <div className="banner-opacity">
          <div className="banner-image">
            <img src={marker} />
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <ContactForm />
        <BookCounseling />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
