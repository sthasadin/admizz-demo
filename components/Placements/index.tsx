import React from "react";
import moment from 'moment'
import jiologo from "../../public/jio.png";
import student from "../../public/placement_student.png";
import Bargraph from "./Bargraph";
import { useSelector } from "react-redux";
// let itels = {
//               haveDone: "no",
//               score: "",
//               subMars: { listining: "", writing: "", reading: "", speaking: "" },
//             }
// let a = {
//   ...itels,
//   subMars:{
//     ...itels.subMars,
//     listining:e.target.value
//   }
// }

const index = () => {
  const recurtingCompanies = useSelector(
    (state:any) => state.college.college?.top_recurtng_companies
  );
  const alumnis = useSelector((state:any) => state.college.college?.alumni);
  const statistics = useSelector((state:any) => state.college?.college?.statistics)
  const getSize = (data, value) => {
    if (value >= data[0] && value >= data[1]) {
      return 'lg'
    }
    if (value <= data[0] && value <= data[1]) {
      return 'sm'
    }
    console.log(value,data)
    return 'md'
  }

  const getMoneyAsString = (money:number) => {
    if (money<100000) {
      return `${Number(money/1000)}K`
    } else {
      return `${Number(money%100000) === 0 ? Number(money/100000) : Number(money/100000).toFixed(1)  }L`
    }
  }
  return statistics || recurtingCompanies?.length || alumnis?.length ? (
    <div id="placement" className="placement">
      <div className="placement__title">PLACEMENTS</div>
      <div className="placement__bargrapcontainer">
       {statistics && <div className="placement__bargrapindex">
          <div className="placement__indexcontainer">
            <div>INDEX</div>
          </div>
          <div className="placement__indexcontainer">
            <div className="bullet_icon" style={{ color: "#2d9cdb" }}>
              •
            </div>
            <div>{moment().subtract(3, 'year').year()}</div>
          </div>
          <div className="placement__indexcontainer">
            <div className="bullet_icon" style={{ color: "#27AE60" }}>
              •
            </div>
            <div>{moment().subtract(2, 'year').year()}</div>
          </div>
          <div className="placement__indexcontainer">
            <div className="bullet_icon" style={{ color: "#FFA200" }}>
              •
            </div>
            <div>{moment().subtract(1, 'year').year()}</div>
          </div>
        </div>}
        <div className="placement__bargraphlist">
          {statistics?.placement && <Bargraph
            name="Placement Percentage"
            graph1={{
              value:`${statistics?.placement?.last || 0}%`,
              size:getSize([statistics?.placement?.second,statistics?.placement?.first],statistics?.placement?.last)
            }}
            graph2={{
              value:`${statistics?.placement?.second || 0}%`,
              size:getSize([statistics?.placement?.last,statistics?.placement?.first],statistics?.placement?.second)
            }}
            graph3={{
              value:`${statistics?.placement?.first || 0}%`,
              size:getSize([statistics?.placement?.second,statistics?.placement?.last],statistics?.placement?.first)
            }}
          />}
          {statistics?.average_salary && <Bargraph 
            name="Average Salary" 
            graph1={{
              value:`${getMoneyAsString(statistics?.average_salary?.last) || '10k'}`,
              size:getSize([statistics?.average_salary?.second,statistics?.average_salary?.first],statistics?.average_salary?.last)
            }} 
            graph2={{
              value:`${getMoneyAsString(statistics?.average_salary?.second) || '10k'}`,
              size:getSize([statistics?.average_salary?.last,statistics?.average_salary?.first],statistics?.average_salary?.second)
            }} 
            graph3={{
              value:`${getMoneyAsString(statistics?.average_salary?.first) || '10k'}`,
              size:getSize([statistics?.average_salary?.second,statistics?.average_salary?.last],statistics?.average_salary?.first)
            }} />}
          {statistics?.highest_package && <Bargraph
            name="Highest Package"
            graph1={{
              value:`${getMoneyAsString(statistics?.highest_package?.last) || '10k'}`,
              size:getSize([statistics?.highest_package?.second,statistics?.highest_package?.first],statistics?.highest_package?.last)
            }} 
            graph2={{
              value:`${getMoneyAsString(statistics?.highest_package?.second) || '10k'}`,
              size:getSize([statistics?.highest_package?.last,statistics?.highest_package?.first],statistics?.highest_package?.second)
            }} 
            graph3={{
              value:`${getMoneyAsString(statistics?.highest_package?.first) || '10k'}`,
              size:getSize([statistics?.highest_package?.second,statistics?.highest_package?.last],statistics?.highest_package?.first)
            }}
          />}
          {/* <Bargraph
            name="Placement Percentage"
            graph1="30%"
            graph2="60%"
            graph3="70%"
          /> */}
          {statistics?.total_recruting_companies && <Bargraph
            name="Total Recruting Companies"
            graph1={{
              value:`${statistics?.total_recruting_companies?.last || 0}`,
              size:getSize([statistics?.total_recruting_companies?.second,statistics?.total_recruting_companies?.first],statistics?.total_recruting_companies?.last)
            }}
            graph2={{
              value:`${statistics?.total_recruting_companies?.second || 0}`,
              size:getSize([statistics?.total_recruting_companies?.last,statistics?.total_recruting_companies?.first],statistics?.total_recruting_companies?.second)
            }}
            graph3={{
              value:`${statistics?.total_recruting_companies?.first || 0}`,
              size:getSize([statistics?.total_recruting_companies?.second,statistics?.total_recruting_companies?.last],statistics?.total_recruting_companies?.first)
            }}
          />}
        </div>
      </div>
      <div className="placement__heading">Top Recurting Companies</div>
      <div className="placement_imagelist">
        {recurtingCompanies ? (
          <>
            {recurtingCompanies.map((company) => {
              return <img src={company} alt="recurting_company_logo" />;
            })}
          </>
        ) : null}
      </div>

      <div className="placement__notablealumni">
        <span>Our Notable Alumni</span>
        {/* <span className="text__right">View all Alumni</span> */}
      </div>
      <div className="placement__studentlist">
        {alumnis ? (
          <>
            {alumnis.map((alumni) => {
              return (
                <div className="placement__student">
                  <img src={alumni.image} />
                  <div className="placement__studentdetails">
                    <span>{alumni.name}</span>
                    <span>{alumni.batch_year}</span>
                  </div>
                </div>
              );
            })}
          </>
        ) : null}

        {/* <div className="placement__student">
          <img src={student} />
          <div className="placement__studentdetails">
            <span>Mathew Perry</span>
            <span>Batch 2019</span>
          </div>
        </div> */}
        {/* <div className="placement__student">
          <img src={student} />
          <div className="placement__studentdetails">
            <span>Mathew Perry</span>
            <span>Batch 2019</span>
          </div>
        </div> */}
        {/* <div className="placement__student">
          <img src={student} />
          <div className="placement__studentdetails">
            <span>Mathew Perry</span>
            <span>Batch 2019</span>
          </div>
        </div> */}
      </div>
    </div>
  ):null;
};

export default index;
