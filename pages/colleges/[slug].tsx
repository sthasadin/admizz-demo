import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCollege } from "../../store/Action/college.action";

import { CollegeHeader } from "../../components/CollegeHeader";
import { Submenu } from "../../components/Submenu";
import { SidebarContainer } from "../../components/SidebarContainer";

import Layout from "../../layouts";

const Home = () => {
  const dispatch = useDispatch();
  // const [courses, setCourses] = useState([])

  const {
    // _id,
    name,
    address,
    college_logo,
    estd_year,
    total_students,
    total_course,
    description,
    top_courses,
    average_fee,
    graduation_percentage,
    placement_percentage,
    banner,
  } = useSelector((state) => state.college.college);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    dispatch(getCollege(slug));
  }, [slug]);

  return (
    <div className="container">
      <Layout title={name}>
        <main className="main">
          <CollegeHeader
            name={name}
            collageLogo={college_logo}
            address={address}
            estblished={estd_year}
            collegeBanner={banner}
          />
          <Submenu />
          <SidebarContainer
            description={description}
            totalStudents={total_students}
            totalCourse={total_course}
            top_courses={top_courses}
            average_fee={average_fee}
            graduation_percentage={graduation_percentage}
            placement_percentage={placement_percentage}
          />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
