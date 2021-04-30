import React from "react";
import {useSelector, useDispatcher} from 'react-redux'
import collaboration from "../../public/collaboration.png";
import collaboration1 from "../../public/collaboration1.png";
import collaboration2 from "../../public/collaboration2.png";
import collaboration3 from "../../public/collaboration3.png";

const InternationalCollaboration = (props: any) => {
  const international_collaboration = useSelector(state => state.college.college.international_collaboration)
  // console.log({international_collaboration})
  return international_collaboration?.length ? (
    <div className="international-collaboration">
      <div className="international-collaboration__inner">
        <div className="sidebar__title">International Collaboration</div>
        <div className="international-collaboration__list">
          {
            international_collaboration && international_collaboration.map((ic,i)=> {
              return (

                <div key={i} className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={ic.logo || collaboration} alt="" />
            </div>
            <div className="international-collaboration__label">
              {ic.title}
            </div>
          </div>
            )
          })
        }

          {/* <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration1} alt="" />
            </div>
            <div className="international-collaboration__label">
              KIIT University
            </div>
          </div>
          <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration2} alt="" />
            </div>
            <div className="international-collaboration__label">
              ISM University
            </div>
          </div>
          <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration3} alt="" />
            </div>
            <div className="international-collaboration__label">
              Banglore University
            </div>
          </div> */}
        </div>
      </div>
    </div>
  ):null;
};

export default InternationalCollaboration;
