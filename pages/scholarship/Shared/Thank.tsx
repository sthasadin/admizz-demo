import { Button } from "@mui/material";
import React from "react";
import Link from "next/link";

const Thank = () => {
  return (
    <div className="signin">
      <div
        className="signin__inner"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" />
        </div>
        <div>
          <h1>for contacting us, we will get in touch with you soon... </h1>
        </div>
        <div>
          <Link href="/">
            <Button
              variant="contained"
              style={{ margin: "50px", backgroundColor: "#ffa200" }}
            >
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thank;
