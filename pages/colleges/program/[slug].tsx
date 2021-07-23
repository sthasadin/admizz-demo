import React from "react";
import Layout from "../../../layouts";
import { ProgramHeader } from "../../../components/ProgramDetails/ProgramHeader";
import { ProgramSubMenu } from "../../../components/ProgramDetails/ProgramSubMenu";
import { ProgramDetailsContainer } from "../../../components/ProgramDetails/ProgramDetailsContainer";

const Program = () => {
  return (
    <Layout title={"mba"} stickyBar={false}>
      <ProgramHeader />
      <ProgramSubMenu />
      <ProgramDetailsContainer />
    </Layout>
  );
};

export default Program;
