import React, { useEffect, useState } from "react";
import { TeamCard } from "./TeamCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import TeamsMember from "./TeamsMember";
import { db } from "../../firebase";

const index = ({data}) => {
  const [selectedTeam, setSelectedTeam] = useState({index: 0});
  const [teamsArray, setTeamsArray] = useState([]);

  useEffect(() => {
    if (selectedTeam) {
      setSelectedTeam({ ...teamsArray[0], index: 0 });
    }
  }, [teamsArray]);
  const changedClick = (dir) => {
    if (dir == "next") {
      teamsArray.map((team, index) => {
        if (selectedTeam?.index + 1 == index) {
          setSelectedTeam({ ...team, index });
        }
      });
    }
    if (dir == "prev") {
      teamsArray.map((team, index) => {
        if (selectedTeam?.index - 1 == index) {
          setSelectedTeam({ ...team, index });
        }
      });
    }
  };
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

    setTeamsArray(teamArray);
  };
  React.useEffect(() => {
    getFireStoreCounselor();
  }, []);

  return (
    <div className="Our-Awesome-Teams">
      <div className="dot-image">
        <img src="/Group6.png" className="groupsix-dot" />
      </div>
      <div className="dot-image-second">
        <img src="/Groupfive.png" className="groupfive-dot" />
      </div>
      {teamsArray ? (
        <>
          <TeamCard selectedTeam={selectedTeam} />
          <TeamsMember
            teamList={teamsArray}
            setSelectedTeam={setSelectedTeam}
          />
        </>
      ) : (
        <h1>loading</h1>
      )}

      <div className="team-arrow">
        <MdOutlineKeyboardArrowLeft
          className={
            selectedTeam?.index == 0 ? "arrow-icon icon-disable" : "arrow-icon"
          }
          onClick={() => selectedTeam?.index > 0 && changedClick("prev")}
        />
        <MdOutlineKeyboardArrowRight
          className={
            selectedTeam?.index == 5 ? "arrow-icon icon-disable" : "arrow-icon"
          }
          onClick={() => selectedTeam?.index < 6 && changedClick("next")}
        />
      </div>
    </div>
  );
};

export default index;
