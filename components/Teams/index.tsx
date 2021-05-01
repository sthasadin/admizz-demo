import React from "react";
import { TeamArray } from "./TeamArray";
import Link from "next/link";
import TeamMemberList from "./TeamMemberList";
import youtubeIcon from "../../public/youtubeIcon.png";
import instagramIcon from "../../public/instagramIcon.png";
import facebookIcon from "../../public/facebookIcon.png";
import twitterIcon from "../../public/twitterIcon.png";
import mIcon from "../../public/mIcon.png";
import { db, storage } from "../../firebase";

const Teams = () => {
  const [teamMemberArray, setTeamMemberArray] = React.useState([]);
  const [allTeamMemberArray, setAllTeamMemberArray] = React.useState([]);
  const [showClickedMember, setShowClickedMember] = React.useState({
    name: "",
    image: "",
    email: "",
    description: "",
    facebook: "",
    medium: "",
    instagram: "",
    twitter: "",
  });

  React.useEffect(() => {
    getFireStoreCounselor();
  }, []);

  const getFireStoreCounselor = async () => {
    const teamArray = [];
    await db
      .collection("team_member")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const data = doc.data();
          teamArray.push({
            id: doc.id,
            name: data.name,
            image: data.image,
            email: data.email,
            description: data.description,
            facebook: data.facebook_link,
            medium: data.medium_link,
            instagram: data.insta_link,
            twitter: data.twitter_link,
          });
        });
      });
    setShowClickedMember(teamArray[0]);
    setTeamMemberArray(teamArray);
    setAllTeamMemberArray(teamArray);
  };

  // console.log(showClickedMember.name);

  const handleClick = (id: string) => {
    const selectedMember = teamMemberArray.find((data) => data.id === id);
    setShowClickedMember(selectedMember);

    const filterTeamMemberArray = allTeamMemberArray.filter(
      (data) => data.id !== id
    );
    setTeamMemberArray(filterTeamMemberArray);
  };

  return (
    <div className="teams-list">
      <div className="teams-list__inner">
        <div className="teams-list__heading block-heading">
          our awesome teams
        </div>
        <div className="teams-list__title block-title">
          Meet Our Dedicated Teams
        </div>
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
                <div className="teams-list__email__icon"></div>
                <div className="teams-list__email__address">
                  {showClickedMember.email}

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

            <div className="teams-list__full-team">
              {teamMemberArray &&
                teamMemberArray.map((TeamArray: any) => {
                  return (
                    <TeamMemberList
                      image={TeamArray.image}
                      id={TeamArray.id}
                      handleClick={handleClick}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Teams };
