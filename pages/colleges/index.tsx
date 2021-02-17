import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { Input } from "../../components/Input";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";
import { CollegeListResult } from "../../components/CollegeListResult";
import { getAllCollegeList } from "../../store/Action/allCollage.action";

const collegeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  const { collegeList } = useSelector((state) => state.allCollege);
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
                fullWidth
                icon={SearchIcon}
              />
              <div className="college-list__searchButton">Search</div>
            </div>
            <div className="college-list__headerSubtitle">
              Eg: Jain University, Manipur, BMS
            </div>
          </div>
          <div className="college-list__listContainer">
            <div className="college-list__sideBarContainer">
              <CollegeListSideBar />
            </div>
            <div className="college-list__collegeResultContainer">
              <CollegeListResult collegeList={collegeList} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default collegeList;
