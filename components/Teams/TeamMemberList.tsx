import React from "react";

const TeamMemberList = (props: any) => {
  const { image, handleClick, id } = props;
  console.log(id);
  return (
    <div
      className="teams-list__full-team__thumbnail"
      onClick={() => {
        handleClick(id);
      }}
    >
      <img src={image} alt="member_image_logo" />
    </div>
  );
};

export default TeamMemberList;
