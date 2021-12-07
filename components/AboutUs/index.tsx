import React from "react";
// import Carousel from "../../components/Carousel";
import Link from "next/link";
import  ABOUTUS from "./aboutus";
import { Statistics } from "../statistics/index"
import { Merits } from "./whychoose"
import { Us } from "../why-us/index"
import Features from "./feature";
import Tieups from "./tieups";
import { Teams } from "../Teams/index";
import MessengerCustomerChat from "../MessengerCustomerChat";

import Layout from "../../layouts";


const index = () => {
  const [active, setActive] = React.useState(false);

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
            <div className="image">
              <img src="/vertical-arrow.png" alt="free counseling" />
            </div>
          </div>
        </Link>

        {/* <Carousel bulletdot={false}> */}
          <ABOUTUS
            title="ABOUTUS"
            imgSrc="/about_us.png"
            videoUrl="https://youtu.be/CDknjC9aFmg"
          />
        {/* </Carousel> */}
        <Merits />
        <Statistics />
        <Features />
        <Tieups />
        <Teams />
      </div>
      </Layout>
      <MessengerCustomerChat />
    </>
  );
};

export default index;
