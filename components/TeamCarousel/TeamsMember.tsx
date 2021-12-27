import React from "react";
import TeamsArray from "./TeamsArray";

const TeamsMember = ({ setSelectedTeam, teamList }: any) => {
  return (
    <>
      <div className="img-grid">
        {teamList.slice(0, 6).map((cvalue, index): any => {
          return (
            <div key={cvalue?.id} className="team-member-img">
              <img
                style={{
                  position: "absolute",
                  top: TeamsArray[index].top,
                  bottom: TeamsArray[index].bottom,
                  left: TeamsArray[index].left,
                  right: TeamsArray[index].right,
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "2px 2px 2px rgba(128, 128, 128, 0.445);",
                }}
                src={cvalue.image}
                onClick={() => setSelectedTeam({ ...cvalue, index })}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamsMember;
