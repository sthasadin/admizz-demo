import * as React from "react";
import { Divider } from "@mui/material";
import { ApplyingFor } from "./Sections/ApplyingFor";
import { PersonalDetail } from "./Sections/PersonalDetail";
import { AddressDetail } from "./Sections/AddressDetail";
import 'react-phone-number-input/style.css';
import "@progress/kendo-theme-default/dist/all.css";
import { BackgroundInformation } from "./Sections/BackgroundInformation";
import { ParentsInformation } from "./Sections/ParentsInformation";
import { AcademicInformation } from "./Sections/AcademicInformation";
import { ChoiceFilling } from "./Sections/ChoiceFilling";

export const ContinueRegistration = () => {




  return (
    <div className="signin">
      <div className="signin__inner">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <ApplyingFor />
          <Divider sx={{ my: 2 }} />
          <PersonalDetail />
          <Divider sx={{ my: 2 }} />
          <AddressDetail />
          <Divider sx={{ my: 2 }} />
          <BackgroundInformation />
          <Divider sx={{ my: 2 }} />
          <ParentsInformation />
          <Divider sx={{ my: 2 }} />
          <AcademicInformation />
          <Divider sx={{ my: 2 }} />
          <ChoiceFilling />
          <Divider sx={{ my: 2 }} />

        </div>
      </div>
    </div>
  )
}