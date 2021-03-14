import React from "react";
import award from "../../public/award.png";

const RankingTable = () => {
  return (
    <div className="rankingawards__awardsbox">
      <div className="rankingawards_contents">
        <img src={award} />
        <div>1</div>
        <div>2</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default RankingTable;
