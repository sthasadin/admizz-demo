import React from "react";
import Carousel from "../../components/Carousel";
import Link from "next/link";
import { Introduction } from "./Introduction";
import MessengerCustomerChat from "../MessengerCustomerChat";

const index = () => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
    // return () => { window.removeEventListener( );};
  }, []);

  return (
    <>
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

        <Carousel bulletdot={false}>
          <Introduction
            title="hello"
            imgSrc="/male-intro.png"
            videoUrl="https://youtu.be/CDknjC9aFmg"
          />
          <Introduction
            title="world"
            imgSrc="/female-intro.png"
            videoUrl="https://youtu.be/CDknjC9aFmg"
          />
          <Introduction
            title="helloworld"
            imgSrc="/male-intro.png"
            videoUrl="https://youtu.be/CDknjC9aFmg"
          />
        </Carousel>
      </div>
      <MessengerCustomerChat />
    </>
  );
};

export default index;
