import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Layout from "../../layouts";

import { Input } from "../../components/Input";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";
import { CollegeListResult } from "../../components/CollegeListResult";

import {
  getCollegesByCity,
  getCollegeByLimit,
  getCollegeByFilter,
} from "../../store/Action/college.action";

import {
  getCountryList,
  getStateList,
  getCityList,
  getTotalCollegeCount,
  getCourseLevel,
  getProgramName,
} from "../../store/Action/filter.action";

const collegeList = () => {
  const [collegeListSearchQuery, setCollegeListSearchQuery] = useState("");
  const [selectedCourses, setSeletedCourses] = useState([]);
  const [filters, setFilters] = useState({});
  const [_collegeList, setCollegeList] = useState([]);
  const [limit, setLimit] = useState(2);
  //redux state
  const { countryList } = useSelector((state) => state.filter);
  const { collegeByLimitLoader } = useSelector((state) => state.college);
  const { stateList } = useSelector((state) => state.filter);
  const { cityList } = useSelector((state) => state.filter);
  const { programName } = useSelector((state) => state.filter);
  const { courseLevel } = useSelector((state) => state.filter);
  const { collegesByLimit } = useSelector((state) => state.college);
  const { totalCollegeCount } = useSelector((state) => state.college);

  const dispatch = useDispatch();

  console.log(courseLevel);

  const router = useRouter();
  const { query } = router.query;

  React.useEffect(() => {
    dispatch(
      getCollegesByCity({
        city: selectedCourses[0],
      })
    );
  }, [selectedCourses]);

  const getAllFilterList = async () => {
    await dispatch(getCountryList({ filter: "country" }));
    await dispatch(getStateList({ filter: "state" }));
    await dispatch(getCityList({ filter: "city" }));
    await dispatch(getCourseLevel({ filter: "courses.course_level" }));
    await dispatch(getProgramName({ filter: "courses.course_name" }));
    await dispatch(getCollegeByLimit(1));
    await dispatch(getTotalCollegeCount());
  };

  React.useEffect(() => {
    getAllFilterList();
  }, []);

  const getCollegesArray = async () => {
    await dispatch(getCollegeByLimit(limit));

    setLimit(limit + 1);
  };

  const onSelectedCourse = (e) => {
    console.log(e.target.name);

    dispatch(getCollegeByFilter({ country: e.target.name }));
    setFilters("asd");
    if (e.target.checked) {
      setSeletedCourses([...selectedCourses, e.target.name.toUpperCase()]);
    }
    if (!e.target.checked) {
      setSeletedCourses(
        selectedCourses.filter(
          (course) => course !== e.target.name.toUpperCase()
        )
      );
    }
  };

  const deSelectCourse = (name) => {
    setSeletedCourses(
      selectedCourses.filter((course) => course !== name.toUpperCase())
    );
  };

  const onChangeCollegeListSearchQuery = (e) => {
    setCollegeListSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredColleges = collegesByLimit.filter((college) => {
      return (
        college?.name
          .trim()
          .toLowerCase()
          .includes(collegeListSearchQuery.trim().toLowerCase()) ||
        college?.address
          .trim()
          .toLowerCase()
          .includes(collegeListSearchQuery.trim().toLowerCase())
      );
    });
    setCollegeList(filteredColleges);
  };

  const resetFilter = () => {
    setCollegeListSearchQuery("");
    setCollegeList(_collegeList); //the old list
    setSeletedCourses([]);
  };

  return (
    <div className="container" id="asd">
      <Layout title="Colleges" stickyBar={true}>
        <main className="college-list">
          <div className="college-list__container section-wrapper">
            <div className="college-list__searchContainer">
              <div className="college-list__headerTitle">
                College/University Lists in India
              </div>
              <div className="college-list__headerSearch">
                <Input
                  placeholder={
                    "Enter College Name, City, State or anything here..."
                  }
                  margin={"0px 0px 0px 0px"}
                  name="collegeListSearchQuery"
                  onChange={onChangeCollegeListSearchQuery}
                  value={collegeListSearchQuery}
                  fullWidth
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  icon={SearchIcon}
                  bgColor="#fff"
                />
                <div
                  className="college-list__searchButton"
                  onClick={handleSearch}
                >
                  Search{" "}
                  <img
                    src="/color-rightarrow.png"
                    alt=".."
                    className="right-arrow-icon"
                  />
                </div>
                <div
                  className="college-list__searchmobileButton"
                  onClick={handleSearch}
                >
                  <img
                    src="/color-rightarrow.png"
                    alt=".."
                    className="right-arrow-icon"
                  />
                </div>
              </div>
              <div className="college-list__headerSubtitle">
                Eg: Jain University, Manipur, BMS
              </div>
            </div>
          </div>
          <div className="college-list__college-container">
            <div className="college-list__college-container__inner section-wrapper">
              <div className="college-list__sideBarContainer">
                <CollegeListSideBar
                  resetFilter={resetFilter}
                  allCoursesWithCounts={filters}
                  onSelectedCourse={onSelectedCourse}
                  selectedCourses={selectedCourses}
                  deSelectCourse={deSelectCourse}
                  countryList={countryList}
                  stateList={stateList}
                  cityList={cityList}
                  courseLevel={courseLevel}
                  programName={programName}
                />
              </div>
              <div
                className="college-list__collegeResultContainer "
                id="college-list-container"
              >
                <CollegeListResult
                  collegeList={collegesByLimit}
                  loader={collegeByLimitLoader}
                  query={query}
                  getMoreCollege={getCollegesArray}
                  totalCollegeCount={totalCollegeCount}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default collegeList;
