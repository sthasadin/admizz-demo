import React, { useEffect, useState } from "react";
import _ from "lodash";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { Input } from "../../components/Input";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";
import { CollegeListResult } from "../../components/CollegeListResult";
// import { getAllCollegeList } from "../../store/Action/allCollage.action";
import { getColleges } from "../../store/Action/college.action";
import { getFilters } from "../../store/Action/courses.action";

const collegeList = () => {
  const [collegeListSearchQuery, setCollegeListSearchQuery] = useState("");
  const [selectedCourses, setSeletedCourses] = useState([]);
  const [filters, setFilters] = useState({});
  const [_collegeList, setCollegeList] = useState([]);
  const dispatch = useDispatch();

  const _getFilters = async () => {
    const filters = await dispatch(getFilters());
    setFilters(filters);
  };
  useEffect(() => {
    _getFilters();
    dispatch(getColleges());
  }, []);

  const collegeList = useSelector((state) => state.college.colleges);

  // const allCoursesWithCounts = useMemo(() => {
  //   const courses = [];
  //   if (collegeList?.length) {
  //     collegeList?.forEach((college) => {
  //       college.courses?.forEach((course) => courses.push(course.course_name));
  //     });
  //   }
  //   const withCounts = {};
  //   courses.forEach(function (x) {
  //     withCounts[x] = (withCounts[x] || 0) + 1;
  //   });
  //   return withCounts;
  // }, [collegeList]);

  useEffect(() => {
    if (collegeList.length) {
      // collegeList.length = 10;
      setCollegeList(collegeList);
    }
  }, [collegeList]);

  const handleSideSearch = () => {
    if (collegeList.length) {
      // collegeList.length = 10;
      let colleges = [];
      let _seletedColleges = [];

      for (const stream in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, stream)) {
          const element = filters[stream];
          if (selectedCourses.includes(stream.toUpperCase())) {
            _seletedColleges.push(...element.colleges);
          }
        }
      }
      _seletedColleges = _.uniqBy(_seletedColleges, "_id");
      colleges = _.intersectionBy(collegeList, _seletedColleges, "_id");

      if (selectedCourses.length) {
        colleges = _.uniqBy(colleges, "_id");
        setCollegeList(colleges);
      } else {
        setCollegeList(collegeList);
      }
    }
  };
  useEffect(() => {
    handleSideSearch();
  }, [selectedCourses.length]);

  const onSelecteCourse = (e) => {
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
    if (collegeListSearchQuery.length && collegeList.length) {
      const filteredColleges = collegeList.filter((college) => {
        if (
          college.name
            .trim()
            .toLowerCase()
            .search(collegeListSearchQuery.trim().toLowerCase()) > -1 || //by name
          college.address
            .trim()
            .toLowerCase()
            .search(collegeListSearchQuery.trim().toLowerCase()) > -1 //by address
        ) {
          return college;
        }
      });
      setCollegeList(filteredColleges);
    }
  };

  const resetFilter = () => {
    setCollegeListSearchQuery("");
    setCollegeList(collegeList); //the old list
    setSeletedCourses([]);
  };
  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Collages</title>
        <link rel="icon" href="favicon.svg" />
      </Head>
      <Navbar />
      <main className="college-list">
        <div className="college-list__container">
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
            </div>
            <div className="college-list__headerSubtitle">
              Eg: Jain University, Manipur, BMS
            </div>
          </div>
        </div>
        <div className="college-list__college-container">
          <div className="college-list__college-container__inner">
            <div className="college-list__sideBarContainer">
              <CollegeListSideBar
                resetFilter={resetFilter}
                allCoursesWithCounts={filters}
                onSelecteCourse={onSelecteCourse}
                selectedCourses={selectedCourses}
                deSelectCourse={deSelectCourse}
              />
            </div>
            <div className="college-list__collegeResultContainer">
              <CollegeListResult collegeList={_collegeList} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default collegeList;
