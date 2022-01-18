import React, { Fragment, useEffect, useMemo, useState } from "react";
import moment from "moment";
import RankingTable from "./RankingTable";
import AwardList from "./AwardsList";
import { useSelector } from "react-redux";

const index = () => {
  const college = useSelector((state: any) => state.college.college);

  return (
    <div className="rankingawards__section">
      {college.college_rankings?.length ? (
        <>
          <div className="rankingawards__title">RANKING & AWARDS</div>
          <div className="rankingawards__tabletitle">
            <div>Ranking Authority</div>

            <div>{moment().subtract(3, "year").year()}</div>
            <div>{moment().subtract(2, "year").year()}</div>
            <div>{moment().subtract(1, "year").year()}</div>
            <div>{moment().subtract(0, "year").year()}</div>
          </div>
          <div className="rankingawards__awardscontainer">
            {college?.college_rankings.map((rank, i) => {
              return (
                <Fragment key={i}>
                  <RankingTable authorityLogo={rank?.rank_id?.logo} rank_year={rank?.year} rank={rank?.rank} />
                </Fragment>
              );
            })}
          </div>
        </>
      ) : null}
      <div className="award__title">Awards Received</div>
      <div className="award__container">
        {college.college_awards ? (
          <>
            {college.college_awards.map((data, i) => {
              return <AwardList data={data} key={i} />;
            })}{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default index;
