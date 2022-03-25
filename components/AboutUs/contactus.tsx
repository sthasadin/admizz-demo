import React from 'react';
import nepalOffice from "../../public/nepalOffice.png";
import indiaOffice from "../../public/indiaOffice.png";
import location from "../../public/location.png";
import telephone from "../../public/telephone.png";

const contact = () => {
    return (
        <div className="our-exclusive-container">
            <div className="aboutus-exclusive-content">
                <div className="our-trusted-text">CONTACT US</div>
                <div className="contact-countries">

                    <div className="contact-nepal">
                        <div className="nepal-details">
                            <img src="/nepal-office.png" alt="" />
                        </div>
                        <div className="nepal-detials">
                            <h3 className="nepal-office">Nepal Office</h3>
                            <img src="" alt="" /><span><p className="nepal-location">Bagbazar,Kathmandu, Nepal</p></span>
                            <img src="" alt="" /><span><p className="nepal-contact">+91 805 0259 693</p></span>
                        </div>
                    </div>
                    <div className="contact-india">
                        <div className="india-logo">
                            <img src="/india-office.png" alt="" />
                        </div>
                        <div className="india-detials">
                            <h3 className="india-office">India Office</h3>
                            <img src="" alt="" /><span><p className="india-location">Banglore, Karnataka, India</p></span>
                            <img src="" alt="" /><span><p className="india-contact">+91 805 0259 693</p></span>
                        </div>
                    </div>
                    <div className="contact-bangladesh">
                        <div className="india-logo">
                            <img src="/india-office.png" alt="" />
                        </div>
                        <div className="india-detials">
                            <h3 className="india-office">Bangladesh Office</h3>
                            <img src="" alt="" /><span><p className="india-location">Bogra Tole, Bogura 5800, Bangladesh</p></span>
                            <img src="" alt="" /><span><p className="india-contact"> +880 1775 639993</p></span>
                        </div>
                    </div>
                    



                </div>
            </div>
        </div>
    )
}
export default contact;