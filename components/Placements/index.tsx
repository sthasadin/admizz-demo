import React from "react";
import jiologo from "../../public/jio.png";
import student from "../../public/placement_student.png";
import Bargraph from "./Bargraph";
import { useSelector } from "react-redux";

const index = () => {
  const recurtingCompanies = useSelector(
    (state) => state.college.college?.top_recurtng_companies
  );
  const alumnis = useSelector((state) => state.college.college?.alumni);
  console.log(recurtingCompanies);
  return (
    <div id="placement" className="placement">
      <div className="placement__title">PLACEMENTS</div>
      <div className="placement__bargrapcontainer">
        <div className="placement__bargrapindex">
          <div className="placement__indexcontainer">
            <div>INDEX</div>
          </div>
          <div className="placement__indexcontainer">
            <div className="bullet_icon" style={{ color: "#2d9cdb" }}>
              •
            </div>
            <div>2018</div>
          </div>
          <div className="placement__indexcontainer">
            <div className="bullet_icon" style={{ color: "#27AE60" }}>
              •
            </div>
            <div>2019</div>
          </div>
          <div className="placement__indexcontainer">
            <div className="bullet_icon" style={{ color: "#FFA200" }}>
              •
            </div>
            <div>2020</div>
          </div>
        </div>
        <div className="placement__bargraphlist">
          <Bargraph
            name="Placement Percentage"
            graph1="30%"
            graph2="60%"
            graph3="70%"
          />
          <Bargraph name="Average Salary" graph1="3L" graph2="5L" graph3="7L" />
          <Bargraph
            name="Highest Package"
            graph1="4.5L"
            graph2="5.5L"
            graph3="6.5L"
          />
          <Bargraph
            name="Placement Percentage"
            graph1="30%"
            graph2="60%"
            graph3="70%"
          />
          <Bargraph
            name="Total Recruting Companies"
            graph1="20"
            graph2="50"
            graph3="65"
          />
        </div>
      </div>
      <div className="placement__heading">Top Recurting Companies</div>
      <div className="placement_imagelist">
        {recurtingCompanies.map((company) => {
          return recurtingCompanies ? (
            <img src={company} alt="recurting_company_logo" />
          ) : (
            <img src={jiologo} alt="recurting_company_logo" />
          );
        })}
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
  );
};

export default index;
