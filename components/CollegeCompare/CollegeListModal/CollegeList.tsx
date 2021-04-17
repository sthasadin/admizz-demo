import React from "react";
import location from "../../../public/location2.png";
import checked from "../../../public/checked.png";

const CollegeList = (props) => {
  const {
    collegeProfile,
    name,
    logo,
    address,
    totalCourse,
    totalStudent,
    handleClick,
    id,
    disSelectCollege,
    addSelectedCollege,
    selectedCollege,
  } = props;

  const [selectedCard, setSelectedCard] = React.useState(false);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const cardClick = (id) => {
    if (selectedCollege.includes(id)) {
      disSelectCollege(id);
      setSelectedCard(false);
    } else {
      if (selectedCollege.length < 2) {
        setSelectedCard(true);
        addSelectedCollege(id);
      }
    }
  };

  return (
    <div className="card__collegecard" onClick={() => cardClick(id)}>
      {selectedCard && (
        <div className="card__checkedicon">
          <img src={checked} />{" "}
        </div>
      )}
      <div className="card__collegecardimage">
        <img src={collegeProfile} />
      </div>
      <div className="card__collegecarddetails">
        <div className="card__collegecardheader">
          <div className="card__collegecardtitle">{name}</div>
        </div>

        <div className="card__collegelocationcontainer">
          <img src={location} alt="location" />
          <div className="card__collegelocation">{truncate(address, 18)}</div>
        </div>

        
      </div>
    </div>
  );
};

export default CollegeList;
