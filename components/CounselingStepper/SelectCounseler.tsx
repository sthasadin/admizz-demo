import React, { useState } from 'react';
import counseler from "../../public/counseler.png";
import counselerImage from "../../public/counselerImage.png";

const SelectCounseler = () => {
    const counseletList = [
        {
            id: 1,
            image: counselerImage,
            name: 'Ramos Ali',
            nationality: "Nepal"
        },
        {
            id: 2,
            image: counselerImage,
            name: 'Ramos Ali',
            nationality: "Nepal"
        }, {
            id: 3,
            image: counselerImage,
            name: 'Ramos Ali',
            nationality: "Nepal"
        },
        {
            id: 4,
            image: counselerImage,
            name: 'Ramos Ali',
            nationality: "Nepal"
        }
    ]
    const [selectedCounseler, setSelectedCounseler] = useState(1 as number)
    return (
        <div className="select-counseler">
            <div className="select-counseler__header">
                <img src={counseler} className="select-counser__counseler-icon" />
                <div>Select Counseler</div>
            </div>
            <div className="select-counseler__counseler-list">
                {counseletList.map(item => {
                    return (
                        <div onClick={() => setSelectedCounseler(item.id)}
                            className={`select-counseler__counseler-card`}>
                            <img src={item.image} />
                            <div className={`select-counseler__counseler-info 
                                 ${selectedCounseler === item.id && 'select-counseler__counseler-info-selected'}`}>
                                <div className="select-counseler__counseler-name">
                                    {item.name}
                                </div>
                                <div className="select-counseler__counseler-nationaliy">
                                    {item.nationality} Counseler
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


