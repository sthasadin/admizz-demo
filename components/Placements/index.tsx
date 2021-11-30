import React from "react";
import moment from "moment";

import Bargraph from "./Bargraph";
import { useSelector } from "react-redux";

const index = () => {
  const [viewAllAlmuni, setViewAllAlmuni] = React.useState(false);
  const recruiting = useSelector(
    (state: any) => state.college.college?.top_recruiting_companies
  );
  const alumnis = useSelector((state: any) => state.college.college?.alumni);
  const statistics = useSelector(
    (state: any) => state.college?.college?.statistics
  );
  const getSize = (data, value) => {
    if (value >= data[0] && value >= data[1]) {
      return "lg";
    }
    if (value <= data[0] && value <= data[1]) {
      return "sm";
    }

    return "md";
  };

  const getMoneyAsString = (money: number) => {
    return money;
    if (money < 100000) {
      return `${Number(money / 1000)}K`;
    } else {
      return `${
        Number(money % 100000) === 0
          ? Number(money / 100000)
          : Number(money / 100000).toFixed(1)
      }L`;
    }
  };
  return statistics || recruiting?.length || alumnis?.length ? (
    <div id="placement" className="placement">
      <div className="placement__title">PLACEMENTS</div>
      <div className="placement__bargrapcontainer">
        {statistics && (
          <div className="placement__bargrapindex">
            <div className="placement__indexcontainer">
              <div>INDEX</div>
            </div>
            <div className="placement__indexcontainer">
              <div className="bullet_icon" style={{ color: "#2d9cdb" }}>
                •
              </div>
              <div>{moment().subtract(3, "year").year()}</div>
            </div>
            <div className="placement__indexcontainer">
              <div className="bullet_icon" style={{ color: "#27AE60" }}>
                •
              </div>
              <div>{moment().subtract(2, "year").year()}</div>
            </div>
            <div className="placement__indexcontainer">
              <div className="bullet_icon" style={{ color: "#FFA200" }}>
                •
              </div>
              <div>{moment().subtract(1, "year").year()}</div>
            </div>
          </div>
        )}
        <div className="placement__bargraphlist">
          {statistics?.placement && (
            <Bargraph
              name="Placement Percentage"
              graph1={{
                value: `${statistics?.placement?.last || 0}%`,
                size: getSize(
                  [statistics?.placement?.second, statistics?.placement?.first],
                  statistics?.placement?.last
                ),
              }}
              graph2={{
                value: `${statistics?.placement?.second || 0}%`,
                size: getSize(
                  [statistics?.placement?.last, statistics?.placement?.first],
                  statistics?.placement?.second
                ),
              }}
              graph3={{
                value: `${statistics?.placement?.first || 0}%`,
                size: getSize(
                  [statistics?.placement?.second, statistics?.placement?.last],
                  statistics?.placement?.first
                ),
              }}
            />
          )}
          {statistics?.average_salary && (
            <Bargraph
              name="Average Salary"
              graph1={{
                value: `${
                  getMoneyAsString(statistics?.average_salary?.last) || "10k"
                }`,
                size: getSize(
                  [
                    statistics?.average_salary?.second,
                    statistics?.average_salary?.first,
                  ],
                  statistics?.average_salary?.last
                ),
              }}
              graph2={{
                value: `${
                  getMoneyAsString(statistics?.average_salary?.second) || "10k"
                }`,
                size: getSize(
                  [
                    statistics?.average_salary?.last,
                    statistics?.average_salary?.first,
                  ],
                  statistics?.average_salary?.second
                ),
              }}
              graph3={{
                value: `${
                  getMoneyAsString(statistics?.average_salary?.first) || "10k"
                }`,
                size: getSize(
                  [
                    statistics?.average_salary?.second,
                    statistics?.average_salary?.last,
                  ],
                  statistics?.average_salary?.first
                ),
              }}
            />
          )}
          {statistics?.highest_package && (
            <Bargraph
              name="Highest Package"
              graph1={{
                value: `${
                  getMoneyAsString(statistics?.highest_package?.last) || "10k"
                }`,
                size: getSize(
                  [
                    statistics?.highest_package?.second,
                    statistics?.highest_package?.first,
                  ],
                  statistics?.highest_package?.last
                ),
              }}
              graph2={{
                value: `${
                  getMoneyAsString(statistics?.highest_package?.second) || "10k"
                }`,
                size: getSize(
                  [
                    statistics?.highest_package?.last,
                    statistics?.highest_package?.first,
                  ],
                  statistics?.highest_package?.second
                ),
              }}
              graph3={{
                value: `${
                  getMoneyAsString(statistics?.highest_package?.first) || "10k"
                }`,
                size: getSize(
                  [
                    statistics?.highest_package?.second,
                    statistics?.highest_package?.last,
                  ],
                  statistics?.highest_package?.first
                ),
              }}
            />
          )}
          {/* <Bargraph
            name="Placement Percentage"
            graph1="30%"
            graph2="60%"
            graph3="70%"
          /> */}
          {statistics?.total_recruting_companies && (
            <Bargraph
              name="Total Recruting Companies"
              graph1={{
                value: `${statistics?.total_recruting_companies?.last || 0}`,
                size: getSize(
                  [
                    statistics?.total_recruting_companies?.second,
                    statistics?.total_recruting_companies?.first,
                  ],
                  statistics?.total_recruting_companies?.last
                ),
              }}
              graph2={{
                value: `${statistics?.total_recruting_companies?.second || 0}`,
                size: getSize(
                  [
                    statistics?.total_recruting_companies?.last,
                    statistics?.total_recruting_companies?.first,
                  ],
                  statistics?.total_recruting_companies?.second
                ),
              }}
              graph3={{
                value: `${statistics?.total_recruting_companies?.first || 0}`,
                size: getSize(
                  [
                    statistics?.total_recruting_companies?.second,
                    statistics?.total_recruting_companies?.last,
                  ],
                  statistics?.total_recruting_companies?.first
                ),
              }}
            />
          )}
        </div>
      </div>
      <div className="placement__heading">Top Recruiting Companies</div>
      <div className="placement_imagelist">
        {recruiting ? (
          <>
            {recruiting.map((data, i) => {
              return (
                <div key={i}>
                  <img src={data.logo} alt="recurting_company_logo" />
                  <div className="recurting-details">{data.title}</div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>

      <div className="placement__notablealumni">
        <span>Our Notable Alumni</span>
        {viewAllAlmuni  &&(
        <span className="text__right" onClick={() => setViewAllAlmuni(true)}>
          {viewAllAlmuni ? null : "View all Alumni"}
        </span>
        )}
      </div>
      <div className="placement__studentlist">
        {alumnis ? (
          <>
            {alumnis?.slice(0, viewAllAlmuni ? 1000 : 3).map((alumni) => {
              return (
                <div className="placement__student">
                  <img src={alumni.image} />
                  <div className="placement__studentdetails">
                    <span className="almoni-batch-name">{alumni.name}</span>
                    <span className="almoni-batch-details">
                      batch {alumni.batch_year}
                    </span>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  ) : null;
};

export default index;
