import React, { useContext } from "react";
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";
import Register from "pages/register";
// import Apply from "./Apply";
import "@progress/kendo-theme-default/dist/all.css";
// import { ContinueRegistration } from "./Registration/ContinueRegistration";
// import Review from "./Registration/Review";
import { FormContext } from "context/FormContextProvider";
import bannerImage from "../../public/scholarship/bannerImg.png";
import bannerImage2 from "../../public/scholarship/bannerImg2.png";
import { Button } from "@progress/kendo-react-buttons";
import { useRouter } from "next/router";

const Scholarship = () => {
  const router = useRouter();

  return (
    <Layout title="Scholarship" stickyBar={true}>
      <div className="container">
        <main className="main">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",

              // height: "70%",
              // backgroundColor: "red",
            }}
          >
            <img
              src={bannerImage}
              alt="Banner"
              style={{
                width: "90%",
                // height: "50%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
              }}
            />
            <div>
              <p style={{ fontSize: "24px", marginTop: "30px" }}>
                Ready to take the next step in your education?
              </p>

              <Button
                className="form-left-subtree-button filled"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#ffa200",
                  color: "white",
                }}
                onClick={() => router.push("/scholarship/apply")}
              >
                Apply for Scholarship
              </Button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default withRestrictedRoute(Scholarship);
