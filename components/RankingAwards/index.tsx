import React from "react";
import RankingTable from "./RankingTable";
import AwardList from "./AwardsList";

const index = () => {
  return (
    <div className="rankingawards__section">
      <div className="rankingawards__title">RANKING & AWARDS</div>
      <div className="rankingawards__heading">Ranking Information</div>
      <div className="rankingawards__tabletitle">
        <div>Ranking Authority</div>
        <div> 2018</div>
        <div>2019</div>
        <div>2020</div>
      </div>
      <div className="rankingawards__awardscontainer">
        <RankingTable />
        <RankingTable />
        <RankingTable />
        <RankingTable />
      </div>
      <div className="award__title">Awards Received</div>
      <div className="award__container">
        <AwardList name="awards" />
        <AwardList name="awards1" />
        <AwardList name="awards2" />
        <AwardList name="awards3" />
      </div>
    </div>
  );
};

export default index;
