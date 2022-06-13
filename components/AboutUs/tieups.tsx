import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getAllTieUp } from "@/store/Action/tieup.action";

const tieups = ({ college }) => {
  const dispatch = useDispatch();
  const [tieupList, setTieupList] = React.useState([]);

  const getTieUp = async () => {
    const fetchTiups = await dispatch<any>(getAllTieUp());
    setTieupList(fetchTiups);
  };

  React.useEffect(() => {
    getTieUp();
  }, []);
  return (
    <div className="our-exclusive-container">
      <div className="our-exclusive-contents">
        <div className="our-trusted-texts">Our trusted partner</div>
        <div className="our-exclusive-title">Our Exclusive Tie-Ups</div>
        <div className="university-list">
        
          {tieupList &&
              tieupList?.map((item) => {
                return (
                  <div>
                    <div className="university-icon">
                      <img src={item?.image_url} />
                    </div>
                    <a href={item?.college_url}>
                      <div className="university-name">{item?.name}</div>
                    </a>
                  </div>
                );
              })}
        </div>

      
      </div>
    </div>
  );
};

export default tieups;
