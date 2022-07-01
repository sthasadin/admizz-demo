import React, { Fragment, useEffect, useMemo, useState } from "react";
import moment from "moment";
import AwardList from "./AwardsList";
import { useSelector } from "react-redux";
const index = () => {
  const college = useSelector((state: any) => state.college.college);
  if(college){
    // FOR LAST 4 YEARS
    const firstYear=moment().subtract(3, "year").year();
    const secondYear=moment().subtract(2, "year").year();
    const thirdYear=moment().subtract(1, "year").year();
    const fourthYear=moment().subtract(0, "year").year();
      
    // TO STORE ONLY RANK TITLE, LOGO AND RANK VALUE
    const rankTitles=[];
    college?.college_rankings?.map((rank,index)=>{
      const object={
        title:rank.rank_id.title,
        logo:rank.rank_id.logo,
        ranks:['NA','NA','NA','NA']
      }
      if(index == 0) rankTitles.push(object)
      else{
        let count =0
        rankTitles.map(rankTitle=>{
          if((rankTitle.title).toLowerCase() == (object.title).toLowerCase())
            count++;
        })
        if(count==0)
          rankTitles.push(object)
      }
    })

    rankTitles.map(rank => {
      let count=0;
      college?.college_rankings?.map((data) => {
        if ((rank.title).toLowerCase() == (data.rank_id.title).toLowerCase()) {
          if (Number(data.year) == firstYear)
            rank.ranks[0] = data.rank;
          else if (Number(data.year) == secondYear)
            rank.ranks[1] = data.rank;
          else if (Number(data.year) == thirdYear)
            rank.ranks[2] = data.rank;
          else if (Number(data.year) == fourthYear)
            rank.ranks[3] = data.rank;
          count++;
        }
      })
      if(count ==college.college_rankings.length)
        return rank;
    })

    console.log(college?.college_rankings);

    return (
      <div>
        {college && college.college_rankings && (
          // college.college_rankings?.length > 0 && (
          <div id="rating_awards" className="rankingawards__section">
            {/* {college.college_rankings?.length ? (
          <> */}
            <div className="rankingawards__title">RANKING & AWARDS</div>
            <div className="rankingawards__tabletitle">
              <div>Ranking Authority</div>
              <div>{moment().subtract(3, "year").year()}</div>
              <div>{moment().subtract(2, "year").year()}</div>
              <div>{moment().subtract(1, "year").year()}</div>
              <div>{moment().subtract(0, "year").year()}</div>
            </div>
            {
              rankTitles.map(rank=>{
                return (<div className="rankingawards__awardscontainer">
                  <div className="rankingawards__awardsbox">
                    <div className="rankingawards_contents">
                      <div>
                        <img
                          src={rank.logo}
                          style={{ maxHeight: "80px", maxWidth: "80px", width: "80px" }}
                        />
                      </div>
                      {
                        rank.ranks.map((rank1,index)=>{
                          return (
                              <div style={{ color: "#FFA200" }} key={index}>
                                {rank1}
                              </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                )
              })
            }
            {/* </>
        ) : null} */}
            {college.college_awards?.length ? (
              <div>
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
            ) : null}
          </div>
        )}
      </div>
    );
  }
  else 
    return null;
};
export default index;