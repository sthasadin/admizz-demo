import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import filterIcon from "../../public/filterIcon.png";
import addCollegeIcon from "../../public/addCollegeIcon.png";
import CompareAttributesList from "./CompareFilter/CompareAttributesList";
import ShowSelectedCollege from "./ShowSelectedCollege";
import { useSelector } from "react-redux";
import CollegeListModal from "./CollegeListModal";
import CollegeCompareTable from "./CollegeCompareTable";
import {RootState} from "../../store/store";

const index = () => {
  const [isFilterContainer, setIsFilterContainer] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = useState([
    { label: "QS Ranking", value: "QS_ranking" }, //it should be college field
    { label: "Placement Percentage", value: "placement_percentage" },
    { label: "Total Students", value: "total_students" },
    { label: "Total Courses", value: "total_course" },
    { label: "Average Fee", value: "average_fee" },
  ]);
  const [selectedCollege, setSelectedCollege] = React.useState([]);

  const [isAddCollegeModalOpen, setIsAddCollegeModalOpen] = React.useState(
    false
  );
  const college = useSelector((state:any) => state.college.college);

  React.useEffect(() => {
    if (college) {
      setSelectedCollege([college]);
    }
  }, [college]);

  const handleAddCollegeModal = (res) => {
    setIsAddCollegeModalOpen(res);
  };

  const setCollegeToCard = (data: any) => {
    setSelectedCollege([...selectedCollege, ...data]);
  };

  const removeCollegeFromCard = (data: any) => {
    const removeCollege = selectedCollege.filter(
      (selectedCollege) => selectedCollege._id !== data
    );
    setSelectedCollege(removeCollege);
  };

  return (
    <div className="container">
      {isAddCollegeModalOpen && (
        <CollegeListModal
          isAddCollegeModalOpen={isAddCollegeModalOpen}
          handleAddCollegeModal={handleAddCollegeModal}
          setCollegeToCard={setCollegeToCard}
          removeCollegeFromCard={removeCollegeFromCard}
          selectedCollegeArray={selectedCollege}
        />
      )}
      <div style={{ backgroundColor: "#e5e5e5" }}>
        <div className="inner">
          <div className="comparecollege__header">
            <div className="comparecollege__head" style={{ margin: "auto 0" }}>
              <div className="comparecollege__title">Compare College</div>
              <Button
                className="comparecollege__filterbtn"
                onClick={() => setIsFilterContainer(!isFilterContainer)}
              >
                <img src={filterIcon} className="btn__icon" />
                Filter Compare
              </Button>
            </div>
          </div>
        </div>
        {isFilterContainer && (
          <div className="comparecollege__filtercontainer">
            <CompareAttributesList
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              selectedCollege={selectedCollege}
            />
          </div>
        )}
      </div>
      <div className="comparecollege__addcollegecontainer">
        <div className="inner">
          {/* show selected college */}

          <div className="comparecollege__collegelist">
            {/* here college */}
            {selectedCollege &&
              selectedCollege.map((collegedata) => {
                return (
                  <ShowSelectedCollege
                    hostId={college._id}
                    id={collegedata._id}
                    name={collegedata.name}
                    logo={collegedata.college_logo}
                    image={collegedata.college_profile_image}
                    address={collegedata.address}
                    removeCollegeFromCard={removeCollegeFromCard}
                  />
                );
              })}
              <div className="add__div">
            {selectedCollege.length < 3 ? (
              <div
                className="comparecollege__addtemplates"
                onClick={() => handleAddCollegeModal(true)}
              >
                <img src={addCollegeIcon} />
              </div>
            
            ) : (
              ""
              
            )}
              </div>
          </div>

          <div className="collegecompare__tablecontainer">
            <div className="collegetable_metacontainer">
              <div className="collegetable_meta">Comparison details</div>
              {/* <div className="collegetable_period">
                <span className="collegetable_year">Year</span>
                <span className="collegetable_currentyear">2020</span>
                </div> */}
            </div>

            <div className="comparetable__container">
              <CollegeCompareTable
                selectedFilters={selectedFilters}
                selectedCollege={selectedCollege}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
