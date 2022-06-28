import React, { Fragment, useEffect, useMemo, useState } from "react";
import moment from "moment";
import AwardList from "./AwardsList";
import { useSelector } from "react-redux";
const index = () => {
  const college = useSelector((state: any) => state.college.college);
  if(college){
    const ranks=[];
    for(let i=0;i<4;i++){
      let count=0;
      college?.college_rankings?.map(rank=>{
        if(i==0){
          if(rank.year == moment().subtract(3, "year")){
            ranks.push(rank.rank);
            count++;
          }
        }
        else if(i==1){
          if(rank.year==moment().subtract(2, "year").year()){
            ranks.push(rank.rank);
            count++;
          }
        }
        else if(i==2){
          if(rank.year==moment().subtract(1, "year").year()){
            ranks.push(rank.rank);
            count++;
          }
        }
        else{
          if(rank.year==moment().subtract(0, "year").year()){
            ranks.push(rank.rank);
            count++;
          }
        }
      });
      if(count==0)
        ranks.push('NA')
    }

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
            <div className="rankingawards__awardscontainer">
              <div className="rankingawards__awardsbox">
                <div className="rankingawards_contents">
                  <div>
                    <img
                      src={college?.college_rankings?.[0]?.rank_id?.logo}
                      style={{ maxHeight: "80px", maxWidth: "80px", width: "80px" }}
                    />
                  </div>
                  {
                    ranks.map((rank,index)=>{
                      return (
                          <div style={{ color: "#FFA200" }} key={index}>
                            {rank}
                          </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
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