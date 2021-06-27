import React from "react";
import youtubeIcon from "../../public/youtubeIcon.png";
import instagramIcon from "../../public/instagramIcon.png";
import facebookIcon from "../../public/facebookIcon.png";
import twitterIcon from "../../public/twitterIcon.png";
import mIcon from "../../public/mIcon.png";

const TeamCard = ({ showClickedMember }) => {
  return (
    <>
      <div className="teams-list__details">
        <div className="teams-list__left hideformobile">
          <div className="teams-list__thumbnail lead">
            <img src={showClickedMember.image} alt="member_logo" />
          </div>
        </div>

        <div className="teams-list__right">
          <div className="teams-list__md">
            <div className="teams-list__md__name">
              <span>{showClickedMember.name}</span>
            </div>
            <div className="teams-list__designation">
              <span>Owner</span>
              <span>Leader</span>
            </div>
            <div className="teams-list__desc">
              {showClickedMember.description}
            </div>
          </div>
          <div className="teams-list__contact">
            <div className="teams-list__email">
              <div className="teams-list__email__icon">
                <img src="/email-icon.png" alt="..." />
              </div>
              <div className="teams-list__email__address">
                {showClickedMember.email}
              </div>
            </div>

            <div className="teams-list__socailmediaicons">
              <img src={twitterIcon} alt="twitter_logo" />
              <img src={facebookIcon} alt="facebook_logo" />
              <img src={instagramIcon} alt="instagram_logo" />
              <img src={youtubeIcon} alt="youtube_logo" />
              <img src={mIcon} alt="m_logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { TeamCard };
