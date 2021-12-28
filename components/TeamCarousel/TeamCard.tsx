import React from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const TeamCard = ({ teamMember }) => {
  return (
    <>
      <div className="teams-card">
        <div className="teams-card__thumbnail">
          <img
            src={teamMember.image}
            alt="member_logo"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="teams-info">
          {/* name */}
          <div className="teams-list__md__name">
            <span>{teamMember.name}</span>
          </div>

          <div className="teams-list__designation">
            <span>Market Counsellor</span>
            <span>{teamMember?.type}</span>
          </div>

          <div className="teams-list__desc">{teamMember.description}</div>

          <div className="teams-email">
            <MdEmail className="email-icon" />
            <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
          </div>

          <div className="team-social-icons-bo">
            {/* twitter */}
            {teamMember?.twitter && (
              <AiOutlineTwitter className="teams-social-icons" />
            )}
            {/* facebook */}
            {teamMember?.facebook && (
              <a href={teamMember?.facebook} target="_blank">
                <AiFillFacebook className="teams-social-icons" />
              </a>
            )}
            {/* instagram */}
            {teamMember?.instagram && (
              <a href={teamMember?.instagram} target="_blank">
                <AiOutlineInstagram className="teams-social-icons" />
              </a>
            )}

            {/* youtube */}
            {teamMember?.youtube && (
              <a href={teamMember?.instagram} target="_blank">
                <AiFillYoutube className="teams-social-icons" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { TeamCard };
