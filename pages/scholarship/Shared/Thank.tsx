import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Thank = () => {
  return (
    <div className="signin">
      <div
        className="signin__inner"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0px",
        }}
      >
        <div>
          <center>
            <img
              style={{ width: "60%" }}
              src="https://img.freepik.com/free-vector/flat-hand-drawn-dual-team-coworking-space_23-2148832031.jpg?w=2000&t=st=1681312395~exp=1681312995~hmac=456e167133985fb011a390b06648d377706fb348a7a50900dcd5d650ebe287c4"
            />
          </center>
          {/* <img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" /> */}
        </div>
        <div style={{ marginTop: "30px" }}>
          <center>
            <div
              style={{
                color: "#333333",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "48px",
                fontWeight: "bold",
                margin: "20px 0px",

                textShadow: "2px 2px 0px #FFFFFF, 5px 4px 0px #ffa202",
              }}
            >
              Thank You!
            </div>
            <div
              style={{
                color: "#333333",
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "24px",
                margin: "10px 0px",
              }}
            >
              Your Application has been submitted.
            </div>
            <div
              style={{
                color: "gray",
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: "18px",
                margin: "10px 0px",
              }}
            >
              For further updates, please keep checking your email, WhatsApp and
              our Social Medias
            </div>
          </center>
        </div>
        <div>
          <Link href="/">
            <Button
              variant="contained"
              style={{ margin: "30px", backgroundColor: "#ffa200" }}
            >
              Go Back Home
            </Button>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            target="_blank"
            href="https://www.facebook.com/admizz/?mibextid=ZbWKwL"
          >
            <FacebookRoundedIcon
              style={{ color: "#3b5998", margin: "0 10px", fontSize: "36px" }}
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/admizz_official?t=NUNhLYaKqitbtsjKZYMRlg&s=09"
          >
            <TwitterIcon
              style={{ color: "#1DA1F2", margin: "0 10px", fontSize: "36px" }}
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/admizz_official/">
            <InstagramIcon
              style={{ color: "#C13584", margin: "0 10px", fontSize: "36px" }}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/admizzofficial/"
          >
            <LinkedInIcon
              style={{ color: "#0A66C2", margin: "0 10px", fontSize: "36px" }}
            />
          </a>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Typography color={"gray"} variant="body2" align="center">
            © Copyright 2023 Admizz | All Right Reserved
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Thank;
