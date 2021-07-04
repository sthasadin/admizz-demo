import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCollege } from "../../store/Action/college.action";
import { getReviews } from "../../store/Action/review.action";
import { CollegeHeader } from "../../components/CollegeHeader";
import { Submenu } from "../../components/Submenu";
import { SidebarContainer } from "../../components/SidebarContainer";

import Layout from "../../layouts";

const Home = () => {
  const [reviews, setReviews] = React.useState(null);

  const dispatch = useDispatch();

  const {
    _id,
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

  const _getReviews = async (college_id) => {
    const res = await dispatch(getReviews(college_id));

    //make proper datastructure
    const collegeReviews: any = {
      length: res.length,
      ratings: {
        academics: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["academics"]) || 0), 0) /
            res.length
        ),
        accomodation: Math.ceil(
          res.reduce(
            (a, b) => Number(a) + (Number(b["accomodation"]) || 0),
            0
          ) / res.length
        ),
        faculty: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["faculty"]) || 0), 0) /
            res.length
        ),
        infrastructures: Math.ceil(
          res.reduce(
            (a, b) => Number(a) + (Number(b["infrastructures"]) || 0),
            0
          ) / res.length
        ),
        placements: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["placements"]) || 0), 0) /
            res.length
        ),
        social: Math.ceil(
          res.reduce((a, b) => Number(a) + (Number(b["social"]) || 0), 0) /
            res.length
        ),
      },
      all_reviews: res.map((r) => {
        return {
          id: r?.id,
          by: r?.by,
          comment: r?.comment,
          likesArray: r?.noOfLikes || [],
          disLikesArray: r?.noOfDisLikes || [],
          noOfLikes: r?.noOfLikes?.length || 0,
          noOfDisLikes: r?.noOfDisLikes?.length || 0,
          averageRating: Math.ceil(
            (Number(r.academics) +
              Number(r.accomodation) +
              Number(r.faculty) +
              Number(r.infrastructures) +
              Number(r.placements) +
              Number(r.social)) /
              6
          ),
          // noOfReports:r?.noOfReports?.length || 0
        };
      }),
    };
    const averageRating =
      (collegeReviews?.ratings?.academics +
        collegeReviews?.ratings?.accomodation +
        collegeReviews?.ratings?.faculty +
        collegeReviews?.ratings?.infrastructures +
        collegeReviews?.ratings?.placements +
        collegeReviews?.ratings?.social) /
      6;
    collegeReviews.averageRating = averageRating.toFixed(1);
    setReviews(collegeReviews);
    // setReviews(res)
  };

  useEffect(() => {
    dispatch(getCollege(slug));
  }, [slug]);

  useEffect(() => {
    _getReviews(_id);
  }, [_id]);

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
            reviews={reviews}
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
