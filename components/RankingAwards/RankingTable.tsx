import React from "react";
import award from "../../public/award.png";

const RankingTable = (props) => {
  const { authorityLogo } = props;
  return (
    <div className="rankingawards__awardsbox">
      <div className="rankingawards_contents">
        <img
          src={authorityLogo}
          style={{ maxHeight: "80px", maxWidth: "100px" }}
        />
        <div>1</div>
        <div>2</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default RankingTable;
