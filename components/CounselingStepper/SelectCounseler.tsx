import React, { useEffect, useState } from 'react';
import counseler from "../../public/counseler.png";
import counselerImage from "../../public/counselerImage.png";
import { db } from '../../firebase';

interface Props {
    handleChange: (e: any) => void;
}

const SelectCounseler: React.FC<Props>  = ({handleChange}) => {

  const [counsellorArray, setCounsellorArray] = useState([]);

  const getFireStoreCounselor = async () => {
    const counsellor = []
    await db.collection("counsellor").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data()
        counsellor.push({
          id: doc.id,
          name: data.name,
          country: data.country,
          image: data.image
        })
      });
    });
    setCounsellorArray([...counsellor])
  }

  useEffect(() => {
    getFireStoreCounselor();
  }, [])

  const [selectedCounseler, setSelectedCounseler] = useState(1 as number)

  useEffect(() => {

   handleChange({
     target:{
       name:"counsellor",
       value: selectedCounseler
     }
   })
}, [selectedCounseler]);
  return (
    <div className="select-counseler">
      <div className="select-counseler__header">
        <img src={counseler} className="select-counser__counseler-icon" />
        <div>Select Counseler</div>
      </div>
      <div className="select-counseler__counseler-list">
        {counsellorArray.map(item => {
          return (
            <div key={item.id} onClick={() => setSelectedCounseler(item.id)}
              className={`select-counseler__counseler-card`}>
              <img className={"select-counseler__counsellorImage"} src={item.image} />
              <div className={`select-counseler__counseler-info 
                                 ${selectedCounseler === item.id && 'select-counseler__counseler-info-selected'}`}>
                <div className="select-counseler__counseler-name">
                  {item.name}
                </div>
                <div className="select-counseler__counseler-nationaliy">
                  {item.country} Counseler
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export { SelectCounseler };


