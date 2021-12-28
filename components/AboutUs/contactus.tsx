import React from 'react';

const contact = () => {
    return (
        <div className="our-exclusive-container">
        <div className="aboutus-exclusive-content">
            <div className="our-trusted-text">CONTACT US</div>
            <div className="contact-countries">
                <div className="contact-india">
                    <div className="india-logo">
                        <img src="/public/india-office.png" alt="" />
                    </div>
                    <div className="india-detials">
                        <h3 className="india-office">India Office</h3>
                        <img src="" alt="" /><span><p className="india-location">Banglore, Karnataka, India</p></span>
                        <img src="" alt="" /><span><p className="india-contact">+91 805 0259 693</p></span>
                    </div>
                </div>
                <div className="contact-nepal">
                    <div className="nepal-details">
                        <img src="" alt="" />
                    </div>
                    <div className="nepal-detials">
                        <h3 className="nepal-office">Nepal Office</h3>
                        <img src="" alt="" /><span><p className="nepal-location">Bagbazar,Kathmandu, Nepal</p></span>
                        <img src="" alt="" /><span><p className="nepal-contact">+91 805 0259 693</p></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default contact;