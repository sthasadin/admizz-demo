import React from "react";
import award from "../../public/award.png";
import moment from "moment";

const RankingTable = (props) => {
  const { authorityLogo, rank } = props;

  return (
    <div className="rankingawards__awardsbox">
      <div className="rankingawards_contents">
        <div>
          <img
            src={authorityLogo || award}
            style={{ maxHeight: "80px", maxWidth: "80px", width: "80px" }}
          />
        </div>
        <div style={{ color: "#ffa200" }}>
          {
            rank.find((r: any) => r.date == moment().subtract(3, "year").year())
              ?.rank
          }{" "}
        </div>
        <div style={{ color: "#ffa200" }}>
          {
            rank.find((r: any) => r.date == moment().subtract(2, "year").year())
              ?.rank
          }
        </div>
        <div style={{ color: "#ffa200" }}>
          {
            rank.find((r: any) => r.date == moment().subtract(1, "year").year())
              ?.rank
          }
        </div>
      </div>
    </div>
  );
};

export default RankingTable;
