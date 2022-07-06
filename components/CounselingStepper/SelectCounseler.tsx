import React, { useEffect, useState } from "react";
import counseler from "../../public/counseler.png";
import { db } from "../../firebase";

interface FormError {
  [key: string]: string;
}
interface Props {
  handleChange: (e: any) => void;
  formError: FormError;
  selectedCountry?: any;
  formValue?: any;
}

const SelectCounseler: React.FC<Props> = ({
  handleChange,
  formError,
  selectedCountry,
  formValue,
}) => {
  const [counsellorArray, setCounsellorArray] = useState([]);
  const [loader, setLoader] = React.useState(false);

  const getFireStoreCounselor = async () => {
    setLoader(true);
    const counsellor = [];
    await db
      .collection("counsellor")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots

          const data = doc.data();
          counsellor.push({
            id: doc.id,
            name: data.name,
            country: data.coverage,
            image: data.imageURL,
            email: data.email,
          });
        });
      });
    setCounsellorArray([...counsellor]);
    setLoader(false);
  };

  useEffect(() => {
    getFireStoreCounselor();
  }, []);
  const filteredCounsellor = counsellorArray?.filter((counsellor) =>
    counsellor.country.includes(selectedCountry)
  );

  const [selectedCounseler, setSelectedCounseler] = useState(1 as number);

  useEffect(() => {
    if (formValue.counsellor) {
      setSelectedCounseler(formValue.counsellor);
    }
  }, []);

  useEffect(() => {
    handleChange({
      target: {
        name: "counsellor",
        value: selectedCounseler,
      },
    });
  }, [selectedCounseler]);
  return (
    <div className="select-counseler">
      <div className="select-counseler__header">
        <img src={counseler} className="select-counser__counseler-icon" />
        <div>Select Counselor</div>
      </div>
      <div className="select-counseler__counseler-list">
        {filteredCounsellor &&
          filteredCounsellor.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedCounseler(item.id);
                }}
                className={`select-counseler__counseler-card`}
              >
                <img
                  className={"select-counseler__counsellorImage"}
                  src={item.image}
                />
                <div
                  className={`select-counseler__counseler-info 
                                 ${
                                   selectedCounseler === item.id &&
                                   "select-counseler__counseler-info-selected"
                                 }`}
                >
                  <div className="select-counseler__counseler-name">
                    {item.name}
                  </div>
                  <div className="select-counseler__counseler-nationaliy">
                    {item?.country}
                  </div>
                </div>
              </div>
            );
          })}

        {filteredCounsellor?.length === 0 && !loader
          ? "Sorry there no counsellor in your region right now"
          : ""}
      </div>
      <div className="error-msg">{formError.counsellor} </div>
    </div>
  );
};

export { SelectCounseler };
