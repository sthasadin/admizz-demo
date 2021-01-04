import React from "react";
import CheckContainer from "../../public/CheckMark.png";
import CloseSource from "../../public/KeywordClose.png";

const FilterKeyword = () => {
  return (
    <div className="filter-keyword">
      <div className="filter-keyword__checkContainer">
        <img src={CheckContainer} />
      </div>
      <p className="filter-keyword__keywordText">MANAGEMENT</p> 
      <div className="filter-keyword__imageContainer">
        <img src={CloseSource} />
      </div>
    </div>
  );
}; 

export { FilterKeyword };
