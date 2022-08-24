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
  const router = useRouter();
  const { query } = router;
  const [program, setProgram] = React.useState({} as any);
  const [collegeBarSticky, setCollegeBarSticky] = React.useState(false);
  const [loader, setLoader] = React.useState(true);
  const getProgram =  async() => {
    // setLoader(true);
    await axios.get(
      `${API_BASE_URL}/courses/get-program/${query.slug}`
    ).then((res)=>{
      setProgram(res.data)
      console.log('data',res.data)

   
    }).catch((err)=>{
      console.log(err)
    })
    setLoader(false);
  };

  React.useEffect(() => {
    getProgram();
  }, [query]);

  const handleScroll = () => {
    if (window.scrollY > 390) {
      setCollegeBarSticky(true);
    } else {
      setCollegeBarSticky(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (program === null || loader)
    return (
      <div className={"route-load"}>
        <CircularProgress />
      </div>
    );
  return (<>
    
       <Layout title={program.name} stickyBar={false}>
      <ProgramHeader data={program} />
      <ProgramSubMenu data={program} collegeBarSticky={collegeBarSticky} />
      <ProgramDetailsContainer
        data={program}
        collegeBarSticky={collegeBarSticky}
      />
    </Layout>:"Null"
    </>
   
  );
};

export default Program;
