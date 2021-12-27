import React from "react";
import TeamsArray from "./TeamsArray";

const TeamsMember = ({ setData }: any) => {
  return (
    <>
      <div className="img-grid">
        {TeamsArray.map((cvalue, index): any => {
          return (
            <div className="team-member-img">
              <img
                style={{
                  position: "absolute",
                  top: cvalue.top,
                  bottom: cvalue.bottom,
                  left: cvalue.left,
                  right: cvalue.right,
                  width: "55px",
                  height: 55,
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src={cvalue.img}
                onClick={() =>
                  setData({
                    img: cvalue.img,
                    description: cvalue.description,
                    name: cvalue.name,
                    desigination1: cvalue.designation1,
                    designation2: cvalue.designation2,
                    email: cvalue.email,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamsMember;
