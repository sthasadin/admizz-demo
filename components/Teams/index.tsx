import React from "react";
import { TeamArray } from "./TeamArray";
import Link from "next/link";
import TeamMemberList from "./TeamMemberList";
import Carousel from "../TeamCarousel";
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
      <div className="teams-list__inner section-wrapper">
        <div className="teams-list__heading block-heading">
          our awesome teams
        </div>
        <div className="teams-list__title block-title">
          Meet Our Dedicated Teams
        </div>

        <Carousel data={teamMemberArray} />
      </div>
    </div>
  );
};

export { Teams };
