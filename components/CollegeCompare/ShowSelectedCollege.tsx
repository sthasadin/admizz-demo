import React from "react";
import locationMark from "../../public/locationMark.png";
import checked from "../../public/checked.png";

const ShowSelectedCollege = (props: any) => {
  const {
    name,
    logo,
    image,
    address,
    id,
    removeCollegeFromCard,
    hostId,
  } = props;

  const [isRemoveIconShown, setIsRemoveIconShown] = React.useState(false);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="collegelist__collegecontainer"
      onMouseEnter={() => setIsRemoveIconShown(true)}
      onMouseLeave={() => setIsRemoveIconShown(false)}
    >
      {isRemoveIconShown && hostId !== id && (
        <div
          className="card__removeicon"
          onClick={() => removeCollegeFromCard(id)}
        >
          <img src="/closeIcon.png" alt="close_icon" />{" "}
        </div>
       )} 
      <div className="collegelist__collegeimage">
        <img src={logo ? logo: '/college-logo.png'} alt="college_profile" />
      </div>
      <div className="collegelist__collegedetails">
        <div className="collegelist_inner">
          <div className="collegelist__collegename">{name}</div>
          {/* <div className="collegelist__collegelogo">
            <img src={logo} alt="college_logo" />
          </div> */}
        </div>
        <div className="collegelist__collegeaddress">
          <img src={locationMark} style={{ marginRight: "5px" }} />
          {truncate(address, 50)}
        </div>
      </div>
    </div>
  );
};

export default ShowSelectedCollege;
