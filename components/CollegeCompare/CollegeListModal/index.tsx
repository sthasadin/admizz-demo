import React from "react";
import { getColleges } from "../../../store/Action/college.action";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { Button } from "../../Button/index";
import CollegeList from "./CollegeList";

const MTModal: any = Modal;
const index = (props: any) => {
  const {
    handleAddCollegeModal,
    isAddCollegeModalOpen,
    setCollegeToCard,
    removeCollegeFromCard,
    selectedCollegeArray,
  } = props;
  const [_collegeList, setCollegeList] = React.useState([]);
  const [selectedCollege, setSelectedCollege] = React.useState([]);
  const [searchKeyword, setSearchKeyword] = React.useState("");

  const collegeList = useSelector((state: any) => state.college.colleges);
  const { compareCollege } = useSelector((state: any) => state.college);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getColleges()); //get all the college list
  }, []);

  React.useEffect(() => {
    if (collegeList.length) {
      setCollegeList(collegeList);
    }
  }, [collegeList]);

  const disSelectCollege = (id: string) => {
    removeCollegeFromCard(id);
  };

  const addSelectedCollege = (id: string) => {
    const addCollege = _collegeList.filter(
      (collegelist) => collegelist._id === id
    );
    setCollegeToCard(addCollege);
    setSelectedCollege([...selectedCollege, id]);
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    const filter = collegeList.filter(
      (obj) => obj.name?.toLowerCase().indexOf(searchKeyword) > -1
    );
    setCollegeList(filter);
  };

  return (
    <>
      <MTModal
        className="modal__container"
        open={isAddCollegeModalOpen}
        onClose={() => handleAddCollegeModal(false)}
      >
        <Fade in style={{ outline: "none", backgroundColor: "#fff" }}>
          <div className="card__container">
            <div className="card__header">
              <div className="card__title">Compare College</div>
              <div className="card__searchbtn">
                <input
                  type="text"
                  className="card__searchField"
                  placeholder="Search College"
                  onChange={handleSearch}
                  value={searchKeyword}
                />
                <Button onClick={() => handleAddCollegeModal(false)}>
                  Add to compare
                </Button>
              </div>
            </div>
            <div className="card__line"></div>

            <div className="card__collegecardcontainer">
              {_collegeList &&
                _collegeList.map((college, index) => {
                  return (
                    <CollegeList
                      collegeProfile={college.college_profile_image}
                      name={college.name}
                      logo={college.college_logo}
                      address={college.address}
                      totalCourse={college.total_course}
                      totalStudent={college.total_students}
                      id={college._id}
                      key={index}
                      addSelectedCollege={addSelectedCollege}
                      disSelectCollege={disSelectCollege}
                      selectedCollege={selectedCollege}
                      selectedCollegeArray={selectedCollegeArray}
                    />
                  );
                })}
            </div>
          </div>
        </Fade>
      </MTModal>
    </>
  );
};

export default index;
