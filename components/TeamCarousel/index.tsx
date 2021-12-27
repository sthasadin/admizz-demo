import React, { useEffect, useState } from "react";
import { TeamCard } from "./TeamCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import TeamsMember from "./TeamsMember";
import { db } from "../../firebase";
// import Groupfive from "./Groupfive.png";
// import Group6 from "./Group6.png";

const index = () => {
  const [selectedTeam, setSelectedTeam] = useState({});

  // const [data, setData] = useState({
  //   img: "",
  //   name: "",
  //   description: "",
  //   desigination1: "",
  //   designation2: "",
  //   email: "",
  // });
  const [teamsArray, setTeamsArray] = useState([]);
  useEffect(() => {
    if (selectedTeam) {
      setSelectedTeam({ ...teamsArray[0], index: 0 });
    }
  }, [teamsArray]);
  const changedClick = (dir) => {
    if (dir == "next") {
      teamsArray.map((team, index) => {
        if (selectedTeam?.index + 1 == index) {
          setSelectedTeam({ ...team, index });
        }
      });
    }
    if (dir == "prev") {
      teamsArray.map((team, index) => {
        if (selectedTeam?.index - 1 == index) {
          setSelectedTeam({ ...team, index });
        }
      });
    }
  };
  // console.log({ selectedTeam });
  const getFireStoreCounselor = async () => {
    const teamArray = [];

    await db
      .collection("team_member")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const data = doc.data();
          teamArray.push({
            id: doc.id,
            name: data.name,
            image: data.image,
            email: data.email,
            description: data.description,
            facebook: data.facebook_link,
            medium: data.medium_link,
            instagram: data.insta_link,
            twitter: data.twitter_link,
            type: data.type,
          });
        });
      });

    setTeamsArray(teamArray);
  };
  React.useEffect(() => {
    getFireStoreCounselor();
  }, []);

  return (
    <div className="Our-Awesome-Teams">
      <div className="dot-image">
        <img src="/Group6.png" className="groupsix-dot" />
      </div>
      <div className="dot-image-second">
        <img src="/Groupfive.png" className="groupfive-dot" />
      </div>
      {teamsArray ? (
        <>
          <TeamCard selectedTeam={selectedTeam} />
          <TeamsMember
            teamList={teamsArray}
            setSelectedTeam={setSelectedTeam}
          />
        </>
      ) : (
        <h1>loading</h1>
      )}

      <div className="team-arrow">
        <MdOutlineKeyboardArrowLeft
          className={
            selectedTeam?.index == 0 ? "arrow-icon icon-disable" : "arrow-icon"
          }
          onClick={() => selectedTeam?.index > 0 && changedClick("prev")}
        />
        <MdOutlineKeyboardArrowRight
          className={
            selectedTeam?.index == 5 ? "arrow-icon icon-disable" : "arrow-icon"
          }
          onClick={() => selectedTeam?.index < 6 && changedClick("next")}
        />
      </div>
    </div>
  );
};

export default index;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { TeamCard } from "./TeamCard";

// const index = ({ data }) => {
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", zIndex: 1 }}
//         onClick={onClick}
//       >
//         <img
//           src="./left-side-arrow.png"
//           alt=".."
//           style={{ marginLeft: "5px", zIndex: 10 }}
//         />
//       </div>
//     );
//   }
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", zIndex: 1 }}
//         onClick={onClick}
//       >
//         <img
//           src="./right-side-arrow.png"
//           alt=".."
//           style={{ marginLeft: "-22px" }}
//         />
//       </div>
//     );
//   }
//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <img src={data[i].image} />
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: "slick-thumb custom-pagination-team-member",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           className: "center",
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           className: "center",
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           prevArrow: null,
//           nextArrow: null,
//         },
//       },
//     ],
//   };
//   return (
//     <Slider {...settings}>
//       {data &&
//         data.slice(0, 6).map((data) => {
//           return <TeamCard teamMember={data} />;
//         })}
//     </Slider>
//   );
// };

// export default index;
