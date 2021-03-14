import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../layouts/navbar";
import ErrorImage from "../public/404error.png";
import { Button } from "../components/Button";
const index = () => {
  return (
    <>
      <Head>
        {/* <Topbar /> */}
        <title>Admizz - Collages</title>
        <link rel="icon" href="favicon.svg" />
      </Head>
      <Navbar />
      <div className="error__container">
        <div className="text__container">
          <div className="text__section">
            <h1>
              <span className="frist__text">404 ERROR</span>
              <br /> <span className="second__text">PAGE NOT FOUND</span>
            </h1>
            <p>
              <span className="first__helpertext">
                The page you are looking for is not found.
              </span>
              <span>we suggest you to go back home</span>
            </p>
            <Link href="/">
              <Button className="error__button">Go To Homepage</Button>
            </Link>
          </div>
        </div>
        <div className="image__container">
          <img src={ErrorImage} />{" "}
        </div>
      </div>
    </>
  );
};

export default index;
