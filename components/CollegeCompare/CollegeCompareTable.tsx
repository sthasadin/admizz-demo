import React from "react";
import People from "../../public/people.png";
import Breifcase from "../../public/breifcase.png";
import Cashicon from "../../public/cash-icon.png";
import Rankicon from "../../public/rank-icon.png";
import Courseoffered from "../../public/course-offered.png";
import Graduation from "../../public/graduation.png";

export default function CustomizedTables(props: any) {
  const { selectedCollege, selectedFilters } = props;
  const getIcon = (label: string) => {
    switch (label) {
      case "QS_ranking":
        return <img src={Rankicon} />;
      case "placement_percentage":
        return <img src={Breifcase} />;
      case "total_students":
        return <img src={People} />;
      case "total_course":
        return <img src={Courseoffered} />;
      case "average_fee":
        return <img src={Cashicon} />;
      default:
        return <img src={Graduation} />;
    }
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div className="compare-college-table">
        {selectedFilters.map((data: any, i) => {
          return (
            <div className="compare-table-inner" key={i}>
              <div className="compare-table-label">
                <strong>{data.label}</strong>
              </div>
              {/* <div style={{ display: "flex", marginLeft: "34px" }}> */}
              <div style={{display:'flex', marginLeft: '12px'}}>
                {selectedCollege.map((colegeAttributes: any) => {
                  return (
                    <>
                      <div className="comparetable__data_attributes">
                        <div>
                          <div style={{display: 'flex'}}>
                            <div className="comparetable__dataIcon">
                
                              {getIcon(data.value)}
                            </div>
                            <div className="comparetable__datavalue">
                              
                              {data.value === 'QS_ranking' ? <div className="compare__datavalue__forranking"><span>#{colegeAttributes[data.value]}</span> out of <span>100</span></div>:truncate(colegeAttributes[data.value], 16) }
                            </div>
                          </div>
                          <div style={{ fontSize: "12px", color: "#828282", marginTop: '3px' }}>
                            {data.value === "QS_ranking" ? null : data.label}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
