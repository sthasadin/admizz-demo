import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Groupfive from "./Images/Groupfive.png";
import Group6 from "./Images/Group6.png";
import TeamsArray from "./TeamsArray";
import text_truncate from "./Truncate";
import TeamsMember from "../TeamCarousel/TeamsMember";
// import "./Team.css";

const TeamCard = ({ selectedTeam }: any) => {
  return (
    <>
      <div className="teams-card">
        <div className="teams-card__thumbnail">
          <img
            src={selectedTeam?.image}
            alt="enlarged pic"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="teams-info">
          <div className="teams-list__md__name">
            <span>{selectedTeam?.name}</span>
          </div>
          <div className="teams-list__designation">
            <span>Market Counsellor</span>
            <span>{selectedTeam?.designation2}</span>
          </div>
          <div className="teams-list__desc">
            {text_truncate(selectedTeam?.description || "", 180, "...")}
          </div>
          <div className="teams-email">
            <MdEmail className="email-icon" />
            {selectedTeam?.email}
          </div>
          <div className="team-social-icons-box">
            <AiOutlineTwitter className="teams-social-icons" />
            <AiFillFacebook className="teams-social-icons" />
            <AiOutlineInstagram className="teams-social-icons" />
            <AiFillYoutube className="teams-social-icons" />
            <AiFillYoutube className="teams-social-icons" />
          </div>
        </div>
      </div>
    </>
  );
};
export { TeamCard };

// import React from "react";
// import youtubeIcon from "../../public/youtubeIcon.png";
// import instagramIcon from "../../public/instagramIcon.png";
// import facebookIcon from "../../public/facebookIcon.png";
// import twitterIcon from "../../public/twitterIcon.png";
// import mIcon from "../../public/mIcon.png";

// const TeamCard = ({ teamMember }) => {
//   return (
//     <>
//       <div className="teams-list__details">
//         <div className="teams-list__left hideformobile">
//           <div className="teams-list__thumbnail lead">
//             <img src={teamMember.image} alt="member_logo" />
//           </div>
//         </div>

//         <div className="teams-list__right">
//           <div className="teams-list__md">
//             <div className="teams-list__md__name">
//               <span>{teamMember.name}</span>
//             </div>
//             <div className="teams-list__designation">
//               <span>Type</span>
//               <span>{teamMember?.type}</span>
//             </div>
//             <div className="teams-list__desc">{teamMember.description}</div>
//           </div>
//           <div className="teams-list__contact">
//             <div className="teams-list__email">
//               <div className="teams-list__email__icon">
//                 <img src="/email-icon.png" alt="..." />
//               </div>
//               <div className="teams-list__email__address">
//                 <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
//               </div>
//             </div>

//             <div className="teams-list__socailmediaicons">
//               {/* twitter */}
//               {teamMember?.twitter && (
//                 <a href={teamMember?.twitter} target="_blank">
//                   <svg
//                     width="18"
//                     height="15"
//                     viewBox="0 0 18 15"
//                     fill="#828282"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="team-social-icon"
//                   >
//                     <path
//                       opacity="0.9"
//                       d="M16.1498 3.6434C16.1612 3.80329 16.1612 3.96321 16.1612 4.12311C16.1612 9 12.4493 14.6193 5.66499 14.6193C3.57488 14.6193 1.63326 14.014 0 12.9633C0.296966 12.9975 0.582471 13.0089 0.890863 13.0089C2.61546 13.0089 4.20305 12.4264 5.47083 11.4328C3.84899 11.3985 2.48985 10.3363 2.02156 8.87439C2.25001 8.90863 2.47842 8.93148 2.71829 8.93148C3.0495 8.93148 3.38074 8.88578 3.6891 8.80587C1.99875 8.4632 0.730936 6.97844 0.730936 5.18529V5.13962C1.22204 5.41373 1.79315 5.58505 2.39844 5.60787C1.40478 4.94541 0.753788 3.81471 0.753788 2.53551C0.753788 1.85025 0.936496 1.22207 1.25631 0.673843C3.07232 2.91243 5.80203 4.37433 8.86293 4.53426C8.80583 4.26015 8.77155 3.97464 8.77155 3.6891C8.77155 1.65608 10.4162 0 12.4607 0C13.5228 0 14.4822 0.445432 15.1561 1.16498C15.9898 1.00509 16.7893 0.696694 17.4975 0.274114C17.2233 1.13074 16.6409 1.85028 15.8756 2.3071C16.618 2.22719 17.3376 2.02156 18 1.73606C17.4975 2.46699 16.8693 3.11799 16.1498 3.6434Z"
//                       fill=""
//                     />
//                   </svg>
//                 </a>
//               )}
//               {/* facebook */}
//               {teamMember?.facebook && (
//                 <a href={teamMember?.facebook} target="_blank">
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 18 18"
//                     fill="#828282"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="team-social-icon"
//                   >
//                     <path
//                       opacity="0.9"
//                       d="M18 0.992411V17.0036C18 17.554 17.554 17.996 17.0076 17.996H12.4192V11.029H14.7576L15.1071 8.31295H12.4152V6.57723C12.4152 5.78973 12.6321 5.25536 13.7612 5.25536H15.1996V2.82455C14.9504 2.79241 14.0987 2.71607 13.1022 2.71607C11.029 2.71607 9.6067 3.9817 9.6067 6.30804V8.31295H7.26027V11.029H9.6067V18H0.992411C0.445982 18 0 17.554 0 17.0076V0.992411C0 0.445982 0.445982 0 0.992411 0H17.0036C17.554 0 18 0.445982 18 0.992411Z"
//                       fill=""
//                     />
//                   </svg>
//                 </a>
//               )}
//               {/* instagram */}
//               {teamMember?.instagram && (
//                 <a href={teamMember?.instagram} target="_blank">
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 18 18"
//                     fill="#828282"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="team-social-icon"
//                   >
//                     <path
//                       opacity="0.9"
//                       d="M9.00201 4.38405C6.44808 4.38405 4.38806 6.44406 4.38806 8.99799C4.38806 11.5519 6.44808 13.6119 9.00201 13.6119C11.5559 13.6119 13.616 11.5519 13.616 8.99799C13.616 6.44406 11.5559 4.38405 9.00201 4.38405ZM9.00201 11.9977C7.35159 11.9977 6.00234 10.6524 6.00234 8.99799C6.00234 7.34356 7.34757 5.99833 9.00201 5.99833C10.6564 5.99833 12.0017 7.34356 12.0017 8.99799C12.0017 10.6524 10.6524 11.9977 9.00201 11.9977ZM14.8809 4.19531C14.8809 4.79364 14.399 5.2715 13.8047 5.2715C13.2064 5.2715 12.7285 4.78963 12.7285 4.19531C12.7285 3.601 13.2104 3.11913 13.8047 3.11913C14.399 3.11913 14.8809 3.601 14.8809 4.19531ZM17.9368 5.28756C17.8685 3.84596 17.5392 2.56899 16.4831 1.5169C15.431 0.464807 14.154 0.135527 12.7124 0.063246C11.2267 -0.021082 6.77334 -0.021082 5.28756 0.063246C3.84997 0.131511 2.57301 0.460792 1.5169 1.51288C0.460792 2.56498 0.135527 3.84194 0.063246 5.28355C-0.021082 6.76933 -0.021082 11.2226 0.063246 12.7084C0.131511 14.15 0.460792 15.427 1.5169 16.4791C2.57301 17.5312 3.84596 17.8605 5.28756 17.9327C6.77334 18.0171 11.2267 18.0171 12.7124 17.9327C14.154 17.8645 15.431 17.5352 16.4831 16.4791C17.5352 15.427 17.8645 14.15 17.9368 12.7084C18.0211 11.2226 18.0211 6.77334 17.9368 5.28756ZM16.0173 14.3026C15.7041 15.0897 15.0977 15.696 14.3066 16.0133C13.122 16.4831 10.3111 16.3747 9.00201 16.3747C7.69292 16.3747 4.87797 16.4791 3.69738 16.0133C2.91032 15.7001 2.30396 15.0937 1.98673 14.3026C1.5169 13.118 1.62532 10.3071 1.62532 8.99799C1.62532 7.6889 1.52091 4.87395 1.98673 3.69336C2.29994 2.9063 2.9063 2.29994 3.69738 1.98271C4.88199 1.51288 7.69292 1.6213 9.00201 1.6213C10.3111 1.6213 13.126 1.5169 14.3066 1.98271C15.0937 2.29593 15.7001 2.90229 16.0173 3.69336C16.4871 4.87797 16.3787 7.6889 16.3787 8.99799C16.3787 10.3071 16.4871 13.122 16.0173 14.3026Z"
//                       fill=""
//                     />
//                   </svg>
//                 </a>
//               )}

//               {/* youtube */}
//               {teamMember?.youtube && (
//                 <a href={teamMember?.instagram} target="_blank">
//                   <svg
//                     width="26"
//                     height="18"
//                     viewBox="0 0 26 18"
//                     fill="#828282"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="team-social-icon"
//                   >
//                     <path
//                       opacity="0.9"
//                       d="M25.0651 2.81639C24.7707 1.7078 23.9032 0.834703 22.8018 0.538406C20.8054 0 12.8 0 12.8 0C12.8 0 4.7947 0 2.79825 0.538406C1.69683 0.83475 0.829359 1.7078 0.534938 2.81639C0 4.82578 0 9.01819 0 9.01819C0 9.01819 0 13.2106 0.534938 15.22C0.829359 16.3286 1.69683 17.1653 2.79825 17.4616C4.7947 18 12.8 18 12.8 18C12.8 18 20.8053 18 22.8018 17.4616C23.9032 17.1653 24.7707 16.3286 25.0651 15.22C25.6 13.2106 25.6 9.01819 25.6 9.01819C25.6 9.01819 25.6 4.82578 25.0651 2.81639ZM10.1818 12.8246V5.2118L16.8727 9.01828L10.1818 12.8246Z"
//                       fill=""
//                     />
//                   </svg>
//                 </a>
//               )}

//               {/* Micon */}
//               {teamMember?.medium && (
//                 <a href={teamMember?.instagram} target="_blank">
//                   <svg
//                     width="19"
//                     height="15"
//                     viewBox="0 0 19 15"
//                     fill="#828282"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="team-social-icon"
//                   >
//                     <path
//                       opacity="0.9"
//                       d="M2.73241 2.91379C2.75474 2.69423 2.66915 2.47467 2.50541 2.32582L0.827098 0.301426V0H6.04438L10.0783 8.84557L13.6247 0H18.6001V0.301426L17.1637 1.67831C17.0409 1.77135 16.9776 1.92764 17.0037 2.08022V12.2022C16.9776 12.3548 17.0409 12.5111 17.1637 12.6041L18.5666 13.981V14.2824H11.5073V13.981L12.9623 12.5706C13.1037 12.4292 13.1037 12.3845 13.1037 12.1687V3.98925L9.05865 14.2564H8.51161L3.80787 3.98925V10.87C3.76694 11.1602 3.86369 11.4505 4.06836 11.6589L5.95879 13.9512V14.2526H0.600098V13.9549L2.49053 11.6589C2.69148 11.4505 2.78451 11.1565 2.73241 10.87V2.91379Z"
//                       fill=""
//                     />
//                   </svg>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export { TeamCard };
