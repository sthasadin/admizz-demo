import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

import text_truncate from "./Truncate";
import { Facebook, Instagram, Twitter } from "@icon-park/react";

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
            {selectedTeam?.twitter && selectedTeam?.twitter?.length > 0 && (
              <div className="teams-social-icons">
                < a href={selectedTeam?.twitter}>
                  <Twitter theme="outline" size="20" fill="#828282" />
                </a>
              </div>
            )}
            {selectedTeam?.instagram && selectedTeam?.instagram?.length > 0 && (
              <div className="teams-social-icons">
                <a href={selectedTeam?.instagram}>
                  <Instagram theme="outline" size="20" fill="#828282" />
                </a>
              </div>
            )}

            {selectedTeam?.facebook && selectedTeam?.facebook?.length > 0 && (
              <div className="teams-social-icons">
                <a href={selectedTeam?.facebook}></a>
                <Facebook theme="outline" size="22" fill="#828282" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { TeamCard };