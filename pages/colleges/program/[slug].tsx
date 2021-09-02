import React from "react";
import Layout from "../../../layouts";
import { API_BASE_URL } from "../../../store/const";
import { useRouter } from "next/router";
import { ProgramHeader } from "../../../components/ProgramDetails/ProgramHeader";
import { ProgramSubMenu } from "../../../components/ProgramDetails/ProgramSubMenu";
import { ProgramDetailsContainer } from "../../../components/ProgramDetails/ProgramDetailsContainer";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const Program = () => {
  const [program, setProgram] = React.useState({} as any);
  const [loader, setLoader] = React.useState(true);

  const router = useRouter();
  const { query } = router;

  const getProgram = async () => {
    // setLoader(true);
    const res = await axios.get(
      `${API_BASE_URL}/courses/get-program/${query.slug}`
    );

    if (res) {
      setProgram(res?.data);
      setLoader(false);
    }
  };

  React.useEffect(() => {
    getProgram();
  }, [query]);

  console.log(program);

  return (
    <>
      {loader ? (
        <div className={"route-load"}>
          <CircularProgress />
        </div>
      ) : (
        <Layout title={program?.name} stickyBar={false}>
          <ProgramHeader data={program} />
          <ProgramSubMenu data={program} />
          <ProgramDetailsContainer data={program} />
        </Layout>
      )}
    </>
  );
};

export default Program;
