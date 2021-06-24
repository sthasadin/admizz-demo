import React from "react";
import Carousel from "../../components/Carousel";
import { useRouter } from "next/router";
import { Introduction } from "./Introduction";

const index = () => {
  const [active, setActive] = React.useState(false);

  const router = useRouter();

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

        <Carousel bulletdot={false}>
          <Introduction title="hello" />
          {/* <Introduction title="world" />
          <Introduction title="helloworld" /> */}
        </Carousel>
      </div>
    </>
  );
};

export default index;
