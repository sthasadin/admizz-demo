import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Fab } from "@material-ui/core";
import ArrowUpward from "@material-ui/icons/KeyboardArrowUp";
import Layout from "../../layouts";
import { Input } from "../../components/Input";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";
import { CollegeListResult } from "../../components/CollegeListResult";
import { BackTop } from "antd";
import {
  getCollegeByLimit,
  getCollegeByFilter,
  getCollegeBySearch,
} from "../../store/Action/college.action";
import BackToTop from "react-back-to-top-button";
import ScrollToTop from "react-scroll-to-top";
import {
  getCountryList,
  getStateList,
  getCityList,
  getTotalCollegeCount,
  getCourseLevel,
  getProgramName,
} from "../../store/Action/filter.action";
import { BackgroundColor } from "@icon-park/react";

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
  const [collegeList, setCollegeList] = useState(collegesByLimit);

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
      getAllFilterList();
      setLoadMoreCollege(true);
    }
  }, [filterObj]);

  const getAllFilterList = async () => {
    await dispatch<any>(getCountryList({ filter: "country" }));
    await dispatch<any>(getStateList({ filter: "state" }));
    await dispatch<any>(getCityList({ filter: "city" }));
    await dispatch<any>(getCourseLevel({ filter: "_courseLevel.name" }));
    await dispatch<any>(getProgramName({ filter: "_courseStream.name" }));
    await dispatch<any>(getCollegeByLimit());
    await dispatch<any>(getTotalCollegeCount());
  };

  React.useEffect(() => {
    getAllFilterList();
  }, []);

  const getCollegesArray = async () => {
    await dispatch<any>(getCollegeByLimit());

   // setLimit(limit + 1);
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
      setLoadMoreCollege(true);
      await dispatch<any>(getCollegeBySearch(collegeListSearchQuery));
    } else {
      getCollegesArray();
      setLoadMoreCollege(true);
    }
  };

  const resetFilter = async () => {
    setFilterObj({
      country: [],
      state: [],
      city: [],
      stream: [],
      course_level: [],
    });
    getAllFilterList();
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

                <ScrollToTop
                  smooth
                  height="12"
                  width="12"
                  component={<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                  height={32}
                  width={34}
                  viewBox="0 0 300.003 300.003">
               <g>
                 <g>
                   <path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150
                     C300.002,67.159,232.842,0,150,0z M217.685,189.794c-5.47,5.467-14.338,5.47-19.81,0l-48.26-48.27l-48.522,48.516
                     c-5.467,5.467-14.338,5.47-19.81,0c-2.731-2.739-4.098-6.321-4.098-9.905s1.367-7.166,4.103-9.897l56.292-56.297
                     c0.539-0.838,1.157-1.637,1.888-2.368c2.796-2.796,6.476-4.142,10.146-4.077c3.662-0.062,7.348,1.281,10.141,4.08
                     c0.734,0.729,1.349,1.528,1.886,2.365l56.043,56.043C223.152,175.454,223.156,184.322,217.685,189.794z"
                     fill="#FFA100"
                     />
                 </g>
               </g>
              
               </svg>}
                 
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
