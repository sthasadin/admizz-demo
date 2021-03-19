import React from "react";
import RankingTable from "./RankingTable";
import AwardList from "./AwardsList";
import { useSelector } from "react-redux";

const index = () => {
  const college = useSelector((state) => state.college.college);
  console.log(college.college_rankings);
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
        {college.college_rankings ? (
          <>
            {college.college_rankings.map((rank) => {
              return (
                <RankingTable
                  authorityLogo={rank.ranking_authority_logo}
                  rank={rank.rank}
                />
              );
            })}
          </>
        ) : null}
        {/* <RankingTable />
        <RankingTable />
        <RankingTable />
        <RankingTable /> */}
      </div>
      <div className="award__title">Awards Received</div>
      <div className="award__container">
        {college.college_awards ? (
          <>
            {college.college_awards.map((awards) => {
              return <AwardList name="awards" logo={awards} />;
            })}{" "}
          </>
        ) : null}
        {/* <AwardList name="awards" logo />
        <AwardList name="awards1" />
        <AwardList name="awards2" />
        <AwardList name="awards3" /> */}
      </div>
    </div>
  );
};

export default index;
