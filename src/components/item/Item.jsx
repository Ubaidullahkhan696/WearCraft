import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p className="name">{props.name}</p>
      <div className="price">
        <p className="new-price">${props.new_price}</p>
        <p className="old-price">${props.old_price}</p>
      </div>
    </div>
  );
};

export default Item;
