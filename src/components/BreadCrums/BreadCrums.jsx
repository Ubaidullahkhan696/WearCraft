import React from "react";
import "./BreadCrums.css";
import arrowIcon from "../assets/breadcrum_arrow.png";

const BreadCrums = (props) => {
  const { product } = props;
  
  return (
    <div className="breadcrums">
      HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" /> 
      {product.id} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
};


export default BreadCrums;
