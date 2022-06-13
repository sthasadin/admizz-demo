import React from "react";
import nepalOffice from "../../public/nepalOffice.png";
import indiaOffice from "../../public/indiaOffice.png";
 import usaOffice from "../../public/usaOffice.png";
import bangladeshOffice from "../../public/bangladeshoffice.png";
import location from "../../public/location.png";
import telephone from "../../public/telephone.png";

const contact = () => {
  return (
    <div className="our-exclusive-container">
      <div className="aboutus-exclusive-content">
        <div className="our-trusted-text">CONTACT US</div>
        <div className="contact-countries">
          <div style={{ marginTop: 15 }} className="contact-nepal">
            <div className="contact-form__india-office-container">
              <img src={indiaOffice} style={{height:64,width:64}}/>
              <div className="contact-form__office-details">
                <div className="contact-form__details-header">India Office</div>
                <div className="contact-form__details-content">
                  <img src={location} />
                  <span style={{ fontSize: 14 }}>
                    2nd Floor, Jayaram Building, Kanakapura Rd,
                    <br />
                    Gubbalala, Bengaluru, Karnataka 560062
                  </span>
                </div>
                <div className="contact-form__details-content">
                  <img src={telephone} />
                  <span style={{ fontSize: 14 }}>+91 805 0259 693</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-nepal">
            <div className="contact-form__india-office-container">
              <img src={nepalOffice}  style={{height:64,width:64,marginBottom:4}}/>
              <div className="contact-form__office-details">
                <div className="contact-form__details-header">Nepal Office</div>
                <div className="contact-form__details-content">
                  <img src={location} />
                  <span style={{ fontSize: 14 }}>
                    Ground Floor, Putalisadak,
                    <br />
                    Kathmandu (Oppo to Raymond Tailor)
                  </span>
                </div>
                <div className="contact-form__details-content">
                  <img src={telephone} />
                  <span style={{ fontSize: 14 }}>+977 9802728444</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-countries">
          <div className="contact-nepal" style={{marginRight:50}}>
            <div className="contact-form__india-office-container">
              <img src={usaOffice} style={{height:70,width:70}} />
              <div className="contact-form__office-details">
                <div className="contact-form__details-header">USA Office</div>
                <div className="contact-form__details-content">
                  <img src={location} />
                  <span style={{ fontSize: 14 }}>
                    USA 1912 E Hardvard Dr Denver, CO 
                   
                    </span>
                </div>
                <div className="contact-form__details-content">
                  <img src={telephone} />
                  <span style={{ fontSize: 14 }}>+1(719) 398-1707</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-nepal" >
            <div className="contact-form__india-office-container">
              <img src={bangladeshOffice} style={{ height: 64, width: 64 }} />
              <div className="contact-form__office-details">
                <div className="contact-form__details-header">
                  Bangladesh Office
                </div>
                <div className="contact-form__details-content">
                  <img src={location} />
                  <span style={{ fontSize: 14 }}>
                    Bogra Tole, Bogura 5800,
                   
                    Bangladesh
                  </span>
                </div>
                <div className="contact-form__details-content">
                  <img src={telephone} />
                  <span style={{ fontSize: 14 }}> +880 1775 639993</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default contact;
