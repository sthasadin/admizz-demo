
import React,{ useEffect } from "react";
import Carousel from "../../components/Carousel";
import Link from "next/link";
import  ABOUTUS from "./aboutus";
import { useSelector,useDispatch } from "react-redux";
import { getAllCollegeList } from "../../store/Action/allCollage.action";

import MessengerCustomerChat from "../MessengerCustomerChat";
import { Teams } from "../Teams";
import International from "./international";
import Contact from "./contactus";
import { Statistics } from "../statistics/index"
import { Merits } from "./whychoose"
import Features from "./feature";
import Tieups from "./tieups";
import Layout from "../../layouts";
const index = () => {
  const [active, setActive] = React.useState(false);
  const  {collegeList}  = useSelector((state: any) => state.allCollege);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <Layout title="About Us" stickyBar={true}>
      <div className="introduction__container">
        <Link href="/free-counseling">
          <div
            className={`${
              active && "active__vertical"
            } vertical__stickycontainer `}
          >
            <div className="text__content">Free Counseling</div>
         
          </div>
        </Link>

        <Carousel bulletdot={false}>
          <ABOUTUS
            title="hello"
            imgSrc="/about_us.png"
            videoUrl="https://youtu.be/CDknjC9aFmg"
          />
          
        </Carousel>
        <Merits />
         <Statistics />
         <Features />
        <Tieups college={collegeList.slice(0, 6)} />
        <International />
        <Teams data="" />

         <Contact />
      </div>
      </Layout>
      <MessengerCustomerChat />
    </>
  );
};

export default index;


