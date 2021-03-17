import React from "react";
import Button from "@material-ui/core/Button";
import filterIcon from "../../public/filterIcon.png";
import addCollegeIcon from "../../public/addCollegeIcon.png";
import CompareAttributesList from "./CompareFilter/CompareAttributesList";
import ShowSelectedCollege from "./ShowSelectedCollege";
import { useSelector } from "react-redux";
import CollegeListModal from "./CollegeListModal";
import CollegeCompareTable from "./CollegeCompareTable";

const index = () => {
  const [isFilterContainer, setIsFilterContainer] = React.useState(false);
  const [selectedCollege, setSelectedCollege] = React.useState([]);

  const [isAddCollegeModalOpen, setIsAddCollegeModalOpen] = React.useState(
    false
  );
  const college = useSelector((state) => state.college.college);

  React.useEffect(() => {
    if (college) {
      setSelectedCollege([college]);
    }
  }, [college]);

  const handleAddCollegeModal = (res) => {
    setIsAddCollegeModalOpen(res);
  };

  const setCollegeToCard = (data: any) => {
    console.log(data);
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

      <div className="comparecollege__header">
        <div className="comparecollege__head">
          <div className="comparecollege__title">Compare College</div>
          <Button
            className="comparecollege__filterbtn"
            onClick={() => setIsFilterContainer(!isFilterContainer)}
          >
            <img src={filterIcon} className="btn__icon" />
            Filter Compare
          </Button>
        </div>
        {isFilterContainer && (
          <div className="comparecollege__filtercontainer">
            <CompareAttributesList />
          </div>
        )}
      </div>

      <div className="comparecollege__addcollegecontainer">
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
        <CollegeCompareTable selectedCollege={selectedCollege} />
      </div>
    </div>
  );
};

export default index;
