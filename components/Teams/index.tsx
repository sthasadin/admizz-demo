import React from "react";
import { TeamArray } from "./TeamArray";
import TeamMemberList from "./TeamMemberList";

const Teams = () => {
  const [showClickedMember, setShowClickedMember] = React.useState([
    TeamArray[0],
  ]);
  const [teamMemberArray, setTeamMemberArray] = React.useState(TeamArray);
  console.log(TeamArray);

  const handleClick = (id: string) => {
    const selectedMember = TeamArray.find((data) => data.id === id);
    setShowClickedMember([selectedMember]);

    const filterTeamMemberArray = TeamArray.filter((data) => data.id !== id);
    setTeamMemberArray(filterTeamMemberArray);
  };
  console.log(teamMemberArray);

  // console.log(showClickedMember);
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
          <div className="teams-list__left">
            {showClickedMember &&
              showClickedMember.map((member) => {
                return (
                  <div className="teams-list__thumbnail lead">
                    <img src={member.img} alt="" />
                  </div>
                );
              })}
          </div>
          <div className="teams-list__right">
            {showClickedMember &&
              showClickedMember.map((member) => {
                return (
                  <>
                    <div className="teams-list__md">
                      <div className="teams-list__md__name">
                        <span>{member.name}</span>
                      </div>
                      <div className="teams-list__designation">
                        <span>{member.designation1}</span>
                        <span>{member.designation2}</span>
                      </div>
                      <div className="teams-list__desc">
                        {member.description}
                      </div>
                    </div>
                    <div className="teams-list__contact">
                      <div className="teams-list__email">
                        <div className="teams-list__email__icon"></div>
                        <div className="teams-list__email__address">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

            <div className="teams-list__full-team">
              {teamMemberArray &&
                teamMemberArray.map((TeamArray: any) => {
                  return (
                    <TeamMemberList
                      image={TeamArray.img}
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
