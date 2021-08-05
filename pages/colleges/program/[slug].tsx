import React from "react";
import Layout from "../../../layouts";
import { API_BASE_URL } from "../../../store/const";
import { useRouter } from "next/router";
import { ProgramHeader } from "../../../components/ProgramDetails/ProgramHeader";
import { ProgramSubMenu } from "../../../components/ProgramDetails/ProgramSubMenu";
import { ProgramDetailsContainer } from "../../../components/ProgramDetails/ProgramDetailsContainer";
import axios from "axios";

const Program = () => {
  const [program, setProgram] = React.useState({});
  const [loader, setLoader] = React.useState(true);

  const router = useRouter();
  const { query } = router;

  const getProgram = async () => {
    // setLoader(true);
    const res = await axios.get(
      `${API_BASE_URL}/courses/get-program/${query.slug}`
    );
    // console.log(res);
    if (res) {
      setProgram(res?.data);
      setLoader(false);
    }
  };

  React.useEffect(() => {
    getProgram();
  }, [query]);

  // React.useEffect(() => {
  //   if (Object.keys(program).length > 0) {
  //     setLoader(false);
  //   }
  // }, [program]);

  console.log(loader, program, query);

  // if (loader) {
  //   return "loading...";
  // }

  return (
    <>
      {loader ? (
        <p>asdasd</p>
      ) : (
        <Layout title={"program?.name"} stickyBar={false}>
          <ProgramHeader data={program} />
          <ProgramSubMenu />
          <ProgramDetailsContainer data={program} />
        </Layout>
      )}
    </>
  );
};

export default Program;
