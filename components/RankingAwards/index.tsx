import React, { Fragment, useMemo } from "react";
import moment from "moment";
import RankingTable from "./RankingTable";
import AwardList from "./AwardsList";
import { useSelector } from "react-redux";

const index = () => {
  const college = useSelector((state: any) => state.college.college);

  const ranking = useMemo(() => {
    let clgRank = college?.college_rankings;

    let newStructOfRank = [];
    if (clgRank?.length) {
      clgRank.forEach((r: any) => {
        let thisRank: any = {};
        newStructOfRank.forEach((rank) => {
          if (rank.title == r.title) {
            thisRank = r;
          }
        });
        let thisIndex = newStructOfRank.findIndex(
          (rank) => rank.title == r.title
        );
        if (thisIndex > -1) {
          newStructOfRank[thisIndex] = {
            title: thisRank.title,
            logo: thisRank.ranking_authority_logo,
            years: [
              ...newStructOfRank[thisIndex].years,
              {
                date: thisRank.year,
                rank: thisRank.rank,
              },
            ],
          };
        } else {
          newStructOfRank.push({
            title: r.title,
            logo: r.ranking_authority_logo,
            years: [
              {
                date: r.year,
                rank: r.rank,
              },
            ],
          });
        }
      });
    }
    return newStructOfRank;
  }, [college]);

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
            {ranking.map((rank, i) => {
              return (
                <Fragment key={i}>
                  <RankingTable authorityLogo={rank.logo} rank={rank.years} />
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
