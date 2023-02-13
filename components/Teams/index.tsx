import React, { useState } from "react";
import Carousel from "../TeamCarousel";
import { db } from "../../firebase";

const Teams = ({ data }) => {
  const [teamMemberArray, setTeamMemberArray] = React.useState([]);

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
            type: data.type,
          });
        });
      });

    setTeamMemberArray(teamArray);
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
        {/* <TeamsMember setData={setData} /> */}
        <Carousel data={teamMemberArray} />
      </div>
    </div>
  );
};

export { Teams };
