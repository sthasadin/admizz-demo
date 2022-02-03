import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import Layout from "../../layouts";

import { Input } from "../../components/Input";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";
import { CollegeListResult } from "../../components/CollegeListResult";

import {
  getCollegeByLimit,
  getCollegeByFilter,
  getCollegeBySearch,
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
  const [filterObj, setFilterObj] = useState({
    country: [],
    state: [],
    city: [],
    stream: [],
    course_level: [],
  });
  const [loadMoreCollege, setLoadMoreCollege] = useState(false as boolean);

  const [limit, setLimit] = useState(2);
  //redux state

  const { countryList } = useSelector((state: any) => state.filter);
  const { collegeByLimitLoader } = useSelector((state: any) => state.college);
  const { stateList } = useSelector((state: any) => state.filter);
  const { cityList } = useSelector((state: any) => state.filter);
  const { programName } = useSelector((state: any) => state.filter);
  const { courseLevel } = useSelector((state: any) => state.filter);
  const { collegesByLimit } = useSelector((state: any) => state.college);
  const { totalCollegeCount } = useSelector((state: any) => state.college);

  const dispatch = useDispatch();

  const router = useRouter();
  const { query } = router.query;

  const getFilterByFilter = async () => {
    await dispatch<any>(getCollegeByFilter(filterObj as any));
  };

  React.useEffect(() => {
    if (
      filterObj.country.length ||
      filterObj.state.length ||
      filterObj.city.length ||
      filterObj.stream.length ||
      filterObj.course_level.length
    ) {
      setLoadMoreCollege(false);
      getFilterByFilter();
    } else {
      getCollegesArray();
      setLoadMoreCollege(true);
    }
  }, [filterObj]);

  const getAllFilterList = async () => {
    await dispatch<any>(getCountryList({ filter: "country" }));
    await dispatch<any>(getStateList({ filter: "state" }));
    await dispatch<any>(getCityList({ filter: "city" }));
    await dispatch<any>(getCourseLevel({ filter: "_courseLevel.name" }));
    await dispatch<any>(getProgramName({ filter: "_courseStream.name" }));
    await dispatch<any>(getCollegeByLimit(1));
    await dispatch<any>(getTotalCollegeCount());
  };

  React.useEffect(() => {
    getAllFilterList();
  }, []);

  const getCollegesArray = async () => {
    await dispatch<any>(getCollegeByLimit(limit));

    setLimit(limit + 1);
  };

  const handleStreamChange = (e) => {
    if (e.target.checked) {
      setFilterObj({
        ...filterObj,
        stream: [...filterObj.stream, e.target.name],
      });
    }

    if (!e.target.checked) {
      const remove = filterObj.stream.filter(
        (stream) => stream !== e.target.name
      );
      setFilterObj({
        ...filterObj,
        stream: remove,
      });
    }
  };

  const handleCourseChange = (e) => {
    if (e.target.checked) {
      setFilterObj({
        ...filterObj,
        course_level: [...filterObj.course_level, e.target.name],
      });
    }

    if (!e.target.checked) {
      const remove = filterObj.course_level.filter(
        (course) => course !== e.target.name
      );

      setFilterObj({
        ...filterObj,
        course_level: remove,
      });
    }
  };

  const handleCountryChange = (e) => {
    if (e.target.checked) {
      setFilterObj({
        ...filterObj,
        country: [...filterObj.country, e.target.name],
      });
    }

    if (!e.target.checked) {
      const remove = filterObj.country.filter(
        (country) => country !== e.target.name
      );
      setFilterObj({
        ...filterObj,
        country: remove,
      });
    }
  };

  const handleStateChange = (e) => {
    if (e.target.checked) {
      setFilterObj({
        ...filterObj,
        state: [...filterObj.state, e.target.name],
      });
    }
    if (!e.target.checked) {
      const remove = filterObj.state.filter(
        (state: any) => state !== e.target.name
      );
      setFilterObj({
        ...filterObj,
        state: remove,
      });
    }
  };

  const handleCityChange = (e) => {
    console.log(e);
    if (e.target.checked) {
      setFilterObj({
        ...filterObj,
        city: [...filterObj.city, e.target.name],
      });
    }

    if (!e.target.checked) {
      const remove = filterObj.city.filter((city) => city !== e.target.name);
      setFilterObj({
        ...filterObj,
        city: remove,
      });
    }
  };

  const onChangeCollegeListSearchQuery = (e) => {
    setCollegeListSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (collegeListSearchQuery) {
      setLoadMoreCollege(false);
      await dispatch<any>(getCollegeBySearch(collegeListSearchQuery));
    } else {
      getCollegesArray();
      setLoadMoreCollege(true);
    }
  };

  const resetFilter = () => {
    setFilterObj({
      country: [],
      state: [],
      city: [],
      stream: [],
      course_level: [],
    });
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
                  {/* <img
                    src="/color-rightarrow.png"
                    alt=".."
                    className="right-arrow-icon"
                  /> */}
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
              {/* <div className="college-list__headerSubtitle">
                Eg: Jain University, Manipur, BMS
              </div> */}
            </div>
          </div>
          <div className="college-list__college-container">
            <div className="college-list__college-container__inner section-wrapper">
              <div className="college-list__sideBarContainer">
                <CollegeListSideBar
                  resetFilter={resetFilter}
                  countryList={countryList}
                  stateList={stateList}
                  cityList={cityList}
                  courseLevel={courseLevel}
                  programName={programName}
                  handleStreamChange={handleStreamChange}
                  filterObj={filterObj}
                  handleStateChange={handleStateChange}
                  handleCityChange={handleCityChange}
                  handleCountryChange={handleCountryChange}
                  handleCourseChange={handleCourseChange}
                  setFilterObj={setFilterObj}
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
                  loadMoreCollege={loadMoreCollege}
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
