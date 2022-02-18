import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import text_truncate from "./Truncate";

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
            <AiOutlineInstagram className="teams-social-icons" />
            <AiFillYoutube className="teams-social-icons" />
          </div>
        </div>
      </div>
    </>
  );
};
export { TeamCard };